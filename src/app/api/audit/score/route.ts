import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";
import { computeResults } from "@/lib/questions";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const supabase = createServiceClient();

    const { data: assessment, error: fetchErr } = await supabase
      .from("assessments")
      .select("responses")
      .eq("id", id)
      .single();

    if (fetchErr || !assessment) {
      return NextResponse.json({ error: "Assessment not found" }, { status: 404 });
    }

    const { totalScore, categoryScores, tier, topOpportunities } =
      computeResults(assessment.responses as Record<string, number>);

    // Upsert results
    const { error: insertErr } = await supabase
      .from("assessment_results")
      .upsert({
        assessment_id: id,
        total_score: totalScore,
        category_scores: categoryScores,
        top_opportunities: topOpportunities,
        tier,
      });

    if (insertErr) throw insertErr;

    // Mark assessment as completed
    await supabase
      .from("assessments")
      .update({ completed_at: new Date().toISOString() })
      .eq("id", id);

    return NextResponse.json({ totalScore, tier });
  } catch (err) {
    console.error("audit/score error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
