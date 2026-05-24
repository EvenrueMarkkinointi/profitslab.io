"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import PurchaseNotification from "@/components/PurchaseNotification";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const STRIPE_URL = "https://buy.stripe.com/REPLACE_ME";

const faqs = [
  {
    q: "What exactly is a 'Skill'?",
    a: "A Skill is a custom system prompt you install once in Claude or ChatGPT. After that, you fill in 6 fields about your offer and customer — and get a complete outreach sequence back. No prompt engineering, no guessing what to ask.",
  },
  {
    q: "Do I need Claude Pro or ChatGPT Plus?",
    a: "The Skill works with the free tiers of both Claude and ChatGPT. Paid plans give you longer outputs, which is useful when generating full 5-step sequences — but free works fine for cold emails and individual follow-ups.",
  },
  {
    q: "Is this templates or AI prompts? What's the difference?",
    a: "Both. The Pack gives you ready-made templates you can use directly — fill in the brackets and send. The Skill turns your specific offer into personalized messages. Use whichever is faster for the task in front of you.",
  },
  {
    q: "Can I use this for LinkedIn only, or email only?",
    a: "Yes. Tell the Skill which channel you're working in and it only outputs what you need. The templates in the Pack are also organized by channel.",
  },
  {
    q: "Can I share this with my team?",
    a: "Yes — up to 5 people per purchase. For larger teams, email hello@profitslab.io and we'll set up a team license.",
  },
  {
    q: "What if I don't like it?",
    a: "Email hello@profitslab.io within 14 days for a full refund. No forms, no friction, no questions asked.",
  },
];

const contents = [
  {
    label: "AI Sales Sequence Pack",
    sub: "60+ templates across 7 sales scenarios: cold email, follow-ups, LinkedIn, objections, post-call, proposals, A/B variants",
    value: "$49",
  },
  {
    label: "Companion Sales Sequence Skill",
    sub: "Custom AI operator: give it your offer + customer + proof, get a full sequence back",
    value: "$49",
  },
  {
    label: "Quick Start Sheet",
    sub: "How to fill in the Skill, what goes in each field, and the fastest path to a first send",
    value: "$19",
  },
  {
    label: "Example Inputs + Outputs",
    sub: "5 worked examples showing the exact inputs and the messages they produce",
    value: "$29",
  },
];

