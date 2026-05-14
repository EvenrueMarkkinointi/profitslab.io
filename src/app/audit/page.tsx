import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Opportunity Audit — Find Your Best AI Wins in 5 Minutes",
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

      {/* Hero */}
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
          Find your best AI opportunities in 5 minutes
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

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: 720, width: "100%", textAlign: "left", marginBottom: "5rem" }}>
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

      {/* Report preview mockup */}
      <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
              Here&apos;s what your report looks like
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              Your answers shape every section. No two reports are the same.
            </p>
          </div>

          {/* Mock report card */}
          <div style={{
            background: "var(--bg-primary)", border: "1px solid var(--border)",
            borderRadius: 16, overflow: "hidden",
            boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
          }}>
            {/* Report header */}
            <div style={{ padding: "1.5rem 1.75rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.375rem" }}>Your AI Opportunity Report</div>
                <div style={{ fontWeight: 800, fontSize: "1.125rem" }}>Overall AI Readiness Score</div>
              </div>
              <div style={{
                background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: 10, padding: "0.5rem 1.25rem", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>72</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>/100</div>
              </div>
            </div>

            {/* Category bars */}
            <div style={{ padding: "1.25rem 1.75rem", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>Category Breakdown</div>
              {[
                { name: "Content & Marketing", score: 80 },
                { name: "Customer Communication", score: 65 },
                { name: "Operations & Admin", score: 45 },
                { name: "Sales & Outreach", score: 72 },
              ].map((cat) => (
                <div key={cat.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", width: 180, flexShrink: 0 }}>{cat.name}</span>
                  <div style={{ flex: 1, height: 6, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${cat.score}%`, background: cat.score < 50 ? "#fbbf24" : cat.score < 70 ? "var(--accent)" : "#22c55e", borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)", width: 28, textAlign: "right" }}>{cat.score}</span>
                </div>
              ))}
            </div>

            {/* Top opportunities */}
            <div style={{ padding: "1.25rem 1.75rem", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>Your Top 3 Opportunities</div>
              {[
                { rank: 1, title: "Automate proposal & quote creation", tag: "easy", hours: "6h/mo", category: "Operations" },
                { rank: 2, title: "AI-assisted customer support replies", tag: "easy", hours: "4h/mo", category: "Customer Comms" },
                { rank: 3, title: "Weekly content repurposing workflow", tag: "medium", hours: "3h/mo", category: "Content" },
              ].map((opp) => (
                <div key={opp.rank} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%", background: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.6875rem", fontWeight: 700, flexShrink: 0,
                  }}>
                    {opp.rank}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{opp.title}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>{opp.category} · Saves ~{opp.hours}</div>
                  </div>
                  <span style={{
                    fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", padding: "0.2rem 0.5rem", borderRadius: 4,
                    background: opp.tag === "easy" ? "rgba(34,197,94,0.12)" : "rgba(59,130,246,0.12)",
                    color: opp.tag === "easy" ? "#22c55e" : "#3b82f6",
                  }}>{opp.tag}</span>
                </div>
              ))}
            </div>

            {/* Action plan */}
            <div style={{ padding: "1.25rem 1.75rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>Your 3-Step Action Plan</div>
              {[
                "Start with the top easy opportunity. Set aside 2 hours this week.",
                "Use the AI Shortcut Stack prompts to execute — mapped to your exact gaps.",
                "Once the first win is running, move to the next opportunity.",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.625rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: 20, height: 20, background: "rgba(59,130,246,0.15)", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.6875rem", fontWeight: 700, color: "var(--accent)", flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Not generic advice */}
      <div style={{ padding: "5rem 1.5rem", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          <div style={{
            background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)",
            borderRadius: 12, padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#fbbf24", marginBottom: "1rem" }}>Generic AI advice</div>
            {[
              "Use ChatGPT for content",
              "Automate repetitive tasks",
              "Try AI for customer service",
              "Explore AI writing tools",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.625rem", marginBottom: "0.625rem", alignItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 12, padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#22c55e", marginBottom: "1rem" }}>Your personalized report</div>
            {[
              "Your #1 bottleneck, ranked by your answers",
              "Specific workflows where you lose the most time",
              "Which tools match your team size and budget",
              "A clear starting point — not a list of options",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.625rem", marginBottom: "0.625rem", alignItems: "flex-start" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
              Who this is for
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>
              Built for people who run businesses — not AI researchers or enterprise teams.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              {
                emoji: "🧑‍💼",
                title: "Founders who wear every hat",
                desc: "You handle sales, ops, marketing, and customer service. Find where AI can finally give you your time back.",
              },
              {
                emoji: "💻",
                title: "Freelancers & solo operators",
                desc: "You bill by the hour. More time means more income — or more life. Find the 2-hour wins first.",
              },
              {
                emoji: "👥",
                title: "Small teams (2–20 people)",
                desc: "You can&apos;t afford to experiment blindly. Get a clear map of where AI will actually move the needle for your team.",
              },
            ].map((card) => (
              <div key={card.title} style={{
                background: "var(--bg-primary)", border: "1px solid var(--border)",
                borderRadius: 12, padding: "1.5rem",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{card.emoji}</div>
                <div style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9375rem" }}>{card.title}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: card.desc }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit + Stack bridge */}
      <div style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.03))",
            border: "1px solid rgba(59,130,246,0.25)", borderRadius: 16, padding: "2.5rem",
          }}>
            <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>🔗</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              The audit shows where to start.<br />The Shortcut Stack gives you the prompts to act.
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
              After your audit, you&apos;ll know exactly which areas of your business to focus on. The AI Shortcut Stack gives you 80 copy-paste prompts — organized by business function — so you can start executing the same day.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/audit/start"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "var(--accent)", color: "white",
                  padding: "0.875rem 2rem", borderRadius: 10,
                  fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                }}
              >
                Start the Free Audit →
              </Link>
              <Link
                href="/ai-shortcut-stack"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "transparent", border: "1px solid var(--border)", color: "var(--text-secondary)",
                  padding: "0.875rem 2rem", borderRadius: 10,
                  fontWeight: 600, fontSize: "1rem", textDecoration: "none",
                }}
              >
                See the Shortcut Stack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
