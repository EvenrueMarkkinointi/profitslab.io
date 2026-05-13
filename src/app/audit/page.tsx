import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Opportunity Audit — Find Your Best AI Wins in 15 Minutes",
  description:
    "A free AI opportunity audit for business owners who know they should use AI — but don't know where to start. 20 questions, instant personalized report.",
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
          A free AI opportunity audit for business owners who know they should use AI — but don&apos;t know where to start.
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.25rem", maxWidth: 680 }}>
          Find your best AI opportunities in 15 minutes
        </h1>
        <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: 560, marginBottom: "2.5rem", lineHeight: 1.6 }}>
          Answer 20 questions and get a personalized AI report showing where your business can save the most time, which workflows to improve first, and what to do next.
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
            Get My Free AI Report
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>100% free · No credit card · Instant results · Report sent to your email</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: 720, width: "100%", textAlign: "left" }}>
          {[
            { icon: "🎯", title: "AI readiness score", desc: "See how ready your business is across 6 key areas." },
            { icon: "📋", title: "Top time-saving opportunities", desc: "Get your highest-impact AI use cases ranked by effort and impact." },
            { icon: "⚡", title: "Step-by-step action plan", desc: "Know exactly what to improve first — without generic AI advice." },
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
