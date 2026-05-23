"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const STRIPE_URL = "https://buy.stripe.com/eVqdRa99xaaKdXgbUh6kg01";
const AUDIT_URL = "/audit";

const faqs = [
  {
    q: "Can't I just find AI prompts for free online?",
    a: "Absolutely. And you'll spend a full afternoon on Reddit and Twitter curating them, testing which ones actually work, and organizing them into something usable. Or you spend $19 and start using them in 2 minutes. The stack isn't about prompts existing — it's about not having to think about them ever again.",
  },
  {
    q: "Can I use this with the free version of ChatGPT?",
    a: "Yes. All prompts work with ChatGPT (free and Plus), Claude (free and Pro), Google Gemini, and any other AI that accepts text. No API keys, no integrations, no setup.",
  },
  {
    q: "What format is this?",
    a: "You get three files: the main PDF guide (80 pages), plus two bonus PDFs — the Quick Start Cheat Sheet and Prompt Chain Workflows.",
  },
  {
    q: "Do I need to know how to write prompts?",
    a: 'No. Every prompt is copy-paste ready. Just replace the bracketed placeholders (like [company name] or [pain point]) with your details and paste into ChatGPT. Each prompt also includes a "when to use" note so you know exactly which one to grab.',
  },
  {
    q: "Can I share this with my team?",
    a: "Yes — up to 5 people per purchase. For larger teams, email hello@profitslab.io and we'll set up a team license.",
  },
  {
    q: "How is this different from the free AI Audit?",
    a: "The AI Audit tells you where AI can help your business most — it maps your gaps and ranks your opportunities. The Shortcut Stack gives you the actual prompts to act on those opportunities. They work best together: use the audit to find where to start, then use the stack to get it done.",
  },
  {
    q: "What if I don't like it?",
    a: "Email hello@profitslab.io within 14 days for a full refund. No forms, no friction, no questions asked.",
  },
];

