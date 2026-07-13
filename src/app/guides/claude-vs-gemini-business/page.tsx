import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Claude vs Gemini for Small Business: Which AI Wins?",
  description:
    "Compare Claude and Gemini for small business tasks. Side-by-side on writing, data analysis, Google Workspace, and pricing. Includes copy-paste prompts.",
  alternates: { canonical: "https://www.profitslab.io/guides/claude-vs-gemini-business/" },
  openGraph: {
    title: "Claude vs Gemini for Small Business | ProfitSlab",
    description:
      "Side-by-side comparison for writing, data analysis, Google Workspace, and pricing. Honest verdict. No fluff.",
    url: "https://www.profitslab.io/guides/claude-vs-gemini-business/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Which is cheaper for small business: Claude or Gemini?",
    a: "Both cost the same at the individual level: $20 per month for Claude Pro and $20 per month for Gemini Advanced (bundled with Google One AI Premium). For teams, Claude for Work starts at $20 per user per month, while Gemini for Workspace is bundled into Google Workspace Business plans at $12-24 per user per month. If you already pay for Google Workspace, Gemini is effectively cheaper because it is included. If you do not use Google Workspace, the cost is identical.",
  },
  {
    q: "Can I use Claude and Gemini together?",
    a: "Yes, and many small business owners do exactly that. Use Claude for writing, long-form analysis, and sensitive customer communications where tone and nuance matter. Use Gemini for research, Google Workspace tasks, and anything that requires real-time data or image analysis. Both offer $20 per month plans, so using both costs $40 per month total. For businesses already in the Google ecosystem, Gemini is the natural default, and Claude becomes the specialist tool for high-quality writing.",
  },
  {
    q: "Which AI is better for writing marketing copy?",
    a: "Claude is better for marketing copy. It writes with a more natural, human voice and maintains consistency across long documents better than Gemini. Claude also handles nuanced tone adjustments more reliably. Gemini is capable for short-form content and social posts, especially when integrated with Google Docs for collaborative editing, but Claude produces higher-quality first drafts. For the best results: draft with Claude, edit and publish through Google Workspace with Gemini.",
  },
  {
    q: "Is Claude or Gemini better for analyzing business data?",
    a: "Gemini is better for data analysis if your data lives in Google Sheets, BigQuery, or Gmail. Gemini can read, analyze, and visualize data directly from Google Workspace without file uploads. Claude requires you to paste data as text or use the API. However, Claude provides more thorough written analysis and explanations of what the data means. If you need charts and dashboards, Gemini wins. If you need strategic interpretation, Claude wins. Many teams use Gemini to extract data and Claude to write the insights.",
  },
  {
    q: "Which AI keeps my business data more private?",
    a: "Both Claude Pro and Gemini Advanced do not use your conversations for training. Claude for Work and Gemini for Workspace add enterprise controls, SSO, and audit logs. Anthropic has a stronger public commitment to AI safety and has never trained on Pro-tier data. Google trains on free-tier Gemini conversations but not on paid Workspace data. For maximum privacy, avoid pasting sensitive customer data into either tool, anonymize before sharing, and use team or enterprise tiers for any confidential work.",
  },
];

