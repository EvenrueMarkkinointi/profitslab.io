import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sales Sequence Pack + Skill — Cold Emails, Follow-Ups & LinkedIn Messages",
  description:
    "Turn your offer and target customer into cold emails, follow-ups, LinkedIn messages, and objection replies in minutes. $29 one-time. Works with ChatGPT and Claude.",
  alternates: { canonical: "https://www.profitslab.io/products/ai-sales-sequence-pack/" },
  openGraph: {
    title: "AI Sales Sequence Pack + Skill | ProfitSlab",
    description:
      "Give AI your offer, your customer, and your proof. Get a cold email, 5 follow-ups, LinkedIn messages, and objection replies — ready to send. $29.",
    url: "https://www.profitslab.io/products/ai-sales-sequence-pack/",
    type: "website",
  },
};

export default function AISalesSequencePackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
