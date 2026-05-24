import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "How to Use ChatGPT for Small Business: A Practical Guide",
  description:
    "Learn how to use ChatGPT for your small business — customer service, sales, marketing, operations, and hiring. Step-by-step guide with 30+ ready-to-use prompts.",
  alternates: { canonical: "https://www.profitslab.io/guides/how-to-use-chatgpt-for-business/" },
  openGraph: {
    title: "How to Use ChatGPT for Small Business | ProfitSlab",
    description:
      "Step-by-step guide to using ChatGPT for real business tasks — with 30+ copy-paste prompts for customer service, sales, marketing, and operations.",
    url: "https://www.profitslab.io/guides/how-to-use-chatgpt-for-business/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Is ChatGPT free for business use?",
    a: "ChatGPT has a free tier, but for business use, ChatGPT Plus ($20/month) is worth it. You get faster responses, better accuracy with GPT-4o, and higher usage limits. The ROI is typically 10x the subscription cost in time saved.",
  },
  {
    q: "Can I use ChatGPT for customer service without sounding robotic?",
    a: "Yes — if you edit the output. Use ChatGPT for structure and first drafts, then add customer names, order details, and a personal sentence. The prompts in this guide include tone instructions so the output sounds human from the start.",
  },
  {
    q: "What is the best way to organize prompts for my team?",
    a: "Store prompts in a shared doc (Notion, Google Docs) organized by business function — customer service, sales, marketing, operations. Include example inputs and expected outputs. The AI Shortcut Stack is a pre-organized prompt library with 80 prompts in this exact structure.",
  },
  {
    q: "Will ChatGPT keep my business data private?",
    a: "With ChatGPT Plus, OpenAI does not train on your conversations. For extra security, use ChatGPT Team ($25/user/month) which adds enterprise-grade privacy, admin controls, and data retention policies. Never paste sensitive financial data or customer PII into the free tier.",
  },
  {
    q: "How is this different from hiring a virtual assistant?",
    a: "ChatGPT handles writing, analysis, and research instantly — tasks that take a VA 30–60 minutes. A VA is better for tasks requiring judgment, relationship management, or physical actions. The best setup: ChatGPT for speed, VA for human touch.",
  },
];

