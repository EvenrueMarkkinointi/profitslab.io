import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — AI Shortcut Stack",
};

export default function ThankYou() {
  return (
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

      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
        You&apos;re all set!
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", maxWidth: 480, marginBottom: "0.5rem" }}>
        Thank you for purchasing the AI Shortcut Stack. Check your inbox — your download link is on its way.
      </p>

      <div className="steps">
        <h2>What happens next</h2>
        <div className="step">
          <div className="step-num">1</div>
          <div className="step-text"><strong>Check your email</strong> — you&apos;ll receive a download link within a few minutes.</div>
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <div className="step-text"><strong>Download the PDF</strong> and duplicate the Notion template to your workspace.</div>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <div className="step-text"><strong>Start with one prompt</strong> — pick a category you use every week and try it today.</div>
        </div>
      </div>

      <a
        href="/ai-shortcut-stack/The_AI_Shortcut_Stack_Premium.pdf"
        download
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          backgroundColor: "var(--success)", color: "white",
          padding: "0.75rem 1.5rem", borderRadius: 8,
          fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none",
          transition: "background-color 0.2s", marginTop: "0.5rem",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download the PDF
      </a>

      <div className="bonuses">
        <div className="bonuses-label">Your free bonuses</div>

        <div className="bonus-item">
          <div className="bonus-info">
            <div className="bonus-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <div>
              <div className="bonus-name">Prompt Chain Workflows</div>
              <div className="bonus-tag">PDF — Chain prompts together for complex tasks</div>
            </div>
          </div>
          <a href="/ai-shortcut-stack/Prompt_Chain_Workflows.pdf" download className="bonus-dl">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          </a>
        </div>

        <div className="bonus-item">
          <div className="bonus-info">
            <div className="bonus-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <div>
              <div className="bonus-name">Quick Start Cheat Sheet</div>
              <div className="bonus-tag">PDF — Get better AI output from day one</div>
            </div>
          </div>
          <a href="/ai-shortcut-stack/Quick_Start_Cheat_Sheet.pdf" download className="bonus-dl">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          </a>
        </div>
      </div>

      <a
        href="/"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "transparent", border: "1px solid var(--border)", color: "var(--text-secondary)",
          padding: "0.75rem 1.5rem", borderRadius: 8,
          fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none",
          marginTop: "0.5rem",
        }}
      >
        ← Back to site
      </a>

      <div className="coming-soon">
        <div className="coming-soon-label">
          <span></span> What&apos;s coming next from ProfitSlab
        </div>
        <div className="teaser-cards">
          <div className="teaser-card">
            <div className="teaser-badge">Coming Soon</div>
            <h3>AI Audit in a Box</h3>
            <p>A guided self-audit to map exactly where AI can save you the most time — and where you&apos;re leaving money on the table. Takes 30 minutes. Gives you a clear action list.</p>
            <span className="teaser-arrow">The prompts you just bought are the toolkit. This shows you where to aim them. →</span>
          </div>
          <div className="teaser-card">
            <div className="teaser-badge">Coming Soon</div>
            <h3>The One-Person Marketing Department</h3>
            <p>A full AI-powered marketing system built for solo operators and small teams. Content, email, ads, and social — on autopilot, without hiring anyone.</p>
            <span className="teaser-arrow">The natural next step after the audit surfaces your gaps. →</span>
          </div>
        </div>
      </div>

      <p className="footer-note">
        Didn&apos;t get the email? Check spam or <a href="mailto:hello@profitslab.io">contact us</a>.
      </p>
    </div>
  );
}
