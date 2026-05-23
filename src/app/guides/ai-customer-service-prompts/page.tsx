import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "AI Prompts for Customer Service That Actually Work",
  description:
    "80+ ready-to-use AI prompts for customer service: complaint responses, refunds, FAQs, and escalation handling. Copy, paste, and de-escalate in minutes.",
  alternates: { canonical: "https://www.profitslab.io/guides/ai-customer-service-prompts/" },
  openGraph: {
    title: "AI Prompts for Customer Service That Actually Work | ProfitSlab",
    description:
      "80+ ready-to-use AI prompts for customer service: complaint responses, refunds, FAQs, and escalation handling. Copy, paste, and de-escalate in minutes.",
    url: "https://www.profitslab.io/guides/ai-customer-service-prompts/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can I use these prompts with free ChatGPT?",
    a: "Yes. Every prompt works with ChatGPT (free and Plus), Claude (free and Pro), Google Gemini, and any AI that accepts text. No API keys or setup required.",
  },
  {
    q: "How do I make AI responses sound like my brand?",
    a: "Add a one-line style instruction at the start of the prompt: e.g., 'Tone: friendly but professional. We never blame the customer.' Include 2–3 example replies you've written before and ask the AI to match that voice.",
  },
  {
    q: "Will customers know I used AI?",
    a: "Not if you edit the output. Use AI for the first draft, then add personal details (order numbers, names, specific context) before sending. The prompts are designed to sound human — but a 30-second review makes them indistinguishable.",
  },
  {
    q: "What if the AI gets the facts wrong?",
    a: "Never send AI output unedited for factual claims. Use prompts for structure and tone, then fill in the correct details yourself. The prompts include placeholders like [order number] and [specific issue] to remind you to add real data.",
  },
  {
    q: "How is this different from the AI Shortcut Stack?",
    a: "This guide covers customer service prompts in depth — with examples, best practices, and implementation tips. The Shortcut Stack includes these prompts plus 70+ more for sales, marketing, hiring, and operations. Start here for free; upgrade when you want the full library.",
  },
];

