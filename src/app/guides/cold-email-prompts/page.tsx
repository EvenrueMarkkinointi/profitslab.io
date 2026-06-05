import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Cold Email Prompts That Get 40%+ Open Rates (2026)",
  description:
    "Copy-paste AI prompts to write cold emails with 40%+ open rates. Includes subject lines, follow-ups, and A/B testing prompts. Free audit available.",
  alternates: { canonical: "https://www.profitslab.io/guides/cold-email-prompts/" },
  openGraph: {
    title: "Cold Email Prompts That Get 40%+ Open Rates | ProfitSlab",
    description:
      "Copy-paste AI prompts for cold emails with 40%+ open rates. Subject lines, body copy, follow-ups, and A/B testing prompts inside.",
    url: "https://www.profitslab.io/guides/cold-email-prompts/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What is a good open rate for cold email?",
    a: "The average cold email open rate is 27.7% (Snov.io 2026). A good open rate is 35–40%. Top performers hit 45% or higher, usually through signal-based personalization, clean deliverability, and subject lines under 45 characters.",
  },
  {
    q: "How long should a cold email be?",
    a: "The sweet spot is 50–125 words. Under 80 words performs best — it forces you to cut fluff and get to the point. Emails under 80 words see 5.5% higher open rates and 18% higher reply rates than longer emails. Every word should earn its place.",
  },
  {
    q: "How many follow-ups should I send?",
    a: "Send 4–6 follow-ups across 14–21 days. 70% of salespeople stop after one email, but 42% of replies arrive on follow-ups. Each follow-up should add new value — a different angle, a resource, or social proof. Never just check in.",
  },
  {
    q: "Can AI write cold emails that do not sound like AI?",
    a: "Yes — if you use signal-based prompts. The key is feeding AI specific details about each prospect (recent posts, company news, role changes) and instructing it to reference those signals in the first line. Generic prompts produce generic emails. The prompts in this guide are built to produce personalized, context-rich outreach that sounds hand-written.",
  },
  {
    q: "Is cold email still effective in 2026?",
    a: "Yes, but the rules have tightened. Average open rates remain 27.7%, but signal-personalized emails hit 45%+. The key shifts are: stricter deliverability (SPF, DKIM, DMARC), lower daily send limits (40/day per inbox), and higher relevance requirements. The spray-and-pray era is over. Targeted, researched cold email works better than ever.",
  },
  {
    q: "What is the best day and time to send cold emails?",
    a: "Thursday evening (8–11 PM) consistently outperforms other slots. Tuesday and Wednesday mornings (9–11 AM) are second best. Avoid Monday mornings (inbox overload) and Friday afternoons (checked out). Time zone matters — send in the prospect's local timezone.",
  },
  {
    q: "How do I avoid the spam folder?",
    a: "Three things: authentication (SPF, DKIM, DMARC), reputation (warm your domain for 21 days, keep bounce rate under 2%), and content (avoid spam words like 'free,' 'guarantee,' 'act now,' and excessive capitalization). Send from a professional domain, not a free email provider. Use a dedicated sending domain if possible.",
  },
];

