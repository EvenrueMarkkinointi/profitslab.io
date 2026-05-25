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
    title: "AI Prompts for Customer Service That Actually Work",
    desc: "80+ ready-to-use prompts for complaints, refunds, FAQs, and escalation handling.",
    href: "/guides/ai-customer-service-prompts",
    status: "live",
  },
  {
    tag: "Strategy",
    title: "Best AI Tools for Small Business in 2026",
    desc: "20+ AI tools tested and ranked by real business function. $50/month maximum stack.",
    href: "/guides/best-ai-tools-small-business",
    status: "live",
  },
  {
    tag: "Strategy",
    title: "How to Use ChatGPT for Small Business",
    desc: "30+ copy-paste prompts for customer service, sales, marketing, operations, and hiring. Step-by-step workflow included.",
    href: "/guides/how-to-use-chatgpt-for-business",
    status: "live",
  },
  {
    tag: "Sales",
    title: "AI Prompts for Sales: Cold Outreach That Converts",
    desc: "50+ copy-paste prompts for cold emails, follow-ups, proposals, and objection handling. PSOP framework included.",
    href: "/guides/ai-prompts-for-sales",
    status: "live",
  },
  {
    tag: "Marketing",
    title: "AI Prompts for Social Media: One Session, a Week of Posts",
    desc: "40+ prompts for LinkedIn, Twitter, Instagram, and Facebook. Create a week of content in 30 minutes.",
    href: "/guides/ai-prompts-for-social-media",
    status: "live",
  },
  {
    tag: "Comparison",
    title: "ChatGPT vs Jasper for Small Business: Which AI Writer Wins?",
    desc: "Honest comparison for blog posts, ads, emails, and social content. Side-by-side output tests and pricing breakdown.",
    href: "/guides/chatgpt-vs-jasper-small-business",
    status: "live",
  },
  {
    tag: "Comparison",
    title: "AI Tools vs Virtual Assistant: What is Better?",
    desc: "Honest cost and capability breakdown. See when AI replaces a VA, when you still need a human, and how to combine both.",
    href: "/guides/ai-tools-vs-virtual-assistant",
    status: "live",
  },
  {
    tag: "Comparison",
    title: "ChatGPT vs Claude for Business: Which AI Wins?",
    desc: "Side-by-side comparison for sales, marketing, customer service, and data analysis. Honest verdict.",
    href: "/guides/chatgpt-vs-claude-business",
    status: "live",
  },
  {
    tag: "Strategy",
    title: "Use AI to analyse your business data (even if you hate spreadsheets)",
    desc: "Turn raw numbers into clear decisions — no data skills needed.",
    href: "/guides/ai-business-data-analysis",
    status: "live",
  },
  {
    tag: "Marketing",
    title: "How to Repurpose One Blog Post into 10 Pieces of Content",
    desc: "Turn one article into a week of content across every platform. Copy-paste prompts included. No extra writing required.",
    href: "/guides/repurpose-blog-post-into-content",
    status: "live",
  },
  {
    tag: "Tech",
    title: "MCP Server Setup: Connect AI to Your Business Tools",
    desc: "Step-by-step guide to setting up Model Context Protocol servers. Connect ChatGPT to your CRM, database, and APIs.",
    href: "/guides/mcp-server-setup",
    status: "live",
  },
  {
    tag: "Operations",
    title: "Write SOPs in 10 Minutes Using ChatGPT",
    desc: "Turn chaotic processes into clear, documented instructions. Copy-paste prompts + reusable template. No writing skills required.",
    href: "/guides/write-sops-with-ai",
    status: "live",
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
            <span className="guides-coming-badge">12 Guides Live</span>
            <p>Customer service, sales, marketing, strategy, tech, and comparisons. More coming weekly.</p>
            <Link href="/audit" className="btn-primary" style={{ marginTop: "0.75rem", display: "inline-flex" }}>
              Take the free AI Audit in the meantime →
            </Link>
          </div>

          <div className="hub-guides-grid" style={{ marginTop: "3rem" }}>
            {upcomingGuides.map((g) => (
              <div key={g.title} className={`hub-guide-card ${g.status === "soon" ? "hub-guide-card-preview" : ""}`}>
                <span className="hub-guide-tag">{g.tag}</span>
                <h2 className="hub-guide-title">
                  {g.status === "live" ? (
                    <Link href={g.href!} className="hub-guide-link">{g.title}</Link>
                  ) : (
                    g.title
                  )}
                </h2>
                <p className="hub-guide-desc">{g.desc}</p>
                {g.status === "live" ? (
                  <Link href={g.href!} className="hub-guide-link">Read now →</Link>
                ) : (
                  <span className="hub-guide-coming">Coming soon</span>
                )}
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