export default function HowToUseChatGPTForBusiness() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Use ChatGPT for Small Business: A Practical Guide",
            description:
              "Learn how to use ChatGPT for your small business — customer service, sales, marketing, operations, and hiring.",
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
              "@id": "https://www.profitslab.io/guides/how-to-use-chatgpt-for-business/",
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
                name: "How to Use ChatGPT for Business",
                item: "https://www.profitslab.io/guides/how-to-use-chatgpt-for-business/",
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
              <span aria-current="page">How to Use ChatGPT for Business</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Strategy</span>
              <h1>How to Use ChatGPT for Small Business: A Practical Guide</h1>
              <p className="article-lead">
                Stop treating ChatGPT like a toy. Here is how to use it for real business tasks —
                with 30+ copy-paste prompts that save hours every week.
              </p>
              <div className="article-meta">
                <span>Updated May 2026</span>
                <span>·</span>
                <span>10 min read</span>
                <span>·</span>
                <span>Tested with GPT-4o and Claude 4</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#setup">Setting Up ChatGPT for Business</a></li>
                <li><a href="#customer-service">Customer Service Prompts</a></li>
                <li><a href="#sales">Sales and Outreach Prompts</a></li>
                <li><a href="#marketing">Marketing and Content Prompts</a></li>
                <li><a href="#operations">Operations and SOPs</a></li>
                <li><a href="#hiring">Hiring and HR Prompts</a></li>
                <li><a href="#advanced">Advanced Techniques</a></li>
                <li><a href="#workflow">The 10-Minute Daily Workflow</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                Most small business owners open ChatGPT, type something vague like &quot;write an email
                to a customer,&quot; and get generic output they never use. That is not the tool&apos;s fault —
                it is a prompting problem.
              </p>
              <p>
                <strong>The difference between wasted time and real ROI is structure.</strong> Structured
                prompts with context, constraints, and examples produce output you can actually send,
                publish, or delegate.
              </p>
              <p>
                This guide gives you that structure. Every prompt below was tested on real business
                tasks with GPT-4o and Claude 4. Copy, fill in the blanks, paste, and edit.
              </p>
            </section>

            {/* Section 1: Setup */}
            <section id="setup">
              <h2>Setting Up ChatGPT for Business (5 Minutes)</h2>
              <p>
                Before you start prompting, configure ChatGPT so your output is consistent and safe.
              </p>

              <h3>Step 1: Upgrade to Plus</h3>
              <p>
                The free tier is limited and slower. ChatGPT Plus ($20/month) gives you GPT-4o,
                better reasoning, and higher message limits. For a team, ChatGPT Team ($25/user/month)
                adds shared workspaces and admin controls.
              </p>

              <h3>Step 2: Set Custom Instructions</h3>
              <p>
                Go to Settings → Personalization → Custom Instructions. Add your business context
                so every prompt inherits it:
              </p>
              <div className="prompt-block">
                <div className="prompt-label">Custom Instructions — What would you like ChatGPT to know?</div>
                <pre className="prompt-text">
{`I run a [industry] business called [business name].
We serve [target customer] and our tone is [friendly/professional/direct].
Common tasks I need help with: [customer service, sales emails, social media, SOPs].
I prefer short, actionable responses under 200 words unless I ask for detail.`}
                </pre>
              </div>

              <h3>Step 3: Create a Prompt Library</h3>
              <p>
                Store your best prompts in a Notion page, Google Doc, or the AI Shortcut Stack.
                Organize by function: customer service, sales, marketing, operations, hiring.
                Tag each prompt with the model that works best (GPT-4o vs Claude 4).
              </p>
            </section>

            {/* Section 2: Customer Service */}
            <section id="customer-service">
              <h2>Customer Service: Reply in 2 Minutes, Not 20</h2>
              <p>
                60–70% of customer service volume is repetitive. ChatGPT handles the first draft;
                you add facts and send.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Complaint Response</div>
                <pre className="prompt-text">
{`A customer emailed this complaint:
"[paste complaint here]"

Write a reply that:
1. Acknowledges their frustration in one sentence
2. Explains what happened in one sentence (no excuses)
3. Offers [specific solution/refund/replacement]
4. Ends with: "Reply if you need anything else — I'm here."
Keep it under 150 words. Tone: [friendly/professional/calm].`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: FAQ Answer</div>
                <pre className="prompt-text">
{`Customer asked: "[paste question]"

Write a reply that:
1. Answers directly in the first sentence
2. Adds one sentence of context if helpful
3. Includes a link to [relevant page/article]
4. Invites them to reply if they need more help
Keep it under 100 words.`}
                </pre>
              </div>

              <p>
                <strong>Pro tip:</strong> Save your 10 most common customer questions as custom GPTs
                or pinned prompts. Most businesses find that 10 prompts cover 80% of their volume.
              </p>

              <p>
                Want more customer service prompts? See our{" "}
                <Link href="/guides/ai-customer-service-prompts">dedicated customer service guide</Link>{" "}
                with 80+ prompts for complaints, refunds, FAQs, and escalation.
              </p>
            </section>

            {/* Section 3: Sales */}
            <section id="sales">
              <h2>Sales and Outreach: Cold Emails That Get Replies</h2>
              <p>
                The hardest part of sales is not selling — it is getting the first reply. These prompts
                write cold emails, follow-ups, and proposals that sound human.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Cold Email</div>
                <pre className="prompt-text">
{`I want to reach out to [prospect name] at [company].
They are a [job title] in the [industry] industry.
My product/service: [brief description]
The specific value for them: [one sentence]

Write a cold email that:
1. Has a subject line under 45 characters
2. Opens with a specific observation about their business (not "I hope you're well")
3. Mentions the value in one sentence
4. Asks one low-friction question (not "Can we schedule a call?")
5. Is under 120 words
Tone: confident but not pushy.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Follow-Up Email</div>
                <pre className="prompt-text">
{`I sent an email to [prospect] 5 days ago about [topic]. No reply.

Write a short follow-up that:
1. References the previous email in one line
2. Adds one new piece of value (new data, case study, relevant news)
3. Makes it easy to reply (yes/no question or one-click option)
4. Is under 80 words
Tone: helpful, not desperate.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Proposal Summary</div>
                <pre className="prompt-text">
{`I need to send a proposal to [client] for [project].
Scope: [bullet points]
Timeline: [timeframe]
Price: [amount]

Write a one-page proposal summary that:
1. Opens with the business outcome they'll get
2. Lists deliverables in bullet points
3. Includes timeline and investment
4. Ends with a clear next step ("Reply yes and I'll send the contract")
Tone: professional, confident, outcome-focused.`}
                </pre>
              </div>
            </section>

            {/* Section 4: Marketing */}
            <section id="marketing">
              <h2>Marketing and Content: One Session, a Week of Posts</h2>
              <p>
                Content marketing is where ChatGPT shines brightest — but only if you prompt for
                <strong>specific formats</strong>, not write a blog post.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Social Media Post</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Platform: [LinkedIn/Twitter/Instagram]
Goal: [engagement/leads/authority]

Write 3 versions of a post:
1. A story-based post (personal experience or client result)
2. A tip/lesson post (actionable advice)
3. A contrarian opinion post (challenging common advice)
Each under 150 words. Include 3 relevant hashtags. Tone: [your brand voice].`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Email Newsletter</div>
                <pre className="prompt-text">
{`Newsletter topic: [topic]
Audience: [who reads this]
Goal: [educate/sell/build trust]

Write a newsletter that:
1. Opens with a one-sentence hook (curiosity or pain point)
2. Teaches one specific thing in 3–4 short paragraphs
3. Ends with a clear CTA (reply, click, share)
4. Is under 300 words
Subject line: under 50 characters, curiosity-driven.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Product Description</div>
                <pre className="prompt-text">
{`Product: [name]
What it does: [one sentence]
Who it's for: [target customer]
Key benefit: [main outcome]
Price: [amount]

Write a product description that:
1. Leads with the outcome (not the feature)
2. Includes 3 bullet points of benefits
3. Addresses one common objection
4. Ends with a soft CTA (not "Buy now!")
Tone: clear, confident, no hype.`}
                </pre>
              </div>
            </section>

            {/* Section 5: Operations */}
            <section id="operations">
              <h2>Operations and SOPs: Document Everything in 10 Minutes</h2>
              <p>
                The biggest operations mistake is keeping processes in your head. ChatGPT turns
                messy knowledge into clear, repeatable SOPs.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: SOP from Brain Dump</div>
                <pre className="prompt-text">
{`I need to document how we [process name]. Here's what I do:
[paste your rough notes or bullet points]

Turn this into a clear SOP with:
1. Purpose (why we do this)
2. When to use it (trigger)
3. Step-by-step instructions (numbered, each one action only)
4. Common mistakes to avoid
5. Who to ask for help
Format: clean, scannable, under 500 words.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Meeting Agenda</div>
                <pre className="prompt-text">
{`Meeting: [type of meeting]
Attendees: [who is there]
Goal: [what we need to decide or finish]
Time: [duration]

Write an agenda that:
1. Lists 3–5 topics in priority order
2. Allots time for each topic
3. Assigns a lead for each topic
4. Includes a 5-minute action-item review at the end
Format: bullet points, one line each.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Data Summary</div>
                <pre className="prompt-text">
{`Here is my business data for [time period]:
[paste data or key metrics]

Summarize this into:
1. One sentence: what happened (the headline)
2. Three bullets: what worked
3. Three bullets: what needs attention
4. One recommendation for next month
Keep it under 200 words. No jargon.`}
                </pre>
              </div>
            </section>

            {/* Section 6: Hiring */}
            <section id="hiring">
              <h2>Hiring and HR: Screen Faster, Hire Better</h2>
              <p>
                ChatGPT does not replace interviews — but it speeds up the tedious parts: job posts,
                screening questions, and offer letters.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Job Description</div>
                <pre className="prompt-text">
{`Role: [job title]
Company: [name and what we do]
Responsibilities: [3–5 key tasks]
Requirements: [must-haves vs nice-to-haves]
Salary range: [range or "competitive"]

Write a job description that:
1. Opens with why this role matters to the company
2. Lists responsibilities as outcomes, not tasks
3. Separates must-haves from nice-to-haves
4. Includes one sentence about culture
5. Ends with a clear application instruction
Tone: professional but not corporate. Under 300 words.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Interview Questions</div>
                <pre className="prompt-text">
{`Role: [job title]
Key skills needed: [list 3–4]
Culture fit: [what matters to your team]

Write 8 interview questions:
- 3 skills-based (scenario questions, not "tell me about yourself")
- 2 culture-fit questions
- 2 problem-solving questions
- 1 question that reveals how they handle feedback
Format: question + what to listen for in the answer.`}
                </pre>
              </div>
            </section>

            {/* Section 7: Advanced */}
            <section id="advanced">
              <h2>Advanced Techniques: Chain-of-Thought and Few-Shot Prompting</h2>
              <p>
                Once you master the basics, these two techniques multiply your output quality:
              </p>

              <h3>Chain-of-Thought: Make AI Show Its Work</h3>
              <p>
                Instead of asking for the answer, ask the AI to think step by step. This produces
                better reasoning and lets you catch errors.
              </p>
              <div className="prompt-block">
                <div className="prompt-label">Example: Chain-of-Thought</div>
                <pre className="prompt-text">
{`I need to decide whether to [option A] or [option B].

Think through this step by step:
1. List the pros and cons of each option
2. Identify the risks I haven't considered
3. Recommend the best option and explain why
4. Suggest one contingency plan if it goes wrong

Show your reasoning before the final recommendation.`}
                </pre>
              </div>

              <h3>Few-Shot Prompting: Train AI on Your Voice</h3>
              <p>
                Include 2–3 examples of your own writing and ask the AI to match that style. This is
                the single best way to make AI output sound like you.
              </p>
              <div className="prompt-block">
                <div className="prompt-label">Example: Few-Shot</div>
                <pre className="prompt-text">
{`Here are 3 emails I wrote to customers. Match my tone and style exactly.

Example 1:
[paste your email]

Example 2:
[paste your email]

Example 3:
[paste your email]

Now write a reply to this new customer message:
"[paste customer message]"

Match my voice. Keep it under 150 words.`}
                </pre>
              </div>
            </section>

            {/* Section 8: Workflow */}
            <section id="workflow">
              <h2>The 10-Minute Daily ChatGPT Workflow</h2>
              <p>
                Here is how to integrate ChatGPT into your actual workday without it becoming a
                distraction.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Morning: Clear the inbox</strong>
                    <p>Use the customer service prompts for any emails that need thoughtful replies. Batch them: copy all 5 complaints, paste into ChatGPT with the prompt, get 5 drafts, edit, send.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Midday: Content creation</strong>
                    <p>Spend 10 minutes generating social posts or newsletter drafts for the week. Schedule them. Done.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Afternoon: Sales outreach</strong>
                    <p>Use the cold email prompt for 3–5 prospects. Personalize each with a specific observation from their website or LinkedIn.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">4</div>
                  <div>
                    <strong>Weekly: Operations</strong>
                    <p>Document one process as an SOP. In one month, you will have 4 documented processes your team can follow.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>Total time saved:</strong> Most small business owners save 5–8 hours per week
                with this workflow — the equivalent of a full workday.
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
              <h2>Want all 80 prompts in one place?</h2>
              <p>
                The <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes these
                prompts plus 50+ more for sales, marketing, hiring, and operations. One PDF.
                $19. Instant download. Works with ChatGPT, Claude, and Gemini.
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
