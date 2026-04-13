"use client";

import { useState } from "react";

const STRIPE_URL = "https://buy.stripe.com/eVqdRa99xaaKdXgbUh6kg01";

const faqs = [
  {
    q: "Can't I just find AI prompts for free online?",
    a: "You can — and you'll spend hours sorting through Reddit threads, Twitter posts, and blog listicles to find ones that actually work for business. This stack is organized by job, tested on real tasks, and ready to use in 2 minutes. That's what the $19 buys you.",
  },
  {
    q: "Can I use this with the free version of ChatGPT?",
    a: "Yes. All prompts work with ChatGPT (free and Plus), Claude (free and Pro), Google Gemini, and any other AI that accepts text. No API keys, no integrations, no setup.",
  },
  {
    q: "What format is this?",
    a: "You get three files: the main PDF guide (80 pages), a Notion template you can duplicate to your workspace, plus two bonus PDFs — the Quick Start Cheat Sheet and Prompt Chain Workflows.",
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
    q: "What if I don't like it?",
    a: "Email hello@profitslab.io within 14 days for a full refund. No forms, no friction, no questions asked.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <a href={STRIPE_URL} className="btn-primary">Get It Now — $19</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Normally $79 — Launch price: $19
            </div>
            <h1>
              What takes you 2 hours takes AI 5 minutes —{" "}
              <span>if you know what to ask</span>
            </h1>
            <p className="hero-subtitle">
              The AI Shortcut Stack gives you 80 proven prompts for the business tasks you do every day. Just copy, customize the brackets, and paste into ChatGPT. Done.
            </p>
            <div className="hero-cta">
              <a href={STRIPE_URL} className="btn-primary btn-large">
                Get the Stack — $19
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <div className="hero-price">
                <span className="amount">
                  <s style={{ color: "var(--text-muted)", fontSize: "1rem" }}>$79</s> $19
                </span>
                <span className="note">One-time payment. No subscription.</span>
              </div>
            </div>
            <p className="hero-usecases">
              <strong>Used for:</strong> sales emails, job posts, ad copy, SOPs, customer replies, and 70+ more tasks
            </p>
            <div className="hero-trust">
              {["PDF + Notion template", "Works with any AI (ChatGPT, Claude, Gemini)", "14-day guarantee"].map((item) => (
                <div key={item} className="trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/product_mockup.jpg" alt="AI Shortcut Stack on laptop and tablet" />
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="value-stack-section">
        <div className="value-stack-inner">
          <div className="section-header">
            <h2>Everything in the stack</h2>
            <p>Three resources. One price. Instant download.</p>
          </div>
          <div className="value-stack-grid">
            <div className="value-card core">
              <div className="value-tag core">Core Product</div>
              <h3>The AI Shortcut Stack</h3>
              <p>80 copy-paste prompts across 10 business categories. Every prompt includes bracketed placeholders, a "when to use" note, and which AI model works best. PDF + Notion template.</p>
              <div className="value-price">Value: <span>$79</span></div>
            </div>
            <div className="value-card">
              <div className="value-tag bonus">Bonus</div>
              <h3>Quick Start Cheat Sheet</h3>
              <p>A one-page lookup table. Find what you need to do, get the exact prompt name and number. No browsing, no guessing — just scan and go.</p>
              <div className="value-price">Value: <span>$49</span></div>
            </div>
            <div className="value-card">
              <div className="value-tag bonus">Bonus</div>
              <h3>5 Prompt Chain Workflows</h3>
              <p>Turn single prompts into complete systems. Five step-by-step workflows for cold outreach, marketing launches, hiring, customer recovery, and content creation.</p>
              <div className="value-price">Value: <span>$49</span></div>
            </div>
          </div>
          <div className="value-total">
            Total value: <strong>$177</strong> — Yours for{" "}
            <strong style={{ color: "var(--accent)" }}>$19</strong>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="section-header">
          <h2>One prompt away from "done." Pick a category.</h2>
          <p>Every prompt tells you when to use it, which AI works best, and exactly what to customize. No guessing.</p>
        </div>
        <div className="categories">
          {[
            { name: "Sales & Outreach", icon: "phone", count: 8 },
            { name: "Marketing & Content", icon: "edit", count: 8 },
            { name: "Customer Service", icon: "message-circle", count: 8 },
            { name: "HR & Hiring", icon: "users", count: 8 },
            { name: "Operations & SOPs", icon: "monitor", count: 8 },
            { name: "Finance & Admin", icon: "dollar-sign", count: 8 },
            { name: "Strategy & Planning", icon: "map", count: 8 },
            { name: "Product & E-commerce", icon: "shopping-cart", count: 8 },
            { name: "Email Marketing", icon: "mail", count: 8 },
            { name: "Social Media", icon: "instagram", count: 8 },
          ].map((cat) => (
            <div key={cat.name} className="category">
              <div className="category-icon">
                <CategoryIcon name={cat.icon} />
              </div>
              <div className="category-name">{cat.name}</div>
              <div className="category-count">{cat.count} prompts</div>
            </div>
          ))}
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
                <div className="prompt-note" style={{ marginTop: "0.5rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                  This prompt replaced a 45-minute writing task for one of our testers. Every prompt in the stack is built to do the same.
                </div>
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

      {/* Workflow Preview */}
      <section className="workflow-section">
        <div className="section-header">
          <h2>Prompts are tools. Chains are systems.</h2>
          <p>The bonus Prompt Chain Workflows guide shows you how to connect prompts into complete business processes:</p>
        </div>
        <div className="workflow-list">
          {[
            { title: "The Cold Outreach Machine", desc: "Persona → cold email → follow-up → LinkedIn connect" },
            { title: "The One-Afternoon Marketing Launch", desc: "Landing page → ads → Google Ads → email sequence" },
            { title: "The Hiring Pipeline", desc: "Job post → interview prep → rejection templates → offer letter → onboarding" },
            { title: "The Customer Recovery Playbook", desc: "Complaint response → refund → review reply" },
            { title: "The Content Multiplier", desc: "Blog outline → repurpose for social → email subject lines → video script" },
          ].map((wf) => (
            <div key={wf.title} className="workflow-item">
              <h4>{wf.title}</h4>
              <p>{wf.desc}</p>
            </div>
          ))}
        </div>
        <p className="workflow-footnote"><strong>Included free</strong> in the stack.</p>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="section-header">
          <h2>Not a course. Not a tutorial. A toolbox.</h2>
          <p>Download it, open it, use it today. That&apos;s it.</p>
        </div>
        <div className="includes-grid">
          {[
            { title: "PDF Guide (80 pages)", desc: "Every prompt organized by category, with usage notes and bracketed placeholders. Download once, keep forever." },
            { title: "Notion Template", desc: "Duplicate to your workspace. Search, filter, and organize prompts your way. Add your own notes and variations." },
            { title: "5-Minute Setup Guide", desc: 'Not an "AI course." Just 5 quick tips for getting better output from every prompt, every time.' },
            { title: "Version 1.0 — Free Updates", desc: "Buy once, get future versions at no extra cost. No subscription. No recurring charges." },
          ].map((item) => (
            <div key={item.title} className="include-card">
              <div className="include-icon">
                <FileIcon />
              </div>
              <div className="include-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="buy">
        <div className="cta-box">
          <h2>Stop staring at blank AI windows</h2>
          <p>80 prompts. 5 workflows. 10 categories. Every one tested on real business tasks.</p>
          <div className="cta-value-recap">
            {[
              { label: "The AI Shortcut Stack", val: "value: $79" },
              { label: "Bonus: Quick Start Cheat Sheet", val: "value: $49" },
              { label: "Bonus: 5 Prompt Chain Workflows", val: "value: $49" },
            ].map((r) => (
              <div key={r.label} className="recap-item">
                <span className="recap-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {r.label}
                </span>
                <span className="recap-val">{r.val}</span>
              </div>
            ))}
            <div className="recap-total">
              <span>Total value: $177</span>
              <span style={{ color: "var(--accent)" }}>Yours for $19</span>
            </div>
          </div>
          <div className="cta-price">
            <s style={{ color: "var(--text-muted)", fontSize: "2rem", fontWeight: 400 }}>$79</s> $19
          </div>
          <div className="cta-price-note">One-time payment. Instant download.</div>
          <a href={STRIPE_URL} className="btn-primary btn-large" style={{ width: "100%", justifyContent: "center" }}>
            Get the Stack Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <div className="guarantee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            14-day money-back guarantee. No questions asked.
          </div>
        </div>
      </section>

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
        <p className="footer-copyright">© 2026 ProfitSlab. All rights reserved.</p>
      </footer>
    </>
  );
}

// Inline icon components to avoid external dependency at build time
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
function FileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>;
}
