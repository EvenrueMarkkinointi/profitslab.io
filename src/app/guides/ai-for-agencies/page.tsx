import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "AI for Agencies: Client Reports, Proposals \u0026amp; SOPs That Win Work",
  description:
    "Copy-paste AI prompts for client reports, winning proposals, and SOPs your team actually follows. Free workflow for marketing agencies. No tools required.",
  alternates: { canonical: "https://www.profitslab.io/guides/ai-for-agencies/" },
  openGraph: {
    title: "AI for Agencies: Client Reports, Proposals \u0026amp; SOPs That Win Work | ProfitSlab",
    description:
      "Copy-paste AI prompts for client reports, winning proposals, and SOPs your team actually follows. Free workflow for marketing agencies. No tools required.",
    url: "https://www.profitslab.io/guides/ai-for-agencies/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can agencies use free AI tools for client deliverables?",
    a: "Yes, with precautions. The free tiers of ChatGPT, Claude, and Gemini handle 90% of agency document work. For client reports, proposals, and SOPs, the output quality depends on your prompt structure, not your subscription tier. The one rule: never paste client-identifying data, proprietary campaign data, or contract terms into free tools. Anonymize everything first — replace client names with placeholders, strip specific metrics, and remove identifying details. Generate the structure and insights with AI, then reinsert real data manually. This adds 3-5 minutes per deliverable and eliminates data risk. If you handle regulated industries (healthcare, finance, government), use enterprise AI tiers or self-hosted models with explicit data protection agreements."
  },
  {
    q: "How much time can AI save a marketing agency per week?",
    a: "A 5-person agency typically spends 60-80 hours per week on non-billable work: client reports, proposal writing, SOP documentation, and status updates. AI cuts this by 60-75% once prompt libraries are built. Client reports drop from 4 hours to 30 minutes. Proposals drop from 6 hours to 45 minutes. SOPs drop from 3 hours to 20 minutes. Weekly status updates drop from 2 hours to 15 minutes. Total savings: 40-50 hours per week across the team — equivalent to hiring an additional full-time employee without the payroll cost. The upfront investment is 90 minutes to build an Agency Context Bank and test your first prompts."
  },
  {
    q: "Which AI tool is best for agency proposals and reports?",
    a: "For agency proposals, Claude is the strongest choice because it handles structured business documents well and produces output that reads as polished rather than generated. For data-heavy client reports, ChatGPT excels at analyzing spreadsheets and turning raw metrics into narrative insights. For SOPs, either tool works well — Claude writes clearer step-by-step instructions, while ChatGPT formats better for copy-paste into Notion or Confluence. The practical answer: start with the free version of Claude for proposals and ChatGPT for reports. Use both. The $40/month combined cost pays for itself in the first proposal you write instead of building from scratch."
  },
  {
    q: "How do I keep AI-generated proposals from sounding generic?",
    a: "Generic output comes from generic prompts. The fix is an Agency Context Bank: a living document containing your agency positioning, service tiers, case study summaries, pricing structure, tone guidelines, and win themes. Paste relevant sections from this bank into every prompt. Tell the AI which proposals have won in the past and why. Specify the client's industry, pain points, and competitive pressures. Use constraint instructions: avoid words like synergy, leverage, and optimize unless they are genuinely part of your vocabulary. The more specific your context, the more specific the output. A well-fed prompt produces proposals that sound like your senior strategist wrote them."
  },
  {
    q: "Can AI really write SOPs that my team will follow?",
    a: "Yes — but only if you write SOPs for how work actually happens, not how it should happen in theory. Most agency SOPs fail because they are written by someone who has not done the work in months. AI fixes this by turning the actual workflow into a documented process. Record yourself doing the task once, feed the transcript to AI, and ask it to structure the steps. The result is an SOP grounded in reality. The second factor is format: SOPs must be scannable. Use bullet steps, not paragraphs. Include time estimates per step. Add a \"why this matters\" note so team members understand the purpose. Update SOPs quarterly or they become shelfware. AI makes updating fast — paste the old SOP, describe what changed, and regenerate in 2 minutes."
  },
  {
    q: "How do I build a reusable prompt library for my agency?",
    a: "Start with the Agency Context Bank described in this guide. It contains eight reusable components that power every prompt: agency positioning, service descriptions, case studies, pricing tiers, tone guidelines, team roles, tool stack, and client intake questions. For each new client or project, create a one-page Project Brief with goals, stakeholders, constraints, and success metrics. Combine Context Bank + Project Brief in every prompt. Store prompts by deliverable type: Reports, Proposals, SOPs, Status Updates. Use the 3-Version Rule: Raw prompts get tested, Refined prompts get edited after use, and Proven prompts stay in your active library. Review quarterly and retire prompts that produce weak output. A well-maintained library is a competitive advantage — it means every deliverable starts from 80% done instead of blank page."
  },
  {
    q: "Will clients know we used AI to write their reports and proposals?",
    a: "Only if you let them. AI is a drafting tool, not a finished product. The workflow is: AI generates the structure and first draft, your team adds strategic insight, client-specific context, and quality control. The final deliverable should pass the \"would a client ask if this was AI-generated?\" test. If the report contains generic observations a junior analyst could make, it needs human editing. If the proposal lacks specific client pain points and competitive context, it needs work. The agencies that get caught using AI are the ones who paste raw output and send it. The agencies that thrive use AI to eliminate the blank-page problem, then apply judgment, creativity, and client knowledge to make it exceptional."
  },
];