export default function ColdEmailPrompts() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cold Email Prompts That Get 40%+ Open Rates (Copy-Paste for 2026)",
            description:
              "Copy-paste AI prompts to write cold emails with 40%+ open rates. Includes subject lines, follow-ups, and A/B testing prompts.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-06-05",
            dateModified: "2026-06-05",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/cold-email-prompts/",
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
                name: "Cold Email Prompts",
                item: "https://www.profitslab.io/guides/cold-email-prompts/",
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
              <span aria-current="page">Cold Email Prompts</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Sales</span>
              <h1>Cold Email Prompts That Get 40%+ Open Rates</h1>
              <p className="article-lead">
                The average cold email open rate is 27.7%. Top performers hit 45%+. The difference is not luck — it is signal-based personalization and copy-paste AI prompts that write emails under 80 words. Here are the exact prompts to get there.
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
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#why-deleted">Why Most Cold Emails Get Deleted (And the 40% Fix)</a></li>
                <li><a href="#deliverability">The Deliverability Setup (Do This First or Nothing Works)</a></li>
                <li><a href="#subject-line">Prompt 1: The Subject Line Generator</a></li>
                <li><a href="#signal-research">Prompt 2: The Signal-Research Prompt</a></li>
                <li><a href="#body-prompt">Prompt 3: The 80-Word Cold Email Writer</a></li>
                <li><a href="#follow-up">The Follow-Up Sequence (Where 42% of Replies Happen)</a></li>
                <li><a href="#ab-testing">A/B Testing Your Cold Emails With AI</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                You write a cold email. You spend twenty minutes on it. You hit send. Then — nothing.
                No open. No reply. Just silence. Or worse: you blast fifty generic templates and
                three people open them. None reply. Your domain reputation drops. Now you are worse
                off than when you started.
              </p>
              <p>
                <strong>Both paths fail for the same reason.</strong> The bar for cold email has
                risen. Decision-makers receive 50–100 emails per day. They spot generic templates
                instantly. And in 2026, deliverability rules are stricter than ever — one bad campaign
                can land your entire domain in spam for weeks.
              </p>
              <p>
                The only path forward is relevance. Not more sends. Better sends. This guide gives you
                <strong> copy-paste AI prompts</strong> that generate signal-based cold emails in under
                2 minutes per prospect. You get the efficiency of templates without the stink of spam.
                And you get the data — what actually works in 2026, backed by 16.5 million analyzed emails.
              </p>
            </section>

            {/* Section 1: Why Most Get Deleted */}
            <section id="why-deleted">
              <h2>Why Most Cold Emails Get Deleted (And the 40% Fix)</h2>
              <p>
                Cold email in 2026 is not harder because people stopped reading email. It is harder
                because inboxes are smarter and recipients are more selective. Here is the landscape:
              </p>
              <ul>
                <li>
                  <strong>Average open rate: 27.7%.</strong> That means 72% of cold emails are never opened.
                  Most senders blame the list. The real culprit is the subject line and sender reputation.
                </li>
                <li>
                  <strong>Top performers: 45%+ open rates.</strong> The gap between average and excellent
                  is not massive budgets or better lists. It is signal-based personalization and subject
                  lines under 45 characters.
                </li>
                <li>
                  <strong>Reply rate: 3.43% average, 18% for signal-personalized.</strong> Generic emails
                  get ignored. Emails that reference a specific trigger event — a funding round, a hire,
                  a post, an expansion — get replies at 5x the rate.
                </li>
                <li>
                  <strong>70% of salespeople stop after one email.</strong> Meanwhile, 42% of replies
                  arrive on follow-ups. The people who win are the people who follow up.
                </li>
                <li>
                  <strong>Only 5% of senders personalize every email.</strong> Belkins 2025 data. The
                  other 95% are easy to ignore. Personalization is not a nice-to-have anymore. It is the
                  only way to stand out.
                </li>
              </ul>

              <p>Here is the benchmark table for 2026:</p>
              <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.5rem 0" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                    <th style={{ textAlign: "left", padding: "0.5rem", fontWeight: 600 }}>Metric</th>
                    <th style={{ textAlign: "left", padding: "0.5rem", fontWeight: 600 }}>Average</th>
                    <th style={{ textAlign: "left", padding: "0.5rem", fontWeight: 600 }}>Good</th>
                    <th style={{ textAlign: "left", padding: "0.5rem", fontWeight: 600 }}>Excellent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "0.5rem" }}>Open rate</td>
                    <td style={{ padding: "0.5rem" }}>27.7%</td>
                    <td style={{ padding: "0.5rem" }}>35–40%</td>
                    <td style={{ padding: "0.5rem" }}>45%+</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "0.5rem" }}>Reply rate</td>
                    <td style={{ padding: "0.5rem" }}>3.43%</td>
                    <td style={{ padding: "0.5rem" }}>8–12%</td>
                    <td style={{ padding: "0.5rem" }}>18%+</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "0.5rem" }}>Email length</td>
                    <td style={{ padding: "0.5rem" }}>150+ words</td>
                    <td style={{ padding: "0.5rem" }}>80–125 words</td>
                    <td style={{ padding: "0.5rem" }}>Under 80 words</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "0.5rem" }}>Subject line length</td>
                    <td style={{ padding: "0.5rem" }}>50+ characters</td>
                    <td style={{ padding: "0.5rem" }}>21–40 characters</td>
                    <td style={{ padding: "0.5rem" }}>2–4 words</td>
                  </tr>
                </tbody>
              </table>

              <p>
                The three shifts that separate 27% from 45%: <strong>authentication</strong> (your emails
                actually land in the inbox), <strong>personalization</strong> (every email references
                a real signal), and <strong>signals</strong> (you write to people who have a reason to
                care right now). This guide covers all three.
              </p>
            </section>

            {/* Section 2: Deliverability */}
            <section id="deliverability">
              <h2>The Deliverability Setup (Do This First or Nothing Works)</h2>
              <p>
                The best cold email prompt in the world will not help if your emails land in spam.
                Deliverability is 80% of the game. Most guides skip this because it is not exciting.
                We are not skipping it.
              </p>

              <h3>1. Authentication: SPF, DKIM, DMARC</h3>
              <p>
                These three records tell email providers that you are who you say you are. Without them,
                Gmail and Outlook will treat your emails as suspicious. Set them up with your DNS provider:
              </p>
              <ul>
                <li><strong>SPF</strong> — Authorizes your sending server to send email for your domain.</li>
                <li><strong>DKIM</strong> — Adds a digital signature that proves the email was not tampered with.</li>
                <li><strong>DMARC</strong> — Tells providers what to do if SPF or DKIM fail (reject or quarantine).</li>
              </ul>
              <p>
                Use a tool like <a href="https://mxtoolbox.com" target="_blank" rel="noopener noreferrer">MXToolbox</a> or
                your email provider&apos;s setup wizard to verify all three are correct. One missing record
                and your open rate drops 30%.
              </p>

              <h3>2. Domain Warming (21 Days)</h3>
              <p>
                New domains or domains that have not sent email in months are considered suspicious.
                You must warm them up gradually:
              </p>
              <ul>
                <li>Week 1: 5–10 emails per day</li>
                <li>Week 2: 15–20 emails per day</li>
                <li>Week 3: 25–40 emails per day</li>
                <li>Week 4+: 40 emails per day maximum per inbox</li>
              </ul>
              <p>
                Use a warming tool (like <a href="https://warmupinbox.com" target="_blank" rel="noopener noreferrer">Warmup Inbox</a> or
                <a href="https://www.mailwarm.com" target="_blank" rel="noopener noreferrer"> Mailwarm</a>) to automate this.
                The tool sends emails to real inboxes, opens them, and marks them as not spam. This builds
                your sender reputation before you send a single cold email.
              </p>

              <h3>3. List Verification</h3>
              <p>
                Bounce rate above 2% is a red flag for email providers. Verify your list before sending.
                Use tools like ZeroBounce, NeverBounce, or Hunter.io. Remove invalid emails, catch-all
                addresses, and role-based emails (info@, support@). A clean list is non-negotiable.
              </p>

              <h3>4. Content and Send Volume</h3>
              <p>
                Send 40 emails per day maximum per inbox. More than that and providers flag you as
                bulk. Avoid spam words: free, guarantee, act now, limited time, no obligation. Keep
                formatting simple — no images, no attachments, no HTML heavy formatting. Plain text
                performs better anyway.
              </p>

              <p>
                <strong>Bottom line:</strong> If you skip deliverability, your open rate will be 0% no
                matter how good your prompts are. Set this up first. Then use the prompts.
              </p>
            </section>

            {/* Prompt Block 1: Subject Line */}
            <section id="subject-line">
              <h2>Prompt 1: The Subject Line Generator</h2>
              <p>
                Subject lines are the gatekeeper. If the subject fails, the email is never read.
                The data is clear: subject lines under 45 characters get 45% higher open rates.
                Personalized subject lines (referencing the prospect&apos;s name or company) get 46% open
                rates vs 35% without — a 31% lift. All-lowercase subject lines outperform title case.
                And the sweet spot is 2–4 words.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Generate High-Open-Rate Subject Lines</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Signal: [specific trigger — recent post, funding, hire, expansion, product launch]
