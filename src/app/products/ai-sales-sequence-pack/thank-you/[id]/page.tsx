import type { Metadata } from "next";
import Link from "next/link";
import { PixelEvent } from "@/components/PixelEvent";

export const metadata: Metadata = {
  title: "Thank You — AI Sales Sequence Pack + Skill",
  robots: { index: false, follow: false },
};

function DownloadIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  );
}

function SkillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

export default async function ThankYou({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;

  return (
    <>
      <PixelEvent event="Purchase" params={{ value: 29, currency: "USD" }} />
      <div
        style={{
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          lineHeight: 1.6,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="ty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          You&apos;re all set!
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.0625rem",
            maxWidth: 480,
            marginBottom: "1.5rem",
          }}
        >
          Thank you for purchasing the AI Sales Sequence Pack + Skill. Download your files below — everything is ready to go.
        </p>

        {/* Primary download — the Pack */}
        <a
          href="https://assets.cdn.filesafe.space/E9rYgzhbe1y43YCeeBfl/media/6a12b266b3e0c02fe7db029c.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "var(--success)",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "0.9375rem",
            textDecoration: "none",
            transition: "opacity 0.2s",
            marginBottom: "0.5rem",
          }}
        >
          <DownloadIcon />
          Download AI Sales Sequence Pack (PDF)
        </a>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          60+ templates across 7 sales scenarios
        </p>

        {/* Getting started steps */}
        <div className="steps">
          <h2>Getting started in 3 steps</h2>
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-text">
              <strong>Download the Skill file below</strong> — it&apos;s a text file containing the system prompt. Copy the contents.
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-text">
              <strong>Paste it into Claude or ChatGPT</strong> as a custom system prompt (instructions vary slightly per tool — see the Quick Start Sheet).
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-text">
              <strong>Fill in the 6 fields</strong> — offer, customer, pain point, proof, tone, channel — and get your full sequence back.
            </div>
          </div>
        </div>

        {/* All files */}
        <div className="bonuses">
          <div className="bonuses-label">All your files</div>

          <div className="bonus-item">
            <div className="bonus-info">
              <div className="bonus-icon">
                <SkillIcon />
              </div>
              <div>
                <div className="bonus-name">Companion Sales Sequence Skill</div>
                <div className="bonus-tag">TXT — paste into Claude or ChatGPT as a custom system prompt</div>
              </div>
            </div>
            <a href="https://assets.cdn.filesafe.space/E9rYgzhbe1y43YCeeBfl/media/6a12b2c8e05851175c62a925.zip" download target="_blank" rel="noopener noreferrer" className="bonus-dl">
              <DownloadIcon size={14} />
              Download
            </a>
          </div>

          <div className="bonus-item">
            <div className="bonus-info">
              <div className="bonus-icon">
                <FileIcon />
              </div>
              <div>
                <div className="bonus-name">Quick Start Sheet</div>
                <div className="bonus-tag">PDF — how to fill in the Skill and what goes in each field</div>
              </div>
            </div>
            <a href="https://assets.cdn.filesafe.space/E9rYgzhbe1y43YCeeBfl/media/6a12b266b3e0c02fe7db029d.pdf" download target="_blank" rel="noopener noreferrer" className="bonus-dl">
              <DownloadIcon size={14} />
              Download
            </a>
          </div>

          <div className="bonus-item">
            <div className="bonus-info">
              <div className="bonus-icon">
                <FileIcon />
              </div>
              <div>
                <div className="bonus-name">Example Inputs + Outputs</div>
                <div className="bonus-tag">PDF — 5 worked examples showing exact inputs and the messages they produce</div>
              </div>
            </div>
            <a href="https://assets.cdn.filesafe.space/E9rYgzhbe1y43YCeeBfl/media/6a12b2666cc0eead5cbef791.pdf" download target="_blank" rel="noopener noreferrer" className="bonus-dl">
              <DownloadIcon size={14} />
              Download
            </a>
          </div>
        </div>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            padding: "0.75rem 1.5rem",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "0.9375rem",
            textDecoration: "none",
            marginTop: "0.5rem",
          }}
        >
          ← Back to site
        </Link>

        <div className="coming-soon">
          <div className="coming-soon-label">
            <span></span> More from ProfitSlab
          </div>
          <div className="teaser-cards">
            <div className="teaser-card">
              <div className="teaser-badge">Available now</div>
              <h3>AI Shortcut Stack</h3>
              <p>80 copy-paste prompts for sales, marketing, hiring, customer service, and operations. The Sales Sequence Pack focuses on outreach — this covers everything else.</p>
              <span className="teaser-arrow">
                <Link href="/products/prompt-stack" style={{ color: "inherit" }}>View product →</Link>
              </span>
            </div>
            <div className="teaser-card">
              <div className="teaser-badge">Free</div>
              <h3>AI Opportunity Audit</h3>
              <p>20 questions that map where AI can save you the most time across your whole business — not just sales. Takes 5 minutes. Free, instant results.</p>
              <span className="teaser-arrow">
                <Link href="/audit" style={{ color: "inherit" }}>Take the audit →</Link>
              </span>
            </div>
          </div>
        </div>

        <p className="footer-note">
          Questions? <a href="mailto:hello@profitslab.io">hello@profitslab.io</a> — we reply within one business day.
        </p>
      </div>
    </>
  );
}
