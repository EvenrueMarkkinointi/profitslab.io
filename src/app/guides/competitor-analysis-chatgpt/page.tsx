import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Competitor Analysis with ChatGPT: 5-Step Framework (2026)",
  description:
    "Learn how to do competitor analysis with ChatGPT in 45 minutes. Copy-paste prompts for battle cards, gap analysis, and weekly monitoring. Free audit available.",
  alternates: { canonical: "https://www.profitslab.io/guides/competitor-analysis-chatgpt/" },
  openGraph: {
    title: "Competitor Analysis with ChatGPT: 5-Step Framework | ProfitSlab",
    description:
      "Copy-paste ChatGPT prompts for competitor battle cards, gap analysis, and monitoring. Build a complete competitor analysis in 45 minutes.",
    url: "https://www.profitslab.io/guides/competitor-analysis-chatgpt/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can ChatGPT analyze competitors accurately?",
    a: "ChatGPT can analyze competitors based on information you provide or that exists in its training data. It excels at structuring analysis, identifying patterns, and generating frameworks. However, it cannot browse the live web in real time (unless using a web-enabled model), and it may hallucinate facts about lesser-known companies. Always verify claims against primary sources. Use ChatGPT for analysis and synthesis, not for raw data collection.",
  },
  {
    q: "What data should I NOT share with ChatGPT when analyzing competitors?",
    a: "Do not share confidential business information, proprietary customer data, internal financials, or non-public information about your own company that you would not want exposed. Also avoid prompting ChatGPT to scrape password-protected competitor sites, private databases, or conduct activities that violate terms of service. Stick to publicly available information: websites, public pricing, marketing materials, reviews, and news articles.",
  },
  {
    q: "How often should I do competitor analysis?",
    a: "Do a deep competitor analysis once per quarter (3-4 hours). Then run a 10-minute weekly check-in to track major changes: new pricing, product launches, messaging shifts, or leadership changes. The weekly monitoring system in this guide takes 10 minutes and keeps you from being surprised by market moves. Most small businesses analyze competitors reactively — the weekly rhythm makes it proactive.",
  },
  {
    q: "What is the difference between direct and indirect competitors?",
    a: "Direct competitors solve the same problem for the same audience in the same way (e.g., two CRM tools for small businesses). Indirect competitors solve the same problem differently (e.g., a spreadsheet-based workflow instead of a CRM) or solve a different problem that consumes the same budget (e.g., marketing software vs. hiring a freelancer). Both matter: direct competitors steal your customers, indirect competitors steal your budget.",
  },
  {
    q: "Can I use ChatGPT to scrape competitor websites?",
    a: "No. Using ChatGPT or any automated tool to scrape content from competitor websites without permission may violate their terms of service and potentially copyright law. Instead, manually visit competitor sites, take notes on what is publicly displayed, and feed those notes into ChatGPT for analysis. The analysis is fair game. Automated scraping is not. This guide only uses publicly available information and manual observation.",
  },
  {
    q: "How do I verify claims ChatGPT makes about competitors?",
    a: "Always verify with primary sources. If ChatGPT claims a competitor charges $99/month, check their pricing page. If it claims they serve 10,000 customers, look for press releases, LinkedIn employee counts, or Crunchbase data. Treat ChatGPT output as a hypothesis, not a fact. A good rule: verify every quantitative claim and every direct quote before using it in a decision.",
  },
  {
    q: "What is a competitor battle card and why do I need one?",
    a: "A competitor battle card is a one-page summary of a competitor: who they are, what they offer, how they price, who they target, their strengths, their weaknesses, and how to win against them. It gives your team a quick reference during sales calls, strategy meetings, and positioning decisions. Without battle cards, every competitive situation becomes a reactive scramble. With them, you enter every conversation prepared.",
  },
];

