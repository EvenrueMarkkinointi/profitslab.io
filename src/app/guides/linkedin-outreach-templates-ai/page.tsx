import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "LinkedIn Outreach Templates That Get Replies | AI-Powered",
  description:
    "Use AI-powered LinkedIn outreach templates to write personalized messages that get replies. Copy-paste prompts + exact templates inside.",
  alternates: { canonical: "https://www.profitslab.io/guides/linkedin-outreach-templates-ai/" },
  openGraph: {
    title: "LinkedIn Outreach Templates That Get Replies | ProfitSlab",
    description:
      "AI-powered LinkedIn outreach templates that feel hand-crafted. Connection requests, DMs, and follow-ups with copy-paste prompts.",
    url: "https://www.profitslab.io/guides/linkedin-outreach-templates-ai/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "How long should a LinkedIn outreach message be?",
    a: "First messages should be 75–100 words. Follow-ups should be 40–75 words. Connection request notes have a hard limit of 300 characters. Shorter messages consistently outperform long ones because they respect the recipient's time and get to the point faster.",
  },
  {
    q: "How many follow-ups should I send on LinkedIn?",
    a: "Send a maximum of 4 follow-up messages after your initial connection or DM, spaced 3–5 days apart. Each follow-up should add new value — a different angle, a useful resource, or a relevant case study. After 4 unanswered touches, send a brief breakup message and move on. Never repeat the same message.",
  },
  {
    q: "Can I use AI for LinkedIn outreach without sounding generic?",
    a: "Yes — if you use signal-based prompts. The key is feeding AI specific details about each prospect (recent posts, company news, role changes) and instructing it to reference those signals in the output. Generic prompts produce generic messages. The prompts in this guide are built to produce personalized, context-rich outreach that sounds hand-written.",
  },
  {
    q: "What is the best way to personalize LinkedIn messages at scale?",
    a: "Use a 3-field system: Name + Company, One Observation (from their profile or posts), and One Likely Pain (based on their industry and role). Feed these three fields into an AI prompt and you get a personalized message in under 2 minutes. Research 5 prospects, batch-generate messages, then edit and send.",
  },
  {
    q: "Should I use LinkedIn InMail or connection requests?",
    a: "Connection requests are free and should be your first choice. In 2026, LinkedIn capped Open InMails to under 100 per month — down from roughly 800. Reserve InMails for prospects you cannot reach any other way. Personalized connection requests with a note see 30–40% higher acceptance rates than blank requests.",
  },
  {
    q: "How do I avoid LinkedIn outreach looking like spam?",
    a: "Never pitch in a connection request. Reference something specific about the prospect in your first line. Keep messages under 100 words. Ask a low-friction question instead of requesting a meeting. Avoid opener phrases like 'I hope this finds you well.' Most importantly, engage with their content before you message them.",
  },
  {
    q: "What is a good LinkedIn connection acceptance rate?",
    a: "A 35–50% acceptance rate is strong for personalized connection requests. Blank requests average 15–25%. If your acceptance rate is below 30%, your targeting is too broad or your note is too salesy. If it is above 50%, you are probably too niche — consider expanding your audience.",
  },
];

