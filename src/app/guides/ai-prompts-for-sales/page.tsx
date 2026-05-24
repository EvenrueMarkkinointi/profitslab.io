import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "AI Prompts for Sales: Cold Outreach That Converts",
  description:
    "50+ AI prompts for sales outreach, follow-ups, proposals, and closing. Copy-paste templates for cold email, LinkedIn, objections, and deal acceleration.",
  alternates: { canonical: "https://www.profitslab.io/guides/ai-prompts-for-sales/" },
  openGraph: {
    title: "AI Prompts for Sales: Cold Outreach That Converts | ProfitSlab",
    description:
      "50+ ready-to-use AI prompts for sales. Cold emails, follow-ups, proposals, and objection handling — copy, paste, and close more deals.",
    url: "https://www.profitslab.io/guides/ai-prompts-for-sales/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Will AI-written cold emails sound generic?",
    a: "Only if you use generic prompts. The prompts in this guide include instructions for personalization — adding specific observations about the prospect's business, recent news, or LinkedIn activity. The output sounds researched, not robotic. Always edit before sending.",
  },
  {
    q: "Can I use these prompts with free ChatGPT?",
    a: "Yes. Every prompt works with ChatGPT (free and Plus), Claude, and Gemini. For sales research-heavy tasks, Claude 4 tends to produce more nuanced, persuasive language. ChatGPT is faster for high-volume outreach.",
  },
  {
    q: "How many cold emails should I send per day?",
    a: "Quality beats quantity. 5–10 highly personalized cold emails per day beats 100 generic ones. The prompts in this guide help you research and personalize each email in under 5 minutes. Consistency matters more than volume — send 5 great emails daily for a month.",
  },
  {
    q: "What is the best AI model for sales copy?",
    a: "Claude 4 for persuasive, relationship-focused copy (high-ticket sales, consultative selling). ChatGPT-4o for speed and volume (SaaS outreach, e-commerce). Gemini 2.5 for data-heavy proposals and analysis. Test all three and pick what matches your selling style.",
  },
  {
    q: "How is this different from the AI Shortcut Stack?",
    a: "This guide covers sales prompts in depth — with frameworks, examples, and implementation tips. The AI Shortcut Stack includes these prompts plus 70+ more for customer service, marketing, operations, and hiring. Start here for free; upgrade when you want the full library.",
  },
];