export default function AICustomerServicePrompts() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Prompts for Customer Service That Actually Work",
            description:
              "80+ ready-to-use AI prompts for customer service: complaint responses, refunds, FAQs, and escalation handling.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-05-23",
            dateModified: "2026-05-23",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/ai-customer-service-prompts/",
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
                name: "AI Customer Service Prompts",
                item: "https://www.profitslab.io/guides/ai-customer-service-prompts/",
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
              <span aria-current="page">AI Customer Service Prompts</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Customer Service</span>
              <h1>AI Prompts for Customer Service That Actually Work</h1>
              <p className="article-lead">
                Stop staring at angry emails. These 80+ copy-paste prompts handle complaints, refunds,
                FAQs, and escalation — so you reply in minutes, not hours.
              </p>
              <div className="article-meta">
                <span>Updated May 2026</span>
                <span>·</span>
                <span>15 min read</span>
                <span>·</span>
                <span>Tested with GPT-4o, Claude 4, Gemini 2.5</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#why-ai">Why AI Works for Customer Service</a></li>
                <li><a href="#complaints">How to Handle Complaints with AI</a></li>
                <li><a href="#refunds">Refund and Return Requests</a></li>
                <li><a href="#faq">FAQ and How-To Replies</a></li>
                <li><a href="#escalation">Escalation and De-escalation</a></li>
                <li><a href="#tone">Making AI Sound Like Your Brand</a></li>
                <li><a href="#prompts">80+ Ready-to-Use Prompts</a></li>
                <li><a href="#workflow">The 5-Minute Customer Service Workflow</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Section 1 */}
            <section id="why-ai">
              <h2>Why AI Works for Customer Service (When Most People Get It Wrong)</h2>
              <p>
                Most business owners treat AI like a replacement for their team. It isn&apos;t. AI is a
                <strong>first-draft machine</strong> — it gives you structure, tone, and speed. You add the
                facts and the human touch.
              </p>
              <p>
                The mistake? Asking AI to &quot;write a customer service reply.&quot; That&apos;s vague. You get
                generic output. The fix: <strong>structured prompts with context, constraints, and examples.</strong>
              </p>
              <p>Here is what structured prompts do for you:</p>
              <ul>
                <li><strong>Speed:</strong> Cut reply time from 20 minutes to 2 minutes</li>
                <li><strong>Consistency:</strong> Every reply sounds like your brand</li>
                <li><strong>De-escalation:</strong> AI never gets defensive — it acknowledges first, every time</li>
                <li><strong>Scale:</strong> Handle volume spikes without hiring</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="complaints">
              <h2>How to Handle Complaints with AI (Without Sounding Robotic)</h2>
              <p>
                The golden rule of complaint responses: <strong>acknowledge before you explain.</strong> Most
                people jump to defending their company. Customers want to feel heard first.
              </p>

              <h3>The ACK-Explain-Solve Structure</h3>
              <p>Every complaint prompt in this guide follows this structure:</p>
              <ol>
                <li><strong>Acknowledge:</strong> &quot;I understand how frustrating this is...&quot;</li>
                <li><strong>Explain:</strong> Brief, factual, no excuses</li>
                <li><strong>Solve:</strong> Clear next step or compensation</li>
                <li><strong>Invite:</strong> Open door for follow-up</li>
              </ol>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Complaint Response</div>
                <pre className="prompt-text">
{`A customer emailed this complaint:
&quot;[paste complaint here]&quot;

Write a reply that:
1. Acknowledges their frustration in one sentence
2. Explains what happened in one sentence (no excuses)
3. Offers [specific solution/refund/replacement]
4. Ends with: &quot;Reply to this email if you need anything else — I&apos;m here.&quot;
Keep it under 150 words. Tone: [friendly/professional/calm].`}
                </pre>
              </div>

              <p>
                <strong>Pro tip:</strong> After the AI writes the draft, add the customer&apos;s name and a
                specific detail from their complaint. That 10-second edit makes it indistinguishable from a
                fully human reply.
              </p>
            </section>

            {/* Section 3 */}
            <section id="refunds">
              <h2>Refund and Return Request Prompts</h2>
              <p>
                Refunds are emotional for customers. They feel like they lost money and time. Your reply
                needs to move fast and feel generous — even if the refund is standard policy.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Refund Approval</div>
                <pre className="prompt-text">
{`Customer wants a refund for [product/service] purchased on [date].
Policy: [full refund within X days / partial refund / store credit].

Write a reply that:
1. Apologizes for the experience (not the product — the experience)
2. Confirms the refund is approved
3. States exactly when they&apos;ll see the money (e.g., &quot;3–5 business days&quot;)
4. Asks if they&apos;d like a brief call to understand what went wrong
Keep it under 120 words. Tone: generous, not defensive.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Partial Refund or Store Credit</div>
                <pre className="prompt-text">
{`Customer wants a full refund. Our policy offers [partial refund/store credit] because [reason].

Write a reply that:
1. Validates their frustration
2. Explains the policy transparently
3. Offers the partial refund/credit PLUS a small bonus ([discount code/free month/etc.])
4. Gives them an easy way to escalate if they&apos;re not satisfied
Keep it under 140 words. No corporate language.`}
                </pre>
              </div>
            </section>

            {/* Section 4 */}
            <section id="faq">
              <h2>FAQ and How-To Replies</h2>
              <p>
                60–70% of customer service volume is repetitive questions. AI shines here because the answers
                are factual and consistent.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: FAQ Answer Generator</div>
                <pre className="prompt-text">
{`Question: &quot;[paste customer question]&quot;

Our answer should include:
- Direct answer in the first sentence
- One sentence of context if needed
- Link to [relevant help article / video / page]
- Invite to reply if they need more help

Keep it under 100 words. Tone: [friendly/professional].`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: &quot;How Do I...&quot; Step-by-Step</div>
                <pre className="prompt-text">
{`Customer asked: &quot;How do I [task]?&quot;

Write a numbered list of steps (3–5 max). Each step must be:
- One action only
- Specific enough to follow without guessing
- In plain language, no jargon

After the steps, add: &quot;If you get stuck on any step, reply here and I&apos;ll walk you through it.&quot;`}
                </pre>
              </div>
            </section>

            {/* Section 5 */}
            <section id="escalation">
              <h2>Escalation and De-escalation Prompts</h2>
              <p>
                Some customers escalate fast. Others are calm but need a manager. The prompt changes
                depending on the situation.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: De-escalating an Angry Customer</div>
                <pre className="prompt-text">
{`Customer is angry about [issue]. They used strong language.

Write a reply that:
1. Acknowledges their anger directly: &quot;I can see this has been frustrating...&quot;
2. Takes ownership: &quot;This shouldn&apos;t have happened, and I&apos;m fixing it now.&quot;
3. Gives an immediate, specific next step
4. Offers a personal follow-up (call / direct email / manager intro)
Keep it under 130 words. Tone: calm, confident, human.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Passing to a Manager (Without Looking Useless)</div>
                <pre className="prompt-text">
{`This issue needs manager approval: [reason].

Write a reply that:
1. Thanks them for their patience
2. Explains why you&apos;re involving [manager name/role] — not because you can&apos;t help, but because they have the authority to [specific action]
3. States exactly when they&apos;ll hear back (e.g., &quot;within 4 hours&quot;)
4. Gives your direct contact in case it&apos;s urgent
Keep it under 120 words.`}
                </pre>
              </div>
            </section>

            {/* Section 6 */}
            <section id="tone">
              <h2>Making AI Sound Like Your Brand (Not Generic)</h2>
              <p>
                The same prompt produces different output depending on the tone instructions. Here is how to
                brand your AI replies.
              </p>

              <h3>Tone Modifiers to Add to Any Prompt</h3>
              <table className="article-table">
                <thead>
                  <tr>
                    <th>Brand Voice</th>
                    <th>Add This Line to Your Prompt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Friendly / casual</td>
                    <td>&quot;Tone: warm and conversational, like texting a helpful friend.&quot;</td>
                  </tr>
                  <tr>
                    <td>Professional / formal</td>
                    <td>&quot;Tone: respectful and clear. No slang, no exclamation points.&quot;</td>
                  </tr>
                  <tr>
                    <td>Witty / bold</td>
                    <td>&quot;Tone: confident with a dry sense of humor. Not corny.&quot;</td>
                  </tr>
                  <tr>
                    <td>Empathetic / caring</td>
                    <td>&quot;Tone: gentle and patient. Validate feelings before giving solutions.&quot;</td>
                  </tr>
                </tbody>
              </table>

              <p>
                <strong>Advanced trick:</strong> Include 2–3 real replies you&apos;ve written before and tell
                the AI: &quot;Match the tone and style of these examples.&quot; This is called few-shot prompting
                — and it works better than any description.
              </p>
            </section>

            {/* Section 7 */}
            <section id="prompts">
              <h2>80+ Ready-to-Use Customer Service Prompts</h2>
              <p>
                Below are the most-used prompts from the <Link href="/products/prompt-stack">AI Shortcut Stack</Link>,
                organized by situation. Each is copy-paste ready.
              </p>

              <h3>Complaint Responses</h3>
              <ul className="prompt-list">
                <li>General complaint acknowledgment</li>
                <li>Product defect complaint</li>
                <li>Shipping delay complaint</li>
                <li>Wrong item received</li>
                <li>Service didn&apos;t meet expectations</li>
                <li>Billing issue complaint</li>
                <li>Repeat complaint (same customer, new issue)</li>
                <li>Social media complaint (public reply)</li>
              </ul>

              <h3>Refund & Return Requests</h3>
              <ul className="prompt-list">
                <li>Full refund approval</li>
                <li>Partial refund offer</li>
                <li>Store credit alternative</li>
                <li>Return instructions</li>
                <li>Refund status update</li>
                <li>Refund denied (diplomatic)</li>
                <li>Refund processed confirmation</li>
              </ul>

              <h3>FAQ & How-To</h3>
              <ul className="prompt-list">
                <li>Account setup help</li>
                <li>Password reset guidance</li>
                <li>Feature explanation</li>
                <li>Pricing question</li>
                <li>Integration help</li>
                <li>How to cancel/downgrade</li>
                <li>How to upgrade/change plan</li>
              </ul>

              <h3>De-escalation & Difficult Conversations</h3>
              <ul className="prompt-list">
                <li>Angry customer cooldown</li>
                <li>Threatening to leave/chargeback</li>
                <li>Legal threat response</li>
                <li>Negative review reply</li>
                <li>Refund demand after policy period</li>
                <li>Customer wants to speak to founder/CEO</li>
                <li>Multiple issues at once (overwhelmed customer)</li>
              </ul>

              <h3>Follow-Up & Relationship</h3>
              <ul className="prompt-list">
                <li>Post-resolution check-in</li>
                <li>Asking for feedback after fix</li>
                <li>Win-back email (churned customer)</li>
                <li>Thank-you for patience during delay</li>
                <li>Proactive update (issue resolution)</li>
                <li>Onboarding welcome message</li>
                <li>Renewal/reminder nudge</li>
              </ul>

              <div className="article-cta-box">
                <h3>Want all 80+ prompts in one file?</h3>
                <p>
                  The <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes these
                  customer service prompts plus 70+ more for sales, marketing, hiring, and operations.
                  One PDF. $19. Instant download.
                </p>
                <Link href="/products/prompt-stack" className="btn-primary">
                  Get the AI Shortcut Stack →
                </Link>
              </div>
            </section>

            {/* Section 8 */}
            <section id="workflow">
              <h2>The 5-Minute Customer Service Workflow</h2>
              <p>
                Here is how to use these prompts in your actual workday — without slowing down.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Copy the prompt</strong>
                    <p>Find the situation in the list above. Copy the matching prompt.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Fill in the blanks</strong>
                    <p>Replace [placeholders] with the customer&apos;s actual details.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Paste into ChatGPT / Claude</strong>
                    <p>Get your first draft in 10 seconds.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">4</div>
                  <div>
                    <strong>Edit for facts and tone</strong>
                    <p>Add names, order numbers, and a personal sentence. Delete anything that sounds off-brand.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">5</div>
                  <div>
                    <strong>Send</strong>
                    <p>Track the time: most replies take 2–3 minutes from start to finish.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>Time saved:</strong> If you handle 20 customer emails a day, this workflow saves
                you <strong>3–4 hours per week</strong> — the equivalent of half a workday.
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

            {/* Bottom CTA */}
            <div className="article-bottom-cta">
              <h2>Not sure where to start with AI?</h2>
              <p>
                Take the free <Link href="/audit">AI Audit</Link> — 20 questions that show exactly where
                AI can save you the most time in your business.
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
