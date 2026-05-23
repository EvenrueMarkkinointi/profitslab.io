import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Shortcut Stack — 80 Copy-Paste AI Prompts for Business",
  description:
    "Stop guessing what to ask AI. 80 ready-to-use prompts for sales, marketing, ops, hiring and more. $19 one-time. Works with ChatGPT, Claude, Gemini.",
  alternates: { canonical: "https://www.profitslab.io/products/prompt-stack/" },
  openGraph: {
    title: "AI Shortcut Stack — 80 Copy-Paste AI Prompts for Business",
    description:
      "Stop guessing what to ask AI. 80 ready-to-use prompts for sales, marketing, ops, hiring and more. $19 one-time.",
    url: "https://www.profitslab.io/products/prompt-stack/",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Shortcut Stack — 80 Prompts, $19, Instant Access",
    description: "Stop writing prompts from scratch. 80 copy-paste prompts for real business tasks.",
    images: ["https://www.profitslab.io/images/og-image.png"],
  },
};

export default function PromptStackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