export default function AIPromptsForSales() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Prompts for Sales: Cold Outreach That Converts",
            description:
              "50+ AI prompts for sales outreach, follow-ups, proposals, and closing.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-05-24",
            dateModified: "2026-05-24",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/ai-prompts-for-sales/",
            },
            image: "https://www.profitslab.io/images/og-image.png",
          }),
        }}
      />
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.profitslab.io/" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.profitslab.io/guides/" },
              {
                "@type": "ListItem",
                position: 3,
                name: "AI Prompts for Sales",
                item: "https://www.profitslab.io/guides/ai-prompts-for-sales/",
              },
            ],
          }),
        }}
      />
      {/* FAQ structured data */}
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

      <main className="hub-main">
        <div className="hub-main-inner">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/guides">Guides</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">AI Prompts for Sales</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Sales</span>
              <h1>AI Prompts for Sales: Cold Outreach That Converts</h1>
              <p className="article-lead">
                50+ copy-paste prompts for cold emails, follow-ups, proposals, and objection handling.
                Turn AI into your best sales rep — without sounding like a robot.
              </p>
              <div className="article-meta">
                <span>Updated May 2026</span>
                <span>·</span>
                <span>12 min read</span>
                <span>·</span>
                <span>Tested with GPT-4o, Claude 4, Gemini 2.5</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#framework">The PSOP Sales Framework</a></li>
                <li><a href="#cold-email">Cold Email Prompts</a></li>
                <li><a href="#follow-up">Follow-Up Sequences</a></li>
                <li><a href="#linkedin">LinkedIn Outreach</a></li>
                <li><a href="#proposal">Proposals and Quotes</a></li>
                <li><a href="#objections">Objection Handling</a></li>
                <li><a href="#closing">Closing and Negotiation</a></li>
                <li><a href="#workflow">The Daily Sales Workflow</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                Sales is not about being pushy. It is about being relevant at the right time.
                The best sales reps research prospects, personalize every touch, and follow up
                consistently — but most small business owners do not have time for that.
              </p>
              <p>
                <strong>AI fixes the time problem.</strong> It researches in seconds, writes drafts in
                minutes, and never forgets to follow up. The prompts in this guide are designed for
                real sales workflows — not theory.
              </p>
              <p>
                Every prompt follows the PSOP framework: <strong>Personalize, Solve, Offer, Push.</strong>
                This structure makes AI output sound human, relevant, and persuasive — without the
                sleaze.
              </p>
            </section>

            {/* Section 1: Framework */}
            <section id="framework">
              <h2>The PSOP Sales Framework: Why Most AI Sales Copy Fails</h2>
              <p>
                Most AI sales emails sound like spam because the prompt is too vague. &quot;Write a cold email&quot;
                produces generic output. The PSOP framework fixes this:
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">P</div>
                  <div>
                    <strong>Personalize</strong>
                    <p>Reference something specific: a recent post, company news, or shared connection. No generic compliments.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">S</div>
                  <div>
                    <strong>Solve</strong>
                    <p>Identify one specific pain point and show you understand it. One sentence max.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">O</div>
                  <div>
                    <strong>Offer</strong>
                    <p>Present the value — not features. One clear outcome they will get.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">P</div>
                  <div>
                    <strong>Push</strong>
                    <p>A low-friction ask — a question, not a meeting request. Make it easy to reply.</p>
                  </div>
                </div>
              </div>

              <p>
                Every prompt in this guide uses PSOP. Master this structure and your AI output will
                outperform most human-written sales emails.
              </p>
            </section>

            {/* Section 2: Cold Email */}
            <section id="cold-email">
              <h2>Cold Email Prompts: Get Replies Without Being Pushy</h2>
              <p>
                The goal of a cold email is not to sell. It is to start a conversation. These prompts
                write emails that get replies.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Cold Email (PSOP Framework)</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Their role: [job title]
Recent observation: [specific thing you noticed — LinkedIn post, company news, product launch]
Their likely pain point: [one specific problem they probably have]
My solution: [brief description]
The outcome: [specific result they will get]

Write a cold email using the PSOP framework:
- Personalize: Reference the observation in the first line
- Solve: Name their pain point in one sentence
- Offer: State the outcome (not features)
- Push: Ask one low-friction question they can answer in one word

Subject line: under 45 characters, curiosity-driven
Body: under 120 words
Tone: confident but not salesy`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Value-First Cold Email</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Their industry: [industry]
My expertise: [what you help with]

Write a cold email that:
1. Opens with a valuable insight specific to their industry (not a compliment)
2. Shares a 2-sentence case study or result from a similar company
3. Ends with: "Worth a brief conversation?"
4. Includes a P.S. with one more piece of value (link, stat, or resource)

Subject line: tease the insight
Body: under 130 words
Tone: expert, generous, not desperate`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Referral-Based Cold Email</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Mutual connection: [name of shared contact]
Context: [how you know the mutual connection]

Write a cold email that:
1. Leads with the mutual connection (not a generic "X suggested I reach out")
2. Explains why you are reaching out — one specific reason
3. Asks for 5 minutes of their time or one piece of advice
4. Makes it easy to decline gracefully

Subject line: reference the connection
Body: under 100 words
Tone: warm, respectful, not presumptuous`}
                </pre>
              </div>
            </section>

            {/* Section 3: Follow-Up */}
            <section id="follow-up">
              <h2>Follow-Up Sequences: The Fortune Is in the Follow-Up</h2>
              <p>
                80% of sales require 5+ follow-ups. Most reps stop after 1–2. These prompts write
                follow-ups that add value each time — never just checking in.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Follow-Up #1 — Add Value</div>
                <pre className="prompt-text">
{`I emailed [prospect] 3 days ago about [topic]. No reply.