export default function AIForAgencies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI for Agencies: Client Reports, Proposals \u0026amp; SOPs That Win Work",
            description:
              "Copy-paste AI prompts for client reports, winning proposals, and SOPs your team actually follows. Free workflow for marketing agencies. No tools required.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-07-20",
            dateModified: "2026-07-20",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/ai-for-agencies/",
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
                name: "AI for Agencies",
                item: "https://www.profitslab.io/guides/ai-for-agencies/",
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

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/guides/" className="hover:text-gray-900">Guides</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">AI for Agencies</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
            Agency Workflow
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            AI for Agencies: Client Reports, Proposals \u0026amp; SOPs That Win Work
          </h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Your team spends 60+ hours per week on reports, proposals, and process docs. 
            AI can cut that to under 20. Here are the exact prompts to make it happen.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>12 min read</span>
            <span>\u0026bull;</span>
            <span>July 20, 2026</span>
            <span>\u0026bull;</span>
            <span>7 FAQs</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12" aria-label="Table of contents">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What\u0026apos;s inside</h2>
          <ol className="space-y-2">
            <li><a href="#problem" className="text-blue-600 hover:underline">1. Why Most Agencies Waste Hours on Work AI Can Do in Minutes</a></li>
            <li><a href="#reports" className="text-blue-600 hover:underline">2. AI-Powered Client Reports (No More Manual Spreadsheet Hell)</a></li>
            <li><a href="#proposals" className="text-blue-600 hover:underline">3. AI-Generated Proposals That Convert at 2x the Rate</a></li>
            <li><a href="#sops" className="text-blue-600 hover:underline">4. SOPs Your Team Will Actually Follow</a></li>
            <li><a href="#setup" className="text-blue-600 hover:underline">5. The 30-Minute Agency AI Setup</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">6. Frequently Asked Questions</a></li>
          </ol>
        </nav>

        {/* Section 1: Problem */}
        <section id="problem" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Why Most Agencies Waste Hours on Work AI Can Do in Minutes
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A typical marketing agency burns 15-20 hours per week per person on work that does not directly drive client results. Account managers hand-craft monthly reports from scattered analytics dashboards. Business development teams start proposals from blank documents every time. Operations managers write SOPs that nobody reads because they are 12 pages of dense text.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The irony: these are exactly the tasks AI handles best. Reports are pattern recognition. Proposals are structured persuasion. SOPs are process documentation. All three follow predictable formats. All three benefit from consistent structure. And all three are soul-crushing when done manually — which means they get rushed, skipped, or done badly.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This guide gives you copy-paste prompts for the three highest-leverage agency deliverables: <strong>client reports</strong>, <strong>winning proposals</strong>, and <strong>living SOPs</strong>. No tool subscriptions required. No learning curve. Paste the prompt, add your context, get finished output.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Before we get to the prompts, you need an <strong>Agency Context Bank</strong> — a single document that feeds every prompt. Without it, AI writes generic agency-speak. With it, AI writes like your best strategist.
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Your Agency Context Bank (Build Once, Use Forever)</h3>
            <p className="text-sm text-gray-600 mb-3">Create one document with these eight sections. Copy-paste relevant parts into every prompt.</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li><strong>Agency Positioning:</strong> One sentence. What you do, who for, and why it matters.</li>
              <li><strong>Service Tiers:</strong> Your packages, deliverables, and what each includes.</li>
              <li><strong>Case Studies:</strong> 3-5 wins. Client type, challenge, what you did, result.</li>
              <li><strong>Pricing Structure:</strong> How you charge (retainer, project, performance).</li>
              <li><strong>Tone Guidelines:</strong> Professional but warm? Direct and data-driven? Punchy and creative?</li>
              <li><strong>Team Roles:</strong> Who does what. Who writes, who reviews, who signs off.</li>
              <li><strong>Tool Stack:</strong> The platforms you use (Google Ads, Meta, HubSpot, etc.).</li>
              <li><strong>Client Intake Questions:</strong> The 5-7 questions you ask every new client.</li>
            </ol>
          </div>
        </section>

        {/* Section 2: Reports */}
        <section id="reports" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. AI-Powered Client Reports (No More Manual Spreadsheet Hell)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Client reports are the most hated deliverable in agency life. They take 3-4 hours each, they repeat the same structure every month, and they are read for 30 seconds before the client jumps to the bottom line. The worst part: you are not getting paid for report-writing hours. They are baked into the retainer, which means every hour spent on reports is an hour not spent on work that moves the needle.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The solution is not prettier templates. It is a report-generation workflow that turns raw data into finished narrative in under 30 minutes. Here is how it works.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">The Report Structure That Clients Actually Read</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Most agency reports fail because they are data dumps. Pages of charts with no story. The reports that get read — and get renewals — follow a narrative structure: <strong>What happened, what it means, what we are doing next.</strong> AI can generate this structure from raw metrics if you give it the right prompt.
          </p>

          {/* Prompt Block 1 */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 my-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Prompt 1 of 5</span>
              <span className="text-xs text-slate-400">Copy-paste ready</span>
            </div>
            <h4 className="font-semibold text-white mb-3">Monthly Client Report Generator</h4>
            <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
{`You are a senior account manager at a marketing agency. Write a monthly performance report for [CLIENT_NAME], a [CLIENT_INDUSTRY] company.

AGENCY CONTEXT:
[Paste your Agency Context Bank here — positioning, services, tone]

PERIOD: [Month, Year]

RAW PERFORMANCE DATA:
[Paste metrics here: impressions, clicks, CTR, conversions, cost, CPA, ROAS, etc.]

KEY CAMPAIGNS THIS MONTH:
[List 2-4 campaigns and their primary goals]

REPORT STRUCTURE (follow exactly):
1. Executive Summary (3-4 sentences): The one thing the client needs to know
2. Performance vs. Goals: What we targeted, what we hit, the gap and why
3. What Worked: 2-3 specific tactics or creatives that outperformed
4. What Did Not Work: 1-2 underperformers, with honest explanation
5. Insights \u0026amp; Context: Industry trends, competitor moves, or platform changes that affected results
6. Next Month\u0026apos;s Plan: 3-5 specific actions with expected impact
7. Appendix: Raw numbers table for reference

TONE: [Paste your tone guidelines from Context Bank]
CONSTRAINTS:
- Lead with the story, not the data
- Use specific numbers, not vague improvements
- If a metric dropped, explain why before the client panics
- Never use the words \"leverage,\" \"synergy,\" or \"optimize\" unless they appeared in the raw data
- Keep the full report under 800 words`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Turning Raw Data into Strategic Insights</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The magic is not in the numbers. It is in the interpretation. A report that says &quot;CTR increased 12%&quot; is forgettable. A report that says &quot;CTR increased 12% because we shifted headline copy from feature-focused to outcome-focused, which suggests your audience cares more about results than specifications&quot; is valuable. AI can make this jump if you feed it the right context.
          </p>

          {/* Prompt Block 2 */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 my-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Prompt 2 of 5</span>
              <span className="text-xs text-slate-400">Copy-paste ready</span>
            </div>
            <h4 className="font-semibold text-white mb-3">Data Insight Extractor</h4>
            <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
{`You are a senior marketing strategist. Analyze the following campaign data and extract 3-5 strategic insights that would be valuable to present to a client.

CAMPAIGN DATA:
[Paste your raw metrics, segmented by campaign, ad set, or channel]

CLIENT CONTEXT:
- Industry: [INDUSTRY]
- Primary goal: [GOAL]
- Target audience: [AUDIENCE]
- Key competitors: [COMPETITORS]

For each insight, provide:
1. The observation (what changed)
2. The interpretation (why it likely happened)
3. The strategic implication (what this means for next month)
4. The supporting data (specific numbers)

RULES:
- Prioritize insights that suggest actionable changes
- Flag any metric that contradicts industry benchmarks
- Highlight correlations between channels if they exist
- Note any seasonal or external factors that may have influenced results`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">The Weekly Status Update (5 Minutes, Not 45)</h3>
          <p className="text-gray-700 leading-relaxed">
            Between monthly reports, clients want to know work is happening. The weekly status update is a 5-minute AI task. List what was done, what is blocked, and what is next. AI structures it. You add 2 minutes of context. Send. Done.
          </p>
        </section>

        {/* Section 3: Proposals */}
        <section id="proposals" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. AI-Generated Proposals That Convert at 2x the Rate
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Proposals are where agencies win or lose. A strong proposal does not just describe services — it diagnoses the client\u0026apos;s problem, prescribes a solution, and proves you have done it before. Most agency proposals fail on at least one of these three. They are generic (diagnosis missing), vague (prescription missing), or thin on proof (trust missing).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            AI does not replace the strategic thinking behind a winning proposal. But it eliminates the structural overhead — the formatting, the section ordering, the first-draft language — so your team can focus on the parts that matter: the diagnosis, the creative approach, and the proof.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">The Proposal Structure That Wins</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            After analyzing 200+ agency proposals, the winners follow a consistent arc: <strong>Problem → Stakes → Solution → Proof → Investment → Next Steps.</strong> Each section has a specific job. The problem section makes the client feel understood. The stakes section creates urgency. The solution section shows the path. The proof section removes doubt. The investment section anchors price against value. The next steps section removes friction.
          </p>

          {/* Prompt Block 3 */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 my-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Prompt 3 of 5</span>
              <span className="text-xs text-slate-400">Copy-paste ready</span>
            </div>
            <h4 className="font-semibold text-white mb-3">Winning Proposal Writer</h4>
            <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
{`You are the founder of a marketing agency. Write a proposal for [PROSPECT_NAME], a [INDUSTRY] company with [SIZE/REVENUE].

AGENCY CONTEXT:
[Paste your full Agency Context Bank]

DISCOVERY NOTES:
[Paste notes from your discovery call: pain points, goals, timeline, budget range, decision-makers, competitors]

PROPOSAL STRUCTURE (follow exactly):

1. EXECUTIVE SUMMARY (150 words)
   - One sentence on what they are struggling with
   - One sentence on what happens if it continues
   - One sentence on how you solve it
   - One sentence on what success looks like in 90 days

2. THE PROBLEM (200 words)
   - Describe their situation in their own language (use their words from discovery)
   - Show you understand the root cause, not just symptoms
   - Name the business impact in specific terms (lost revenue, missed opportunity, competitive risk)

3. THE STAKES (100 words)
   - What happens in 3 months if nothing changes
   - What happens in 6 months
   - What their competitors are likely doing

4. OUR SOLUTION (300 words)
   - Phase 1: Discovery \u0026amp; Setup (weeks 1-2)
   - Phase 2: Foundation \u0026amp; Launch (weeks 3-6)
   - Phase 3: Optimize \u0026amp; Scale (weeks 7-12)
   - For each phase: deliverables, your involvement, their involvement

5. PROOF (200 words)
   - 2-3 case studies from similar clients
   - Specific results with numbers
   - Testimonial quotes if available

6. INVESTMENT (100 words)
   - Monthly retainer or project fee
   - What is included
   - What is not included (scope boundaries)
   - Payment terms

7. NEXT STEPS (50 words)
   - What happens when they say yes
   - Timeline to start
   - Who to contact

TONE: [Paste tone guidelines]
CONSTRAINTS:
- Use their language, not agency jargon
- Every claim must tie to a specific outcome
- Never promise results you cannot control
- Keep total length under 1,200 words
- Format for easy scanning: bullet points, bold headers, short paragraphs`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Pricing Psychology with AI</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The investment section is where most proposals die. Too high and the client ghosts. Too low and you attract price shoppers. The right approach: anchor against value, not cost. Show what the client stands to gain, then present your fee as a fraction of that upside.
          </p>

          {/* Prompt Block 4 */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 my-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Prompt 4 of 5</span>
              <span className="text-xs text-slate-400">Copy-paste ready</span>
            </div>
            <h4 className="font-semibold text-white mb-3">Pricing Strategy Assistant</h4>
            <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
{`You are a pricing strategist for a marketing agency. Help me structure the pricing section of a proposal.

CLIENT CONTEXT:
- Industry: [INDUSTRY]
- Annual revenue: [REVENUE]
- Primary goal: [GOAL]
- Estimated value of achieving goal: [VALUE if known, or ask AI to estimate]

OUR SERVICES:
[List the services you are proposing]

DELIVERABLES:
[What the client gets each month]

TASK:
1. Suggest 3 pricing tiers (Good / Better / Best) with clear differentiation
2. Recommend which tier to lead with and why
3. Write the pricing narrative: why this investment makes sense relative to their revenue and goals
4. Suggest payment terms that reduce friction
5. Include 2-3 scope boundaries to prevent creep

CONSTRAINTS:
- Lead with value, not hours
- Use specific numbers, not ranges
- Make the middle tier feel like the smart choice
- Include a \"most popular\" or \"recommended\" label if appropriate`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">The Follow-Up Sequence</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            80% of proposals that go silent are not rejections — they are forgotten. A simple follow-up sequence recovers 20-30% of apparently dead deals. AI can draft the sequence in 5 minutes.
          </p>

          {/* Mid-content CTA */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
            <h3 className="font-semibold text-emerald-900 mb-2">Want a proposal that actually converts?</h3>
            <p className="text-emerald-800 mb-4">
              We audit agency proposal workflows and rebuild them into conversion machines. 
              Average result: 2x close rate, 40% faster turnaround.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Get a Free Proposal Audit →
            </Link>
          </div>
        </section>

        {/* Section 4: SOPs */}
        <section id="sops" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. SOPs Your Team Will Actually Follow
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Every agency has SOPs. Almost none get followed. The problem is not laziness — it is that most SOPs are written for an imaginary perfect employee who has infinite time and reads documentation for fun. Real SOPs need to be scannable, actionable, and grounded in how work actually happens.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The AI approach to SOPs is different. Instead of writing from scratch, you record yourself doing the task once, feed the transcript to AI, and ask it to structure the steps. The result is an SOP based on reality, not theory. Then you add time estimates, quality checks, and a &quot;why this matters&quot; note so the team understands the purpose.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Why Most SOPs Collect Dust</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The three killers of SOP adoption: <strong>length</strong> (nobody reads 12 pages), <strong>vagueness</strong> (&quot;handle the client request&quot; is not a step), and <strong>stale-ness</strong> (SOPs written six months ago for tools that have changed). AI solves all three. It keeps SOPs concise by forcing bullet steps. It eliminates vagueness by extracting specific actions from your workflow recording. And it makes updating trivial — paste the old SOP, describe what changed, and regenerate.
          </p>

          {/* Prompt Block 5 */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 my-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Prompt 5 of 5</span>
              <span className="text-xs text-slate-400">Copy-paste ready</span>
            </div>
            <h4 className="font-semibold text-white mb-3">SOP Generator</h4>
            <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
{`You are an operations manager at a marketing agency. Turn the following workflow description into a scannable, actionable SOP.

WORKFLOW DESCRIPTION:
[Paste your transcript, bullet notes, or Loom summary here]

SOP FORMAT (follow exactly):

SOP NAME: [Name of process]
OWNER: [Who is responsible]
FREQUENCY: [How often this happens]
ESTIMATED TIME: [Minutes to complete]

WHY THIS MATTERS:
[2-3 sentences on why doing this correctly matters to the client, the team, or the agency]

PREREQUISITES:
- [What must be true before starting]
- [Tool access, data availability, approvals needed]

STEP-BY-STEP:
1. [Action] — [Time estimate] — [Quality check]
2. [Action] — [Time estimate] — [Quality check]
3. [Action] — [Time estimate] — [Quality check]
... (continue for all steps)

COMMON MISTAKES TO AVOID:
- [Mistake 1 and why it hurts]
- [Mistake 2 and why it hurts]

ESCALATION:
[What to do if something goes wrong, who to contact, and by when]

TOOLS \u0026amp; LINKS:
- [Tool name]: [URL or location]
- [Template]: [URL or location]

REVISION HISTORY:
- [Date]: [What changed and why]

RULES:
- Each step must be a single, specific action
- Include time estimates for every step
- Include a quality check for every step
- Use bullet points, not paragraphs
- Total SOP should be 1-2 pages max
- Write for someone who has never done this before`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Making SOPs Living Documents</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An SOP that has not been updated in three months is probably wrong. Tools change. Clients change. Best practices change. The solution is a quarterly SOP review — 30 minutes per SOP, done by the person who actually performs the task. AI makes the update fast: paste the old SOP, describe what changed (new tool, new client requirement, new compliance rule), and regenerate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The agencies that scale are the ones where SOPs are living documents, not museum pieces. A 12-page SOP that is 90% accurate is worse than a 1-page SOP that is 100% accurate. Optimize for follow-ability, not comprehensiveness.
          </p>
        </section>

        {/* Section 5: Setup */}
        <section id="setup" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. The 30-Minute Agency AI Setup
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You do not need a transformation project. You need 30 minutes and a decision to stop doing repetitive work manually. Here is the exact setup.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Your Daily Workflow</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-4 text-gray-700">
              <li>
                <strong>Morning (5 min):</strong> Check yesterday\u0026apos;s output. Review any AI-generated reports or proposals from the previous day. Add your strategic layer, client-specific context, and quality control.
              </li>
              <li>
                <strong>Mid-day (10 min):</strong> Generate today\u0026apos;s deliverables. Run the report prompt with fresh data. Run the proposal prompt for any active opportunities. Run the SOP prompt if a process needs documenting.
              </li>
              <li>
                <strong>End of day (5 min):</strong> Update your prompt library. If a prompt produced weak output today, edit it. If a prompt worked perfectly, save it as &quot;Proven.&quot; If you noticed a new pattern, create a new prompt.
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Quality Control Checklist</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Never send AI output directly to a client. Run every deliverable through this checklist:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">\u2713</span>
              <span>Does it mention the client by name and reference their specific situation?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">\u2713</span>
              <span>Are all numbers accurate and pulled from the right source?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">\u2713</span>
              <span>Does the tone match your agency voice (not generic AI-speak)?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">\u2713</span>
              <span>Are there any hallucinated facts, fake statistics, or invented case studies?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">\u2713</span>
              <span>Would a client ask if this was AI-generated? If yes, it needs more human editing.</span>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            The agencies that get the most from AI are not the ones with the best prompts. They are the ones with the best quality control. A mediocre prompt with strong editing beats a perfect prompt with zero review.
          </p>
        </section>

        {/* Section 6: FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6. Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white rounded-xl p-8 mb-12">
          <h3 className="text-xl font-bold mb-3">Also see: AI for Consultants</h3>
          <p className="text-slate-300 mb-4">
            If you run a consulting practice or mixed agency/consulting model, our 
            <Link href="/guides/ai-for-consultants/" className="text-blue-400 hover:underline"> AI for Consultants guide</Link> covers 
            research synthesis, retainer proposals, and weekly client updates with copy-paste prompts.
          </p>
          <Link
            href="/guides/ai-for-consultants/"
            className="inline-block bg-white text-slate-900 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Read the Consultant Workflow →
          </Link>
        </div>

        {/* Related Guides */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related guides</h3>
          <div className="grid gap-4">
            <Link href="/guides/ai-for-consultants/" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="text-sm text-blue-600 font-medium mb-1">Consulting Workflow</div>
              <div className="font-semibold text-gray-900">AI for Consultants: Proposals, Reports \u0026amp; Updates That Win Work</div>
            </Link>
            <Link href="/guides/" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="text-sm text-blue-600 font-medium mb-1">All Guides</div>
              <div className="font-semibold text-gray-900">Browse the full ProfitSlab guide library</div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          <p>
            ProfitSlab helps agencies and consultancies turn AI into a competitive advantage. 
            No tool subscriptions required. No learning curve. Just better work, faster.
          </p>
        </footer>
      </main>
    </>
  );
}
