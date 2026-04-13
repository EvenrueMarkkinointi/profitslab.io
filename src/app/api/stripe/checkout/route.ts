import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { assessmentId } = await req.json();
    if (!assessmentId) {
      return NextResponse.json({ error: "Missing assessmentId" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://profitslab.io";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_AUDIT_PRICE_ID!,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/audit/${assessmentId}/report?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/audit/${assessmentId}/results`,
      metadata: { assessmentId },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("stripe/checkout error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