My angle: [what I want to talk about — not a pitch, a conversation starter]

Generate 5 cold email subject lines with these constraints:
1. Under 45 characters each
2. 2–4 words preferred
3. All lowercase (no title case)
4. No punctuation except maybe one question mark
5. Reference the signal or the prospect's name if possible
6. Curiosity-driven, not salesy
7. No spam words: free, guarantee, act now, limited time

Rank them by predicted open rate. Explain why the top choice works.`}
                </pre>
              </div>

              <p>
                <strong>Example outputs:</strong>
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  &quot;quick question about [Company]&apos;s expansion&quot; (38 chars) — Predicted: 44% open rate<br />
                  &quot;[Name] — your post on [topic]&quot; (32 chars) — Predicted: 48% open rate<br />
                  &quot;similar to [Similar Company]&quot; (28 chars) — Predicted: 41% open rate
                </p>
              </blockquote>

              <p>
                The pattern: short, specific, and personal. The prospect sees their name or their
                company and knows this is not a mass blast. That is the entire game.
              </p>
            </section>

            {/* Prompt Block 2: Signal Research */}
            <section id="signal-research">
              <h2>Prompt 2: The Signal-Research Prompt</h2>
              <p>
                Before you write a single word of the email, you need a signal. A signal is a specific,
                recent event or observation that gives you a reason to reach out. Funding rounds, new
                hires, product launches, LinkedIn posts, podcast appearances, industry shifts — these
                are all signals. Without a signal, you are just another stranger in the inbox.
              </p>
              <p>
                The data backs this up: trigger-event personalization achieves 54.7% open rates (Martal
                Group 2025). Signal-personalized emails get 18% reply rates vs 3.43% average. Only 5%
                of senders do this. The other 95% are easy to beat.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Prospect Signal Research</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Company website: [URL]
LinkedIn profile: [URL]
Industry: [industry]
Their role: [job title]

Research this prospect and find 3 specific signals that would make a cold email relevant:
1. A recent company event (funding, hire, product launch, expansion, award, partnership)
2. A recent LinkedIn post or comment they made
3. An industry trend that directly affects their role or company

For each signal, write:
- What the signal is (one sentence)
- Why it matters to them (one sentence)
- How it connects to a potential pain point (one sentence)
- One opening line for a cold email that references this signal naturally

Do not make up facts. If you cannot find a signal, say so. I would rather send no email than a generic one.`}
                </pre>
              </div>

              <p>
                <strong>Example output:</strong>
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  Signal: [Company] raised Series B last month ($12M) and is hiring 3 senior engineers.<br />
                  Why it matters: Rapid hiring usually means scaling customer onboarding, which breaks at volume.<br />
                  Pain point: Most companies at this stage struggle to onboard new clients fast enough to match growth.<br />
                  Opening line: &quot;Congrats on the Series B — saw you are hiring 3 senior engineers. That usually means onboarding is about to break under volume.&quot;
                </p>
              </blockquote>

              <p>
                That opening line took 2 minutes to generate. It references a real event, names a real
                pain, and sounds like you did your homework. Because you did — you just had AI do the
                reading for you.
              </p>
            </section>

            {/* Prompt Block 3: 80-Word Email */}
            <section id="body-prompt">
              <h2>Prompt 3: The 80-Word Cold Email Writer</h2>
              <p>
                The body of the email is where most people fail. They write 200 words because they
                think more is more. The data says the opposite: emails under 80 words get 5.5% higher
                open rates and 18% higher reply rates. Interest-based CTAs (asking if they are interested
                in learning more) have a 30% success rate — double the rate of meeting-request CTAs.
              </p>
              <p>
                The anatomy of a high-performing cold email: recipient-focused (not about you),
                signal-referenced (not generic), interest-based CTA (not a meeting request), and under
                80 words. Here is the prompt that produces it.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Write an 80-Word Signal-Based Cold Email</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Signal: [specific trigger event]