export default function AISalesSequencePack() {
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
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AI Sales Sequence Pack + Skill",
            description:
              "Turn your offer and target customer into cold emails, follow-ups, LinkedIn messages, and objection replies in minutes. Works with ChatGPT and Claude.",
            brand: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            offers: {
              "@type": "Offer",
              price: "29",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://www.profitslab.io/products/ai-sales-sequence-pack/",
              priceValidUntil: "2026-12-31",
              seller: { "@type": "Organization", name: "ProfitSlab" },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.profitslab.io/" },
              { "@type": "ListItem", position: 2, name: "Products", item: "https://www.profitslab.io/products/" },
              {
                "@type": "ListItem",
                position: 3,
                name: "AI Sales Sequence Pack + Skill",
                item: "https://www.profitslab.io/products/ai-sales-sequence-pack/",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <SiteNav />

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/products">Products</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">AI Sales Sequence Pack + Skill</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="freshness-badge">
              <span>✓</span> Tested with GPT-4o and Claude 4 — May 2026
            </div>
            <h1>Turn your offer into a full sales sequence in minutes.</h1>
            <p className="hero-subtitle">
              Give AI your offer, your customer, and one proof point. Get a cold email, 5 follow-ups,
              LinkedIn messages, and objection replies — ready to send.
            </p>
            <div className="hero-cta">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href={STRIPE_URL} className="btn-primary btn-large">
                  Get Instant Access — $29
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <div className="hero-price-line">
                  <span className="hero-price-strike">$146</span>
                  <span className="hero-price-now">$29</span>
                  <span className="hero-price-note">launch price · one-time payment</span>
                </div>
              </div>
            </div>
            <div className="hero-bonuses">
              <div className="hero-bonuses-heading">Here is what you get</div>
              {contents.map((item) => (
                <div key={item.label} className="hero-bonus-row">
                  <span className="hero-bonus-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="hero-bonus-label">
                    <span className="hero-bonus-name">{item.label}</span>
                    <span className="hero-bonus-sub">{item.sub}</span>
                  </span>
                  <span className="hero-bonus-value">{item.value}</span>
                </div>
              ))}
              <div className="hero-bonus-total">
                <span>Total value</span>
                <span className="hero-bonus-total-strike">$146</span>
              </div>
            </div>
            <div className="hero-trust">
              {["Instant access", "14-day refund guarantee", "Works with ChatGPT and Claude"].map((item) => (
                <div key={item} className="trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero prompt card — shows the Skill interface */}
          <div className="hero-prompt-preview">
            <div className="hero-prompt-card">
              <div className="hpc-header">
                <div className="hpc-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="hpc-title">SALES SEQUENCE SKILL</span>
              </div>
              <div className="hpc-body">
                <p className="hpc-text">
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Offer:</span>{" "}
                  <span className="placeholder">[what you sell, one sentence]</span><br />
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Customer:</span>{" "}
                  <span className="placeholder">[job title or customer type]</span><br />
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Pain point:</span>{" "}
                  <span className="placeholder">[their specific problem]</span><br />
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Proof:</span>{" "}
                  <span className="placeholder">[result or case study]</span><br />
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Tone:</span>{" "}
                  direct<br />
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Channel:</span>{" "}
                  email + LinkedIn
                </p>
              </div>
              <div className="hpc-meta">
                <div className="hpc-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Outputs: cold email + 5 follow-ups
                </div>
                <div className="hpc-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  + LinkedIn DM + objection reply
                </div>
                <div className="hpc-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Works with ChatGPT + Claude
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-header">
          <h2>Sales outreach takes forever — and most of it gets ignored anyway.</h2>
          <p style={{ maxWidth: 620, margin: "0 auto" }}>
            You know you need to follow up. You just don&apos;t have time to write five emails per prospect,
            figure out the right LinkedIn message, or come up with a response when someone says &quot;not right now.&quot;
          </p>
          <p style={{ maxWidth: 620, margin: "1rem auto 0", color: "var(--text-secondary)" }}>
            The AI Sales Sequence Pack gives you the templates. The Companion Skill turns your specific offer
            into personalized messages in minutes — not hours.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="section" id="contents">
        <div className="section-header">
          <h2>Everything you need to run outreach without starting from scratch</h2>
        </div>
        <div className="categories-featured">
          {[
            {
              name: "Cold Email Sequences",
              icon: "mail",
              desc: "First-touch emails plus 3-step and 5-step follow-up sequences. Each calibrated for the right level of urgency without being pushy.",
              detail: "Day 1: first-touch → Day 3: value add → Day 7: bump → Day 14: final check-in",
            },
            {
              name: "LinkedIn Outreach",
              icon: "users",
              desc: "Connection request, DM after connecting, and InMail variant. Three formats, all under the character limits that actually get read.",
              detail: "Connection request (under 300 chars) → DM after accepting → InMail for cold reach",
            },
            {
              name: "Objection Reply Library",
              icon: "message-circle",
              desc: "12 replies to the most common objections: not now, too expensive, not the right person, already using something else, and more.",
              detail: "\"We already have a solution\" → acknowledge, reframe, leave the door open",
            },
            {
              name: "Post-Call & Proposal Templates",
              icon: "edit",
              desc: "Same-day follow-up after a discovery call, proposal check-ins, and reminder emails that don't sound desperate.",
              detail: "Same-day summary → Day 3 proposal reminder → Day 7 final nudge",
            },
          ].map((cat) => (
            <div key={cat.name} className="category-featured">
              <div className="category-featured-top">
                <div className="category-icon">
                  <CategoryIcon name={cat.icon} />
                </div>
                <div className="category-name">{cat.name}</div>
                <div className="category-featured-desc">{cat.desc}</div>
              </div>
              <div className="category-featured-preview">
                <span className="category-preview-label">What&apos;s included</span>
                <span className="category-preview-text">{cat.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companion Skill preview */}
      <section className="section" id="skill">
        <div className="section-header">
          <h2>The Companion Skill: your offer in, a full sequence out.</h2>
          <p>Install it once in Claude or ChatGPT. Fill in 6 fields. Get 7 outputs ready to copy and send.</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              You give it
            </div>
            {[
              ["Offer", "what you sell, one sentence"],
              ["Target customer", "their job title or type"],
              ["Pain point", "the specific problem you solve"],
              ["Proof", "a result, case study, or client win"],
              ["Tone", "direct, friendly, or formal"],
              ["Channel", "email, LinkedIn, or both"],
            ].map(([field, desc]) => (
              <div
                key={field}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginBottom: "0.625rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    minWidth: 120,
                    flexShrink: 0,
                  }}
                >
                  {field}
                </span>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{desc}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "rgba(34,197,94,0.04)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 12,
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#22c55e",
                marginBottom: "1rem",
              }}
            >
              You get back
            </div>
            {[
              "First-touch cold email",
              "3-step or 5-step follow-up sequence",
              "LinkedIn connection request",
              "LinkedIn DM after connecting",
              "Objection reply (your choice of objection)",
              "Shorter A/B variant of the cold email",
              "Spammy-language cleanup check",
            ].map((output) => (
              <div
                key={output}
                style={{ display: "flex", gap: "0.625rem", marginBottom: "0.5rem", alignItems: "flex-start" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 14, height: 14, flexShrink: 0, color: "#22c55e", marginTop: 2 }}
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{output}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section">
        <div className="section-header">
          <h2>The difference between a prompt and a system</h2>
        </div>
        <div className="jd-before-after">
          <div className="jd-col jd-before">
            <div className="jd-label jd-label-before">Without the Skill</div>
            <div className="jd-content">
              <div className="jd-line">
                <span className="jd-speaker">You:</span> &ldquo;Write me a follow-up email for a prospect who didn&apos;t reply.&rdquo;
              </div>
              <div className="jd-line">
                <span className="jd-speaker">AI:</span> Generic. Doesn&apos;t reference your offer. Doesn&apos;t know the conversation. Sounds like a mass template.
              </div>
              <div className="jd-line jd-time">
                Time spent rewriting it: <strong>20 minutes.</strong>
              </div>
            </div>
          </div>
          <div className="jd-col jd-after">
            <div className="jd-label jd-label-after">With the Skill</div>
            <div className="jd-content">
              <div className="jd-line">
                <span className="jd-speaker">You:</span> [fill in offer, customer, pain point, proof, tone, channel]
              </div>
              <div className="jd-line">
                <span className="jd-speaker">AI:</span> First-touch email, 5 follow-ups, LinkedIn DM, and an objection reply — all specific to your offer.
              </div>
              <div className="jd-line jd-time">
                Time spent: <strong>3 minutes.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-header">
          <h2>Built for people doing their own selling</h2>
        </div>
        <div className="hub-cards-grid" style={{ marginTop: "1.5rem", textAlign: "left" }}>
          {[
            { icon: "💼", who: "Freelancers & consultants", use: "Pitch new clients without rewriting your intro email from scratch every time." },
            { icon: "🏢", who: "Small agencies", use: "Run outreach at volume without a sales team or a CRM you'll never actually use." },
            { icon: "🚀", who: "B2B SaaS founders", use: "Get your first 100 customers before you can afford to hire a dedicated sales rep." },
            { icon: "🎓", who: "Coaches & course creators", use: "Convert warm leads who went quiet — without sounding desperate or salesy." },
            { icon: "🔧", who: "Local service businesses", use: "Follow up on quotes and proposals with messages that close without awkward calls." },
            { icon: "📊", who: "Account managers", use: "Expansion emails, upsell sequences, and renewal reminders that don't feel like copy-paste." },
          ].map((uc) => (
            <div key={uc.who} className="hub-card">
              <div className="hub-card-icon" aria-hidden="true">{uc.icon}</div>
              <h3 className="hub-card-title">{uc.who}</h3>
              <p className="hub-card-desc">{uc.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example sequence */}
      <section className="prompts-section">
        <div className="section">
          <div className="section-header">
            <h2>What a full sequence looks like</h2>
            <p>Three of the seven outputs the Skill generates from a single set of inputs.</p>
          </div>
          <div className="prompts-grid">
            <div className="prompt-card">
              <div className="prompt-header">
                <MailIcon />
                <span>Cold Email (Day 1)</span>
              </div>
              <div className="prompt-body">
                <div className="prompt-text">
                  Subject: quick question, <span className="placeholder">[first name]</span><br /><br />
                  Hey <span className="placeholder">[first name]</span> — noticed <span className="placeholder">[specific observation about them]</span>.
                  Most <span className="placeholder">[job title]</span>s I talk to are dealing with <span className="placeholder">[pain point]</span>.<br /><br />
                  We helped <span className="placeholder">[proof]</span>. Worth a quick look?
                </div>
                <div className="prompt-note">Under 80 words · one soft question · no meeting request in the first touch</div>
              </div>
            </div>
            <div className="prompt-card">
              <div className="prompt-header">
                <RefreshIcon />
                <span>Follow-Up (Day 5)</span>
              </div>
              <div className="prompt-body">
                <div className="prompt-text">
                  Subject: Re: quick question<br /><br />
                  Didn&apos;t want this to get buried — sent something over last week about <span className="placeholder">[pain point]</span>.<br /><br />
                  Happy to send over a one-pager if that&apos;s easier. Just say the word.
                </div>
                <div className="prompt-note">Bump, not a repeat · adds an easy next step · leaves an exit</div>
              </div>
            </div>
            <div className="prompt-card">
              <div className="prompt-header">
                <LinkedInIcon />
                <span>LinkedIn DM</span>
              </div>
              <div className="prompt-body">
                <div className="prompt-text">
                  Hey <span className="placeholder">[first name]</span> — thanks for connecting.
                  I work with <span className="placeholder">[customer type]</span>s on <span className="placeholder">[problem]</span>.<br /><br />
                  <span className="placeholder">[Proof sentence]</span>. Would it be useful to share how we did that?
                </div>
                <div className="prompt-note">Under 300 chars · no pitch in the opening line · one question to open the thread</div>
              </div>
            </div>
          </div>
          <p className="examples-footnote">
            Every piece in the sequence is generated by the Skill in one run. Adjust what needs adjusting — most of it is ready to go.
          </p>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="cta-section" id="pricing" ref={pricingRef as React.RefObject<HTMLElement>}>
        <div className="cta-box">
          <h2>Get the complete AI Sales Sequence Pack + Skill</h2>
          <p>Everything you need to run outreach without writing each message from scratch.</p>
          <div className="cta-value-recap">
            <div className="recap-heading">Here is what you get</div>
            {[
              { label: "AI Sales Sequence Pack", sub: "60+ templates across 7 sales scenarios", val: "$49" },
              { label: "Companion Sales Sequence Skill", sub: "6 inputs → full sequence out, works with ChatGPT + Claude", val: "$49" },
              { label: "Quick Start Sheet", sub: "How to fill in the Skill, what goes in each field", val: "$19" },
              { label: "Example Inputs + Outputs", sub: "5 worked examples with exact inputs and messages", val: "$29" },
            ].map((r) => (
              <div key={r.label} className="recap-item">
                <span className="recap-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    <span style={{ display: "block", color: "var(--text-primary)", fontWeight: 600 }}>{r.label}</span>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{r.sub}</span>
                  </span>
                </span>
                <span className="recap-val" style={{ textDecoration: "line-through" }}>{r.val}</span>
              </div>
            ))}
            <div className="recap-item recap-total">
              <span className="recap-left" style={{ fontWeight: 700, color: "var(--text-primary)" }}>Total value</span>
              <span style={{ textDecoration: "line-through", color: "var(--text-muted)", fontWeight: 700 }}>$146</span>
            </div>
            <div className="recap-item" style={{ borderTop: "none", paddingTop: 0 }}>
              <span className="recap-left" style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, flexShrink: 0, color: "var(--success)" }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Instant email delivery
              </span>
            </div>
            <div className="recap-item" style={{ borderTop: "none", paddingTop: 0 }}>
              <span className="recap-left" style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, flexShrink: 0, color: "var(--success)" }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                14-day money-back guarantee
              </span>
            </div>
          </div>
          <div className="cta-price-block">
            <span className="price-strikethrough">$146</span>
            <span className="price-main">$29</span>
            <span className="price-label">one-time payment</span>
          </div>
          <div className="launch-badge">Launch price — 80% OFF</div>
          <a
            href={STRIPE_URL}
            className="btn-primary btn-large"
            style={{ width: "100%", justifyContent: "center", marginTop: "1.25rem" }}
          >
            Get Instant Access — $29
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <div className="stripe-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
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

      {/* Closing band */}
      <section className="closing-band">
        <div className="closing-band-inner">
          <p className="closing-band-eyebrow">One decision. One minute.</p>
          <h2 className="closing-band-heading">
            Stop rewriting the same cold email for the fifth time this week.
          </h2>
          <p className="closing-band-sub">
            Templates + Skill + examples. $29 once. No subscription, no setup, no guessing.
          </p>
        </div>
      </section>

      {/* Audit CTA */}
      <div className="audit-pre-faq">
        <Link href="/audit" className="audit-pre-faq-link">
          Not sure where to start? Take the free AI Audit first →
        </Link>
      </div>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="section">
          <div className="section-header">
            <h2>Questions?</h2>
            <p>Quick answers. No fluff.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? " faq-item-open" : ""}`}>
                <button
                  className={`faq-question${openFaq === i ? " active" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
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

      <ExitIntentPopup />
      <PurchaseNotification />

      {showStickyBar && (
        <div className="sticky-mobile-cta" aria-label="Quick purchase">
          <a href={STRIPE_URL} className="btn-primary sticky-mobile-btn">
            $29 — Get Instant Access
          </a>
        </div>
      )}
    </>
  );
}

function CategoryIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    "message-circle": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    edit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
