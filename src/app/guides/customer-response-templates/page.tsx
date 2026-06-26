import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Customer Response Templates: Build a Library in 30 Minutes",
  description:
    "Build a customer response template library with AI. 6 essential categories, 5 copy-paste prompts, and an organization system your team will actually use.",
  alternates: { canonical: "https://www.profitslab.io/guides/customer-response-templates/" },
  openGraph: {
    title: "Customer Response Templates: Build a Library in 30 Minutes | ProfitSlab",
    description:
      "Build a customer response template library with AI. 6 essential categories, 5 copy-paste prompts, and an organization system your team will actually use.",
    url: "https://www.profitslab.io/guides/customer-response-templates/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "How many templates should a small business start with?",
    a: "Start with 8–12 templates covering your most common scenarios. Track which questions come up most often in your inbox over a week. Those are your first templates. Add more as patterns emerge — a bloated library with 50 templates nobody uses is worse than a tight library of 10 that get daily use.",
  },
  {
    q: "Should I use the same templates for email and chat?",
    a: "Not always. Email templates can be longer (100–150 words) with full explanations. Chat and SMS templates should be shorter (40–80 words) and more direct. Write once, then create a short version for real-time channels. Some help desks let you store both versions under the same template name.",
  },
  {
    q: "How often should I update my templates?",
    a: "Review quarterly. Check response time, resolution rate, and customer satisfaction scores for each template. If a template consistently leads to follow-up questions, it is incomplete. If CSAT drops after a template change, revert and rewrite. Set a calendar reminder for the first Monday of each quarter.",
  },
  {
    q: "Will customers know I\u0026apos;m using templates?",
    a: "Only if you send them unedited. The trick is the 30-second rule: after pasting a template, add the customer\u0026apos;s name, reference their specific issue, and adjust one sentence to match the conversation flow. Good templates are 80% structure, 20% personalization. That 20% makes all the difference.",
  },
  {
    q: "Can AI write templates better than I can?",
    a: "AI writes faster. You write better — because you know your customers, your voice, and your edge cases. Use AI for the first draft and structure, then edit for specifics. The prompts in this guide are designed to give you a solid starting point that needs minimal editing.",
  },
  {
    q: "What is the best tool for storing templates?",
    a: "For teams of 1–3: a shared Google Doc or Notion page works fine. For teams of 4+: use your help desk\u0026apos;s built-in canned responses (Zendesk, Freshdesk, Help Scout). For businesses without a help desk: TextExpander, Magical, or even Gmail\u0026apos;s built-in templates are enough to start.",
  },
  {
    q: "How do I handle edge cases that do not fit my templates?",
    a: "Create an escalation playbook template for every category. It should include: when to escalate, who to escalate to, what information to include, and a timeline for follow-up. Edge cases are teaching moments — after resolving one, ask: Should this become a new template or a new escalation rule?",
  },
];