export default function LinkedInOutreachTemplates() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "LinkedIn Outreach Templates That Don't Feel Spammy (AI-Generated in 2 Minutes)",
            description:
              "AI-powered LinkedIn outreach templates for connection requests, DMs, and follow-ups that feel hand-crafted. Copy-paste prompts included.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-06-03",
            dateModified: "2026-06-03",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/linkedin-outreach-templates-ai/",
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
                name: "LinkedIn Outreach Templates",
                item: "https://www.profitslab.io/guides/linkedin-outreach-templates-ai/",
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
              <span aria-current="page">LinkedIn Outreach Templates</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Sales</span>
              <h1>LinkedIn Outreach Templates That Don&apos;t Feel Spammy (AI-Generated in 2 Minutes)</h1>
              <p className="article-lead">
                LinkedIn capped InMails 87% in late 2025. The only path to replies now is relevance.
                Use these AI-powered LinkedIn outreach templates to write personalized connection requests,
                DMs, and follow-ups that feel hand-crafted — not mass-blasted.
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
                <li><a href="#why-ignored">Why Most LinkedIn Outreach Gets Ignored in 2026</a></li>
                <li><a href="#structure">The 3-Part Message Structure That Works</a></li>
                <li><a href="#prompt-connection">AI Prompt: Signal-Based Connection Requests</a></li>
                <li><a href="#connection-templates">LinkedIn Connection Request Templates</a></li>
                <li><a href="#prompt-dm">AI Prompt: First DM After Connecting</a></li>
                <li><a href="#dm-templates">LinkedIn DM Templates That Start Conversations</a></li>
                <li><a href="#prompt-followup">AI Prompt: 4-Touch Follow-Up Sequence</a></li>
                <li><a href="#followup-templates">LinkedIn Follow-Up Templates</a></li>
                <li><a href="#mistakes">5 LinkedIn Outreach Mistakes to Avoid</a></li>
                <li><a href="#research">How to Research Any Prospect in 90 Seconds</a></li>
                <li><a href="#metrics">Metrics to Track</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                You find a prospect on LinkedIn. They are perfect — right industry, right role,
                right company size. You spend twenty minutes writing what feels like a thoughtful,
                personalized message. You hit send. Then — nothing. No reply. No profile view.
                Just silence.
              </p>
              <p>
                Or worse: you give up on personalization and blast the same template to fifty people.
                Three accept your connection. None reply. LinkedIn&apos;s algorithm starts throttling
                your account. You are now worse off than when you started.
              </p>
              <p>
                <strong>Both paths fail for the same reason.</strong> The bar for LinkedIn outreach
                has risen dramatically. Decision-makers receive 15–30 unsolicited messages per week.
                They spot generic templates instantly. And in late 2025, LinkedIn made volume-based
                outreach nearly impossible by capping Open InMails to under 100 per month — an 87%
                drop from the previous practical limit of roughly 800.
              </p>
              <p>
                The only path forward is relevance. Not more sends. Better sends. This guide gives you
                <strong> copy-paste AI prompts</strong> that generate signal-based LinkedIn outreach
                templates in under 2 minutes per prospect. You get the efficiency of templates without
                the stink of spam.
              </p>
            </section>

            {/* Section 1: Why Most Outreach Gets Ignored */}
            <section id="why-ignored">
              <h2>Why Most LinkedIn Outreach Gets Ignored in 2026</h2>
              <p>
                LinkedIn outreach in 2026 is not harder because the platform changed. It is harder
                because the platform <em>enforced what was already true</em>: relevance beats volume,
                always.
              </p>
              <p>Here is the landscape you are working in:</p>
              <ul>
                <li>
                  <strong>Open InMails capped at under 100/month.</strong> Down from roughly 800.
                  That is an 87% reduction in outbound capacity overnight. You cannot spray and pray anymore.
                </li>
                <li>
                  <strong>Connection request limits tightened.</strong> Safe volume is 15–20 per day,
                  max 100 per week. Exceed this and LinkedIn restricts your account.
                </li>
                <li>
                  <strong>87% of connection requests lack personalization.</strong> LinkedIn&apos;s own
                  research team published this. Generic messages are identified as automated outreach
                  and ignored or deleted immediately.
                </li>
                <li>
                  <strong>Personalized messages get 36% higher response rates.</strong> HubSpot data.
                  But most teams do not personalize because it takes too long.
                </li>
                <li>
                  <strong>Signal-driven outreach achieves 15–25% response rates.</strong> Messages
                  timed to buying signals — funding rounds, leadership changes, product launches,
                  LinkedIn posts — outperform generic outreach by 10x or more.
                </li>
              </ul>
              <p>
                The teams booking the most meetings were never relying on volume. They were sending
                fewer, better messages to people who actually had a reason to respond. With InMail
                caps now enforcing that reality, every message you send must earn its place.
              </p>
            </section>

            {/* Section 2: The 3-Part Structure */}
            <section id="structure">
              <h2>The 3-Part LinkedIn Message Structure That Works</h2>
              <p>
                Every effective LinkedIn message — whether a connection request, first DM, or
                follow-up — follows the same underlying logic. Skip any part and you become noise.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Signal Hook</strong>
                    <p>What triggered this message? Why them, why now? Reference a recent post, company news, job change, or shared context.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Relevant Observation</strong>
                    <p>What do you know about their situation that they have not told you? One specific insight that shows you did your homework.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Low-Friction Ask</strong>
                    <p>A question or micro-commitment — not a calendar link. Make it easy to reply with a single word or sentence.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>Word count rules:</strong> First messages should be 75–100 words. Follow-ups
                should be 40–75 words. Connection request notes have a hard limit of 300 characters.
                LinkedIn messages are not emails. Treat them like instant messages — concise,
                focused, and conversational.
              </p>
              <p>
                The moment you skip the signal hook and lead with your product, you have become noise.
                The moment you ask for 30 minutes in the first message, you have lost them.
              </p>
            </section>

            {/* Prompt Block 1 */}
            <section id="prompt-connection">
              <h2>AI Prompt: Generate Signal-Based Connection Requests</h2>
              <p>
                Use this prompt to turn a single observation about a prospect into a personalized
                connection request that fits within LinkedIn&apos;s 300-character limit.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Personalized Connection Request</div>
                <pre className="prompt-text">
{`Prospect: [name], [job title] at [company]
Signal I found: [specific observation — recent post, company news, job change, mutual connection, shared group]
My reason for connecting: [one sentence — not a pitch]

Write a LinkedIn connection request note (maximum 300 characters) that:
1. References the signal in the first line
2. States why connecting makes sense for both of us
3. Does not pitch, sell, or ask for a meeting
4. Sounds like I typed it on my phone, not copy-pasted from a template

Output only the connection request text. No greetings or sign-offs.`}
                </pre>
              </div>

              <p>
                <strong>Example output:</strong>
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  Hi [Name] — saw your post on [topic]. The point about [specific thing] stuck with me.
                  Would love to connect and follow your work.
                </p>
              </blockquote>
            </section>

            {/* Connection Request Templates */}
            <section id="connection-templates">
              <h2>LinkedIn Connection Request Templates (AI-Generated)</h2>
              <p>
                These templates are designed to be fed into the prompt above. Each targets a
                different signal type. All fit within the 300-character connection request limit.
              </p>

              <h3>Template 1: Content Engagement Trigger</h3>
              <p>
                <strong>When to use:</strong> The prospect recently posted or commented on something
                relevant to your industry.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — your post on [topic] made a solid point about [specific insight].
                  I work with [industry] teams on [outcome] and thought it made sense to connect.
                </p>
              </blockquote>

              <h3>Template 2: Role-Based Trigger</h3>
              <p>
                <strong>When to use:</strong> The prospect recently changed roles, got promoted,
                or joined a new company.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — congrats on the move to [New Title] at [Company]. Transitioning into
                  a new leadership role is a big shift. Would love to connect and follow your journey.
                </p>
              </blockquote>

              <h3>Template 3: Company Milestone Trigger</h3>
              <p>
                <strong>When to use:</strong> The prospect&apos;s company announced funding, a product
                launch, expansion, or a leadership change.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — huge congratulations on [Company]&apos;s [milestone]. Impressive growth.
                  I help [industry] companies with [outcome] and thought it made sense to connect.
                </p>
              </blockquote>

              <h3>Template 4: Mutual Connection Warm Intro</h3>
              <p>
                <strong>When to use:</strong> You share a mutual connection with the prospect.
                This is the highest-acceptance template type.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — [Mutual Connection] and I worked together at [context]. I have been
                  following [Company]&apos;s growth and would love to connect and follow your work.
                </p>
              </blockquote>

              <p>
                <strong>Rule for all connection requests:</strong> Never pitch. Your only job is
                to get accepted. The pitch comes in the DM, after they have connected and can
                see your full profile.
              </p>
            </section>

            {/* Prompt Block 2 */}
            <section id="prompt-dm">
              <h2>AI Prompt: Write the Perfect First DM After Connecting</h2>
              <p>
                Once someone accepts your connection request, you have 24–48 hours before the
                window of relevance starts closing. This prompt writes a first DM that opens
                a conversation without pitching.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: First DM After Connection</div>
                <pre className="prompt-text">
{`New connection: [name], [job title] at [company]
We connected because: [how you found them / the signal that triggered the request]
One thing I know about their business: [specific observation]
One question I genuinely have about their work: [real question, not a setup for a pitch]

Write a LinkedIn DM that:
1. Thanks them for connecting (one line, not groveling)
2. References the reason we connected
3. Shares one brief, relevant insight or observation (2 sentences max)
4. Asks the genuine question — low-friction, easy to answer
5. Is 75–100 words total
6. Sounds casual and professional, not salesy

No pitch. No meeting request. Goal: start a conversation.`}
                </pre>
              </div>

              <p>
                <strong>Example output:</strong>
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  Thanks for connecting, [Name]. I have been following [Company]&apos;s expansion into
                  [market] — brave move with the current headwinds. Curious: how is your team
                  handling [specific challenge] as you scale? I have seen a few companies approach
                  it differently and would love to hear your take.
                </p>
              </blockquote>
            </section>

            {/* DM Templates */}
            <section id="dm-templates">
              <h2>LinkedIn DM Templates That Start Conversations</h2>
              <p>
                These are framework templates — feed the bracketed fields into the prompt above
                to generate the exact message. Each targets a different conversation opener.
              </p>

              <h3>DM 1: The Insight-Led Opener</h3>
              <p>
                <strong>Best for:</strong> Prospects who post or comment regularly. Lead with
                something you learned from their content.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Thanks for connecting, [Name]. Your recent post on [topic] made me rethink how
                  we handle [process] at [My Company]. The part about [specific insight] especially.
                  How did you arrive at that approach? Would love to hear the backstory if you are
                  open to sharing.
                </p>
              </blockquote>

              <h3>DM 2: The Question-Based Opener</h3>
              <p>
                <strong>Best for:</strong> Prospects in roles where they face a known industry challenge.
                Ask a question they will want to answer.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Thanks for connecting, [Name]. I have been talking to a lot of [job title]s
                  lately about [industry challenge]. Most are handling it with [common approach],
                  but I am curious — is that working for you, or are you exploring alternatives?
                  No pitch, just genuinely curious how [Company] is approaching it.
                </p>
              </blockquote>

              <h3>DM 3: The Social Proof Opener</h3>
              <p>
                <strong>Best for:</strong> Prospects in the same industry as a client you have helped.
                Reference a relevant result without bragging.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Thanks for connecting, [Name]. We just wrapped a project with [Similar Company]
                  that cut their [metric] by [percentage] in [timeframe]. Given [Company]&apos;s focus
                  on [similar initiative], I thought you might find the approach interesting.
                  Happy to share what worked — no strings attached.
                </p>
              </blockquote>

              <h3>DM 4: The Content Share Opener</h3>
              <p>
                <strong>Best for:</strong> Any prospect where you have a genuinely useful resource.
                Value first. Pitch never.
              </p>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Thanks for connecting, [Name]. I came across this [article / report / tool] on
                  [topic] and immediately thought of [Company]&apos;s work on [relevant project].
                  Thought you might find it useful: [link]. No ask — just passing it along.
                  Would love your take if you get a chance to read it.
                </p>
              </blockquote>
            </section>

            {/* Prompt Block 3 */}
            <section id="prompt-followup">
              <h2>AI Prompt: Build a 4-Touch Follow-Up Sequence</h2>
              <p>
                Most replies come after follow-up. But most follow-ups add zero value — they just
                say &apos;checking in.&apos; This prompt builds a 4-touch sequence where each message serves
                a different purpose.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: 4-Touch LinkedIn Follow-Up Sequence</div>
                <pre className="prompt-text">
{`Prospect: [name], [job title] at [company]
Original topic: [what we first connected about]
Their likely challenges: [2–3 specific pains based on their role and industry]
My solution: [brief description]
My relevant result: [specific outcome for a similar client]

Write a 4-touch LinkedIn follow-up sequence with these constraints:
- Touch 1 (Day 3): Different angle — a new insight or question related to their challenges
- Touch 2 (Day 7): Value add — share a relevant resource, article, or case study
- Touch 3 (Day 12): Social proof — reference the specific result from a similar company
- Touch 4 (Day 18): Soft breakup — leave the door open with one last piece of value

Rules for all touches:
1. 40–75 words each
2. Add new value every time — never repeat the same angle
3. No guilt, no pressure, no fake urgency
4. End with a low-friction question or an easy out
5. Sound like a real person, not a sales automation tool

Output all 4 messages with send-day labels.`}
                </pre>
              </div>
            </section>

            {/* Follow-Up Templates */}
            <section id="followup-templates">
              <h2>LinkedIn Follow-Up Templates (That Add Value, Not Pressure)</h2>
              <p>
                These are example outputs from the prompt above. Use them as reference or feed
                your own details into the prompt to generate custom versions.
              </p>

              <h3>Follow-Up 1: The Different Angle (Day 3)</h3>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — following up on my message about [original topic]. I realized I
                  approached it from [angle A], but I am curious about [angle B]. Most [job title]s
                  I talk to are wrestling with [specific challenge] right now. Is that on your radar,
                  or are you focused elsewhere?
                </p>
              </blockquote>

              <h3>Follow-Up 2: The Value Add (Day 7)</h3>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — came across this [article / report / framework] on [topic] and thought
                  of you. The section on [specific insight] directly addresses [challenge they face].
                  Here is the link: [link]. No ask — just thought it might be useful given our
                  earlier conversation.
                </p>
              </blockquote>

              <h3>Follow-Up 3: The Social Proof (Day 12)</h3>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — quick update: we just helped [Similar Company] reduce their [metric]
                  by [percentage] using [approach]. Given [Company]&apos;s focus on [similar goal], I
                  thought the case study might be relevant. Happy to share the details if you are
                  open to it — or not, no pressure either way.
                </p>
              </blockquote>

              <h3>Follow-Up 4: The Soft Breakup (Day 18)</h3>
              <blockquote className="prompt-block" style={{ background: "var(--bg-elevated)" }}>
                <p style={{ margin: 0 }}>
                  Hi [Name] — I will stop following up so I do not clutter your inbox. I genuinely
                  think [Company] could benefit from [outcome], but timing is everything. I will
                  stay connected here — feel free to reach out whenever makes sense for you. No
                  pressure at all.
                </p>
              </blockquote>

              <p>
                <strong>Why this sequence works:</strong> Each touch adds a different type of value.
                Day 3 shows you are thinking about their business from multiple angles. Day 7 gives
                them something useful regardless of whether they buy. Day 12 provides proof without
                bragging. Day 18 removes pressure — which, paradoxically, often produces the reply
                you were waiting for.
              </p>
            </section>

            {/* Mid-Content CTA */}
            <div className="article-cta-box">
              <h3>Want to see where your outreach is leaking replies?</h3>
              <p>
                Take the free <Link href="/audit">AI Audit</Link> — 20 questions that show exactly
                where AI can save you the most time in your sales process.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
              </Link>
            </div>

            {/* Mistakes Section */}
            <section id="mistakes">
              <h2>5 LinkedIn Outreach Mistakes to Avoid in 2026</h2>
              <p>
                These mistakes are not theoretical. They are the patterns we see every day in
                LinkedIn inboxes — and they are why most outreach fails.
              </p>

              <h3>Mistake 1: Pitching in the Connection Request</h3>
              <p>
                A connection request is not a sales channel. It is a door. Pitching in the 300-character
                note kills your acceptance rate and poisons the first impression. Your only job in a
                connection request is to get accepted. The pitch comes later, after they can see your
                full profile and you have built a thread of conversation.
              </p>

              <h3>Mistake 2: &quot;I Hope This Finds You Well&quot; Openers</h3>
              <p>
                This phrase signals that you have nothing specific to say. It is the verbal equivalent
                of a knock from a stranger. Every effective message opens with a signal hook — a
                specific observation about the prospect&apos;s business, content, or situation. If you
                cannot find a signal, you are messaging the wrong person.
              </p>

              <h3>Mistake 3: Asking for 30 Minutes in the First Message</h3>
              <p>
                A 30-minute meeting is a high-commitment ask from a stranger. No one gives 30 minutes
                to someone they do not know for a reason they do not understand. Start with a
                low-friction question that takes 10 seconds to answer. Earn the conversation first.
                The meeting comes after they have replied twice.
              </p>

              <h3>Mistake 4: Sending the Same Template to Everyone</h3>
              <p>
                Even &quot;personalized&quot; templates that swap out [Name] and [Company] are easy to spot.
                The tell is generic phrasing that could apply to anyone. Real personalization means
                referencing something that took 60 seconds of research to find. If you are not willing
                to spend 60 seconds per prospect, you are not doing outreach — you are doing advertising.
              </p>

              <h3>Mistake 5: No Follow-Up Plan (Or 8+ Follow-Ups)</h3>
              <p>
                Both extremes kill results. No follow-up means you quit before the conversation starts.
                Too many follow-ups train prospects to ignore you and trigger LinkedIn&apos;s spam filters.
                The sweet spot is 4 follow-ups over 18 days, each adding new value. After that, move on.
              </p>
            </section>

            {/* Research Section */}
            <section id="research">
              <h2>How to Research Any Prospect in 90 Seconds (No Sales Navigator)</h2>
              <p>
                You do not need expensive tools to find a signal. You need 90 seconds and the right
                checklist. Here is the free research workflow that powers every template in this guide.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>LinkedIn Profile (30 seconds)</strong>
                    <p>Check their headline, recent posts, and activity. Note one specific thing: a job change, a post topic, a comment they made, or a project they mentioned.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Company Page (30 seconds)</strong>
                    <p>Check their company&apos;s recent posts for product launches, funding news, hiring sprees, or event appearances. One signal is enough.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Quick Search (30 seconds)</strong>
                    <p>Google &apos;[Company] news&apos; or check their website blog. Look for one recent milestone, challenge, or industry shift worth referencing.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>The 90-second rule:</strong> If you cannot find a signal in 90 seconds,
                either you are not looking hard enough or this prospect is not active enough to
                warrant personalized outreach. Move to the next prospect. Volume without signals
                is spam.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: 90-Second Prospect Research</div>
                <pre className="prompt-text">
{`Paste the following into ChatGPT or Claude with the prospect&apos;s LinkedIn profile URL or a brief bio:

&quot;I am about to reach out to [name], [job title] at [company]. Here is what I found in 90 seconds:
- [Signal 1 from LinkedIn profile]
- [Signal 2 from company page or news]
- [Signal 3 from Google search or website]

In 3 bullet points, tell me:
1. What this person probably cares about most in their current role
2. One specific angle I should use in my first message
3. One low-friction question they would want to answer

Keep each bullet to one sentence.&quot;`}
                </pre>
              </div>
            </section>

            {/* Metrics Section */}
            <section id="metrics">
              <h2>LinkedIn Outreach Metrics to Track</h2>
              <p>
                What gets measured gets improved. Track these four metrics weekly and you will
                know exactly where your outreach needs work.
              </p>

              <div className="article-table">
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Target</th>
                      <th>What It Tells You</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Connection Acceptance Rate</td>
                      <td>35–50%</td>
                      <td>Are your targeting and connection notes working?</td>
                    </tr>
                    <tr>
                      <td>Reply Rate (First DM)</td>
                      <td>15–25%</td>
                      <td>Are your signal hooks and questions compelling?</td>
                    </tr>
                    <tr>
                      <td>Meeting Booking Rate</td>
                      <td>5–10%</td>
                      <td>Are you earning enough trust before the ask?</td>
                    </tr>
                    <tr>
                      <td>Follow-Up Reply Rate</td>
                      <td>20–30%</td>
                      <td>Are your follow-ups adding real value each time?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>A/B testing:</strong> Test one variable per week. This week, test two different
                signal hooks. Next week, test two different questions. Keep a simple spreadsheet:
                prospect, template variant, sent date, replied (yes/no). After 50 messages per variant,
                you will know what works for your audience.
              </p>
              <p>
                <strong>Tool note:</strong> A Google Sheet is enough for most small businesses. If you
                are sending 50+ outreach messages per week, consider a lightweight CRM like Pipedrive
                or HubSpot to track sequences. Do not over-engineer this. The goal is consistent
                execution, not perfect tracking.
              </p>
            </section>

            {/* Related Guides */}
            <section>
              <h2>Related Guides</h2>
              <p>
                Building a complete sales system? These guides work together with LinkedIn outreach
                to fill your pipeline from first touch to closed deal:
              </p>
              <ul>
                <li>
                  <Link href="/guides/ai-prompts-for-sales">AI Prompts for Sales</Link> —
                  Cold outreach, proposals, and objection handling across the full sales cycle.
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
                <li>
                  <Link href="/guides/write-sops-with-ai">Write SOPs in 10 Minutes Using ChatGPT</Link> —
                  Turn your outreach process into a documented, repeatable system your team can run.
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
              <h2>Ready to turn LinkedIn into a pipeline engine?</h2>
              <p>
                The <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes all the
                LinkedIn outreach prompts from this guide plus 70+ more for sales, customer service,
                marketing, and operations. One PDF. $19. Instant download.
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
