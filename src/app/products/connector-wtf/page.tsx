import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Connector.wtf — Ask AI About Your Ads (Free MCP Server)",
  description:
    "A read-only MCP server that plugs your Google, Meta + LinkedIn Ads into ChatGPT or Claude. Audit your accounts, find wasted spend — without touching a single bid.",
  alternates: { canonical: "https://www.profitslab.io/products/connector-wtf/" },
  openGraph: {
    title: "Connector.wtf — Ask AI About Your Ads | ProfitSlab",
    description:
      "Plug your Google, Meta + LinkedIn Ads into ChatGPT or Claude. Read-only, free, live today.",
    url: "https://www.profitslab.io/products/connector-wtf/",
    type: "website",
  },
};

const CONNECTOR_URL = "https://connector.wtf";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4" />
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853" />
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05" />
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335" />
  </svg>
);

export default function ConnectorWtf() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Connector.wtf",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            url: "https://connector.wtf",
            description:
              "A read-only MCP server that plugs your Google, Meta + LinkedIn Ads into ChatGPT or Claude.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.profitslab.io/" },
                { "@type": "ListItem", position: 2, name: "Products", item: "https://www.profitslab.io/products/" },
                { "@type": "ListItem", position: 3, name: "Connector.wtf", item: "https://www.profitslab.io/products/connector-wtf/" },
              ],
            },
          }),
        }}
      />

      <SiteNav />

      <main className="hub-main">
        <div className="hub-main-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/products">Products</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Connector.wtf</span>
            </div>
          </nav>

          {/* Hero */}
          <section className="connector-hero">
            <span className="product-catalog-tag connector-free-tag">MCP Server · Free · Read-only</span>
            <h1 className="connector-hero-title">
              Your Google, Meta + LinkedIn Ads are a mess.<br />
              Ask ChatGPT or Claude about it instead.
            </h1>
            <p className="connector-hero-sub">
              A read-only MCP server that plugs your ad accounts directly into ChatGPT or Claude.
              Audit spend, find waste, compare periods — without touching a single bid.
            </p>
            <div className="connector-hero-ctas">
              <a href={CONNECTOR_URL} className="btn-google" target="_blank" rel="noopener noreferrer">
                <GoogleIcon />
                Sign in with Google — it&apos;s free
              </a>
              <p className="connector-tagline">read-only · won&apos;t break your campaigns (probably)</p>
            </div>
          </section>

          {/* Three platforms */}
          <section>
            <div className="section-header" style={{ textAlign: "left", marginTop: "3.5rem" }}>
              <h2>Three ad platforms. One AI conversation.</h2>
              <p>All live today — connect once, ask anything.</p>
            </div>
            <div className="hub-cards-grid" style={{ marginTop: "1.5rem" }}>
              <div className="hub-card">
                <div className="hub-card-icon" aria-hidden="true">📊</div>
                <h3 className="hub-card-title">Google Ads MCP</h3>
                <p className="hub-card-desc">
                  Audit your account, surface wasted spend, compare periods, and dig into keyword
                  performance — all via plain English in ChatGPT or Claude.
                </p>
              </div>
              <div className="hub-card">
                <div className="hub-card-icon" aria-hidden="true">🎯</div>
                <h3 className="hub-card-title">Meta Ads MCP</h3>
                <p className="hub-card-desc">
                  Pairs with Meta&apos;s official ads MCP. Ask about your Facebook and Instagram
                  campaign performance directly in your AI chat — no Ads Manager tab needed.
                </p>
              </div>
              <div className="hub-card">
                <div className="hub-card-icon" aria-hidden="true">💼</div>
                <h3 className="hub-card-title">LinkedIn Ads MCP</h3>
                <p className="hub-card-desc">
                  Our LinkedIn Ads MCP rounds out the stack. B2B campaign data, audience insights,
                  and period comparisons — without leaving your AI assistant.
                </p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section>
            <div className="section-header" style={{ textAlign: "left", marginTop: "3.5rem" }}>
              <h2>How it works</h2>
            </div>
            <div className="connector-steps">
              <div className="connector-step">
                <span className="connector-step-num">1</span>
                <div>
                  <strong>Sign in with Google</strong>
                  <p>Connect your Google Ads account at connector.wtf. Read-only access — we cannot change anything.</p>
                </div>
              </div>
              <div className="connector-step">
                <span className="connector-step-num">2</span>
                <div>
                  <strong>Add the MCP server to ChatGPT or Claude</strong>
                  <p>One config snippet, copy-paste setup. Works with Claude Desktop, Claude.ai, and ChatGPT with MCP support.</p>
                </div>
              </div>
              <div className="connector-step">
                <span className="connector-step-num">3</span>
                <div>
                  <strong>Ask anything about your ads</strong>
                  <p>&quot;Where is my budget being wasted?&quot; &quot;Compare last 30 days vs the month before.&quot; &quot;Which keywords are dragging down my Quality Score?&quot;</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="connector-bottom-cta">
            <p className="connector-bottom-label">Free. No credit card. No waiting list.</p>
            <a href={CONNECTOR_URL} className="btn-google" target="_blank" rel="noopener noreferrer">
              <GoogleIcon />
              Sign in with Google — it&apos;s free
            </a>
            <p className="connector-tagline" style={{ marginTop: "0.75rem" }}>
              read-only · won&apos;t break your campaigns (probably)
            </p>
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
        <p className="footer-copyright">
          © 2026 ProfitSlab. All rights reserved. · Powered by{" "}
          <a href="https://www.evenrue.fi/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Evenrue
          </a>
        </p>
      </footer>
    </>
  );
}
