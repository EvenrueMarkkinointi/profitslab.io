import type { Metadata } from "next";
import PromptStackClient from "./PromptStackClient";

export const metadata: Metadata = {
  title: "AI Shortcut Stack — 80 Copy-Paste Prompts for Business",
  description:
    "80 ready-to-use AI prompts for sales, marketing, hiring, operations, and customer service. Works with ChatGPT, Claude, and Gemini. $19 one-time.",
  alternates: { canonical: "https://www.profitslab.io/products/prompt-stack/" },
  openGraph: {
    title: "AI Shortcut Stack — 80 Copy-Paste Prompts for Business | ProfitSlab",
    description:
      "80 ready-to-use AI prompts for business tasks. Sales, marketing, hiring, operations, customer service. $19 one-time.",
    url: "https://www.profitslab.io/products/prompt-stack/",
    type: "website",
    images: [{ url: "https://www.profitslab.io/images/og-prompt-stack.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Shortcut Stack — 80 Copy-Paste Prompts for Business",
    description: "80 ready-to-use AI prompts. $19 one-time. Works with ChatGPT, Claude, Gemini.",
    images: ["https://www.profitslab.io/images/og-prompt-stack.png"],
  },
};

export default function PromptStackPage() {
  return <PromptStackClient />;
}
