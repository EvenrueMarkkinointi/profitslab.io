"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const AUDIT_URL = "/audit";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect GHL webhook URL via environment variable
    setSubscribed(true);
  }

  return (
    <>
      {/* Hub + Organisation structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ProfitSlab",
            url: "https://www.profitslab.io",
            description: "Practical AI guides, free audit, and ready-to-use prompts for small business owners.",
            publisher: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
          }),
        }}
      />

      <SiteNav />

      {/* Hero */}
      <section className="hub-hero">
        <div className="hub-hero-inner">
          <div className="freshness-badge">
            <span>✓</span> Updated May 2026 — GPT-4o, Claude 4 &amp; Gemini 2.5
          </div>
          <h1>Practical AI for small businesses</h1>
          <p className="hub-hero-sub">
            No fluff. No enterprise jargon. Just step-by-step ways to save time and make better decisions with AI.
          </p>
          <div className="hub-hero-ctas">
            <Link href={AUDIT_URL} className="btn-primary btn-large">
              Take the Free AI Audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/guides" className="btn-secondary btn-large">
              Browse Guides →
            </Link>
          </div>
          <div className="hub-trust-items">
            <span>✅ Used by 2,100+ founders and operators</span>
            <span>✅ Updated May 2026 — GPT-4o, Claude 4, Gemini 2.5</span>
          </div>
        </div>
      </section>

      {/* Three ways to get started */}
      <section className="section">
        <div className="section-header">
          <h2>Three ways to get started</h2>
          <p>Whether you want a personalised plan, free reading material, or a ready-made tool — start here.</p>
        </div>
        <div className="hub-cards-grid">
          <div className="hub-card hub-card-primary">
            <div className="hub-card-icon" aria-hidden="true">🎯</div>
            <h3 className="hub-card-title">Free AI Audit</h3>
            <p className="hub-card-desc">
              Answer 20 questions. Get a personalised report showing your biggest AI opportunities, ranked by effort and impact.
            </p>
            <Link href={AUDIT_URL} className="hub-card-cta">Take the Audit →</Link>
          </div>
          <div className="hub-card">
            <div className="hub-card-icon" aria-hidden="true">📚</div>
            <h3 className="hub-card-title">Practical Guides</h3>
            <p className="hub-card-desc">
              Step-by-step walkthroughs for real business tasks — customer service, sales, SOPs, and more.
            </p>
            <Link href="/guides" className="hub-card-cta">Browse Guides →</Link>
          </div>
          <div className="hub-card">
            <div className="hub-card-icon" aria-hidden="true">🛠️</div>
            <h3 className="hub-card-title">Ready-to-Use Tools</h3>
            <p className="hub-card-desc">
              Copy-paste prompts and templates you can use today. No setup, no API keys.
            </p>
            <Link href="/products" className="hub-card-cta">See Products →</Link>
          </div>
        </div>
      </section>

      {/* Popular guides */}
      <section className="section hub-guides-section">
        <div className="section-header">
          <h2>Popular guides</h2>
          <p>Step-by-step walkthroughs for common business tasks. Free to read.</p>
        </div>
        <div className="hub-guides-grid">
          {[
            {
              tag: "Customer Service",
              title: "Handle customer complaints with AI — without sounding robotic",
              desc: "The exact prompts that de-escalate angry customers in one reply, every time.",
            },
            {
              tag: "Sales",
              title: "Cold emails that get replies: 3 AI prompts that sound like you",
              desc: "Stop writing from scratch. Fill in the blanks, paste, send.",
            },
            {
              tag: "Operations",
              title: "Write SOPs in 10 minutes using ChatGPT: a step-by-step template",
              desc: "Turn messy processes into clear, repeatable instructions your team will actually follow.",
            },
          ].map((g) => (
            <div key={g.title} className="hub-guide-card">
              <span className="hub-guide-tag">{g.tag}</span>
              <h3 className="hub-guide-title">{g.title}</h3>
              <p className="hub-guide-desc">{g.desc}</p>
              <Link href="/guides" className="hub-guide-link">Read Guide →</Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/guides" className="btn-secondary">See all guides →</Link>
        </div>
      </section>

      {/* Product teaser */}
      <section className="hub-product-section">
        <div className="hub-product-inner section">
          <div className="hub-product-content">
            <p className="hub-product-eyebrow">When you&apos;re ready to move faster</p>
            <h2>AI Shortcut Stack</h2>
            <p>80 copy-paste prompts for the business tasks you do every week. $19, one-time payment.</p>
            <Link href="/products/prompt-stack" className="btn-primary">
              See the Product →
            </Link>
          </div>
          <div className="hero-prompt-card hub-product-prompt-card">
            <div className="hpc-header">
              <div className="hpc-dots"><span></span><span></span><span></span></div>
              <span className="hpc-title">COLD EMAIL PROMPT</span>
            </div>
            <div className="hpc-body">
              <p className="hpc-text">
                Write a cold email to <span className="placeholder">[prospect name]</span> at <span className="placeholder">[company]</span>.<br />
                Under 120 words. End with a soft question, not a meeting request.
              </p>
            </div>
            <div className="hpc-meta">
              <div className="hpc-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Best for: ChatGPT-4, Claude
              </div>
              <div className="hpc-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Category: Sales &amp; Outreach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="hub-founder section">
        <div className="hub-founder-inner">
          <h2>Built for owners, not tech teams</h2>
          <blockquote className="hub-founder-quote">
            &ldquo;Most AI advice is written for engineers and enterprise consultants. I built ProfitSlab because small business owners need practical steps — not hype. These are the same workflows, prompts, and checklists I use to run my own business.&rdquo;
          </blockquote>
          <p className="hub-founder-attribution">— Tommi, founder of ProfitSlab</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="hub-newsletter section">
        <div className="hub-newsletter-inner">
          <h2>Get one practical AI tip every Friday</h2>
          <p>No spam. Unsubscribe anytime. One email, one actionable tip.</p>
          {subscribed ? (
            <div className="hub-newsletter-success">You&apos;re in. See you Friday. ✓</div>
          ) : (
            <form className="hub-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="hub-newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          )}
          <p className="hub-newsletter-alt">
            Rather get a full picture of your business first?{" "}
            <Link href={AUDIT_URL}>Take the free 5-minute AI Audit →</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
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
