import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "AI for Real Estate: Listings, Replies, Follow-Ups",
  description:
    "Use free AI to write real estate listings, reply to leads in 5 minutes, and build follow-up sequences that convert. Copy-paste prompts for agents.",
  alternates: { canonical: "https://www.profitslab.io/guides/ai-for-real-estate/" },
  openGraph: {
    title: "AI for Real Estate: Listings, Replies, Follow-Ups | ProfitSlab",
    description:
      "Use free AI to write real estate listings, reply to leads in 5 minutes, and build follow-up sequences that convert. Copy-paste prompts for agents.",
    url: "https://www.profitslab.io/guides/ai-for-real-estate/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can I use free ChatGPT for real estate listings?",
    a: "Yes. The free tier of ChatGPT, Claude, or Gemini handles listing descriptions, lead replies, follow-up emails, market reports, and social media content. The output quality depends on your prompt structure, not your subscription level. For agents handling under 50 listings per year and under 100 leads per month, free AI is sufficient. Upgrade to paid tiers only when you need faster response times, longer context windows for complex market analyses, or API access to integrate with your CRM. The key constraint: never paste client-identifying data (names, addresses, financial details) into any AI tool. Use property addresses and general descriptions only."
  },
  {
    q: "Is it safe to paste property details into AI?",
    a: "It depends on what data and which tool. Safe to paste: property addresses, square footage, bedroom/bath counts, general neighborhood names, listing prices, and property features. Use paid tiers (ChatGPT Plus, Claude Pro, Gemini Advanced) which do not train on your conversations. Never paste: client full names, contact information, financial details, Social Security numbers, or any data covered by privacy regulations. For extra safety, anonymize before pasting: replace \u0022The Johnson family\u0027s home at 123 Main St\u0022 with \u0022Single-family home at [address]\u0022. This 10-second habit eliminates 99% of data risk while preserving everything the AI needs to write great copy."
  },
  {
    q: "Will AI-generated listings sound generic?",
    a: "Only if you use generic prompts. The prompts in this guide are designed to produce listings that sound like a top-producing agent wrote them. The key techniques: feed the AI hyperlocal details (nearby cafes, school ratings, commute times), specify architectural style and feeling, include recent upgrades with specifics (\u0022quartz countertops\u0022 not \u0022updated kitchen\u0022), and tell the AI to avoid clichés like \u0022cozy,\u0022 \u0022charming,\u0022 \u0022must-see,\u0022 and \u0022rare find.\u0022 Test every prompt with 3-5 real properties before using it live. If a listing sounds generic, edit the prompt — add constraints like \u0022write for a buyer who values walkability over square footage\u0022 or \u0022emphasize the morning light in the kitchen.\u0022 The best agents using AI sound more distinctive than agents writing from scratch because AI handles the structure while they layer in the local knowledge that only a human knows."
  },
  {
    q: "How much time can AI save a real estate agent?",
    a: "The average agent writes 50-100 listing descriptions per year. From scratch, each takes 30-45 minutes. With AI, the same description takes under 5 minutes. That alone saves 20-40 hours per year. Lead replies drop from 10-15 minutes of drafting and second-guessing to under 2 minutes. Follow-up sequences that once took an hour to plan now take 10 minutes. Market reports that required data compilation and writing now take 15 minutes. Total savings: 6-10 hours per week for a typical agent. At a conservative $50/hour value for an agent\u0026apos;s time, that is $1,200-2,000 per month in recovered time — or 2-3 additional listings per year if reinvested into prospecting. The upfront investment is 30 minutes to build your prompt library."
  },
  {
    q: "Do AI listing descriptions comply with fair housing laws?",
    a: "AI does not inherently know fair housing law. You must guide it. The prompts in this guide include explicit constraints to avoid discriminatory language: no references to race, religion, family status, disability, or national origin. No coded language like \u0022quiet neighborhood\u0022 (can imply discrimination) or \u0022perfect for families\u0022 (violates familial status protections). Always review AI-generated listings before publishing. NAR has warned that AI-enhanced listing photos can misrepresent properties and violate deceptive advertising rules. California now requires disclosures for digitally altered images in listings. When in doubt, have your broker review the output. AI is a drafting tool, not a compliance officer."
  },
  {
    q: "Can AI handle follow-up for buyer AND seller leads?",
    a: "Yes. The follow-up prompts in this guide work for both buyer and seller leads with simple adjustments to the context variables. Buyer follow-ups focus on property matches, showing schedules, and pre-approval check-ins. Seller follow-ups focus on market updates, CMA refreshes, and listing preparation tips. The 7-touch sequence framework applies to both — only the content of each touch changes. The key is feeding the AI the right lead type and context so it generates relevant, valuable follow-up instead of generic check-ins. Many agents find that AI-generated seller follow-ups are actually stronger because seller leads respond to data (market trends, comparable sales) while buyer leads respond to emotion (lifestyle fit, visualization)."
  },
  {
    q: "What is the best AI tool for real estate agents?",
    a: "Start with ChatGPT (free tier) for listing descriptions and market reports. It produces the most structured, MLS-ready output. Use Claude (free tier) for client-facing emails and follow-ups — Claude writes the most natural, warm-sounding messages that avoid the overly formal tone that screams AI. Use Gemini (free tier) if you are already in Google Workspace and want everything in one ecosystem, or if you need multilingual listings (Gemini\u0026apos;s translation quality is excellent). The practical answer: test all three with the same listing prompt. Pick the one whose output sounds most like your voice. The tool matters far less than the prompt structure. A well-structured prompt in a free tool beats a vague prompt in a $200/month tool every time."
  },
];

