import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { id, questionId, value } = await req.json();

    if (!id || questionId === undefined || value === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabase = createServiceClient();

    // Merge new answer into responses jsonb using a raw update
    const { error } = await supabase.rpc("merge_response", {
      p_id: id,
      p_key: String(questionId),
      p_value: value,
    });

    if (error) {
      // Fallback: fetch current responses, merge, write back
      const { data: row } = await supabase
        .from("assessments")
        .select("responses")
        .eq("id", id)
        .single();

      const responses = { ...(row?.responses ?? {}), [String(questionId)]: value };

      const { error: updateErr } = await supabase
        .from("assessments")
        .update({ responses })
        .eq("id", id);

      if (updateErr) throw updateErr;
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("audit/answer error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