export default function CompetitorAnalysisChatGPT() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Competitor Analysis with ChatGPT: A 5-Step Framework for Small Business",
            description:
              "Learn how to do competitor analysis with ChatGPT in 45 minutes. Copy-paste prompts for battle cards, gap analysis, and weekly monitoring systems.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-06-19",
            dateModified: "2026-06-19",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/competitor-analysis-chatgpt/",
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
                name: "Competitor Analysis with ChatGPT",
                item: "https://www.profitslab.io/guides/competitor-analysis-chatgpt/",
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
              <span aria-hidden="true">\u203A</span>
              <Link href="/guides">Guides</Link>
              <span aria-hidden="true">\u203A</span>
              <span aria-current="page">Competitor Analysis with ChatGPT</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Strategy</span>
              <h1>Competitor Analysis with ChatGPT: A 5-Step Framework for Small Business</h1>
              <p className="article-lead">
                Most small businesses either ignore competitors or spend days on analysis that sits in a
                drawer. Learn how to do competitor analysis with ChatGPT in 45 minutes: map your
                landscape, build battle cards, spot gaps, and set up a 10-minute weekly monitoring
                system that keeps you ahead of market moves.
              </p>
              <div className="article-meta">
                <span>Updated June 2026</span>
                <span>\u00B7</span>
                <span>16 min read</span>
                <span>\u00B7</span>
                <span>Tested with GPT-4o, Claude 4, Gemini 2.5</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you\u2019ll learn:</strong>
              <ul>
                <li><a href="#why-fails">Why Most Competitor Analysis Fails (And How ChatGPT Fixes It)</a></li>
                <li><a href="#step1">Step 1: Map Your Competitor Landscape (10 Minutes)</a></li>
                <li><a href="#step2">Step 2: Build a Competitor Battle Card (15 Minutes)</a></li>
                <li><a href="#step3">Step 3: Spot Gaps and Opportunities (10 Minutes)</a></li>
                <li><a href="#step4">Step 4: Turn Analysis into Action (10 Minutes)</a></li>
                <li><a href="#step5">Step 5: Build a Weekly Competitor Monitoring System</a></li>
                <li><a href="#safety">Safety and Ethics: What Not to Do</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                You know you should analyze your competitors. But when you sit down to do it, the
                task feels enormous. Where do you start? What matters? How much is enough? Most small
                business owners open a spreadsheet, stare at it for 20 minutes, then close it and
                hope competitors do not matter. They do.
              </p>
              <p>
                <strong>Competitor analysis with ChatGPT</strong> changes the equation. Not because AI
                replaces your judgment — it does not. But because it compresses a 3-day research
                project into 45 minutes of structured prompts. The key is knowing what to ask, what to
                feed the AI, and what to ignore. This guide gives you the exact 5-step framework and
                copy-paste prompts to build a complete competitor intelligence system in under an hour.
              </p>
              <p>
                By the end, you will have: a mapped competitor landscape, a battle card for each key
                competitor, a gap analysis showing where you can win, an action plan with 3 priorities,
                and a weekly monitoring system that takes 10 minutes. No paid tools required. No MBA
                required. Just ChatGPT and the prompts below.
              </p>
            </section>

            {/* Section 1: Why Most Competitor Analysis Fails */}
            <section id="why-fails">
              <h2>Why Most Competitor Analysis Fails (And How ChatGPT Fixes It)</h2>

              <h3>The 3-Hour Research Trap</h3>
              <p>
                The traditional approach is broken. You open Google, search for competitors, visit 15
                websites, copy pricing into a spreadsheet, take screenshots, and 3 hours later you
                have a folder of unstructured notes and no clear insight. The problem is not effort.
                It is <strong>structure</strong>. Without a framework, you collect everything and analyze nothing.
              </p>
              <p>
                The three most common failures: <strong>scope creep</strong> (analyzing 20 competitors instead
                of the 5 that matter), <strong>data paralysis</strong> (collecting so much information you cannot
                see patterns), and <strong>inaction</strong> (completing the analysis but never using it to make a
                decision). ChatGPT fixes all three by forcing you to define your framework before you
                collect data, synthesizing patterns from scattered notes, and generating action items
                instead of reports.
              </p>

              <h3>What ChatGPT Can and Cannot Do</h3>
              <p>
                ChatGPT is excellent at analysis and terrible at real-time data collection. It cannot
                browse your competitor\u2019s website live (unless you are using a web-enabled model). It
                cannot access private databases. It may hallucinate facts about lesser-known companies.
                What it does brilliantly: structure scattered information, identify patterns you miss,
                generate comparison frameworks, and turn raw notes into actionable battle cards. Use it
                for the thinking, not the spying.
              </p>

              <h3>The 45-Minute Promise</h3>
              <p>
                This framework is designed for speed: 10 minutes to map competitors, 15 minutes to
                build battle cards, 10 minutes to spot gaps, 10 minutes to create actions, and 10 minutes
                to set up monitoring. Total: 45 minutes for your first analysis. Each subsequent
                quarterly update takes 20 minutes because the framework is already built. Weekly
                monitoring takes 10 minutes. The goal is not perfect intelligence. It is <strong>good enough
                intelligence, consistently</strong>.
              </p>
            </section>

            {/* Step 1: Map Your Competitor Landscape */}
            <section id="step1">
              <h2>Step 1: Map Your Competitor Landscape (10 Minutes)</h2>

              <h3>Direct vs. Indirect Competitors</h3>
              <p>
                Most businesses only track direct competitors and miss the indirect ones who are
                actually stealing their customers. Direct competitors solve the same problem for the
                same audience in the same way. Indirect competitors solve the same problem differently,
                or solve a different problem that consumes the same budget. Both matter. A direct
                competitor steals your customer. An indirect competitor steals your budget.
              </p>
              <p>
                Example: If you sell CRM software for real estate agents, direct competitors are other
                real estate CRMs. Indirect competitors are: Excel spreadsheets, generic CRMs like HubSpot,
                hiring an assistant to manage leads manually, and even pen-and-paper systems. The
                spreadsheet user is not comparing features. They are comparing price and simplicity.
                Your battle card for a spreadsheet competitor looks completely different than your
                battle card for another CRM.
              </p>

              <h3>The 5-Company Rule</h3>
              <p>
                You do not need 20 competitors. You need 5: 2 direct, 2 indirect, and 1 aspirational
                (the company you want to become). Analyzing more than 5 creates noise. Analyzing fewer
                than 3 misses important patterns. The 5-company rule keeps you focused on the competitors
                who actually shape your market.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 1: Competitor Discovery</div>
                <pre className="prompt-text">
{`My business:
- What I sell: [one-sentence description]
- Who I sell to: [target audience, be specific — e.g., real estate agents with 10-50 listings/year]
- My price point: [your price or range]
- My key differentiator: [the one thing you do best]

My known competitors: [list any you already know, or say "none known"]

Find 5 competitors using this framework:
1. Identify 2 direct competitors (same product category, same audience, similar price)
2. Identify 2 indirect competitors (solve same problem differently, or different product same budget)
3. Identify 1 aspirational competitor (larger, more successful, same space — who I want to become)

For each competitor, provide:
- Company name
- Website (if known)
- Category: Direct / Indirect / Aspirational
- What they sell (one sentence)
- Their price point (if publicly known)
- Their audience (be specific)
- Their key message (what they lead with on their homepage)
- Why they matter to me (one sentence)

If you cannot find a specific competitor, suggest how I can find them (search terms, directories, etc.).

Format as a table.`}
                </pre>
              </div>

              <p>
                <strong>How to use this:</strong> Fill in your business details, paste the prompt, and let
                ChatGPT generate your initial list. Then verify each competitor by visiting their website.
                Do not trust ChatGPT\u2019s pricing claims without checking. Add or remove competitors based on
                what you find. The goal is a verified list of 5, not a perfect list of 20.
              </p>
            </section>

            {/* Step 2: Build a Competitor Battle Card */}
            <section id="step2">
              <h2>Step 2: Build a Competitor Battle Card (15 Minutes)</h2>

              <h3>What Goes on a Battle Card</h3>
              <p>
                A battle card is a one-page summary of a competitor that your team can reference in 30
                seconds. It is not a research report. It is a decision-making tool. The best battle
                cards answer seven questions: Who are they? What do they sell? Who do they sell to?
                How much do they charge? What are their strengths? What are their weaknesses? How do
                we win against them?
              </p>
              <p>
                The battle card format is standardized so you can compare competitors side-by-side.
                When a prospect says \u201CI am also looking at [Competitor X],\u201D you open the battle card,
                see their weakness, and pivot the conversation to your strength in that exact area.
                No scrambling. No generic responses. Just prepared positioning.
              </p>

              <h3>The 7 Dimensions of Analysis</h3>
              <p>
                Every battle card covers the same seven dimensions so you can compare apples to apples:
              </p>
              <ul>
                <li><strong>Positioning:</strong> How do they describe themselves? What market do they claim?</li>
                <li><strong>Audience:</strong> Who is their ideal customer? How specific is their targeting?</li>
                <li><strong>Product:</strong> What do they actually sell? Core features, key benefits, delivery format</li>
                <li><strong>Pricing:</strong> How do they charge? What tiers? What is included at each level?</li>
                <li><strong>Strengths:</strong> What do they do better than you? Where do they win?</li>
                <li><strong>Weaknesses:</strong> What do they lack? Where are customers frustrated?</li>
                <li><strong>How to win:</strong> Your specific angle against this competitor, based on your strengths</li>
              </ul>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 2: Competitor Battle Card</div>
                <pre className="prompt-text">
{`Competitor name: [name]
Competitor website: [URL]
My business: [one-sentence description of what you sell]
My target audience: [who you sell to]
My key differentiator: [your main advantage]

I have visited their website and gathered the following notes:
[ paste your notes here — what you saw on their site, pricing page, feature list, testimonials, etc. ]

Create a battle card with these 7 sections. Use bullet points, not paragraphs. Keep each section to 3-5 bullets maximum:

1. POSITIONING: How do they position themselves? What is their main claim or promise?
2. AUDIENCE: Who do they target? How specific is their messaging?
3. PRODUCT: What do they sell? Core features, format, delivery
4. PRICING: Pricing structure, tiers, what is included, what costs extra
5. STRENGTHS: What do they do well? Where would they beat me in a head-to-head?
6. WEAKNESSES: What do they lack? What do reviews or their site reveal as gaps?
7. HOW TO WIN: Given my differentiator, what is my angle against this competitor? Give me 2-3 specific positioning statements or responses I can use when a prospect mentions them

If my notes are incomplete, flag what information is missing and suggest where to find it.

Format as a clean, scannable summary — not an essay.`}
                </pre>
              </div>

              <p>
                <strong>Example battle card excerpt:</strong> For a fictional local coffee shop competing
                against Starbucks, the battle card might show: Positioning = \u201Cconsistent, convenient,
                everywhere\u201D; Weakness = \u201Cno local community connection, generic experience\u201D; How to
                Win = \u201CWe know your name and your order. We source from a roaster 2 miles away. Our
                loyalty program is handwritten, not an app.\u201D That is a positioning angle, not a price
                war.
              </p>
            </section>

            {/* Step 3: Spot Gaps and Opportunities */}
            <section id="step3">
              <h2>Step 3: Spot Gaps and Opportunities (10 Minutes)</h2>

              <h3>Finding the White Space</h3>
              <p>
                Once you have battle cards for 3-5 competitors, patterns emerge. Everyone is targeting
                the same audience. Everyone is emphasizing the same feature. Everyone is priced within
                10% of each other. The white space is what nobody is doing — or what everyone is doing
                poorly. That is where you win.
              </p>
              <p>
                White space analysis requires looking across competitors, not just at each one. Where
                do all competitors underinvest? Where are customers complaining in reviews that nobody
                seems to address? What audience segment is ignored? What business model is missing?
                ChatGPT excels at this cross-competitor pattern recognition because it can hold 5
                battle cards in context and compare them simultaneously.
              </p>

              <h3>Pricing, Positioning, and Messaging Gaps</h3>
              <p>
                The three most valuable gaps to find: pricing gaps (everyone is expensive, so there is
                room for a premium or budget option), positioning gaps (everyone claims to be the
                easiest, so there is room for the most powerful or the most specialized), and messaging
                gaps (everyone uses the same jargon, so plain language becomes a differentiator). The
                prompt below forces ChatGPT to find all three.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 3: Gap Analysis</div>
                <pre className="prompt-text">
{`My business: [one-sentence description]
My audience: [target customer]
My differentiator: [what makes me unique]

Here are battle cards for my top competitors:
[ paste 3-5 battle cards here ]

Analyze these competitors for gaps and opportunities using this framework:

1. PRICING GAPS:
   - Where is the pricing cluster? (most competitors are in what range?)
   - Is there room above or below that cluster?
   - What pricing model is nobody using? (subscription vs. one-time, usage-based, freemium, etc.)

2. POSITIONING GAPS:
   - What claim do 3+ competitors make? (e.g., "easiest to use")
   - What claim is nobody making? (e.g., "most powerful for enterprises")
   - What audience is nobody targeting specifically?

3. MESSAGING GAPS:
   - What jargon or cliche appears on 3+ competitor sites?
   - What emotional need is nobody addressing? (e.g., confidence, belonging, simplicity)
   - What proof point is missing? (e.g., nobody shows real customer results)

4. PRODUCT GAPS:
   - What feature do customers complain about in reviews that nobody has solved?
   - What integration or workflow is missing?
   - What delivery format is underused? (e.g., everyone is SaaS, nobody offers a done-for-you service)

5. MY BEST OPPORTUNITY:
   - Given my differentiator, which gap should I exploit first?
   - What is the specific positioning statement or message that captures this gap?
   - What is the risk? (why might this gap exist — because it is not valuable, or because it is hard?)

Rate each gap as High / Medium / Low opportunity based on: how easy it is for me to execute, how valuable it is to my audience, and how defensible it is against competitors copying me.`}
                </pre>
              </div>

              <p>
                <strong>How to use this:</strong> Paste your battle cards into the prompt and run it
                once per quarter. The output is your strategic roadmap for the next 90 days. Focus on
                the \u201CHigh\u201D opportunities first. Do not try to exploit every gap. Pick one, execute it
                well, then return to the analysis.
              </p>
            </section>

            {/* Mid-Content CTA */}
            <div className="article-cta-box">
              <h3>Want a Second Opinion on Your Positioning?</h3>
              <p>
                Competitor analysis reveals gaps, but it also reveals blind spots in your own positioning.
                ProfitSlab\u2019s free AI audit analyzes your current messaging, pricing, and audience
                targeting against 50+ competitive positioning patterns — and shows you exactly where
                you are vulnerable and where you are winning.
              </p>
              <Link href="/audit" className="btn-primary">
                Run My Free Audit \u2192
              </Link>
            </div>

            {/* Step 4: Turn Analysis into Action */}
            <section id="step4">
              <h2>Step 4: Turn Analysis into Action (10 Minutes)</h2>

              <h3>From Insight to Decision</h3>
              <p>
                The biggest failure in competitor analysis is the analysis that never becomes action.
                You build beautiful battle cards, find brilliant gaps, and then... nothing changes. The
                fix is the 3-Action Rule: every analysis produces exactly 3 actions, no more, no less.
                Three actions is enough to make progress. Fewer than 3 and you are not acting. More
                than 3 and you are not focused.
              </p>

              <h3>The 3-Action Rule</h3>
              <p>
                The 3 actions must be specific, time-bound, and assigned. Not \u201Cimprove our messaging\u201D
                but \u201CRewrite homepage headline to emphasize [specific gap] by Friday, assign to [name].\u201D
                Not \u201Cconsider a new pricing tier\u201D but \u201CTest a $29 starter tier against current $99 plan
                for 30 days, starting Monday, measure conversion rate.\u201D Specificity is what separates
                analysis from action.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 4: Action Plan Generator</div>
                <pre className="prompt-text">
{`My business: [one-sentence description]
My current priority: [what you are focused on right now — e.g., increasing conversions, entering a new market, reducing churn]
My resources: [what you have available — e.g., 1 developer, $500/month budget, 10 hours/week]

Here is my gap analysis from competitor research:
[ paste gap analysis here ]

Generate exactly 3 actions based on this analysis. Each action must include:
1. ACTION: What exactly to do (one sentence, specific and concrete)
2. WHY: Which gap this exploits and why it matters now
3. HOW: Step-by-step implementation (3-5 steps)
4. WHO: Who does this (can be "me" or a specific role)
5. WHEN: Deadline or timeline
6. SUCCESS METRIC: How we know it worked (specific number or outcome)
7. RISK: What could go wrong and how to mitigate it

The 3 actions must be:
- One quick win (can be done in under 1 week, low risk, visible result)
- One strategic move (takes 2-4 weeks, higher impact, requires more resources)
- One experiment (test something for 30 days, measure result, decide to scale or kill)

Do not give me more than 3 actions. Do not give me vague advice. Every action must be something I could start today.`}
                </pre>
              </div>

              <p>
                <strong>Example quick win:</strong> Rewrite your homepage headline to address the gap
                everyone is ignoring. If all competitors claim \u201Ceasiest to use,\u201D and your gap analysis
                shows nobody is claiming \u201Cmost powerful reporting,\u201D your quick win is testing a headline
                that leads with reporting depth. Change the headline, run it for 2 weeks, measure bounce
                rate and trial signups. Total time: 2 hours. Potential impact: 15-30% conversion improvement
                if the gap is real.
              </p>
            </section>

            {/* Step 5: Weekly Monitoring System */}
            <section id="step5">
              <h2>Step 5: Build a Weekly Competitor Monitoring System</h2>

              <h3>The 10-Minute Weekly Check-In</h3>
              <p>
                Competitor analysis is not a one-time event. Markets move. Competitors launch new
                features, change pricing, hire new leadership, and shift messaging. The goal of weekly
                monitoring is not to track everything. It is to spot the 10% of changes that matter
                and ignore the 90% that do not. The 10-minute check-in keeps you from being surprised.
              </p>
              <p>
                Your weekly monitoring covers 4 areas: website changes (pricing, messaging, new pages),
                content and marketing (new blog posts, case studies, webinars), social and reviews
                (LinkedIn activity, customer complaints, praise), and business signals (funding, hiring,
                partnerships, acquisitions). You do not need to read everything. You need to know what
                changed and whether it matters to you.
              </p>

              <h3>What to Track (And What to Ignore)</h3>
              <p>
                Track: pricing changes (immediately relevant to your positioning), messaging shifts
                (they are repositioning — why?), new product launches (direct threat or opportunity),
                and customer complaints in reviews (their weakness, your opportunity). Ignore: minor
                website redesigns, routine blog posts, social media engagement numbers, and executive
                quotes that do not signal strategy changes. Focus on decisions that affect your market
                position, not activity for activity\u2019s sake.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt 5: Weekly Competitor Monitoring</div>
                <pre className="prompt-text">
{`My 5 key competitors: [list names and websites]
What I track: [website, pricing, content, reviews, social, hiring, funding]

Here is what I observed this week:
[ paste your notes — what changed on their sites, what they posted, what you heard ]

Analyze my weekly notes and produce:

1. CHANGES DETECTED: What changed this week for each competitor? (bullet points, max 3 per competitor)
2. WHAT MATTERS: Which changes are strategically significant? (could affect my positioning, pricing, or audience)
3. WHAT DOES NOT MATTER: Which changes are noise? (routine activity, minor updates, no strategic impact)
4. RED FLAGS: Any changes that require immediate action from me? (price cuts, new features in my core area, entering my audience)
5. MY RESPONSE: For each red flag, what is my recommended response? (ignore, monitor, act — and if act, what specifically)
6. NEXT WEEK PRIORITY: What should I watch most closely next week? (1-2 specific things)

Keep the entire analysis to one page. I review this every Monday morning in 10 minutes.`}
                </pre>
              </div>

              <p>
                <strong>How to use this:</strong> Every Monday, spend 10 minutes visiting each competitor\u2019s
                website and scanning their recent activity. Take 2-3 bullet points of notes per competitor.
                Paste those notes into the prompt above. ChatGPT structures the analysis, flags what
                matters, and tells you what to ignore. You walk away with a one-page summary and clear
                priorities for the week. Over time, you build a dataset of competitor moves that reveals
                patterns: who is aggressive, who is struggling, who is pivoting, and where the market is
                heading.
              </p>

              <h3>Red Flags That Need Immediate Attention</h3>
              <p>
                Some competitor changes require same-day action, not next-week monitoring. These are
                your red flags: a competitor drops prices into your tier (pricing war risk), a competitor
                launches a feature that is your core differentiator (erosion of advantage), a competitor
                starts targeting your exact niche (audience collision), or a well-funded competitor
                announces expansion into your geography (resource asymmetry). When any of these happen,
                drop the weekly rhythm and run an emergency analysis using Prompt 2 (Battle Card) to
                understand the new threat and Prompt 4 (Action Plan) to decide your response.
              </p>
            </section>

            {/* Safety and Ethics */}
            <section id="safety">
              <h2>Safety and Ethics: What Not to Do</h2>

              <h3>Do Not Violate Terms of Service or Scrape Private Data</h3>
              <p>
                Using ChatGPT to analyze competitors is legal and ethical when you stick to publicly
                available information. It is not ethical when you prompt the AI to scrape competitor
                websites, access password-protected areas, or gather non-public information. Do not
                ask ChatGPT to \u201Cfind the internal pricing spreadsheet\u201D or \u201Cget me their customer list.\u201D
                These requests are not just unethical — they may be illegal. The prompts in this guide
                only use information you could gather by visiting a competitor\u2019s public website or reading
                their public reviews.
              </p>

              <h3>Do Not Share Your Own Confidential Data in Prompts</h3>
              <p>
                Be careful what you paste into ChatGPT. If you share your internal financial projections,
                customer lists, or proprietary product roadmap, that data may be used to train future
                models. OpenAI and Anthropic have improved privacy controls, but the safest rule is:
                do not share anything in a prompt that you would not publish on your website. Keep
                competitor analysis focused on <strong>their</strong> public information, not <strong>your</strong> private plans.
              </p>

              <h3>Verify Everything ChatGPT Claims</h3>
              <p>
                ChatGPT hallucinates. It may confidently state that a competitor charges $99/month when
                they actually charge $149. It may claim a competitor serves 50,000 customers when the
                real number is 5,000. Every quantitative claim, every direct quote, and every factual
                assertion about a competitor should be verified against a primary source. Treat ChatGPT
                output as a structured hypothesis, not verified truth. The analysis is valuable even
                with verification. It is dangerous without it.
              </p>
            </section>

            {/* Related Guides */}
            <section>
              <h2>Related Guides</h2>
              <p>
                Building a complete competitive intelligence system? These guides complement this
                framework and help you act on what you learn:
              </p>
              <ul>
                <li>
                  <Link href="/guides/how-to-use-chatgpt-for-business">How to Use ChatGPT for Business</Link>{" "}
                  — The foundational guide for using AI across customer service, sales, marketing, and operations.
                </li>
                <li>
                  <Link href="/guides/ai-business-data-analysis">AI Business Data Analysis</Link>{" "}
                  — Turn the competitor data you collect into actionable insights with structured analysis prompts.
                </li>
                <li>
                  <Link href="/guides/write-sops-with-ai">Write SOPs with AI</Link>{" "}
                  — Document your competitor monitoring process as a standard operating procedure your team can follow.
                </li>
                <li>
                  <Link href="/guides/quarterly-planning-with-ai">Quarterly Planning with AI: Structured Goals in 45 Minutes</Link>{" "}
                  — Use your competitor analysis to set strategic goals and allocate resources for the next quarter.
                </li>
                <li>
                  <Link href="/guides/best-ai-tools-small-business">Best AI Tools for Small Business</Link>{" "}
                  — Discover specialized competitive intelligence tools if you outgrow the ChatGPT-only approach.
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
              <h2>Stop Guessing. Start Knowing.</h2>
              <p>
                Competitor analysis with ChatGPT gives you a framework. But building a complete
                competitive intelligence system still requires time, discipline, and iteration. ProfitSlab
                automates the monitoring, analysis, and action planning — so you know what competitors
                are doing, what it means for you, and exactly how to respond, without spending hours
                every week on manual research.
              </p>
              <Link href="/" className="btn-primary">
                See How It Works \u2192
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
        <p className="footer-copyright">\u00A9 2026 ProfitSlab. All rights reserved.</p>
      </footer>
    </>
  );
}