const workflowChains = [
  {
    title: "The Cold Outreach Machine",
    steps: ["Persona Builder", "Cold Email Writer", "Follow-up Sequence", "LinkedIn Connect"],
  },
  {
    title: "The One-Afternoon Marketing Launch",
    steps: ["Landing Page", "Ad Copy", "Google Ads", "Email Sequence"],
  },
  {
    title: "The Hiring Pipeline",
    steps: ["Job Post", "Interview Prep", "Rejection Templates", "Offer Letter", "Onboarding"],
  },
  {
    title: "The Customer Recovery Playbook",
    steps: ["Complaint Response", "Refund Reply", "Review Response"],
  },
  {
    title: "The Content Multiplier",
    steps: ["Blog Outline", "Social Repurpose", "Email Subject Lines", "Video Script"],
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(true);
  const pricingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = pricingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <a href="#" className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            AI Shortcut Stack
            <span>by profitslab.io</span>
          </a>
          <a href={STRIPE_URL} className="btn-primary nav-cta-desktop">Get Instant Access — $19</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="freshness-badge">
              <span>✓</span> Updated May 2026 — tested with GPT-4o, Claude 4, and Gemini 2.5
            </div>
            <h1>
              Stop guessing what to ask AI.
            </h1>
            <p className="hero-subtitle">
              80 copy-paste prompts that replace hours of writing, planning and admin. No prompt engineering required.
            </p>
            <div className="hero-cta">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href={STRIPE_URL} className="btn-primary btn-large">
                  Get Instant Access — $19
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textAlign: "center" }}>One-time payment · Instant download · 14-day guarantee</span>
              </div>
            </div>
            <div className="hero-trust">
              {["Instant access", "PDF format", "Works with ChatGPT, Claude and Gemini", "14-day refund guarantee"].map((item) => (
                <div key={item} className="trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-prompt-preview">
            <div className="hero-prompt-card">
              <div className="hpc-header">
                <div className="hpc-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="hpc-title">COLD EMAIL PROMPT</span>
              </div>
              <div className="hpc-body">
                <p className="hpc-text">
                  Write a cold email to <span className="placeholder">[prospect name]</span> at <span className="placeholder">[company]</span>.<br />
                  They are <span className="placeholder">[job title]</span> and their main challenge is <span className="placeholder">[pain point]</span>.<br />
                  Our solution <span className="placeholder">[how you solve it]</span>.<br />
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
                <div className="hpc-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Time saved: ~15 min per email
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof-section">
        <div className="social-proof-bar">
          <span className="social-proof-stars">★★★★★</span>
          <span className="social-proof-text">Used by 2,379+ founders and operators</span>
        </div>
        <div className="testimonials-grid">
          <figure className="testimonial-card">
            <blockquote>&ldquo;Saved me 3 hours this week on client emails alone.&rdquo;</blockquote>
            <figcaption>— James R., Agency Owner</figcaption>
          </figure>
          <figure className="testimonial-card">
            <blockquote>&ldquo;I stopped writing prompts from scratch. This is my Monday morning shortcut.&rdquo;</blockquote>
            <figcaption>— Lisa K., Freelance Marketer</figcaption>
          </figure>
          <figure className="testimonial-card">
            <blockquote>&ldquo;Finally, prompts that actually work for B2B. Worth 10x the price.&rdquo;</blockquote>
            <figcaption>— Mark S., SaaS Founder</figcaption>
          </figure>
        </div>
      </section>

      {/* Problem */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-header">
          <h2>AI can save you hours — but only if you know what to ask.</h2>
          <p style={{ maxWidth: 620, margin: "0 auto" }}>
            Most people open ChatGPT with a vague idea, write a weak prompt, get an average answer and give up. The problem isn&apos;t the AI. The problem is starting from scratch every time.
          </p>
          <p style={{ maxWidth: 620, margin: "1rem auto 0", color: "var(--text-secondary)" }}>
            These are the exact prompts I use so I don&apos;t have to start from a blank page every Monday morning. I got tired of re-inventing the wheel — so I turned my best prompts into a system.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="section">
        <div className="section-header">
          <h2>See the difference one good prompt makes</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#ef4444", marginBottom: "0.75rem" }}>Weak prompt</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, fontStyle: "italic" }}>
              &ldquo;Write me a sales email.&rdquo;
            </div>
            <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>Result: generic, off-brand, needs full rewrite.</div>
          </div>
          <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#22c55e", marginBottom: "0.75rem" }}>Shortcut Stack prompt</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Write a cold email to <span className="placeholder">[prospect name]</span> at <span className="placeholder">[company]</span>. They are <span className="placeholder">[job title]</span> and their main challenge is <span className="placeholder">[pain point]</span>. Our solution <span className="placeholder">[how you solve it]</span>. Under 120 words. End with a soft question, not a meeting request.
            </div>
            <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>Result: personalized, on-brief, ready to send.</div>
          </div>
        </div>
      </section>

      {/* What's inside — categories */}
      <section className="section">
        <div className="section-header">
          <h2>80 prompts organized by business task</h2>
          <p>Use the stack to create better first drafts, clearer processes and faster replies — without learning prompt engineering.</p>
        </div>
        <div className="categories">
          {[
            { name: "Sales & Outreach", icon: "phone", desc: "Cold emails, follow-ups, offer messages and sales replies." },
            { name: "Marketing & Content", icon: "edit", desc: "Ad copy, campaign ideas, content plans and promotional angles." },
            { name: "Customer Communication", icon: "message-circle", desc: "Support replies, complaint responses and FAQ-style answers." },
            { name: "Operations & SOPs", icon: "monitor", desc: "Checklists, workflows, internal instructions and process documentation." },
            { name: "Hiring & Team", icon: "users", desc: "Job posts, onboarding steps and team communication." },
            { name: "Planning & Strategy", icon: "map", desc: "Idea prioritization, action plans and decision support." },
            { name: "Finance & Admin", icon: "dollar-sign", desc: "Budget summaries, invoice copy and admin templates." },
            { name: "Product & E-commerce", icon: "shopping-cart", desc: "Product descriptions, launch copy and offer framing." },
            { name: "Email Marketing", icon: "mail", desc: "Sequences, subject lines, re-engagement and nurture emails." },
            { name: "Social Media", icon: "instagram", desc: "Captions, hooks, content calendars and post ideas." },
          ].map((cat) => (
            <div key={cat.name} className="category">
              <div className="category-icon">
                <CategoryIcon name={cat.icon} />
              </div>
              <div className="category-name">{cat.name}</div>
              <div className="category-count" style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>{cat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — replaced with before/after job description */}
      <section className="section">
        <div className="section-header">
          <h2>Turn repetitive business tasks into reusable AI workflows.</h2>
        </div>
        <div className="jd-before-after">
          <div className="jd-col jd-before">
            <div className="jd-label jd-label-before">Before (without the stack)</div>
            <div className="jd-content">
              <div className="jd-line"><span className="jd-speaker">You:</span> &ldquo;Write me a job description&rdquo;</div>
              <div className="jd-line"><span className="jd-speaker">AI:</span> Generic 500-word JD that sounds like every other company.</div>
              <div className="jd-line jd-time">Time spent fixing it: <strong>45 minutes.</strong></div>
            </div>
          </div>
          <div className="jd-col jd-after">
            <div className="jd-label jd-label-after">After (with the stack)</div>
            <div className="jd-content">
              <div className="jd-line"><span className="jd-speaker">You:</span> [paste the JD prompt with filled-in blanks]</div>
              <div className="jd-line"><span className="jd-speaker">AI:</span> Role-specific, tone-matched, ready to post.</div>
              <div className="jd-line jd-time">Time spent: <strong>2 minutes.</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Examples */}
      <section className="prompts-section">
        <div className="section">
          <div className="section-header">
            <h2>Here&apos;s the difference a good prompt makes</h2>
            <p>Most people type &quot;write me an email&quot; and get garbage. Here&apos;s what you get with the right prompt:</p>
          </div>
          <div className="prompts-grid">
            <div className="prompt-card">
              <div className="prompt-header">
                <PhoneIcon />
                <span>Cold Email</span>
              </div>
              <div className="prompt-body">
                <div className="prompt-text">
                  Write a cold email to <span className="placeholder">[prospect name]</span> at <span className="placeholder">[company]</span>. They are <span className="placeholder">[job title]</span> and their company <span className="placeholder">[specific pain point]</span>. Our solution <span className="placeholder">[how you solve it]</span>. Keep it under 120 words. End with a soft question, not a meeting request.
                </div>
                <div className="prompt-note">Best for: ChatGPT-4, Claude — Use when: You have a prospect list but no time to personalize each email</div>
              </div>
            </div>
            <div className="prompt-card">
              <div className="prompt-header">
                <EditIcon />
                <span>Job Description</span>
              </div>
              <div className="prompt-body">
                <div className="prompt-text">
                  Write a job description for a <span className="placeholder">[role title]</span> at a <span className="placeholder">[company type]</span> company. Must-haves: <span className="placeholder">[skill 1]</span>, <span className="placeholder">[skill 2]</span>, <span className="placeholder">[skill 3]</span>. Nice-to-haves: <span className="placeholder">[bonus skills]</span>. Include 3-5 bullet points for responsibilities and 3-5 for requirements. Tone: professional but not corporate.
                </div>
                <div className="prompt-note">Best for: Any AI — Use when: You need to post a job ad today but hate writing JDs</div>
              </div>
            </div>
            <div className="prompt-card">
              <div className="prompt-header">
                <MessageIcon />
                <span>Customer Complaint</span>
              </div>
              <div className="prompt-body">
                <div className="prompt-text">
                  A customer emailed: &quot;<span className="placeholder">[paste their complaint]</span>&quot;. Write a response that (1) acknowledges their frustration, (2) explains what happened without making excuses, (3) offers <span className="placeholder">[compensation/solution]</span>, and (4) invites them to reply if they need more help. Keep it under 150 words.
                </div>
                <div className="prompt-note">Best for: ChatGPT-4 — Use when: You need to de-escalate fast and don&apos;t trust your own temper</div>
              </div>
            </div>
          </div>
          <p className="examples-footnote">Every prompt in the stack is built like this. Specific. Structured. Ready to use in 2 minutes.</p>
        </div>
      </section>

      {/* Workflow Preview — visual flow diagrams */}
      <section className="workflow-section">
        <div className="section-header">
          <h2>Prompts are tools. Chains are systems.</h2>
          <p>The bonus Prompt Chain Workflows guide shows you how to connect prompts into complete business processes:</p>
        </div>
        <div className="workflow-chains">
          {workflowChains.map((chain) => (
            <div key={chain.title} className="workflow-chain">
              <h4 className="chain-title">{chain.title}</h4>
              <div className="chain-steps">
                {chain.steps.map((step, i) => (
                  <div key={step} className="chain-step-wrapper">
                    <div className="chain-step">{step}</div>
                    {i < chain.steps.length - 1 && (
                      <div className="chain-arrow" aria-hidden="true">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="workflow-footnote"><strong>Included free</strong> in the stack.</p>
      </section>

      {/* Audit Bridge */}
      <section className="section">
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: "1rem" }}>
            Not sure where to start?
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
            Not sure where AI would help your business most?
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: 520, margin: "0 auto 1rem" }}>
            Take the free AI Audit first. Answer 20 questions and get a personalized report showing your biggest AI opportunities, ranked by effort and impact.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 1.75rem", fontWeight: 500 }}>
            The audit shows where to start. The Shortcut Stack gives you the prompts to take action.
          </p>
          <Link
            href={AUDIT_URL}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--bg-page, #0a0a0a)", color: "var(--text-primary)", border: "1px solid var(--border)", padding: "0.9rem 2rem", borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none", marginBottom: "1rem" }}
          >
            Take the Free AI Audit →
          </Link>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "1rem" }}>
            Already know you want better prompts?{" "}
            <a href={STRIPE_URL} style={{ color: "var(--accent)", textDecoration: "none" }}>
              Get the Shortcut Stack for $19.
            </a>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="cta-section" id="buy" ref={pricingRef as React.RefObject<HTMLElement>}>
        <div className="cta-box">
          <h2>Get the complete AI Shortcut Stack</h2>
          <p>Everything you need to start getting better output from AI today.</p>
          <div className="cta-value-recap">
            {[
              { label: "80 ready-to-use business prompts", val: "" },
              { label: "PDF version", val: "" },
              { label: "AI cheat sheet", val: "" },
              { label: "5 prompt-chain workflows", val: "" },
              { label: "Instant email delivery", val: "" },
              { label: "14-day money-back guarantee", val: "" },
            ].map((r) => (
              <div key={r.label} className="recap-item">
                <span className="recap-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {r.label}
                </span>
              </div>
            ))}
          </div>
          <div className="cta-price-block">
            <span className="price-strikethrough">$49</span>
            <span className="price-main">$19</span>
            <span className="price-label">one-time payment</span>
          </div>
          <div className="launch-badge">Launch price — 60% OFF</div>
          <a href={STRIPE_URL} className="btn-primary btn-large" style={{ width: "100%", justifyContent: "center", marginTop: "1.25rem" }}>
            Get Instant Access — $19
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <div className="stripe-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Secure checkout · Powered by Stripe
          </div>
          <div className="guarantee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            No subscription · No credit card after purchase · Secure checkout
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-header">
          <h2>Start using AI like a business tool — not a guessing game.</h2>
          <p>Get the prompts, customize them to your business and turn repetitive tasks into reusable AI workflows.</p>
        </div>
        <a href={STRIPE_URL} className="btn-primary btn-large" style={{ display: "inline-flex" }}>
          Get the Shortcut Stack — $19
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </section>

      {/* AI Audit link — above FAQ */}
      <div className="audit-pre-faq">
        <Link href={AUDIT_URL} className="audit-pre-faq-link">
          Not sure yet? Take the free AI Audit first →
        </Link>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section">
          <div className="section-header">
            <h2>Questions?</h2>
            <p>Quick answers. No fluff.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question${openFaq === i ? " active" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`faq-answer${openFaq === i ? " active" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
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
            <a href="mailto:hello@profitslab.io">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <p className="footer-copyright">© 2026 ProfitSlab. All rights reserved. · Powered by <a href="https://www.evenrue.fi/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Evenrue</a></p>
      </footer>

      {/* Sticky Mobile CTA */}
      {showStickyBar && (
        <div className="sticky-mobile-cta" aria-label="Quick purchase">
          <a href={STRIPE_URL} className="btn-primary sticky-mobile-btn">
            $19 — Get Instant Access
          </a>
        </div>
      )}
    </>
  );
}

function CategoryIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    edit: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
    "message-circle": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
    users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    monitor: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
    "dollar-sign": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    map: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 21 18 21 6 16 10 8 6 1 10"></polygon><line x1="8" y1="6" x2="8" y2="18"></line><line x1="16" y1="10" x2="16" y2="22"></line></svg>,
    "shopping-cart": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
    mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  };
  return icons[name] ?? null;
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
}
function EditIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
}
function MessageIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
}
