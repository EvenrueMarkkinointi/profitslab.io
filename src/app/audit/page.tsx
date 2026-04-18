import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Audit in a Box — Find Where AI Can Save You the Most Time",
  description:
    "A 20-question self-audit that maps exactly where AI can save you the most time and money. Takes 15 minutes. Gives you a personalized action plan.",
};

export default function AuditLanding() {
  return (
    <>
      <nav className="audit-nav">
        <div className="audit-nav-inner">
          <Link href="/" className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            ProfitSlab
          </Link>
        </div>
      </nav>

      <div className="audit-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "8rem" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
          padding: "0.375rem 0.875rem", borderRadius: 9999,
          fontSize: "0.75rem", color: "var(--accent)", marginBottom: "1.5rem",
        }}>
          <span style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%", display: "inline-block" }}></span>
          20 questions · 15 minutes · Instant results
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", maxWidth: 680 }}>
          Find out exactly where AI can save you the most time
        </h1>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: 540, marginBottom: "2.5rem", lineHeight: 1.6 }}>
          Answer 20 questions about how you run your business. Get a personalized AI opportunity map showing your biggest time-saving wins — ranked by effort and impact.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>
          <Link
            href="/audit/start"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--accent)", color: "white",
              padding: "1rem 2.5rem", borderRadius: 10,
              fontWeight: 700, fontSize: "1.0625rem", textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            Start the Free Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>100% free · No credit card · Report emailed to you</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: 720, width: "100%", textAlign: "left" }}>
          {[
            { icon: "🎯", title: "Personalized score", desc: "See how AI-ready your business is across 6 categories." },
            { icon: "📋", title: "Ranked opportunities", desc: "Your biggest time-saving wins, sorted by ease and impact." },
            { icon: "⚡", title: "Action plan", desc: "Specific next steps, not generic advice." },
          ].map((item) => (
            <div key={item.title} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "1.25rem",
            }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              <div style={{ fontWeight: 600, marginBottom: "0.375rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
