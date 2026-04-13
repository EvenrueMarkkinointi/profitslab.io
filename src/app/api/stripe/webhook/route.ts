import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createServiceClient } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const assessmentId = session.metadata?.assessmentId;

    if (assessmentId) {
      const supabase = createServiceClient();

      // Mark as paid
      await supabase
        .from("assessments")
        .update({
          paid: true,
          stripe_session_id: session.id,
        })
        .eq("id", assessmentId);

      // Get email and trigger GHL
      const { data: assessment } = await supabase
        .from("assessments")
        .select("email")
        .eq("id", assessmentId)
        .single();

      if (assessment?.email && process.env.GHL_WEBHOOK_URL) {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://profitslab.io";
        await fetch(process.env.GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: assessment.email,
            report_url: `${baseUrl}/audit/${assessmentId}/report`,
          }),
        }).catch((err) => console.error("GHL webhook error:", err));
      }
    }
  }

  return NextResponse.json({ received: true });
}
