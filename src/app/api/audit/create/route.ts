import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, businessType } = await req.json();

    if (!email || !businessType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("assessments")
      .insert({ email, business_type: businessType, responses: {} })
      .select("id")
      .single();

    if (error) throw error;

    return NextResponse.json({ id: data.id });
  } catch (err) {
    console.error("audit/create error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