export default function AIForRealEstate() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI for Real Estate: Write Listings, Reply to Leads, and Follow Up in Minutes",
            description:
              "Use free AI to write real estate listings, reply to leads in 5 minutes, and build follow-up sequences that convert. Copy-paste prompts for agents.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-07-24",
            dateModified: "2026-07-24",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/ai-for-real-estate/",
            },
            image: "https://www.profitslab.io/images/og-image.png",
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
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.profitslab.io/guides/" },
              {
                "@type": "ListItem",
                position: 3,
                name: "AI for Real Estate",
                item: "https://www.profitslab.io/guides/ai-for-real-estate/",
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

      <main className="hub-main">
        <div className="hub-main-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <Link href="/guides">Guides</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <span aria-current="page">AI for Real Estate</span>
            </div>
          </nav>

          <article className="article-content">
            <header className="article-hero">
              <span className="article-tag">Industry Guide</span>
              <h1>AI for Real Estate: Write Listings, Reply to Leads, and Follow Up in Minutes</h1>
              <p className="article-lead">
                The average agent writes 50 to 100 listing descriptions per year. From scratch, each
                one takes 30 to 45 minutes. Lead replies get drafted at 11 PM or not at all. Follow-up
                sequences live as good intentions in a CRM that nobody updates. AI changes all three.
                Not with expensive platforms. Not with developer-built integrations. With copy-paste
                prompts into free AI tools. This guide gives you the exact prompts to write listings
                that convert, reply to leads in under 5 minutes, and build follow-up sequences that
                actually nurture. No code. No subscriptions. Just hours of your week back and more
                closings in your pipeline.
              </p>
              <div className="article-meta">
                <span>Updated July 2026</span>
                <span>&middot;</span>
                <span>14 min read</span>
                <span>&middot;</span>
                <span>Prompts tested July 2026</span>
              </div>
            </header>

            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#problem">The 3-Hour Agent Problem</a></li>
                <li><a href="#listings">Listing Descriptions That Stop the Scroll</a></li>
                <li><a href="#leads">Speed-to-Lead: Reply Before Your Competition</a></li>
                <li><a href="#followup">Follow-Up Sequences That Actually Convert</a></li>
                <li><a href="#market">Market Reports and CMA Summaries in Minutes</a></li>
                <li><a href="#social">Social Media Captions and Video Scripts</a></li>
                <li><a href="#workflow">Build Your Real Estate AI System</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            <section id="problem">
              <h2>The 3-Hour Agent Problem (And the Data Behind It)</h2>
              <p>
                Real estate runs on three repetitive, high-stakes tasks: writing listings that attract
                buyers, replying to leads before they go cold, and following up until a deal closes.
                Each one is critical. Each one is time-consuming. And each one follows predictable
                patterns that AI handles exceptionally well.
              </p>
              <p>
                Here is the math that should get your attention. According to the National Association
                of Realtors, 96% of home buyers use the internet during their property search. Most
                scan photos first — but the listing description answers the questions that convert
                browsing into showings. What is the neighborhood like? How recently was the kitchen
                renovated? Is there parking? Properties with well-crafted descriptions receive 40% more
                inquiries than those with basic listings. And yet the average agent spends 30 to 45
                minutes staring at a blank MLS field for every single description. At 50-100 listings
                per year, that is 25 to 75 hours of writing — just for descriptions.
              </p>
              <p>
                Then there is lead response. A lead who inquires at 9:00 AM and gets a reply at 9:05 AM
                is 391% more likely to connect than one who waits 30 minutes, according to MIT research
                on speed-to-lead. After 5 minutes, the odds drop dramatically. Most agents know this.
                Most agents also have showings, closings, inspections, and life happening between the
                lead coming in and the reply going out. The result: leads die in inboxes.
              </p>
              <p>
                Finally, follow-up. The NAR reports that 80% of sales require 5 or more follow-up
                touches, yet 44% of agents give up after one. It is not lack of will. It is lack of
                time and mental bandwidth to craft thoughtful, varied follow-up messages week after
                week. The same \u0022just checking in\u0022 email gets sent three times, then abandoned.
              </p>
              <p>
                AI does not eliminate the human judgment that makes a great agent. It eliminates the
                blank-page paralysis, the delayed replies, and the abandoned follow-up sequences. The
                agent still chooses the strategy. The agent still adds the local knowledge. The agent
                still closes the deal. AI just removes the friction that kills momentum.
              </p>

              <table className="article-table">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Weekly Volume</th>
                    <th>Time (Manual)</th>
                    <th>Time (With AI)</th>
                    <th>Weekly Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Listing descriptions</td>
                    <td>1-3</td>
                    <td>1-2 hrs</td>
                    <td>10 min</td>
                    <td>~1.5 hrs</td>
                  </tr>
                  <tr>
                    <td>Lead replies</td>
                    <td>10-20</td>
                    <td>2-3 hrs</td>
                    <td>20 min</td>
                    <td>~2.5 hrs</td>
                  </tr>
                  <tr>
                    <td>Follow-up messages</td>
                    <td>15-30</td>
                    <td>2-4 hrs</td>
                    <td>30 min</td>
                    <td>~3 hrs</td>
                  </tr>
                  <tr>
                    <td>Market reports / CMAs</td>
                    <td>2-4</td>
                    <td>1-2 hrs</td>
                    <td>15 min</td>
                    <td>~1.5 hrs</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td>28-57</td>
                    <td><strong>6-11 hrs</strong></td>
                    <td><strong>75 min</strong></td>
                    <td><strong>~8 hrs</strong></td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="listings">
              <h2>Listing Descriptions That Stop the Scroll</h2>
              <p>
                Photos stop the scroll. The description closes the showing request. Zillow, Realtor.com,
                and most MLS search tools index listing descriptions for keywords. An agent who writes
                \u0022updated kitchen\u0022 instead of \u0022renovated kitchen with quartz countertops, gas range,
                and custom cabinetry\u0022 is leaving search visibility on the table. More specific
                descriptions show up in more buyer searches — and convert more browsers into scheduled
                showings.
              </p>

              <h3>What Makes a Listing Description Work</h3>
              <p>
                Great listing descriptions do four things: they open with an emotional hook that makes
                a buyer picture themselves living there, they weave features into lifestyle benefits
                rather than listing them, they include hyperlocal details that only a local agent would
                know, and they end with a clear, specific call to action. The most common mistake is
                treating the description as a feature dump. Buyers do not buy square footage. They buy
                Sunday morning coffee on the patio and a commute that does not crush their soul.
              </p>
              <p>
                The second most common mistake is clichés. \u0022Cozy,\u0022 \u0022charming,\u0022 \u0022must-see,\u0022 \u0022rare
                find,\u0022 \u0022nestled\u0022 — these words appear in so many listings that buyers mentally skip
                them. They signal \u0022this agent did not try.\u0022 AI can help you avoid them, but only if
                you tell it to.
              </p>

              <h3>The Input Gathering Checklist</h3>
              <p>
                Before you write — or prompt AI to write — gather these inputs: property type and
                architectural style, bedroom/bath count and square footage, lot size and outdoor
                features, recent updates with specifics (not \u0022updated\u0022 but \u0022new HVAC 2024, quartz
                counters, refinished hardwood\u0022), the 3 best features that differentiate this home
                from comps, neighborhood lifestyle benefits (walk score, schools, commute, cafes,
                parks), and the target buyer profile (first-time buyer, downsizer, investor). The
                more specific your inputs, the more distinctive your output. AI is a mirror: it
                reflects the quality of what you feed it.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 1: Listing Description Generator</div>
                <pre className="prompt-text">
{`ROLE: You are a top-producing real estate agent known for listing descriptions that convert browsers into showings. Write a market-ready listing description.

PROPERTY DETAILS:
- Property type: [SINGLE-FAMILY / CONDO / TOWNHOME / ETC.]
- Location: [CITY, STATE / NEIGHBORHOOD]
- Price point: [PRICE OR RANGE]
- Bedrooms: [#]
- Bathrooms: [#]
- Square footage: [#]
- Lot size: [#] or N/A
- Architectural style: [STYLE / VIBE]
- Best features: [LIST 3-5 SPECIFIC FEATURES]
- Recent updates: [LIST WITH YEARS IF KNOWN]
- Outdoor features: [YARD / PATIO / DECK / ETC.]
- Nearby lifestyle benefits: [PARKS / SCHOOLS / COMMUTE / SHOPS / WALKABILITY]
- Target buyer: [FIRST-TIME BUYER / YOUNG FAMILY / DOWNSIZER / ETC.]
- Tone: [WARM / MODERN / ASPIRATIONAL / GROUNDED]
- Character limit: [500 / 750 / 1000]

REQUIREMENTS:
1. Open with a strong hook that creates an immediate emotional pull and makes a buyer stop scrolling
2. Write in a smooth, natural flow — not as a list of features
3. Highlight the home\u0026apos;s most compelling details organically, showing how they improve daily life
4. Speak directly to the aspirations and lifestyle of the target buyer
5. Include 2-3 hyperlocal details that only a local expert would know
6. Keep the description within the character limit
7. End with a strong, specific call to action that encourages a viewing
8. Do NOT use clichés: \u0022cozy,\u0022 \u0022must-see,\u0022 \u0022charming,\u0022 \u0022rare find,\u0022 \u0022nestled,\u0022 \u0022hidden gem,\u0022 \u0022perfect for entertaining\u0022
9. Do NOT use fair housing violations: no references to race, religion, family status, disability, national origin, or coded language like \u0022quiet neighborhood\u0022 or \u0022perfect for families\u0022
10. Do NOT sound salesy, cheesy, or generic

OUTPUT: Only the final listing description. No notes, no commentary.`}
                </pre>
              </div>

              <h3>Multilingual Listings for Diverse Markets</h3>
              <p>
                In markets with significant non-English-speaking populations, multilingual listings
                are a competitive advantage most agents ignore. A listing description in Spanish,
                Mandarin, or Vietnamese reaches buyers who never search in English — and signals that
                you understand the community. The workflow is simple: write the English version with
                AI, then translate with a second prompt. Store each version in your marketing folder
                and post simultaneously across platforms.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 2: Listing Translation</div>
                <pre className="prompt-text">
{`ROLE: You are a professional real estate translator. Translate the following listing description while preserving tone, accuracy, and cultural relevance.

ORIGINAL LISTING:
[Paste your English listing description here]

TARGET LANGUAGE: [SPANISH / MANDARIN / ETC.]
TARGET MARKET: [CITY / REGION] — adapt references to local norms

REQUIREMENTS:
1. Maintain the original tone (warm, aspirational, grounded, etc.)
2. Translate real estate terms accurately using local market conventions
3. Adapt measurements if needed (sq ft to sq m, etc.)
4. Keep the same structure: hook, lifestyle benefits, hyperlocal details, call to action
5. Do NOT add or remove information
6. Do NOT use fair housing violations in the target language either

OUTPUT: Only the translated listing description.`}
                </pre>
              </div>

              <h3>Fair Housing and Compliance: What AI Does Not Know</h3>
              <p>
                AI does not understand fair housing law. You must guide it — and review everything
                before publishing. NAR has warned that AI-enhanced listing photos can misrepresent
                properties and become risky when they violate deceptive advertising rules. New York\u0026apos;s
                Department of State has issued warnings about digitally altered images, and California
                now requires disclosures for digitally altered images in listings along with access
                to the original unaltered photos. The prompts in this guide include explicit fair
                housing constraints, but the final review is always your responsibility. When in
                doubt, have your broker review the output.
              </p>
            </section>

            <section id="leads">
              <h2>Speed-to-Lead: Reply Before Your Competition</h2>
              <p>
                The MIT lead response study is brutal: a lead who gets a reply within 5 minutes is
                391% more likely to connect than one who waits 30 minutes. After 5 minutes, the odds
                drop. After 30 minutes, you might as well not have replied at all. The problem is not
                that agents do not care. It is that agents are showing homes, in inspections, in
                closings, or simply offline when leads come in. AI fixes the speed problem by giving
                you a reply draft in under 60 seconds. You edit and send. The lead gets a thoughtful,
                personalized response while your competition is still driving back to the office.
              </p>

              <h3>The Lead Reply Framework</h3>
              <p>
                Every effective lead reply has four parts: acknowledge the inquiry immediately and
                warmly, qualify without interrogating (one or two strategic questions), add value
                beyond what they asked for (a relevant listing, a market insight, a resource), and
                give a clear next step with options. The mistake most agents make is jumping straight
                to scheduling or sending a generic \u0022thanks for your interest\u0022 message. Both feel
                robotic. AI can handle the warmth and structure if you give it the right framework.
              </p>

              <h3>Portal Leads vs. Open House Leads vs. Referrals</h3>
              <p>
                Not all leads are equal, and your reply should reflect that. Portal leads (Zillow,
                Realtor.com) are comparison shopping — they inquired on multiple properties and may
                not remember which one yours was. Your reply must reference the specific property and
                suggest alternatives. Open house leads are warm — they walked through the door and
                spent time. Your reply should reference something specific from the showing.
                Referrals are hot — they trust the source. Your reply should acknowledge the referral
                and move fast to schedule. The prompt below handles all three with simple context
                adjustments.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 3: Instant Lead Reply Generator</div>
                <pre className="prompt-text">
{`ROLE: You are a responsive, professional real estate agent. Write a lead reply that converts inquiries into conversations.

AGENT DETAILS:
- Name: [YOUR NAME]
- Brokerage: [BROKERAGE]
- Market area: [CITY / AREA]
- Specialty: [BUYERS / SELLERS / LUXURY / INVESTORS]
- Tone: [WARM AND FRIENDLY / PROFESSIONAL AND DIRECT / HIGH-END / ETC.]

LEAD DETAILS:
- Lead source: [ZILLOW / REALTOR.COM / OPEN HOUSE / REFERRAL / FACEBOOK / ETC.]
- Property of interest: [ADDRESS OR TYPE]
- Lead name: [NAME OR \u0022NOT PROVIDED\u0022]
- Inquiry time: [TIME RECEIVED]
- Any notes from showing/conversation: [SPECIFIC DETAILS]

TASK: Write a lead reply following this structure:
1. ACKNOWLEDGE (1-2 sentences): Thank them for reaching out. Reference the specific property or context.
2. QUALIFY (1-2 sentences): One strategic question to understand their timeline or needs. Keep it light.
3. ADD VALUE (1-2 sentences): Offer something useful — a similar listing, a market insight, a resource, or a quick tip.
4. NEXT STEP (1-2 sentences): Give 2-3 options for how to move forward (schedule a showing, call, virtual tour, etc.).
5. CLOSE (1 sentence): Warm, confident sign-off.

CONSTRAINTS:
- Keep total length under 125 words
- Use the lead\u0026apos;s name once if provided
- Never say \u0022just following up\u0022 or \u0022circling back\u0022 — these are empty phrases
- If the lead source was a portal, acknowledge they may be looking at multiple properties
- If the lead source was an open house, reference something specific from the showing
- If the lead source was a referral, thank the referrer by name
- Sound like a text message from a knowledgeable friend, not a corporate email`}
                </pre>
              </div>

              <p>
                <strong>Time saved:</strong> 10-15 minutes of drafting and second-guessing drops to
                under 2 minutes. The real win is speed: you reply while the lead is still thinking
                about the property. For more on automating customer communication, see our{" "}
                <Link href="/guides/ai-for-customer-service">AI for customer service guide</Link>.
              </p>
            </section>

            <section id="followup">
              <h2>Follow-Up Sequences That Actually Convert</h2>
              <p>
                The NAR reports that 80% of deals require 5 or more follow-up touches. Yet 44% of
                agents give up after one. The reason is not lack of skill. It is lack of a system.
                Crafting varied, valuable follow-up messages week after week is exhausting. Most
                agents default to \u0022just checking in\u0022 — a phrase so empty it trains leads to ignore
                you. AI fixes this by generating structured, value-first follow-up sequences in
                minutes. You review, customize, and load them into your CRM. Then they run without
                you thinking about them.
              </p>

              <h3>The 7-Touch Framework</h3>
              <p>
                The best follow-up sequences mix channels (text, email, voicemail), add value in at
                least half the touches, and never repeat the same message twice. Touch 1 is the
                immediate reply. Touch 2, 3 days later, adds value (market update, relevant listing).
                Touch 3, 1 week later, offers social proof (recent sale, client story). Touch 4,
                10 days later, asks a strategic question. Touch 5, 2 weeks later, delivers a
                hyperlocal insight. Touch 6, 3 weeks later, creates urgency (new listing, price
                change). Touch 7, 1 month later, is the breakup email — graceful, respectful, and
                leaves the door open. Each touch has a distinct purpose and voice.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 4: 7-Touch Follow-Up Sequence Builder</div>
                <pre className="prompt-text">
{`ROLE: You are a real estate follow-up strategist. Create a 7-touch follow-up sequence for a lead who has gone quiet.

LEAD CONTEXT:
- Lead type: [BUYER / SELLER / INVESTOR]
- Inquiry source: [PORTAL / OPEN HOUSE / FACEBOOK AD / WEBSITE / REFERRAL]
- Property or area of interest: [ADDRESS / NEIGHBORHOOD]
- Time since last response: [DAYS / WEEKS]
- Likely hesitation: [PRICE / TIMING / FINANCING / OVERWHELM / LIFE CHANGE / JUST BROWSING]
- Agent name: [YOUR NAME]
- Market area: [CITY / AREA]
- Tone: [HELPFUL / LOW-PRESSURE / DIRECT / HIGH-END]

TASK: Create a 7-touch follow-up sequence with these requirements:
1. Include a mix of text, email, and voicemail where appropriate
2. Each touch must have a DISTINCT purpose — no two touches say the same thing
3. Add value in at least 3 of the 7 touches (market data, relevant listing, local insight, resource)
4. Make the sequence feel personal and respectful — not automated
5. Use natural language, not canned scripts
6. Avoid \u0022just following up\u0022 and similar empty phrasing
7. For each touch, include: channel, timing, exact message, and goal of the message

TOUCH STRUCTURE:
- Touch 1: Immediate reply (already sent — summarize what it covered)
- Touch 2 (Day 3): Value-add (market update, comp, or relevant listing)
- Touch 3 (Day 7): Social proof (recent sale, client story, testimonial)
- Touch 4 (Day 10): Strategic question (qualify timeline or needs)
- Touch 5 (Day 14): Hyperlocal insight (neighborhood news, event, development)
- Touch 6 (Day 21): Urgency or opportunity (new listing, price change, rate shift)
- Touch 7 (Day 30): Breakup email (graceful, leaves door open)

CONSTRAINTS:
- Each message under 100 words
- Sound like a thoughtful agent, not a drip campaign
- Include specific local references where possible
- For buyer leads: focus on properties, market trends, and lifestyle fit
- For seller leads: focus on market data, CMA updates, and preparation tips`}
                </pre>
              </div>

              <h3>Post-Showing Follow-Up: The Critical 2-Hour Window</h3>
              <p>
                The follow-up after a showing is the highest-leverage email you will send. The buyer
                is still picturing themselves in the home. Their emotional connection is fresh. A
                generic \u0022thanks for coming\u0022 wastes this moment. The best post-showing follow-ups
                reference something specific the buyer reacted to, address potential objections
                proactively, and give clear next steps with options. Send it within 2 hours while the
                property is still vivid in their mind.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 5: Post-Showing Follow-Up</div>
                <pre className="prompt-text">
{`ROLE: You are a real estate agent writing a post-showing follow-up email. The goal is to keep the buyer engaged and move them toward an offer.

AGENT DETAILS:
- Name: [YOUR NAME]
- Brokerage: [BROKERAGE]
- Tone: [YOUR TONE]

SHOWING DETAILS:
- Property address: [ADDRESS]
- Showing date/time: [DATE / TIME]
- Buyer name(s): [NAME(S)]
- Buyer profile: [FIRST-TIME / FAMILY / INVESTOR / DOWNSIZER]
- Specific reactions from showing: [WHAT THEY LOVED, WHAT CONCERNED THEM, QUESTIONS THEY ASKED]
- Property strengths to reinforce: [FEATURES THAT MATCH THEIR NEEDS]
- Potential objections to address: [PRICE / CONDITION / LOCATION / TIMING]
- Comparable sales to reference: [2-3 RECENT COMPS WITH PRICES]

TASK: Write a post-showing follow-up email with this structure:
1. THANK (1 sentence): Genuine thanks for their time and trust
2. RECALL (1-2 sentences): Reference something specific they said or reacted to during the showing
3. REINFORCE (1-2 sentences): Connect the property\u0026apos;s strengths to their stated needs or lifestyle
4. ADDRESS (1-2 sentences): Proactively address the likely objection without being defensive
5. DATA (1 sentence): Reference a relevant comp or market fact that supports the value
6. NEXT STEPS (1-2 sentences): 2-3 clear options (schedule second showing, make offer, see similar homes, discuss financing)
7. CLOSE (1 sentence): Warm, confident sign-off

CONSTRAINTS:
- Total length under 150 words
- Use their name once, naturally
- Do NOT sound salesy or pushy
- Do NOT use phrases like \u0022don\u0026apos;t miss out\u0022 or \u0022this won\u0026apos;t last\u0022 — these create pressure, not trust
- If they had concerns, acknowledge them honestly — do not minimize them`}
                </pre>
              </div>

              <h3>CRM Integration: From One-Off to System</h3>
              <p>
                The real power of AI follow-up is not generating one email. It is building a library
                of templates you load into your CRM and trigger automatically. Create each AI-generated
                sequence as a named template in your CRM (\u0022Buyer — Portal Lead — 7 Touch,\u0022 \u0022Seller
                — Expired Listing — 5 Touch\u0022). Set automation rules: new portal lead gets Touch 1
                immediately, Touch 2 in 3 days, Touch 3 in 7 days. New open house attendee gets a
                different sequence. Lead goes quiet for 30 days → trigger reactivation campaign. The
                AI does the creative work once. Your CRM does the delivery work forever.
              </p>
            </section>

            <div className="article-cta-box">
              <h3>Not sure which AI automation to build first?</h3>
              <p>
                Every agent\u0026apos;s business is different. Some need listing automation first. Others are
                losing leads to slow response times. Take our free{" "}
                <Link href="/audit">AI Audit</Link>{" "}
                to identify the 3 highest-impact automations for your specific business. Get a
                personalized report in under 10 minutes with exact priority rankings and time-saved
                estimates.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
              </Link>
            </div>

            <section id="market">
              <h2>Market Reports and CMA Summaries in Minutes</h2>
              <p>
                Buyers and sellers do not want raw data. They want insight. They want to know what
                the numbers mean for their decision — not just what the numbers are. The problem is
                that turning MLS data into client-friendly language takes time. You pull the comps,
                calculate the averages, write the summary, and format it into something a human would
                read. AI compresses this into a 15-minute workflow: you feed it the raw data, it
                writes the narrative.
              </p>

              <h3>Turning Raw Data Into Client-Friendly Language</h3>
              <p>
                The secret is feeding the AI both data and context. Give it the numbers (average sale
                price, days on market, inventory levels, recent comps) and the story (is the market
                shifting toward buyers or sellers? Are prices flattening? Is inventory building?).
                The AI weaves the two into a summary that sounds like you wrote it — if you gave it
                your voice and perspective. Use this prompt monthly for your newsletter, for listing
                appointments, and for buyer consultations.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 6: Market Update / CMA Summary</div>
                <pre className="prompt-text">
{`ROLE: You are a local real estate market expert. Write a client-friendly market summary that turns data into actionable insight.

AGENT DETAILS:
- Name: [YOUR NAME]
- Market area: [CITY / NEIGHBORHOOD]
- Specialty: [BUYERS / SELLERS / LUXURY / INVESTORS]
- Tone: [CONVERSATIONAL / PROFESSIONAL / DATA-DRIVEN]

MARKET DATA (paste from MLS or your research):
- Reporting period: [MONTH / QUARTER]
- Average sale price: [$]
- Price change vs. last period: [%]
- Average days on market: [#]
- Days on market change: [#]
- New listings: [#]
- Pending sales: [#]
- Inventory level (months supply): [#]
- Interest rate environment: [RATE RANGE]

RECENT COMPS (3-5 sales):
- [ADDRESS] | [BEDS/BATHS] | [SQ FT] | [SALE PRICE] | [DAYS ON MARKET]

MARKET STORY:
- Overall trend: [BUYER\u0026apos;S MARKET / SELLER\u0026apos;S MARKET / BALANCED / SHIFTING]
- Key driver: [INTEREST RATES / INVENTORY / JOB GROWTH / SEASONALITY]
- Notable pattern: [PRICE ADJUSTMENTS, FAST SALES, BUILDER ACTIVITY, ETC.]

TASK: Write a market summary with this structure:
1. HEADLINE (1 sentence): A punchy, specific takeaway about the market right now
2. THE BIG PICTURE (2-3 sentences): What the data says in plain language
3. FOR BUYERS (2-3 sentences): One practical takeaway and one piece of advice
4. FOR SELLERS (2-3 sentences): One practical takeaway and one piece of advice
5. THE NUMBERS (bullet points): Key stats in scannable format
6. WHAT TO WATCH (1-2 sentences): The one trend or event that could shift the market next

CONSTRAINTS:
- Total length under 250 words
- Explain any industry terms the first time you use them
- Use specific numbers, not vague qualifiers
- Balance optimism with realism — do not hype or panic
- End with an invitation to discuss their specific situation`}
                </pre>
              </div>

              <p>
                Run this prompt monthly for your email newsletter, for listing appointment prep, and
                for buyer consultation follow-ups. One agent using this system reported that clients
                started forwarding her market updates to friends — turning a time-saving tool into a
                referral generator. For more on using AI to analyze business data, see our{" "}
                <Link href="/guides/ai-business-data-analysis">AI business data analysis guide</Link>.
              </p>
            </section>

            <section id="social">
              <h2>Social Media Captions and Video Scripts</h2>
              <p>
                Every listing is a content opportunity. The description you wrote for the MLS can
                become an Instagram caption, a Facebook post, a TikTok script, and a YouTube Short —
                with one additional prompt. Most agents post listings once and move on. The agents
                who dominate local social media repurpose every listing into 4-5 pieces of content
                across platforms. AI makes this effortless.
              </p>

              <h3>From Listing to Social Post in 30 Seconds</h3>
              <p>
                The key to social media that gets engagement is not posting more. It is posting with
                a point of view. \u0022Just listed: 3 bed, 2 bath, $450K\u0022 gets scrolled past. \u0022This kitchen
                was renovated by a chef who sold the house because he got a job in Paris. The appliances
                are still under warranty.\u0022 gets saved and shared. AI can help you find the story in
                every listing if you feed it the details that make the property human.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt Block 7: Social Media Content Generator</div>
                <pre className="prompt-text">
{`ROLE: You are a real estate social media strategist. Turn a listing into platform-specific content.

LISTING DETAILS:
- Property address: [ADDRESS]
- Key features: [3-5 BULLET POINTS]
- Price: [PRICE]
- Unique story or detail: [ANYTHING HUMAN OR INTERESTING ABOUT THE PROPERTY OR SELLER]
- Neighborhood vibe: [DESCRIBE IN 3 WORDS]
- Target buyer: [PROFILE]

PLATFORMS TO CREATE CONTENT FOR:
- Instagram caption (engaging, story-driven, under 125 words)
- Facebook post (community-focused, slightly longer, includes call to action)
- TikTok / Reels script (under 60 seconds, hook in first 3 seconds, 3-4 talking points)

REQUIREMENTS:
1. Each platform gets a distinct angle — do not copy-paste the same text
2. Instagram: lead with the story or lifestyle, not the specs
3. Facebook: include a question to drive comments (\u0022Would you rather have the chef\u0026apos;s kitchen or the backyard garden?\u0022)
4. TikTok / Reels: write a spoken script, not a caption. Include stage directions [LOOK AT CAMERA], [WALK THROUGH ROOM], etc.
5. Include 5-7 relevant hashtags for each platform
6. End every piece with a clear call to action (DM, link in bio, schedule showing)
7. Do NOT use hashtags on TikTok script — those go in the caption field separately

OUTPUT: Label each platform clearly. Only the content — no commentary.`}
                </pre>
              </div>

              <p>
                Post consistently, not constantly. One quality post per platform per listing beats
                five lazy posts that get no engagement. The agents who build the strongest local
                brands are the ones who show personality — and AI helps you find yours without
                spending hours staring at a blank caption field. For more marketing prompt templates,
                see our{" "}
                <Link href="/guides/ai-prompts-for-marketing">AI prompts for marketing guide</Link>.
              </p>
            </section>

            <section id="workflow">
              <h2>Build Your Real Estate AI System</h2>
              <p>
                By now you have seven prompts and a framework for listings, lead replies, follow-ups,
                market reports, and social content. The final step is turning these into a repeatable
                system — a workflow you run every week without thinking. The best agents treat AI
                like a partner, not a novelty. They have prompts ready, inputs organized, and a
                review process that ensures quality without adding hours.
              </p>

              <h3>The Weekly 15-Minute AI Routine</h3>
              <p>
                <strong>Monday morning (5 minutes):</strong> Run the market update prompt with last
                week\u0026apos;s data. Save the output as your newsletter draft or client update. Check if
                any follow-up sequences need fresh content based on market changes.
              </p>
              <p>
                <strong>Wednesday (5 minutes):</strong> Review new listings going live this week.
                Run the listing description prompt for each. Review for accuracy, hyperlocal details,
                and fair housing compliance. Queue social media content for each listing.
              </p>
              <p>
                <strong>Friday (5 minutes):</strong> Review the week\u0026apos;s AI-generated replies and
                follow-ups. Edit any prompts that produced weak output. Save improved versions.
                Update your CRM templates with refinements. Flag any leads who need personal
                attention beyond the sequence.
              </p>

              <h3>Green, Yellow, Red: Data Safety for Real Estate</h3>
              <p>
                <strong>Green — Safe for any AI tool:</strong> Property addresses, square footage,
                bedroom/bath counts, general neighborhood names, listing prices, property features,
                market statistics, and your own marketing copy. These contain no identifying
                information and are safe to paste anywhere.
              </p>
              <p>
                <strong>Yellow — Safe for paid tiers only:</strong> Client first names, general
                location (city/area), and showing dates. Paid tiers of ChatGPT, Claude, and Gemini
                do not train on customer data. Still, minimize what you share. Use property addresses
                instead of client names where possible.
              </p>
              <p>
                <strong>Red — Never paste into any AI tool:</strong> Client full names, contact
                information, financial details, Social Security numbers, inspection reports with
                client data, and any information covered by privacy regulations. When in doubt,
                anonymize. When still in doubt, do not paste it.
              </p>

              <h3>When to Upgrade from Free AI</h3>
              <p>
                The free AI workflow works for agents handling up to 50 listings per year and under
                100 leads per month. Beyond that, consider upgrading to a paid tier for faster
                response times and longer context windows. For agents with teams, platforms like
                Follow Up Boss, LionDesk, and kvCORE offer AI-integrated CRM features that automate
                sequences, score leads, and trigger actions based on behavior. The tipping point is
                when the time spent copy-pasting into a chat interface exceeds the time saved on
                responses. For most solo agents, that happens around 100-150 leads per month. Until
                then, free AI plus disciplined prompts is faster and cheaper than any paid platform.
              </p>

              <table className="article-table">
                <thead>
                  <tr>
                    <th>Agent Level</th>
                    <th>Annual Listings</th>
                    <th>Monthly Leads</th>
                    <th>Recommended Setup</th>
                    <th>Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>New agent / Part-time</td>
                    <td>5-15</td>
                    <td>10-30</td>
                    <td>Free AI (ChatGPT/Claude) + manual send</td>
                    <td>$0</td>
                  </tr>
                  <tr>
                    <td>Full-time solo</td>
                    <td>15-40</td>
                    <td>30-80</td>
                    <td>Free AI + basic CRM templates</td>
                    <td>$0</td>
                  </tr>
                  <tr>
                    <td>Top producer</td>
                    <td>40-80</td>
                    <td>80-150</td>
                    <td>Paid AI tier + CRM automation</td>
                    <td>$20-50</td>
                  </tr>
                  <tr>
                    <td>Team / Brokerage</td>
                    <td>80+</td>
                    <td>150+</td>
                    <td>AI-integrated CRM + team workflows</td>
                    <td>$100-300</td>
                  </tr>
                </tbody>
              </table>
            </section>

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

            <section className="article-related">
              <h2>Related Guides</h2>
              <div className="related-guides-grid">
                <div className="related-guide-card">
                  <span className="related-guide-tag">Industry</span>
                  <h3><Link href="/guides/ai-for-ecommerce">AI for E-commerce: Automate Returns, Tracking &amp; FAQs</Link></h3>
                  <p>Use free AI to handle returns, order tracking, and FAQs for your online store. Save 8+ hours/week.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Small Business</span>
                  <h3><Link href="/guides/ai-for-small-business">AI for Small Business: A Practical Guide</Link></h3>
                  <p>How small business owners use AI to save 10+ hours per week without hiring developers.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Customer Service</span>
                  <h3><Link href="/guides/ai-customer-service-prompts">AI Prompts for Customer Service That Actually Work</Link></h3>
                  <p>80+ ready-to-use prompts for complaints, refunds, FAQs, and escalation handling.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Marketing</span>
                  <h3><Link href="/guides/ai-prompts-for-marketing">The Complete Guide to AI Prompts for Marketing</Link></h3>
                  <p>Build a reusable marketing prompt library in 60 minutes. Copy-paste prompts and tracking system.</p>
                </div>
                <div className="related-guide-card">
                  <span className="related-guide-tag">Prompts</span>
                  <h3><Link href="/guides/chatgpt-prompts">The Complete Guide to ChatGPT Prompts for Business</Link></h3>
                  <p>Master prompt engineering with frameworks, examples, and 50+ business-ready prompts.</p>
                </div>
              </div>
            </section>

            <div className="article-bottom-cta">
              <h2>Ready to turn AI into your listing and lead machine?</h2>
              <p>
                This guide gave you seven proven prompts to write listings that convert, reply to
                leads in minutes, and build follow-up sequences that nurture. Want 50+ more prompts
                organized by business task — including market reports, CMA summaries, social media
                content, and objection handling — plus a system to manage your prompt library?{" "}
                <Link href="/products/prompt-stack">The Prompt Stack</Link>{" "}
                gives you a complete library of copy-paste prompts with a Notion template to organize,
                track, and improve your prompts over time.
              </p>
              <Link href="/products/prompt-stack" className="btn-primary">
                Get the Prompt Stack →
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
        <p className="footer-copyright">&copy; 2026 ProfitSlab. All rights reserved.</p>
      </footer>
    </>
  );
}