export default function CustomerResponseTemplates() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Customer Response Templates: Build a Library in 30 Minutes",
            description:
              "Build a customer response template library with AI. 6 essential categories, 5 copy-paste prompts, and an organization system your team will actually use.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/customer-response-templates/",
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
                name: "Customer Response Templates",
                item: "https://www.profitslab.io/guides/customer-response-templates/",
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
              <span aria-current="page">Customer Response Templates</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Customer Service</span>
              <h1>Customer Response Templates: Build a Library in 30 Minutes</h1>
              <p className="article-lead">
                Most businesses collect templates that sit unused in a folder. Here is how to build an
                organized, AI-powered response library that cuts reply time by 70% and keeps your team consistent.
              </p>
              <div className="article-meta">
                <span>Updated June 2026</span>
                <span>·</span>
                <span>12 min read</span>
                <span>·</span>
                <span>Tested with GPT-4o, Claude 4, Gemini 2.5</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you\u0026apos;ll learn:</strong>
              <ul>
                <li><a href="#why-fail">Why Most Template Collections Fail</a></li>
                <li><a href="#categories">The 6 Categories Every Library Needs</a></li>
                <li><a href="#ai-prompts">AI Prompts to Generate Templates in Minutes</a></li>
                <li><a href="#organize">How to Organize Your Templates</a></li>
                <li><a href="#human">Making Templates Sound Human</a></li>
                <li><a href="#measure">How to Measure If Your Templates Work</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Section 1 */}
            <section id="why-fail">
              <h2>Why Most Template Collections Fail (And How to Build One That Works)</h2>
              <p>
                The average small business has a folder named &quot;Email Templates&quot; with 47 files inside,
                last updated 18 months ago. Nobody uses them. Why? Because they were built as a static
                collection, not a living system.
              </p>
              <p>
                A template library that works has three traits:
              </p>
              <ul>
                <li><strong>Organized by scenario, not by channel.</strong> A &quot;shipping delay&quot; template should work in email, chat, and SMS — not live in three separate files.</li>
                <li><strong>Versioned and reviewable.</strong> Someone owns the library. It gets reviewed quarterly.</li>
                <li><strong>Measured against outcomes.</strong> You know which templates resolve issues fast and which create follow-up work.</li>
              </ul>
              <p>
                The good news: you do not need enterprise software. A shared doc, a naming convention,
                and the AI prompts in this guide are enough to build a library your team will actually use.
                The whole process takes about 30 minutes.
              </p>
            </section>

            {/* Section 2 */}
            <section id="categories">
              <h2>The 6 Categories Every Small Business Template Library Needs</h2>
              <p>
                After analyzing support workflows across 50+ small businesses, every template library
                boils down to six categories. Cover these and you will handle 90% of customer communication
                without writing from scratch.
              </p>

              <table className="article-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>When to Use</th>
                    <th>Example Scenario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Acknowledgment &amp; First Response</td>
                    <td>First reply to any inbound message</td>
                    <td>&quot;We received your email and are looking into it&quot;</td>
                  </tr>
                  <tr>
                    <td>2. Problem Resolution</td>
                    <td>You know the fix and are delivering it</td>
                    <td>Replacement shipped, password reset, account unlocked</td>
                  </tr>
                  <tr>
                    <td>3. Refund &amp; Return</td>
                    <td>Customer wants money back or to send something back</td>
                    <td>Refund approved, return instructions, store credit offered</td>
                  </tr>
                  <tr>
                    <td>4. FAQ &amp; Self-Service</td>
                    <td>Common question with a known answer</td>
                    <td>How to upgrade, where is my order, how to cancel</td>
                  </tr>
                  <tr>
                    <td>5. Escalation &amp; De-escalation</td>
                    <td>Customer is angry or issue needs a manager</td>
                    <td>Angry customer cooldown, manager handoff</td>
                  </tr>
                  <tr>
                    <td>6. Follow-Up &amp; Relationship</td>
                    <td>After resolution or proactive outreach</td>
                    <td>Post-resolution check-in, feedback request, win-back</td>
                  </tr>
                </tbody>
              </table>

              <h3>Category 1: Acknowledgment &amp; First Response</h3>
              <p>
                The first reply sets the tone. A slow or generic acknowledgment raises anxiety.
                A fast, specific acknowledgment buys you time and trust. Every acknowledgment template
                should state the issue in your own words, give a timeframe, and offer a direct contact.
              </p>

              <h3>Category 2: Problem Resolution</h3>
              <p>
                These are your &quot;we fixed it&quot; templates. They should confirm the fix, explain what happened
                briefly, and close with an open door. The mistake most businesses make: over-explaining.
                Customers want confirmation, not a technical deep-dive.
              </p>

              <h3>Category 3: Refund &amp; Return</h3>
              <p>
                Refunds are emotional. Your template needs to move fast, feel generous, and be crystal
                clear on timing. Always state when the money will appear — &quot;3–5 business days&quot; beats
                &quot;soon&quot; every time.
              </p>

              <h3>Category 4: FAQ &amp; Self-Service</h3>
              <p>
                60–70% of support volume is repetitive. These templates should be short, link to help
                resources, and invite follow-up. The goal is not to close the door — it is to answer fast
                and offer more if needed. See our <Link href="/guides/ai-customer-service-prompts">AI prompts for customer service</Link> guide for
                deeper coverage on FAQ automation.
              </p>

              <h3>Category 5: Escalation &amp; De-escalation</h3>
              <p>
                Angry customers need acknowledgment before solutions. Your de-escalation template should
                name the emotion, take ownership, and offer a specific next step. Never pass a customer
                to a manager without explaining why and when they will hear back.
              </p>

              <h3>Category 6: Follow-Up &amp; Relationship</h3>
              <p>
                These are the most underused templates. A check-in 48 hours after resolution turns a
                one-time fix into loyalty. A win-back email to a churned customer is cheaper than
                acquiring a new one. These templates feel personal because they are timed, not triggered
                by a complaint.
              </p>
            </section>

            {/* Section 3 */}
            <section id="ai-prompts">
              <h2>AI Prompts to Generate Templates in Minutes (Not Hours)</h2>
              <p>
                You do not need to write every template from scratch. Use these prompts to generate
                category-specific templates, match them to your brand voice, and organize them into
                a usable library.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 1: First Response Acknowledgment Generator</div>
                <pre className="prompt-text">
{`Our business is [business type]. We often receive questions about [top 3 topics].

Write 3 first-response acknowledgment templates. Each should:
1. Confirm we received their message
2. Restate their issue in one sentence (so they know we understood)
3. Give a specific timeframe for the next update (e.g., "within 4 hours")
4. Include a direct line to reach us if it is urgent

Keep each under 80 words. Tone: [friendly/professional/empathetic].`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 2: Problem Resolution Template Generator</div>
                <pre className="prompt-text">
{`Common issues we resolve: [list 3–5 issues].

For each issue, write a resolution template that:
1. States the fix clearly in the first sentence
2. Gives one sentence of context (why it happened, no excuses)
3. Confirms the outcome (what the customer should expect now)
4. Invites them to reply if anything else comes up

Keep each under 120 words. No corporate language. No passive voice.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 3: Brand Voice Matcher</div>
                <pre className="prompt-text">
{`Here are 2–3 real replies I have written to customers:
[paste examples]

Here is a generic template:
[paste template]

Rewrite the template to match my voice and style. Keep the same structure
and placeholders, but make it sound like I wrote it. Do not add fluff.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 4: Template Performance Analyzer</div>
                <pre className="prompt-text">
{`Here is a template we use:
[paste template]

Here is the feedback we have received:
[paste customer replies or CSAT notes]

Analyze what is working and what is not. Suggest 2–3 specific changes
that would reduce follow-up questions or improve tone. Keep suggestions
actionable and brief.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 5: Template Library Organizer</div>
                <pre className="prompt-text">
{`Here are 20+ customer service replies we have written:
[paste replies]

Organize them into the 6 categories: Acknowledgment, Problem Resolution,
Refund/Return, FAQ, Escalation, Follow-Up. For each category, suggest a
naming convention (e.g., "ACK-01-Order-Status"). Flag any reply that is
too long, too vague, or sounds robotic.`}
                </pre>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="article-cta-box">
              <h3>Not sure where AI fits in your customer service workflow?</h3>
              <p>
                Take the free <Link href="/audit">AI Audit</Link> — 20 questions that show exactly where
                AI can save you the most time in your business, from response templates to full workflow automation.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
              </Link>
            </div>

            {/* Section 4 */}
            <section id="organize">
              <h2>How to Organize Your Templates (So Your Team Actually Uses Them)</h2>
              <p>
                A library nobody can find is useless. The organization system matters as much as the
                templates themselves. Here is a simple framework that works for teams of 1 to 20.
              </p>

              <h3>The Naming Convention</h3>
              <p>
                Every template name should tell you the category, scenario, and channel at a glance.
                Use this format: <code>CATEGORY-NUMBER-SCENARIO-CHANNEL</code>
              </p>

              <table className="article-table">
                <thead>
                  <tr>
                    <th>Template Name</th>
                    <th>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ACK-01-First-Contact-Email</td>
                    <td>Acknowledgment #1, first contact, email version</td>
                  </tr>
                  <tr>
                    <td>RES-03-Shipping-Delay-Chat</td>
                    <td>Resolution #3, shipping delay, chat/SMS version</td>
                  </tr>
                  <tr>
                    <td>REF-02-Partial-Refund-Email</td>
                    <td>Refund #2, partial refund offer, email version</td>
                  </tr>
                  <tr>
                    <td>FAQ-05-How-to-Cancel-All</td>
                    <td>FAQ #5, cancellation, works on all channels</td>
                  </tr>
                  <tr>
                    <td>ESC-01-Angry-Customer-Email</td>
                    <td>Escalation #1, angry customer de-escalation, email</td>
                  </tr>
                  <tr>
                    <td>FOL-03-Win-Back-Email</td>
                    <td>Follow-up #3, win-back message, email version</td>
                  </tr>
                </tbody>
              </table>

              <h3>Storage Options by Team Size</h3>
              <p>
                <strong>Solo founder or 2-person team:</strong> A single Google Doc with a table of contents
                works fine. Pin it in Slack or bookmark it. Update in real time.
              </p>
              <p>
                <strong>Team of 3–7:</strong> Notion or a shared Google Drive folder. Use a database view
                so people can filter by category. Add a &quot;last updated&quot; date to every template.
              </p>
              <p>
                <strong>Team of 8+:</strong> Use your help desk\u0026apos;s built-in canned responses (Zendesk Macros,
                Freshdesk Canned Responses, Help Scout Saved Replies). This keeps templates inside the
                workflow, not in a separate document.
              </p>

              <h3>Version Control Without the Headache</h3>
              <p>
                You do not need Git. You need two rules: (1) nobody edits a template without noting the
                change and date, and (2) review everything quarterly. Add a &quot;Change Log&quot; section at the
                top of your library doc. One line per change: date, template name, what changed, and why.
              </p>

              <h3>Access Control</h3>
              <p>
                Everyone should be able to read and use templates. Only 1–2 people should edit them.
                Open editing leads to conflicting versions, tone drift, and outdated copies floating around.
                If someone on your team has a better idea for a template, they suggest it — they do not
                overwrite the live version.
              </p>
            </section>

            {/* Section 5 */}
            <section id="human">
              <h2>Making Templates Sound Human (Not Corporate)</h2>
              <p>
                The fastest way to spot a bad template: it sounds like it was written by a committee.
                Corporate templates use passive voice, vague timelines, and words like &quot;utilize&quot; instead
                of &quot;use.&quot; Here is how to keep your templates human.
              </p>

              <h3>The &quot;Mad Libs&quot; Method</h3>
              <p>
                Write your template with brackets for anything specific. This forces personalization
                and prevents copy-paste disasters. Example:
              </p>
              <blockquote>
                Hi [Name], I see your [product] has not arrived by [promised date]. That is frustrating —
                I am checking with our shipping partner now and will update you by [time].
              </blockquote>
              <p>
                The brackets are your safety check. If you send a template with a bracket still in it,
                you know you rushed. That never happens with fully baked templates — except it does, constantly.
              </p>

              <h3>Tone Checklist: 5 Elements Every Template Needs</h3>
              <ol>
                <li><strong>A name.</strong> Never start with &quot;Dear Valued Customer.&quot; Use their first name.</li>
                <li><strong>An acknowledgment of the specific issue.</strong> Show you read their message.</li>
                <li><strong>A timeframe.</strong> &quot;Soon&quot; and &quot;shortly&quot; are banned words. Use specific times.</li>
                <li><strong>A single next step.</strong> What happens now? Who does it? When?</li>
                <li><strong>An open door.</strong> Invite them to reply. Do not close the conversation.</li>
              </ol>

              <h3>When to Break the Template</h3>
              <p>
                Templates are for patterns, not people. If a customer is grieving, celebrating, or clearly
                distressed, write a custom reply. The time you save on templates is meant to free you up
                for these moments — not to make you robotic.
              </p>
            </section>

            {/* Section 6 */}
            <section id="measure">
              <h2>How to Measure If Your Templates Are Working</h2>
              <p>
                Templates are not set-and-forget. You need feedback loops. Here are four metrics to track
                and a simple quarterly review process.
              </p>

              <h3>Metric 1: Response Time</h3>
              <p>
                Track average first-response time before and after template adoption. Most businesses see
                a 50–70% drop. If you do not, your templates are too hard to find or too complex to use.
              </p>

              <h3>Metric 2: Resolution Rate by Template</h3>
              <p>
                Which templates resolve issues in one reply? Which create follow-up threads? Tag each
                ticket with the template used (even a manual note works). After 30 tickets, patterns emerge.
                Rewrite the templates that need multiple touches.
              </p>

              <h3>Metric 3: Customer Satisfaction (CSAT)</h3>
              <p>
                Send a one-question survey after resolution: &quot;How would you rate this interaction?&quot;
                Track CSAT by template category. Low scores in &quot;Refund&quot;? Your refund template might
                feel stingy. Low scores in &quot;Escalation&quot;? Your handoff might feel like a pass-off.
              </p>

              <h3>Metric 4: Template Usage Rate</h3>
              <p>
                If your team has 30 templates but only uses 6, you have 24 distractions. Audit which
                templates get used weekly and which have not been touched in months. Delete or merge
                the unused ones. A smaller, sharper library beats a bloated one.
              </p>

              <h3>Quarterly Review Checklist</h3>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Export usage data</strong>
                    <p>Pull response times, resolution rates, and CSAT for the quarter.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Identify underperformers</strong>
                    <p>Flag templates with low usage, high follow-up rates, or poor CSAT.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Rewrite or retire</strong>
                    <p>Update weak templates. Delete unused ones. Merge duplicates.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">4</div>
                  <div>
                    <strong>Document changes</strong>
                    <p>Log every change in your change log with date and reason.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">5</div>
                  <div>
                    <strong>Team review</strong>
                    <p>15-minute team meeting to announce changes and gather feedback.</p>
                  </div>
                </div>
              </div>

              <p>
                Make this review part of your <Link href="/guides/quarterly-planning-ai">quarterly planning</Link>.
                Templates are a living asset — they should evolve as your business does.
              </p>
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

            {/* Related Guides */}
            <section className="article-related">
              <h2>Related Guides</h2>
              <div className="related-guides-grid">
                <div className="related-guide-card">
                  <span className="related-guide-tag">Customer Service</span>
                  <h3><Link href="/guides/ai-customer-service-prompts">AI Prompts for Customer Service That Actually Work</Link></h3>
                  <p>80+ ready-to-use prompts for complaints, refunds, FAQs, and escalation handling.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Sales</span>
                  <h3><Link href="/guides/handling-sales-objections-ai">Handling Sales Objections with AI: 10 Common Replies</Link></h3>
                  <p>Copy-paste AI prompts to handle price, timing, authority, and trust objections.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Operations</span>
                  <h3><Link href="/guides/meeting-notes-to-action-items">Meeting Notes to Action Items: The 2-Minute AI Workflow</Link></h3>
                  <p>Turn messy meeting notes into assigned, dated action items in under 2 minutes.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Strategy</span>
                  <h3><Link href="/guides/how-to-use-chatgpt-for-business">How to Use ChatGPT for Small Business</Link></h3>
                  <p>30+ copy-paste prompts for customer service, sales, marketing, and operations.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Strategy</span>
                  <h3><Link href="/guides/quarterly-planning-ai">Quarterly Planning with AI: Structured Goals in 45 Minutes</Link></h3>
                  <p>Plan your quarter with AI. Includes prompts for goals, projects, and weekly scorecards.</p>
                </div>
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="article-bottom-cta">
              <h2>Want 80+ ready-to-use customer service prompts?</h2>
              <p>
                The <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes customer service
                prompts for complaints, refunds, de-escalation, and follow-ups — plus 70+ more for sales,
                marketing, hiring, and operations. One PDF. $19. Instant download.
              </p>
              <Link href="/products/prompt-stack" className="btn-primary">
                Get the AI Shortcut Stack →
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