export default function ClaudeVsGemini() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Claude vs Gemini for Small Business: Which AI Wins in 2026?",
            description:
              "Compare Claude and Gemini for small business tasks. Side-by-side on writing, data analysis, Google Workspace, and pricing.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-07-13",
            dateModified: "2026-07-13",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/claude-vs-gemini-business/",
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
                name: "Claude vs Gemini",
                item: "https://www.profitslab.io/guides/claude-vs-gemini-business/",
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
              <span aria-current="page">Claude vs Gemini</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Comparison</span>
              <h1>Claude vs Gemini for Small Business: Which AI Wins in 2026?</h1>
              <p className="article-lead">
                Two AI assistants from two different philosophies. We tested Claude and Gemini
                on real small business tasks — sales emails, customer replies, data analysis,
                Google Workspace workflows — and compared the results side by side. Here is
                what actually matters when you are choosing between them.
              </p>
              <div className="article-meta">
                <span>Updated July 2026</span>
                <span>·</span>
                <span>9 min read</span>
                <span>·</span>
                <span>Tested with Claude Opus 4.8 and Gemini 3.1 Pro</span>
              </div>
            </header>

            {/* Quick Verdict */}
            <section className="article-cta-box" style={{ background: "#1a1a2e", border: "1px solid #2a2a4e" }}>
              <h3 style={{ color: "#fff", marginTop: 0 }}>⚡ Quick Verdict</h3>
              <p style={{ color: "#c7c7d1" }}>
                <strong style={{ color: "#fff" }}>Choose Claude if:</strong> You write long-form
                content, need nuanced analysis, handle sensitive customer communications, or do
                coding work. Better for depth, reasoning, and human-like tone.
              </p>
              <p style={{ color: "#c7c7d1" }}>
                <strong style={{ color: "#fff" }}>Choose Gemini if:</strong> You live in Google
                Workspace, need real-time web search, work with images and video, or want AI
                integrated into Gmail, Docs, and Sheets. Better for breadth, speed, and
                ecosystem.
              </p>
              <p style={{ color: "#c7c7d1", marginBottom: 0 }}>
                <strong style={{ color: "#fff" }}>Best setup:</strong> Use Gemini as your daily
                driver for research and Workspace tasks. Use Claude as your specialist for
                writing, strategy, and analysis. Total cost: $40/month.
              </p>
            </section>

            {/* Comparison Table */}
            <section>
              <h2>Side-by-Side Comparison</h2>
              <p>
                How Claude and Gemini stack up on the tasks that matter for small businesses.
                Winner marked per category.
              </p>

              <div className="article-table-wrapper">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Claude Opus 4.8</th>
                      <th>Gemini 3.1 Pro</th>
                      <th>Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Writing quality</strong></td>
                      <td>Excellent, natural voice</td>
                      <td>Good, slightly generic</td>
                      <td>Claude 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Long documents</strong></td>
                      <td>200K tokens (1M on Max)</td>
                      <td>1M tokens standard</td>
                      <td>Gemini 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Data analysis</strong></td>
                      <td>Paste-only, no native charts</td>
                      <td>Google Sheets, BigQuery, native charts</td>
                      <td>Gemini 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Web search / real-time data</strong></td>
                      <td>Available on Pro, not native</td>
                      <td>Google Search integration, best real-time results</td>
                      <td>Gemini 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Image generation</strong></td>
                      <td>No image generation</td>
                      <td>Imagen 4 built-in</td>
                      <td>Gemini 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Code &amp; technical</strong></td>
                      <td>Claude Code — best coding agent available</td>
                      <td>Good, GitHub integration via Jules</td>
                      <td>Claude 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Google Workspace</strong></td>
                      <td>No native integration</td>
                      <td>Native in Gmail, Docs, Sheets, Drive</td>
                      <td>Gemini 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Customer service tone</strong></td>
                      <td>Warm, empathetic, human</td>
                      <td>Professional, occasionally stiff</td>
                      <td>Claude 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Sales copy</strong></td>
                      <td>Persuasive, nuanced</td>
                      <td>Fast, formulaic</td>
                      <td>Claude 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Multimodal (video, audio)</strong></td>
                      <td>Text and vision analysis only</td>
                      <td>Video, audio, images, text — all native</td>
                      <td>Gemini 🏆</td>
                    </tr>
                    <tr>
                      <td><strong>Privacy</strong></td>
                      <td>No training on Pro data by default</td>
                      <td>No training on Workspace data</td>
                      <td>Tie 🤝</td>
                    </tr>
                    <tr>
                      <td><strong>Price (individual)</strong></td>
                      <td>$20/month</td>
                      <td>$20/month</td>
                      <td>Tie 🤝</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* When to choose Claude */}
            <section>
              <h2>When to Choose Claude for Your Business</h2>
              <p>
                Claude is built by Anthropic, a company founded by former OpenAI researchers
                who prioritize safety and reasoning. The result is an AI that thinks more
                carefully, writes more naturally, and refuses harmful requests more reliably.
                Here is where it wins for small business owners.
              </p>

              <h3>1. You Write Long-Form Content</h3>
              <p>
                Claude writes with a voice that feels genuinely human. It maintains tone across
                thousands of words, uses specific examples without being prompted, and avoids
                the generic filler that plagues most AI output. If you publish blog posts,
                newsletters, white papers, or sales pages, Claude is the better writer.
              </p>
              <p>
                <strong>Example:</strong> Ask both to write a 1,500-word guide about AI for small
                business. Claude\u0026apos;s version will have smoother transitions, fewer clichés,
                and a voice that sounds like it came from a person, not a template.
              </p>

              <h3>2. You Need Complex Reasoning and Analysis</h3>
              <p>
                Claude excels at thinking through problems step by step. It shows its work,
                considers edge cases, and asks clarifying questions when the prompt is ambiguous.
                For strategic planning, financial analysis, risk assessment, or any task where
                getting the wrong answer is expensive, Claude is the safer choice.
              </p>

              <h3>3. You Code or Build Technical Systems</h3>
              <p>
                Claude Code is widely considered the best autonomous coding agent available.
                It can read entire codebases, write new features, debug errors, and refactor
                legacy code with minimal guidance. For technical founders, developers, or anyone
                building automations and integrations, Claude is unmatched.
              </p>

              <h3>4. You Handle Sensitive Customer Communications</h3>
              <p>
                Claude is calibrated to be helpful, harmless, and honest. It produces warmer,
                more empathetic responses — ideal for customer service, complaint handling,
                and delicate negotiations. When tone can make or break a customer relationship,
                Claude delivers.
              </p>

              {/* Prompt Block */}
              <div className="prompt-block">
                <div className="prompt-header">📝 Copy-Paste Prompt — Claude</div>
                <pre className="prompt-code">
{`Write a warm, personalized cold email to a small business owner offering bookkeeping services. 

Requirements:
- Opening line references a specific challenge they likely face (cash flow, tax season, or time)
- Under 150 words
- Friendly but professional tone
- Clear value proposition in one sentence
- Soft call to action (reply or book a 15-min call)
- Avoid generic phrases like "I hope this email finds you well"`}
                </pre>
                <p className="prompt-note">
                  <strong>Why this works on Claude:</strong> Claude understands nuanced tone
                  instructions and produces emails that sound written by a human, not generated
                  by software.
                </p>
              </div>
            </section>

            {/* When to choose Gemini */}
            <section>
              <h2>When to Choose Gemini for Your Business</h2>
              <p>
                Gemini is built by Google DeepMind and lives inside the Google ecosystem. If
                your business runs on Gmail, Google Docs, Sheets, Drive, or Meet, Gemini is
                not just an AI — it is an extension of the tools you already use. Here is
                where it wins.
              </p>

              <h3>1. You Are a Google Workspace Power User</h3>
              <p>
                Gemini is natively integrated into Gmail, Google Docs, Sheets, Slides, and Drive.
                It can summarize long email threads, draft replies in your inbox, analyze
                spreadsheet data without uploads, and generate presentation slides from bullet
                points. Claude has no native Workspace integration — you copy and paste everything.
              </p>
              <p>
                <strong>Example:</strong> Open Gmail, select a thread of 20 back-and-forth emails
                with a client, and ask Gemini to summarize the key decisions and next steps.
                It reads the thread in context and produces a summary in seconds.
              </p>

              <h3>2. You Need Real-Time Research and Web Search</h3>
              <p>
                Gemini has Google Search built in. Ask about competitor pricing, industry trends,
                or current events and get answers with sources. Claude has web search on Pro plans
                but it is slower and less integrated. For competitive research, market analysis,
                and staying current, Gemini is faster and more accurate.
              </p>

              <h3>3. You Work with Images, Video, and Audio</h3>
              <p>
                Gemini is natively multimodal. Upload a product photo and ask for marketing copy.
                Share a video and ask for a transcript with timestamps. Record a voice memo and
                ask for bullet-point notes. Claude handles text and image analysis but cannot
                generate images, process video, or handle audio files.
              </p>

              <h3>4. You Need Cost-Effective API Scaling</h3>
              <p>
                If you plan to build automations or integrations using APIs, Gemini Flash-Lite
                is dramatically cheaper than Claude Sonnet for high-volume, lower-complexity
                tasks. Many businesses use Gemini Flash-Lite for categorization, tagging, and
                routing, while reserving Claude for high-value writing and analysis.
              </p>

              {/* Prompt Block */}
              <div className="prompt-block">
                <div className="prompt-header">📝 Copy-Paste Prompt — Gemini</div>
                <pre className="prompt-code">
{`Analyze my Gmail inbox for the last 30 days and identify patterns:

1. Which senders take up the most of my time?
2. What types of emails could be automated with templates?
3. Which conversations are still waiting for my reply?
4. Suggest 3 email templates I should create based on the most common requests I receive.

For each finding, include a specific example from my actual emails (anonymized).`}
                </pre>
                <p className="prompt-note">
                  <strong>Why this works on Gemini:</strong> Gemini can access and analyze your
                  Gmail data directly within Google Workspace. Claude would need you to manually
                  paste emails one by one.
                </p>
              </div>
            </section>

            {/* Task-by-task breakdown */}
            <section>
              <h2>Task-by-Task Breakdown</h2>
              <p>
                Here is how each AI performed on real small business tasks we tested. Winner
                marked with 🏆.
              </p>

              <h3>Sales Cold Email</h3>
              <p>
                <strong>Task:</strong> Write a cold email to a small business owner offering
                web design services. Friendly but professional. Under 150 words.
              </p>
              <p>
                <strong>Claude:</strong> Warmer opening, more specific hook, better closing.
                Felt like it was written by a salesperson who understands the prospect.
                <strong>🏆 Claude wins.</strong>
              </p>
              <p>
                <strong>Gemini:</strong> Solid structure, clear value prop, slightly generic
                opening. Good but not memorable.
              </p>

              <h3>Customer Complaint Reply</h3>
              <p>
                <strong>Task:</strong> Reply to a customer who says their order arrived damaged.
                Apologize, offer a solution, keep it under 100 words.
              </p>
              <p>
                <strong>Claude:</strong> Empathetic, human, specific. The tone made it feel like
                a real person cared. <strong>🏆 Claude wins.</strong>
              </p>
              <p>
                <strong>Gemini:</strong> Professional, correct, slightly clinical. Checked all
                the boxes but felt like a template.
              </p>

              <h3>Marketing Blog Post</h3>
              <p>
                <strong>Task:</strong> Write a 500-word blog post about why small businesses
                should use AI for customer service. Include 3 statistics and a call to action.
              </p>
              <p>
                <strong>Claude:</strong> Better flow, more engaging intro, natural transitions.
                Slightly slower but higher quality. <strong>🏆 Claude wins.</strong>
              </p>
              <p>
                <strong>Gemini:</strong> Fast, comprehensive, well-structured. Statistics were
                pulled from real-time search and verifiable.
              </p>

              <h3>Data Analysis from Google Sheets</h3>
              <p>
                <strong>Task:</strong> Analyze a Google Sheet of monthly sales data and identify
                trends. [Sheet linked in Gemini, pasted in Claude]
              </p>
              <p>
                <strong>Gemini:</strong> Read the sheet directly, generated charts, calculated
                growth rates, identified seasonal patterns. <strong>🏆 Gemini wins.</strong>
              </p>
              <p>
                <strong>Claude:</strong> Provided excellent written analysis of pasted data but
                could not access the sheet directly or create visualizations.
              </p>

              <h3>Social Media Post</h3>
              <p>
                <strong>Task:</strong> Write a LinkedIn post about AI saving small businesses
                time. Hook in first line. Under 150 words.
              </p>
              <p>
                <strong>Claude:</strong> Better hook, more conversational, less hashtag-heavy.
                Felt like an actual LinkedIn post. <strong>🏆 Claude wins.</strong>
              </p>
              <p>
                <strong>Gemini:</strong> Good hook, clean structure, hashtag suggestions.
                Slightly formulaic.
              </p>

              <h3>Meeting Notes Summary</h3>
              <p>
                <strong>Task:</strong> Summarize a 30-minute meeting transcript into action
                items with owners and deadlines.
              </p>
              <p>
                <strong>Gemini:</strong> Fast, accurate, extracted all action items correctly.
                Integrated with Google Calendar to suggest follow-up times.
                <strong>🏆 Gemini wins.</strong>
              </p>
              <p>
                <strong>Claude:</strong> Excellent summary, slightly better at identifying
                implied action items that were not explicitly stated.
              </p>

              {/* Prompt Block */}
              <div className="prompt-block">
                <div className="prompt-header">📝 Copy-Paste Prompt — Meeting Notes to Action Items</div>
                <pre className="prompt-code">
{`Summarize the following meeting transcript into structured action items:

[ paste transcript here ]

Format:
- Action item
- Owner (if mentioned, or "TBD")
- Due date (if mentioned, or suggest reasonable timeline)
- Priority: High / Medium / Low

Also include:
1. A 2-sentence summary of what was decided
2. Any risks or blockers mentioned
3. The next meeting date and agenda suggestions`}
                </pre>
                <p className="prompt-note">
                  <strong>Tip:</strong> This prompt works well on both Claude and Gemini. On
                  Gemini, you can paste a Google Meet transcript directly from Gmail. On Claude,
                  paste the text manually for a more nuanced analysis.
                </p>
              </div>

              {/* Prompt Block */}
              <div className="prompt-block">
                <div className="prompt-header">📝 Copy-Paste Prompt — Competitor Research</div>
                <pre className="prompt-code">
{`Research my top 3 competitors in the [industry] space. For each competitor:

1. What is their main value proposition?
2. What do customers praise them for? (check recent reviews)
3. What do customers complain about? (check recent reviews)
4. What is their pricing model?
5. What is one thing they do that I should copy?
6. What is one gap I can exploit?

Include sources for all claims. Focus on information from the last 6 months.`}
                </pre>
                <p className="prompt-note">
                  <strong>Why Gemini is better here:</strong> Gemini\u0026apos;s real-time search
                  pulls current competitor data, pricing, and reviews. Claude would rely on its
                  training cutoff unless you paste all the research manually.
                </p>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h2>Pricing: What Each Actually Costs</h2>

              <div className="article-table-wrapper">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Plan</th>
                      <th>Claude</th>
                      <th>Gemini</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Free</td>
                      <td>Limited Claude Sonnet access</td>
                      <td>Limited Gemini Pro access</td>
                    </tr>
                    <tr>
                      <td>Individual</td>
                      <td>$20/month (Pro)</td>
                      <td>$20/month (Advanced, includes Google One AI Premium)</td>
                    </tr>
                    <tr>
                      <td>Team (5 users)</td>
                      <td>$100/month (for Work)</td>
                      <td>$100-120/month (Workspace Business + AI add-on)</td>
                    </tr>
                    <tr>
                      <td>API — flagship model</td>
                      <td>~$15 input / $75 output per 1M tokens</td>
                      <td>~$7 input / $21 output per 1M tokens</td>
                    </tr>
                    <tr>
                      <td>API — fast/cheap model</td>
                      <td>~$3 input / $15 output per 1M tokens (Sonnet)</td>
                      <td>~$0.15 input / $0.60 output per 1M tokens (Flash-Lite)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For a solo founder, both cost the same at $20 per month. For teams, Gemini is
                often cheaper if you already use Google Workspace because the AI features are
                bundled. For API use, Gemini Flash-Lite is dramatically cheaper for high-volume
                tasks. Neither requires a contract — both are month-to-month.
              </p>
            </section>

            {/* Mid-content CTA */}
            <section className="article-cta-box">
              <h3>Not Sure Which AI Fits Your Workflow?</h3>
              <p>
                Every business is different. The right AI depends on what you actually do each
                day — not what a comparison table says. Take the free{" "}
                <Link href="/audit">AI Audit</Link> — 20 questions that map your daily tasks
                to the right tool, with a personalized recommendation you can act on immediately.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
              </Link>
            </section>

            {/* FAQ */}
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

            {/* Related guides */}
            <section>
              <h2>Related Guides</h2>
              <ul>
                <li>
                  <Link href="/guides/chatgpt-vs-claude-business">
                    ChatGPT vs Claude for Small Business
                  </Link> — The other major comparison
                </li>
                <li>
                  <Link href="/guides/best-ai-tools-small-business">
                    Best AI Tools for Small Business
                  </Link> — The complete toolkit overview
                </li>
                <li>
                  <Link href="/guides/ai-prompts-for-sales">
                    AI Prompts for Sales
                  </Link> — Cold outreach that converts
                </li>
                <li>
                  <Link href="/guides/ai-prompts-for-marketing">
                    AI Prompts for Marketing
                  </Link> — Content creation prompts
                </li>
                <li>
                  <Link href="/guides/how-to-use-chatgpt-for-business">
                    How to Use ChatGPT for Small Business
                  </Link> — Foundational guide for AI beginners
                </li>
              </ul>
            </section>

            {/* Bottom CTA */}
            <div className="article-bottom-cta">
              <h2>Get prompts tested on both Claude and Gemini</h2>
              <p>
                Our <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes
                copy-paste prompts tested on both Claude and Gemini — so you get great results
                regardless of which tool you choose. Each prompt includes tool-specific tips
                for getting the best output.
              </p>
              <Link href="/products/prompt-stack" className="btn-primary">
                Browse the Prompt Stack →
              </Link>
            </div>
          </article>
        </div>
      </main>

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
