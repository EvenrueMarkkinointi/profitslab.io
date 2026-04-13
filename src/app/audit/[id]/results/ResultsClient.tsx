"use client";

import { useState } from "react";
import type { Tier, Opportunity, CategoryScore } from "@/lib/questions";

type ResultRow = {
  total_score: number;
  tier: Tier;
  category_scores: CategoryScore[];
  top_opportunities: Opportunity[];
};

export default function ResultsClient({
  id,
  result,
}: {
  id: string;
  result: ResultRow;
}) {
  const [loading, setLoading] = useState(false);

  const tierClass =
    result.tier === "Scale Mode"
      ? "tier-scale"
      : result.tier === "Growth Ready"
      ? "tier-growth"
      : "tier-quick";

  async function handleUnlock() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assessmentId: id }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <>
      <nav className="audit-nav">
        <div className="audit-nav-inner">
          <a href="/audit" className="nav-logo" style={{ color: "var(--text-primary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, fontSize: "0.875rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            AI Audit in a Box
          </a>
        </div>
      </nav>

      <div className="audit-container" style={{ maxWidth: 720 }}>
        {/* Score summary */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className={`tier-badge ${tierClass}`}>{result.tier}</div>
          <div className="score-ring-wrap">
            <ScoreRing score={result.total_score} />
          </div>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, marginBottom: "0.5rem" }}>
            Your AI Readiness Score: {result.total_score}/100
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto" }}>
            {result.tier === "Quick Wins"
              ? "You have significant untapped potential. The opportunities below could save you 10+ hours per week."
              : result.tier === "Growth Ready"
              ? "You're using AI in some areas. These gaps are where your biggest time savings are hiding."
              : "You're ahead of most businesses. These refinements will push you further."}
          </p>
        </div>

        {/* Category mini-scores */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
            Category breakdown
          </h3>
          {result.category_scores.map((cat) => (
            <div key={cat.name} className="category-row">
              <span className="category-label">{cat.name}</span>
              <div className="category-bar-outer">
                <div className="category-bar-inner" style={{ width: `${cat.normalized}%` }} />
              </div>
              <span className="category-score">{cat.normalized}</span>
            </div>
          ))}
        </div>

        {/* Top 3 opportunities (preview) */}
        <div style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Your top opportunities</h3>
          {result.top_opportunities.slice(0, 3).map((opp, i) => (
            <div
              key={opp.title}
              className={`opp-card${i >= 1 ? " blurred" : ""}`}
            >
              <div className="opp-title">{opp.title}</div>
              <div className="opp-meta">
                {opp.category} · Saves ~{opp.estimatedHours}h/mo · {opp.difficulty}
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.5rem", lineHeight: 1.5 }}>
                {opp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Paywall */}
        <div className="paywall-overlay">
          <p style={{ fontWeight: 600, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
            + {result.top_opportunities.length - 1} more opportunities in your full report
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
            Unlock your personalized action plan, all ranked opportunities, and implementation guide.
          </p>
          <button
            className="audit-btn audit-btn-primary"
            style={{ fontSize: "1rem", padding: "0.9375rem 2.5rem" }}
            onClick={handleUnlock}
            disabled={loading}
          >
            {loading ? "Loading…" : "Unlock Full Report →"}
          </button>
          <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            One-time payment · Instant access
          </p>
        </div>
      </div>
    </>
  );
}

function ScoreRing({ score }: { score: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#3b82f6" : "#fbbf24";

  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle cx="70" cy="70" r={r} fill="none" stroke="#333" strokeWidth="10" />
      <circle
        cx="70" cy="70" r={r}
        fill="none" stroke={color} strokeWidth="10"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      <text x="70" y="75" textAnchor="middle" fill="#fafafa" fontSize="28" fontWeight="800">
        {score}
      </text>
    </svg>
  );
}