Write a follow-up that:
1. References the previous email in one line
2. Adds one new piece of value (relevant article, case study, industry stat)
3. Restates the core offer in one sentence
4. Asks a yes/no question
5. Is under 80 words

Tone: helpful, not annoyed. Assume they are busy, not ignoring you.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Follow-Up #2 — Change the Angle</div>
                <pre className="prompt-text">
{`I emailed [prospect] twice about [topic]. No reply.

Write a follow-up that:
1. Acknowledges they might not be interested in the original angle
2. Presents a different value proposition (same product, different outcome)
3. Includes a specific example or mini case study
4. Gives them an easy out: "If this isn't a priority right now, I understand — just let me know."
5. Is under 90 words

Tone: respectful, not guilt-tripping.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Follow-Up #3 — The Breakup</div>
                <pre className="prompt-text">
{`I have emailed [prospect] 3 times about [topic]. No reply.

Write a final email that:
1. Thanks them for their time (even if they didn't reply)
2. Says I will stop following up but they can reach out anytime
3. Leaves one piece of value (resource, insight, or offer)
4. Is under 60 words

Tone: gracious, professional, leaves the door open.`}
                </pre>
              </div>
            </section>

            {/* Section 4: LinkedIn */}
            <section id="linkedin">
              <h2>LinkedIn Outreach: DMs That Get Accepted</h2>
              <p>
                LinkedIn DMs have higher open rates than email — but lower patience. These prompts
                write short, relevant connection requests and follow-ups.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: LinkedIn Connection Request</div>
                <pre className="prompt-text">
{`Prospect: [name], [job title] at [company]
Observation: [specific thing from their profile or posts]

Write a LinkedIn connection request (300 characters max) that:
1. References the observation
2. States why connecting is relevant (one sentence)
3. Does not pitch — just opens the door

Tone: casual, professional, not salesy.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: LinkedIn DM After Connection</div>
                <pre className="prompt-text">
{`New connection: [name], [job title] at [company]
We connected because: [how you found them / why you connected]

Write a LinkedIn DM that:
1. Thanks them for connecting (one line)
2. Shares one relevant insight or resource
3. Asks one low-friction question about their work
4. Is under 100 words

No pitch. Goal: start a conversation.`}
                </pre>
              </div>
            </section>

            {/* Section 5: Proposals */}
            <section id="proposal">
              <h2>Proposals and Quotes: Close Faster with Clear Offers</h2>
              <p>
                A proposal should not be a document — it should be a decision accelerator. These
                prompts write proposals that get quick yeses.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: One-Page Proposal</div>
                <pre className="prompt-text">
{`Client: [name] at [company]
Project: [brief description]
Scope: [3–5 bullet points of deliverables]
Timeline: [timeframe]
Investment: [price]

Write a one-page proposal that:
1. Opens with the business outcome (not what you will do)
2. Lists deliverables as benefits, not tasks
3. Includes timeline and investment in a clean format
4. Ends with: "Reply YES and I'll send the contract today."
5. Addresses one common objection preemptively

Tone: confident, outcome-focused, no fluff. Under 300 words.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Quote Follow-Up</div>
                <pre className="prompt-text">
{`I sent a quote to [client] [timeframe] ago. No reply.
Project: [description]
Quote amount: [amount]

Write a follow-up that:
1. References the quote and the outcome it delivers
2. Addresses the likely hesitation (price, timing, or scope)
3. Offers one flexibility (payment plan, phased delivery, or smaller scope)
4. Creates gentle urgency (not fake scarcity)
5. Is under 120 words

Tone: helpful, not pushy.`}
                </pre>
              </div>
            </section>

            {/* Section 6: Objections */}
            <section id="objections">
              <h2>Objection Handling: Turn No into Not Yet</h2>
              <p>
                Objections are not rejections — they are requests for more information. These prompts
                write responses that address concerns without being defensive.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Price Objection</div>
                <pre className="prompt-text">
{`Client said: "This is more expensive than we expected."
My price: [amount]
Value delivered: [specific outcomes]

Write a reply that:
1. Validates their concern (not dismisses it)
2. Reframes the price as an investment with ROI
3. Offers one alternative (payment plan, smaller scope, or phased start)
4. Includes a relevant case study or result
5. Is under 130 words

Tone: confident, generous, not defensive.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Timing Objection</div>
                <pre className="prompt-text">
{`Client said: "We are not ready to start this yet."

Write a reply that:
1. Validates their timing concern
2. Shares what they risk by waiting (one specific consequence)
3. Offers a no-commitment next step (audit, assessment, or pilot)
4. Sets a specific date to revisit the conversation
5. Is under 110 words

Tone: patient but not passive.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Competitor Comparison</div>
                <pre className="prompt-text">
{`Client said: "We are considering [competitor] too."
Competitor: [name]
Their strength: [what they are known for]
My strength: [where I am better]

Write a reply that:
1. Compliments the competitor genuinely (builds trust)
2. Explains where we differ — without trashing them
3. Offers a specific comparison point (feature, service, or result)
4. Suggests a trial or pilot to compare directly
5. Is under 120 words

Tone: confident, not desperate. Win on value, not price.`}
                </pre>
              </div>
            </section>

            {/* Section 7: Closing */}
            <section id="closing">
              <h2>Closing and Negotiation: Seal the Deal</h2>
              <p>
                The close is not a single moment — it is a series of small agreements. These prompts
                help you ask for the business without awkwardness.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: The Soft Close</div>
                <pre className="prompt-text">
{`Client seems interested but has not committed.

Write an email that:
1. Summarizes what we have discussed (3 bullet points)
2. States the next step clearly (contract, kickoff call, or deposit)
3. Creates a soft deadline ("If we start by [date], we can deliver by [date]")
4. Asks: "Does this timeline work for you?"
5. Is under 120 words

Tone: assuming the sale, not pressuring.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Negotiation Response</div>
                <pre className="prompt-text">
{`Client wants to negotiate on [price/terms/scope].
Their ask: [what they want]
My bottom line: [what I can offer]

Write a reply that:
1. Thanks them for the opportunity
2. Meets them halfway on one point (shows flexibility)
3. Holds firm on one non-negotiable (shows value)
4. Reframes the deal around outcomes, not costs
5. Is under 130 words

Tone: collaborative, not combative.`}
                </pre>
              </div>
            </section>

            {/* Section 8: Workflow */}
            <section id="workflow">
              <h2>The 30-Minute Daily Sales Workflow</h2>
              <p>
                Here is how to use these prompts in your actual workday to book more meetings
                without spending all day writing.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Prospect research (10 min)</strong>
                    <p>Find 5 prospects. Use LinkedIn, company websites, or your CRM. Note one specific observation per person.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Draft emails (10 min)</strong>
                    <p>Use the cold email prompt. Fill in the blanks for all 5 prospects. Get 5 drafts in 10 minutes.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Personalize and send (10 min)</strong>
                    <p>Edit each draft: add the prospect&apos;s name, tweak one line to match their situation, send. 5 personalized emails in 30 minutes total.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>The math:</strong> 5 emails/day × 5 days/week = 25 emails/week. With a 10% reply rate,
                that is 2–3 new conversations per week. Most small businesses need 2–3 new conversations
                to close 1 deal.
              </p>

              <div className="article-cta-box">
                <h3>Want all 50+ sales prompts in one file?</h3>
                <p>
                  The <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes these
                  sales prompts plus 70+ more for customer service, marketing, and operations.
                  One PDF. $19. Instant download.
                </p>
                <Link href="/products/prompt-stack" className="btn-primary">
                  Get the AI Shortcut Stack →
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq-section" className="article-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <h3 className="faq-question">{faq.q}</h3>
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="article-bottom-cta">
              <h2>Not sure where AI fits in your sales process?</h2>
              <p>
                Take the free <Link href="/audit">AI Audit</Link> — 20 questions that show exactly
                where AI can save you the most time in your business.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
              </Link>
            </div>
          </article>
        </div>
      </main>

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
        <p className="footer-copyright">© 2026 ProfitSlab. All rights reserved.</p>
      </footer>
    </>
  );
}
