import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "AI Guides for Small Businesses",
  description: "Step-by-step AI guides for real business tasks — customer service, sales, SOPs, marketing and more. Free to read.",
  alternates: { canonical: "https://www.profitslab.io/guides/" },
  openGraph: {
    title: "Practical AI Guides for Small Businesses | ProfitSlab",
    description: "Step-by-step walkthroughs for real business tasks — customer service, sales, SOPs, and more. Free.",
    url: "https://www.profitslab.io/guides/",
    type: "website",
  },
};

const upcomingGuides = [
  {
    tag: "Customer Service",
    title: "Handle customer complaints with AI — without sounding robotic",
    desc: "The exact prompts that de-escalate angry customers in one reply, every time.",
  },
  {
    tag: "Sales",
    title: "Cold emails that get replies: 3 AI prompts that sound like you",
    desc: "Stop writing from scratch. Fill in the blanks, paste, send.",
  },
  {
    tag: "Operations",
    title: "Write SOPs in 10 minutes using ChatGPT: a step-by-step template",
    desc: "Turn messy processes into clear, repeatable instructions your team will actually follow.",
  },
  {
    tag: "Marketing",
    title: "Social media content in 30 minutes: an AI workflow for busy founders",
    desc: "One session. A week of posts. No content calendar required.",
  },
  {
    tag: "Strategy",
    title: "Use AI to analyse your business data (even if you hate spreadsheets)",
    desc: "Turn raw numbers into clear decisions — no data skills needed.",
  },
];

export default function Guides() {
  return (
    <>
      <SiteNav />

      <main className="hub-main">
        <div className="hub-main-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Guides</span>
            </div>
          </nav>

          <div className="section-header" style={{ textAlign: "left", paddingTop: "2rem" }}>
            <h1>Practical AI guides for small businesses</h1>
            <p>Step-by-step walkthroughs for real business tasks. No jargon. Free to read.</p>
          </div>

          <div className="guides-coming-soon-notice">
            <span className="guides-coming-badge">Coming soon</span>
            <p>The first guides are in production. Sign up below to be notified when they go live.</p>
            <Link href="/audit" className="btn-primary" style={{ marginTop: "0.75rem", display: "inline-flex" }}>
              Take the free AI Audit in the meantime →
            </Link>
          </div>

          <div className="hub-guides-grid" style={{ marginTop: "3rem" }}>
            {upcomingGuides.map((g) => (
              <div key={g.title} className="hub-guide-card hub-guide-card-preview">
                <span className="hub-guide-tag">{g.tag}</span>
                <h2 className="hub-guide-title">{g.title}</h2>
                <p className="hub-guide-desc">{g.desc}</p>
                <span className="hub-guide-coming">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>ProfitSlab</span>
          </div>
          <div className="footer-links">
            <Link href="/guides">Guides</Link>
            <Link href="/products">Products</Link>
            <Link href="/audit">AI Audit</Link>
            <a href="mailto:hello@profitslab.io">Contact</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <p className="footer-copyright">© 2026 ProfitSlab. All rights reserved. · Powered by <a href="https://www.evenrue.fi/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Evenrue</a></p>
      </footer>
    </>
  );
}
