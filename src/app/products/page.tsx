import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Products — Ready-to-Use AI Tools for Business",
  description: "Copy-paste prompts and templates you can use today. No setup, no API keys. Browse all ProfitSlab products.",
  alternates: { canonical: "https://www.profitslab.io/products/" },
  openGraph: {
    title: "Products — Ready-to-Use AI Tools for Business | ProfitSlab",
    description: "Copy-paste prompts and templates you can use today. No setup, no API keys.",
    url: "https://www.profitslab.io/products/",
    type: "website",
  },
};

export default function Products() {
  return (
    <>
      <SiteNav />

      <main className="hub-main">
        <div className="hub-main-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Products</span>
            </div>
          </nav>

          <div className="section-header" style={{ textAlign: "left", paddingTop: "2rem" }}>
            <h1>Tools that save time</h1>
            <p>Ready-to-use prompts, templates, and workflows. No setup required.</p>
          </div>

          <div className="products-grid">
            <div className="product-catalog-card">
              <div className="product-catalog-top">
                <span className="product-catalog-tag">PDF · Prompt Pack</span>
                <h2 className="product-catalog-name">AI Shortcut Stack</h2>
                <p className="product-catalog-desc">
                  80 copy-paste prompts for the business tasks you do every week — sales, marketing, hiring, customer service, operations and more.
                </p>
                <div className="product-catalog-tags">
                  <span>ChatGPT</span>
                  <span>Claude</span>
                  <span>Gemini</span>
                  <span>PDF</span>
                </div>
              </div>
              <div className="product-catalog-bottom">
                <div className="product-catalog-price">
                  <span className="product-price-strike">$117</span>
                  <span className="product-price-main">$19</span>
                  <span className="product-price-note">one-time</span>
                </div>
                <Link href="/products/prompt-stack" className="btn-primary">
                  View Product →
                </Link>
              </div>
            </div>

            <div className="product-catalog-card">
              <div className="product-catalog-top">
                <span className="product-catalog-tag">PDF · AI Skill</span>
                <h2 className="product-catalog-name">AI Sales Sequence Pack + Skill</h2>
                <p className="product-catalog-desc">
                  Turn your offer and target customer into cold emails, follow-ups, LinkedIn messages, and objection replies in minutes. Templates + a companion AI Skill that builds sequences from your inputs.
                </p>
                <div className="product-catalog-tags">
                  <span>ChatGPT</span>
                  <span>Claude</span>
                  <span>Sales</span>
                  <span>PDF</span>
                </div>
              </div>
              <div className="product-catalog-bottom">
                <div className="product-catalog-price">
                  <span className="product-price-strike">$146</span>
                  <span className="product-price-main">$29</span>
                  <span className="product-price-note">one-time</span>
                </div>
                <Link href="/products/ai-sales-sequence-pack" className="btn-primary">
                  View Product →
                </Link>
              </div>
            </div>

            <div className="product-catalog-card">
              <div className="product-catalog-top">
                <span className="product-catalog-tag">MCP Server · Free</span>
                <h2 className="product-catalog-name">Connector.wtf</h2>
                <p className="product-catalog-desc">
                  Ask ChatGPT or Claude about your Google, Meta + LinkedIn Ads. A read-only MCP server that audits accounts, finds wasted spend, and compares periods — without touching a single bid.
                </p>
                <div className="product-catalog-tags">
                  <span>Google Ads</span>
                  <span>Meta Ads</span>
                  <span>LinkedIn Ads</span>
                  <span>ChatGPT</span>
                  <span>Claude</span>
                </div>
              </div>
              <div className="product-catalog-bottom">
                <div className="product-catalog-price">
                  <span className="product-price-main" style={{ color: "var(--success)" }}>Free</span>
                </div>
                <Link href="/products/connector-wtf" className="btn-primary">
                  View Product →
                </Link>
              </div>
            </div>

            {/* Placeholder for future products */}
            <div className="product-catalog-card product-catalog-coming-soon">
              <div className="product-catalog-top">
                <span className="product-catalog-tag">Coming soon</span>
                <h2 className="product-catalog-name">AI Customer Service Playbook</h2>
                <p className="product-catalog-desc">
                  A complete playbook for handling support, complaints, and follow-ups with AI. Built for teams of 1–10.
                </p>
              </div>
              <div className="product-catalog-bottom">
                <span className="product-coming-label">In development</span>
              </div>
            </div>
          </div>

          <div className="products-audit-cta">
            <p>Not sure where to start?</p>
            <Link href="/audit" className="btn-primary">
              Take the free AI Audit — 5 minutes →
            </Link>
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
