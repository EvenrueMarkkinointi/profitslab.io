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
    tag: "Strategy",
    title: "The Freelancer's AI Stack: Tools Under $50/Month",
    desc: "Build a complete freelance AI toolkit for under $50/month. Role-based stacks, exact pricing, and copy-paste prompts to choose the right tools.",
    href: "/guides/ai-tools-for-freelancers",
    status: "live",
  },
  {
    tag: "Marketing",
    title: "AI Content Calendar: Build One in 15 Minutes (Free Template + Prompts)",
    desc: "Build a content calendar in 15 minutes with AI. Free Google Sheets template + 4 copy-paste prompts. No paid tools needed.",
    href: "/guides/ai-content-calendar",
    status: "live",
  },
  {
    tag: "Marketing",
    title: "How to Train ChatGPT to Write in Your Brand Voice: A 30-Minute Setup",
    desc: "Stop generic AI output. Train ChatGPT to write in your brand voice with a 30-minute workflow, 5 copy-paste prompts, and a voice quality scorecard.",
    href: "/guides/train-chatgpt-brand-voice",
    status: "live",
  },
  {
    tag: "Customer Service",
    title: "Customer Response Templates: Build a Library in 30 Minutes",
    desc: "Build an organized, AI-powered response library that cuts reply time by 70%. 6 essential categories, 5 copy-paste prompts, and a system your team will actually use.",
    href: "/guides/customer-response-templates",
    status: "live",
  },
  {
    tag: "Strategy",
    title: "Competitor Analysis with ChatGPT: A 5-Step Framework for Small Business",
    desc: "Map competitors, build battle cards, spot gaps, and set up a 10-minute weekly monitoring system. Copy-paste prompts for every step. No paid tools needed.",
    href: "/guides/competitor-analysis-chatgpt",
    status: "live",
  },
  {
    tag: "Operations",
    title: "Meeting Notes to Action Items: The 2-Minute AI Workflow",
    desc: "Turn messy meeting notes into assigned, dated action items in under 2 minutes. Copy-paste prompts for follow-up emails, task exports, and cleanup. No paid tools needed.",
    href: "/guides/meeting-notes-to-action-items",
    status: "live",
  },
  {
    tag: "Operations",
    title: "AI Contract Drafting for Small Business: 5 Templates + Invoice Prompts",
    desc: "Draft contracts and invoices with AI in 20 minutes. Copy-paste prompts for NDAs, service agreements, contractor agreements, and payment terms. No legal fees.",
    href: "/guides/ai-contract-drafting",
    status: "live",
  },
  {
    tag: "Sales",
    title: "Handling Sales Objections with AI: 10 Common Replies",
    desc: "Copy-paste AI prompts to diagnose and handle the 10 most common sales objections. Price, timing, authority, need, and trust responses with real examples.",
    href: "/guides/handling-sales-objections-ai",
    status: "live",
  },
  {
    tag: "Sales",
    title: "Cold Email Prompts That Get 40%+ Open Rates",
    desc: "Copy-paste AI prompts for subject lines, body copy, follow-ups, and A/B testing. Signal-based personalization framework included.",
    href: "/guides/cold-email-prompts",
    status: "live",
  },
  {
    tag: "Sales",
    title: "How to Build a 5-Email Sales Follow-Up Sequence That Closes",
    desc: "Convert warm leads into buyers with 5 copy-paste AI prompts, exact send times, and a proven cadence. No guesswork.",
    href: "/guides/sales-follow-up-email-sequence",
    status: "live",
  },
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
    tag: "Sales",
    title: "LinkedIn Outreach with AI: Templates That Don't Feel Spammy",
    desc: "AI-powered LinkedIn connection request, DM, and follow-up templates. Copy-paste prompts for signal-based personalization.",
    href: "/guides/linkedin-outreach-templates-ai",
    status: "live",
  },
  {
    tag: "Strategy",
    title: "Quarterly Planning with AI: Structured Goals in 45 Minutes",
    desc: "Plan your entire quarter with AI in 45 minutes. Copy-paste prompts for goals, projects, and weekly scorecards. No spreadsheets needed.",
    href: "/guides/quarterly-planning-ai",
    status: "live",
  },
  {
    tag: "Marketing",
    title: "AI Product Descriptions That Sell: Conversion-First Workflow",
    desc: "Write AI product descriptions that convert. 5 copy-paste prompts, a 15-minute QA checklist, and a 3-layer framework for ecommerce stores.",
    href: "/guides/ai-product-descriptions",
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
            <span className="guides-coming-badge">26 Guides Live</span>
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
