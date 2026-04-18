import { notFound } from "next/navigation";
import Link from "next/link";
import { createServiceClient } from "@/lib/supabase";
import type { Tier, Opportunity, CategoryScore } from "@/lib/questions";

const STRIPE_URL = "https://buy.stripe.com/eVqdRa99xaaKdXgbUh6kg01";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServiceClient();

  const { data: assessment } = await supabase
    .from("assessments")
    .select("email")
    .eq("id", id)
    .single();

  if (!assessment) notFound();

  const { data: result } = await supabase
    .from("assessment_results")
    .select("*")
    .eq("assessment_id", id)
    .single();

  if (!result) notFound();

  const tierClass =
    result.tier === "Scale Mode"
      ? "tier-scale"
      : result.tier === "Growth Ready"
      ? "tier-growth"
      : "tier-quick";

  return (
    <>
      <nav className="audit-nav">
        <div className="audit-nav-inner">
          <Link href="/audit" className="nav-logo" style={{ color: "var(--text-primary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, fontSize: "0.875rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            AI Audit in a Box
          </Link>
        </div>
      </nav>

      <div className="audit-container" style={{ maxWidth: 720 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className={`tier-badge ${tierClass}`} style={{ marginBottom: "1rem" }}>
            {result.tier as Tier}
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
            Your Full AI Opportunity Report
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Overall AI Readiness Score: <strong style={{ color: "var(--text-primary)" }}>{result.total_score}/100</strong>
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginTop: "0.5rem" }}>
            A copy has been sent to <strong style={{ color: "var(--text-secondary)" }}>{assessment.email}</strong>
          </p>
        </div>

        {/* Category breakdown */}
        <div className="report-section">
          <h3>Category Breakdown</h3>
          {(result.category_scores as CategoryScore[]).map((cat) => (
            <div key={cat.name} className="category-row">
              <span className="category-label">{cat.name}</span>
              <div className="category-bar-outer">
                <div
                  className="category-bar-inner"
                  style={{
                    width: `${cat.normalized}%`,
                    background: cat.normalized < 40 ? "#fbbf24" : cat.normalized < 70 ? "var(--accent)" : "#22c55e",
                  }}
                />
              </div>
              <span className="category-score">{cat.normalized}</span>
            </div>
          ))}
        </div>

        {/* All opportunities */}
        <div className="report-section">
          <h3>Your Ranked Opportunities</h3>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Sorted by your lowest-scoring areas. Start at the top.
          </p>
          {(result.top_opportunities as Opportunity[]).map((opp, i) => (
            <div key={opp.title} className="opp-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <div>
                  <div className="opp-title">
                    #{i + 1} {opp.title}
                  </div>
                  <div className="opp-meta" style={{ marginTop: "0.25rem" }}>
                    {opp.category} · Saves ~{opp.estimatedHours}h/mo
                  </div>
                </div>
                <span style={{
                  fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase",
                  padding: "0.25rem 0.625rem", borderRadius: 4,
                  background: opp.difficulty === "easy" ? "rgba(34,197,94,0.12)" : opp.difficulty === "medium" ? "rgba(59,130,246,0.12)" : "rgba(251,191,36,0.12)",
                  color: opp.difficulty === "easy" ? "#22c55e" : opp.difficulty === "medium" ? "#3b82f6" : "#fbbf24",
                  flexShrink: 0,
                }}>
                  {opp.difficulty}
                </span>
              </div>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.6 }}>
                {opp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="report-section" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>Your 3-Step Action Plan</h3>
          {[
            { step: 1, text: "Start with the top \u201Ceasy\u201D opportunity above. Set aside 2 hours this week." },
            { step: 2, text: "Use the AI Shortcut Stack prompts to execute. The relevant categories are already mapped to your gaps." },
            { step: 3, text: "Once the first win is running, pick the next opportunity. Build one system at a time." },
          ].map((item) => (
            <div key={item.step} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{
                width: 28, height: 28, background: "var(--accent)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: "0.75rem", flexShrink: 0, marginTop: 2,
              }}>
                {item.step}
              </div>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Upsell — AI Shortcut Stack */}
        <div
          className="report-section"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04))",
            border: "1px solid rgba(59,130,246,0.35)",
            borderRadius: 14,
            padding: "2rem",
            marginTop: "2rem",
          }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(59,130,246,0.2)",
            padding: "0.25rem 0.75rem", borderRadius: 9999,
            fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
            color: "var(--accent)", marginBottom: "1rem",
          }}>
            Recommended for you
          </div>
          <h3 style={{ fontSize: "1.375rem", marginBottom: "0.75rem" }}>
            Execute your action plan with the AI Shortcut Stack
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            80 battle-tested AI prompts across 10 business categories — the exact prompts that match the opportunities in your report. Plus a Notion template, quick-start guide, and two free bonuses.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
            <li style={{ marginBottom: "0.5rem" }}>✓ 80 prompts organized by business category</li>
            <li style={{ marginBottom: "0.5rem" }}>✓ Notion template for your workspace</li>
            <li style={{ marginBottom: "0.5rem" }}>✓ Prompt chain workflows (bonus)</li>
            <li style={{ marginBottom: "0.5rem" }}>✓ Quick-start cheat sheet (bonus)</li>
            <li>✓ 14-day money-back guarantee</li>
          </ul>
          <a
            href={STRIPE_URL}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--accent)", color: "white",
              padding: "0.9375rem 2rem", borderRadius: 10,
              fontWeight: 700, fontSize: "1rem", textDecoration: "none",
            }}
          >
            Get the AI Shortcut Stack →
          </a>
          <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            One-time payment · Instant download
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "2rem" }}>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            Questions? Email us at <a href="mailto:hello@profitslab.io" style={{ color: "var(--accent)" }}>hello@profitslab.io</a>
          </p>
          <Link
            href="/"
            style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textDecoration: "none" }}
          >
            ← Back to ProfitSlab
          </Link>
        </div>
      </div>
    </>
  );
}