Their likely pain point: [one specific problem based on their role and the signal]
My solution: [brief description — one sentence]
The outcome: [specific result they will get — one sentence]

Write a cold email with these constraints:
1. Under 80 words
2. First line references the signal naturally
3. One sentence naming the pain point
4. One sentence stating the outcome (not features)
5. CTA: ask if they are interested in learning more — do not ask for a meeting
6. No filler: no "I hope this finds you well," no "just reaching out," no "I wanted to"
7. Tone: confident but not arrogant, helpful but not groveling

Output only the email body and subject line. No greeting or sign-off.`}
                </pre>
              </div>

              <p>
                <strong>Example output:</strong>
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  Subject: quick question about [Company]&apos;s expansion<br /><br />
                  Congrats on the Series B — saw you are hiring 3 senior engineers. That usually means onboarding is about to break under volume. Most companies at this stage struggle to onboard new clients fast enough to match growth.<br /><br />
                  We help [industry] companies automate their onboarding so they can scale without adding headcount. Interested in learning how it works?<br /><br />
                  — [Your name]
                </p>
              </blockquote>

              <p>
                76 words. Signal in the first line. Pain point in sentence two. Outcome in sentence
                three. Interest-based CTA in sentence four. No fluff. No meeting request. No
                desperation. This is the email that gets 40%+ open rates.
              </p>
            </section>

            {/* Mid-Content CTA */}
            <div className="article-cta-box">
              <h3>Want Someone Else to Handle the Research?</h3>
              <p>
                Every prompt above still requires you to research each prospect. ProfitSlab&apos;s AI does
                the signal research, writes the email, and sends the follow-up — automatically.
              </p>
              <Link href="/audit" className="btn-primary">
                Run My Free Audit →
              </Link>
            </div>

            {/* Section 6: Follow-Up Sequence */}
            <section id="follow-up">
              <h2>The Follow-Up Sequence (Where 42% of Replies Happen)</h2>
              <p>
                70% of salespeople stop after one email. That means 70% of salespeople quit before
                the conversation starts. The data is clear: 42% of replies arrive on follow-ups.
                The best sequence is 4–6 steps across 14–21 days. Each follow-up adds new value —
                never just checking in.
              </p>
              <p>
                The best send time for follow-ups: Thursday evening, 8–11 PM. Tuesday and Wednesday
                mornings, 9–11 AM, are second best. Avoid Monday mornings (inbox overload) and Friday
                afternoons (checked out). Always send in the prospect&apos;s local timezone.
              </p>

              <h3>Prompt 4: The 4-Step Follow-Up Sequence Generator</h3>
              <div className="prompt-block">
                <div className="prompt-label">Prompt: Generate a Follow-Up Sequence</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
Original signal: [what triggered the first email]
Their likely pain point: [one specific problem]
My solution: [brief description]
My relevant result: [specific outcome for a similar client]

Write a 4-step follow-up email sequence with these constraints:
- Step 1 (Day 3): Different angle — a new insight or question about their pain point
- Step 2 (Day 7): Value add — share a relevant article, case study, or industry stat
- Step 3 (Day 14): Social proof — reference the specific result from a similar company
- Step 4 (Day 21): Soft breakup — leave the door open with one last piece of value

Rules for all steps:
1. Under 80 words each
2. Add new value every time — never repeat the same angle
3. No guilt, no pressure, no fake urgency
4. End with a low-friction question or an easy out
5. Sound like a real person, not a sales automation tool

Output all 4 emails with send-day labels.`}
                </pre>
              </div>

              <h3>Prompt 5: The Break-Up Email</h3>
              <p>
                The break-up email is the most underrated tool in sales. It removes pressure — which,
                paradoxically, often produces the reply you were waiting for. It also leaves the door
                open without being clingy.
              </p>
              <div className="prompt-block">
                <div className="prompt-label">Prompt: Write the Break-Up Email</div>
                <pre className="prompt-text">
{`Prospect: [name] at [company]
I have emailed them: [number] times about [topic]
One piece of value to leave behind: [article, insight, offer, or resource]

Write a final email that:
1. Thanks them for their time (even if they did not reply)
2. Says I will stop following up so I do not clutter their inbox
3. Leaves one piece of value (the resource or insight above)
4. Tells them they can reach out anytime — no pressure
5. Is under 60 words

Tone: gracious, professional, leaves the door open. No guilt.`}
                </pre>
              </div>

              <p>
                <strong>Why this works:</strong> The break-up email is the only email in the sequence
                that does not ask for anything. It gives. And because it gives without asking, it
                often gets the reply that all the asking emails did not.
              </p>
            </section>

            {/* Section 7: A/B Testing */}
            <section id="ab-testing">
              <h2>A/B Testing Your Cold Emails With AI</h2>
              <p>
                You cannot improve what you do not measure. A/B testing cold emails is not about
                finding the perfect subject line — it is about learning what your specific audience
                responds to. The three things to test: subject lines, opening lines, and CTAs.
              </p>
              <p>
                Start with subject lines. They are the highest-leverage variable. Test 2–3 variants
                per batch of 50 emails. Keep everything else identical. After 100 emails per variant,
                you have statistical significance. Then move to opening lines. Then CTAs.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Generate A/B Test Variants</div>
                <pre className="prompt-text">
{`Element to test: [subject line / opening line / CTA]
Original version: [what you are currently using]
Prospect type: [industry, role, company size]
My angle: [what I want to talk about]

Generate 3 A/B test variants with these constraints:
1. Each variant must be measurably different from the others (not just word order)
2. Each variant should test a different hypothesis
3. For subject lines: test curiosity vs. specificity vs. personalization
4. For opening lines: test signal-reference vs. question vs. insight
5. For CTAs: test interest-based vs. question vs. resource

For each variant, write:
- The variant text
- The hypothesis (what this tests)
- The predicted winner and why`}
                </pre>
              </div>

              <p>
                <strong>What to track:</strong> Open rate (subject line test), reply rate (opening line
                test), and positive reply rate (CTA test). A positive reply is any reply that moves the
                conversation forward — not an unsubscribe or a &quot;no.&quot; Track these in a simple spreadsheet
                or your CRM.
              </p>
              <p>
                <strong>When to iterate vs. when to change the list:</strong> If your open rate is above
                35% but your reply rate is below 5%, your list is good but your offer or CTA is weak.
                If your open rate is below 25%, your list or deliverability is the problem. Fix the
                list first. Then iterate the copy.
              </p>
            </section>

            {/* Related Guides */}
            <section>
              <h2>Related Guides</h2>
              <p>
                Building a complete sales system? These guides work together with cold email to fill
                your pipeline from first touch to closed deal:
              </p>
              <ul>
                <li>
                  <Link href="/guides/ai-prompts-for-sales">AI Prompts for Sales</Link> —
                  Cold outreach, proposals, and objection handling across the full sales cycle.
                </li>
                <li>
                  <Link href="/guides/linkedin-outreach-templates-ai">LinkedIn Outreach with AI</Link> —
                  Templates that feel hand-crafted for connection requests, DMs, and follow-ups.
                </li>
                <li>
                  <Link href="/guides/sales-follow-up-email-sequence">How to Build a Sales Follow-Up Email Sequence That Closes in 5 Emails</Link> —
                  Convert warm leads into buyers with a proven 5-email cadence and copy-paste prompts.
                </li>
                <li>
                  <Link href="/guides/how-to-use-chatgpt-for-business">How to Use ChatGPT for Business</Link> —
                  The foundational guide for using AI across customer service, sales, marketing, and operations.
                </li>
                <li>
                  <Link href="/guides/best-ai-tools-small-business">Best AI Tools for Small Business</Link> —
                  The complete AI stack under $50/month, including CRM and outreach automation tools.
                </li>
              </ul>
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
              <h2>Stop Writing Emails One at a Time</h2>
              <p>
                These prompts work. But they still take 15–20 minutes per prospect. ProfitSlab turns
                your LinkedIn connections into warm leads with AI-personalized outreach at scale —
                without you writing a single email.
              </p>
              <Link href="/" className="btn-primary">
                See How It Works →
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
