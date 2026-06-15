import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Onboarding Checklist Template (AI-Generated) | ProfitSlab",
  description:
    "Generate a customized onboarding checklist template with AI in 10 minutes. Role-specific checklists, 30-60-90 plans, and copy-paste prompts for small teams.",
  alternates: { canonical: "https://www.profitslab.io/guides/onboarding-checklist-ai/" },
  openGraph: {
    title: "Onboarding Checklist Template (AI-Generated) | ProfitSlab",
    description:
      "Generate a customized onboarding checklist template with AI in 10 minutes. Role-specific checklists, 30-60-90 plans, and copy-paste prompts for small teams.",
    url: "https://www.profitslab.io/guides/onboarding-checklist-ai/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What should an onboarding checklist include?",
    a: "A complete onboarding checklist covers three layers: compliance paperwork (I-9, W-4, direct deposit, handbook acknowledgment), operational setup (equipment, system access, tool training), and cultural integration (team introductions, role clarity, 30-60-90 day goals, buddy assignment, and structured check-ins at Day 1, Week 1, Day 30, and Day 90). The 5 C&apos;s framework — Compliance, Clarification, Culture, Connection, and Check-back — ensures nothing critical is missed.",
  },
  {
    q: "How is an AI-generated checklist better than a downloaded template?",
    a: "Downloaded templates are one-size-fits-all. They force you to adapt a generic retail or enterprise checklist to your actual role, which means critical tasks get missed and irrelevant tasks clutter the process. An AI-generated checklist is built for your specific role, company size, and work environment (remote vs. in-office). It includes the right compliance steps, the right tools, and the right training for that exact position. It takes 10 minutes to generate and is easier to maintain than a static document.",
  },
  {
    q: "What are the 5 C&apos;s of onboarding?",
    a: "The 5 C&apos;s of onboarding were established by Dr. Talya Bauer at Portland State University. They are: Compliance (legal forms, policies, and requirements), Clarification (role expectations, success criteria, and first-week priorities), Culture (how the company actually works, values, and unwritten norms), Connection (relationships with teammates, mentors, and key contacts), and Check-back (regular feedback conversations in both directions). Most small businesses handle Compliance well but underinvest in Connection and Check-back, which are the primary drivers of 90-day retention.",
  },
  {
    q: "How long should onboarding take for a small business?",
    a: "Effective onboarding spans at least 90 days, with the most critical period being the first 30 days. Research from the Brandon Hall Group shows that structured 90-day onboarding programs improve retention by 82%. For small businesses, a practical minimum is: full compliance paperwork in the first 3 business days, a structured first week with daily check-ins, a formal 30-day review, and a 90-day transition review that officially closes the onboarding period. Anything shorter risks losing the investment made in hiring.",
  },
  {
    q: "Who should own the onboarding checklist?",
    a: "Responsibility is shared. The business owner or HR lead typically owns pre-start tasks: paperwork, equipment ordering, and system access. The direct manager owns Day 1 and Week 1: introductions, role clarity, first tasks, and weekly check-ins. A buddy or mentor handles the social integration and answers day-to-day questions. The new hire owns their own compliance documents and training completion. The AI-generated checklist makes ownership clear at every stage so nothing falls through the cracks.",
  },
  {
    q: "Can I use this for remote employees?",
    a: "Yes. The AI-generated checklist adapts to remote onboarding by substituting physical setup tasks with digital access provisioning, adding timezone coordination, replacing office tours with virtual team introductions, and including remote-specific norms like communication channel expectations and response time guidelines. The 5 C&apos;s framework works identically for remote hires — the execution changes, not the structure. The 30-60-90 day plan and feedback prompts are especially important for remote employees because they lack the casual check-ins that happen naturally in an office.",
  },
  {
    q: "How do I measure if onboarding is working?",
    a: "Track three metrics: time-to-first-task (how many days until the new hire completes a meaningful work item), 30-day pulse score (a simple 1-5 rating on clarity, support, and confidence), and 90-day retention rate (what percentage of new hires are still with the company at 90 days). The industry baseline for 90-day retention is 70-75%. A structured onboarding process should push you above 85%. Use the feedback survey prompts in this guide to collect data without adding bureaucracy.",
  },
];

export default function OnboardingChecklistAI() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Onboarding Checklist Template: Build a Role-Specific New Hire Plan with AI",
            description:
              "Generate a customized onboarding checklist template with AI in 10 minutes. Role-specific checklists, 30-60-90 plans, and copy-paste prompts for small teams.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-06-15",
            dateModified: "2026-06-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/onboarding-checklist-ai/",
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
                name: "Onboarding Checklist Template",
                item: "https://www.profitslab.io/guides/onboarding-checklist-ai/",
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

      <main className="article-content">
        <div className="article-hero">
          <div className="article-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <div className="breadcrumb-inner">
                <Link href="/">Home</Link>
                <span aria-hidden="true">›</span>
                <Link href="/guides">Guides</Link>
                <span aria-hidden="true">›</span>
                <span aria-current="page">Onboarding Checklist</span>
              </div>
            </nav>
            <span className="article-tag">Operations</span>
            <h1>Onboarding Checklist Template: Build a Role-Specific New Hire Plan with AI</h1>
            <p className="article-lead">
              Stop downloading generic templates that miss half your process. Generate a customized onboarding checklist for any role in 10 minutes using AI. Copy-paste prompts for sales reps, developers, customer service, and more.
            </p>
            <div className="article-meta">
              <span>ProfitSlab</span>
              <span>·</span>
              <time dateTime="2026-06-15">June 15, 2026</time>
              <span>·</span>
              <span>~3,000 words</span>
            </div>
          </div>
        </div>

        <article className="article-body">
          <h2>Why most onboarding checklist templates fail small teams</h2>
          <p>
            You download an onboarding checklist template. It has 47 items. Seventeen of them are HR compliance forms that do not apply to your state. Twelve are for enterprise IT departments with provisioning systems you do not have. The remaining items are so generic they could apply to any employee at any company — which means they apply to nobody in particular.
          </p>
          <p>
            By Day 3, your new hire has signed the handbook and set up email. But they still do not know how your team actually communicates, what their first real task is, or who to ask when they are stuck. The checklist is technically complete. The onboarding is practically broken.
          </p>
          <p>
            This is the downloaded-template problem. Gallup research shows that only <strong>12% of employees</strong> strongly agree their organization does a great job onboarding new hires. For small businesses with no dedicated HR function, the gap is widest. The issue is not effort. It is that generic templates treat every role as identical.
          </p>
          <p>
            The fix is not a better template. It is a <strong>generated</strong> one — built for the exact role, company size, and work environment you are hiring into. <Link href="/guides/how-to-use-chatgpt-for-business/">AI can produce this</Link> in under 10 minutes. The result covers the 5 C&apos;s of onboarding: Compliance, Clarification, Culture, Connection, and Check-back. Most templates only cover the first one.
          </p>

          <h2>The AI onboarding method: the 5 C&apos;s framework</h2>
          <p>
            Dr. Talya Bauer at Portland State University established the 5 C&apos;s framework. It is the most researched model for onboarding effectiveness. Each C maps to a phase of the first 90 days. Use it as your content structure and you will not miss anything critical.
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>The 5 C&apos;s</th>
                <th>What to Include</th>
                <th>AI Prompt Angle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Compliance</strong></td>
                <td>I-9, W-4, direct deposit, handbook acknowledgment, benefits enrollment, required notices</td>
                <td>Generate state-specific compliance checklists with deadlines and owner assignments</td>
              </tr>
              <tr>
                <td><strong>Clarification</strong></td>
                <td>Role expectations, first-week priorities, 30-60-90 day goals, how success is measured</td>
                <td>Build role-specific 30-60-90 plans with milestone-based deliverables</td>
              </tr>
              <tr>
                <td><strong>Culture</strong></td>
                <td>Company values, communication norms, decision-making style, how conflict is handled</td>
                <td>Generate culture briefs and team norm guides for new hires</td>
              </tr>
              <tr>
                <td><strong>Connection</strong></td>
                <td>Buddy assignment, key introductions, cross-team relationships, social integration</td>
                <td>Create introduction scripts and relationship-mapping guides</td>
              </tr>
              <tr>
                <td><strong>Check-back</strong></td>
                <td>Day 1 check-in, Week 1 feedback, 30-day review, 60-day pulse, 90-day transition</td>
                <td>Build feedback surveys and review conversation scripts</td>
              </tr>
            </tbody>
          </table>

          <p>
            The Brandon Hall Group found that organizations with strong onboarding improve new hire retention by <strong>82%</strong> and productivity by <strong>70%</strong>. The businesses that hit those numbers are not using downloaded templates. They are using structured, role-specific processes that treat each hire as a custom integration project. AI makes that level of customization accessible to small teams with no HR department.
          </p>

          <h2>Prompt 1 — Generate your complete onboarding checklist</h2>
          <p>
            This is the foundation prompt. It produces a full 5 C&apos;s checklist tailored to your role, company size, and work environment. Run it once for each role you hire, save the output, and reuse it every time that role joins.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Act as an HR operations specialist for a small business. I need a complete onboarding checklist for a new hire using the 5 C&apos;s framework (Compliance, Clarification, Culture, Connection, Check-back).
            </p>
            <p>
              <strong>Role:</strong> [e.g., Sales Representative, Junior Developer, Customer Service Agent, Marketing Manager]
            </p>
            <p>
              <strong>Company size:</strong> [e.g., 5 people, 12 people, 25 people]
            </p>
            <p>
              <strong>Work environment:</strong> [In-office / Remote / Hybrid]
            </p>
            <p>
              <strong>Industry:</strong> [e.g., SaaS, e-commerce, professional services, retail]
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ol>
              <li>Organize by the 5 C&apos;s, not by time phase. Each C should have 5-8 specific tasks.</li>
              <li>Include a specific owner for every task (HR/Owner, Manager, Buddy, or New Hire).</li>
              <li>Add deadlines where they are legally required (e.g., I-9 Section 2 within 3 business days).</li>
              <li>Include tools and systems specific to the role. Do not list generic software — ask me about my stack if needed.</li>
              <li>For the Connection section, include specific people to meet and why they matter to this role.</li>
              <li>For Check-back, include the exact questions to ask at each check-in (Day 1, Week 1, Day 30, Day 60, Day 90).</li>
              <li>Output as a markdown checklist with checkboxes. Include a brief note on why each section matters.</li>
            </ol>
          </div>

          <p>
            <strong>What to expect:</strong> AI returns a 30-40 item checklist organized by the 5 C&apos;s. The Compliance section will include your state-specific forms. The Connection section will name the people a new hire should meet based on their role. The Check-back section will include actual conversation questions, not just &quot;have a check-in.&quot; The entire output takes 60-90 seconds to generate.
          </p>

          <h2>Prompt 2 — Role-specific customization for sales, support, and tech</h2>
          <p>
            The same role can look very different at a 5-person SaaS company versus a 50-person agency. This prompt customizes the base checklist for three common small business roles. Use the bracketed placeholders to adapt each one.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              I have a base onboarding checklist for a [ROLE] at a [COMPANY_SIZE] company in [INDUSTRY]. Customize it for the following specifics:
            </p>
            <p>
              <strong>Role-specific tools:</strong> [List the actual tools they will use: CRM, project management, communication, etc.]
            </p>
            <p>
              <strong>Key performance metrics:</strong> [What does success look like in 30, 60, 90 days?]
            </p>
            <p>
              <strong>Typical first tasks:</strong> [What is the first real work item they should own?]
            </p>
            <p>
              <strong>Cross-functional partners:</strong> [Who do they work with regularly?]
            </p>
            <p>
              <strong>Customization instructions:</strong>
            </p>
            <ol>
              <li>Replace generic tool training with specific tool names and what they need to learn first.</li>
              <li>Add role-specific compliance (e.g., sales reps need NDA + data handling; developers need security training).</li>
              <li>Include a &quot;first week shadowing schedule&quot; with specific people and topics.</li>
              <li>Add a &quot;quick wins&quot; section: 3 tasks they can complete in Week 1 to build confidence.</li>
              <li>Customize the 30-60-90 day goals to match the actual performance metrics of this role.</li>
            </ol>
            <p>
              <strong>Base checklist:</strong>
            </p>
            <p>
              [Paste the output from Prompt 1 here]
            </p>
          </div>

          <p>
            <strong>Pro tip:</strong> Save each customized checklist as a template in your AI tool. In ChatGPT, use custom GPTs. In Claude, save to a project. The next time you hire the same role, you are one click away from a fully customized checklist — no regeneration needed.
          </p>

          <h2>Prompt 3 — Build a 30-60-90 day onboarding plan</h2>
          <p>
            The 30-60-90 day plan is the backbone of Clarification. It tells the new hire exactly what they are working toward in their first three months. Without it, onboarding drifts. With it, you have a shared definition of success. This prompt generates a milestone-based plan with specific deliverables and learning goals.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Create a 30-60-90 day onboarding plan for a [ROLE] at a [COMPANY_SIZE] company in [INDUSTRY].
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ol>
              <li><strong>First 30 days (Learning):</strong> 5 learning goals, 3 introductory tasks, 2 quick wins. Focus on understanding the product, the customer, and the team.</li>
              <li><strong>Days 31-60 (Contributing):</strong> 3 larger responsibilities, first independent project, performance goal check-in. Focus on meaningful contribution without full ownership.</li>
              <li><strong>Days 61-90 (Owning):</strong> 2 ongoing responsibilities with full ownership, cross-functional collaboration, 90-day review preparation. Focus on independence and integration.</li>
              <li>Each milestone must include: specific deliverable, success metric, and who reviews it.</li>
              <li>Add a &quot;red flags to watch for&quot; section for the manager: signs the new hire is struggling at each stage.</li>
              <li>Output as a clean table: Milestone | Focus | Key Deliverables | Success Metric | Reviewer</li>
            </ol>
          </div>

          <p>
            <strong>How to use it:</strong> Share the 30-60-90 plan with the new hire on Day 1. It removes ambiguity about what they should be doing and when. It also gives the manager a structured review framework — no more vague &quot;how are things going?&quot; conversations. The red flags section is especially valuable for first-time managers who have not onboarded many people before.
          </p>

          <div className="prompt-block" style={{ background: "#f8f9fa" }}>
            <h4>💡 Mid-guide checkpoint</h4>
            <p>
              Not sure where your onboarding process has gaps?{" "}
              <Link href="/audit">Take the free 5-minute AI Audit →</Link>
            </p>
          </div>

          <h2>Prompt 4 — Convert your checklist into action items</h2>
          <p>
            A checklist in a document is static. A checklist in a task tracker is alive. This prompt converts your AI-generated onboarding checklist into actionable tasks with owners, deadlines, and statuses. Paste the output into Notion, Asana, Trello, or Monday.com and you have a living onboarding project.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Convert this onboarding checklist into a structured task list for [Notion / Asana / Trello / Monday.com / ClickUp].
            </p>
            <p>
              <strong>Onboarding checklist:</strong>
            </p>
            <p>
              [Paste the output from Prompt 1 here]
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul>
              <li>Each task must include: Task Name, Owner, Due Date (relative to start date: Day -5, Day 1, Day 3, Week 1, Day 30, Day 60, Day 90), Status (Not started / In progress / Complete), and Priority (Required / Recommended / Optional).</li>
              <li>Group tasks by the 5 C&apos;s, not by time. This makes it easier to see if any section is incomplete.</li>
              <li>Add a &quot;Notes&quot; field for each task with specific instructions (e.g., which form version to use, where to find the handbook, etc.).</li>
              <li>Output as a markdown table for easy import into any tool.</li>
              <li>Include a &quot;Start date: [DATE]&quot; header so all relative dates can be calculated.</li>
            </ul>
          </div>

          <p>
            For Notion, paste the markdown table into a database and it auto-converts to rows. For Asana, use the CSV export format and import via the CSV importer. For Trello, ask AI to output a JSON card format. The key is that tasks now have owners and deadlines — not just checkboxes in a document. <Link href="/guides/meeting-notes-to-action-items/">The same action-item conversion method works for meeting notes too</Link>.
          </p>

          <h2>Prompt 5 — Create an onboarding feedback survey</h2>
          <p>
            Check-back is the most overlooked C. Most small businesses never ask new hires how onboarding went. The ones that do ask vague questions like &quot;how was your first week?&quot; and get vague answers. This prompt generates structured feedback surveys for Day 30 and Day 90 — with specific questions that surface real problems before they become resignations.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Create two onboarding feedback surveys: one for Day 30 and one for Day 90. The new hire is a [ROLE] at a [COMPANY_SIZE] company in [INDUSTRY].
            </p>
            <p>
              <strong>Day 30 survey requirements:</strong>
            </p>
            <ol>
              <li>5 questions max. Mix of 1-5 scale and open-ended.</li>
              <li>Focus on clarity, support, and confidence. Do not ask about long-term satisfaction yet.</li>
              <li>Include one question that surfaces hidden blockers: &quot;What is one thing you need that you have not asked for yet?&quot;</li>
              <li>Include a manager-effectiveness question: &quot;How clear has your manager been about expectations?&quot;</li>
              <li>Output as a clean survey format ready to send via email or form tool.</li>
            </ol>
            <p>
              <strong>Day 90 survey requirements:</strong>
            </p>
            <ol>
              <li>7 questions max. More forward-looking than the Day 30 survey.</li>
              <li>Include role-fit questions: &quot;How well does your current work match what you expected when you accepted the role?&quot;</li>
              <li>Include culture-fit questions: &quot;What is one thing about how we work that surprised you?&quot;</li>
              <li>Include a process-improvement question: &quot;What would you change about your onboarding experience for the next person in this role?&quot;</li>
              <li>End with an open-ended: &quot;What would make you excited to stay here for the next two years?&quot;</li>
            </ol>
          </div>

          <p>
            <strong>Why this matters:</strong> Early attrition traces back to the same causes: unclear expectations, inconsistent onboarding, lack of early feedback, and a slow start that creates doubt. A structured feedback survey addresses the last two directly. The 30-day survey catches problems before they calcify. The 90-day survey tells you whether the onboarding investment paid off. <Link href="/guides/write-sops-with-ai/">Use the feedback to iterate your onboarding checklist as a living SOP</Link>.
          </p>

          <h2>From AI output to first day: the implementation guide</h2>
          <p>
            Generating the checklist is step one. Executing it is where most teams stumble. Here is the timeline from offer acceptance to Day 90, with clear owners and AI-generated content at each stage.
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>When</th>
                <th>Key Tasks</th>
                <th>Owner</th>
                <th>AI Output Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pre-boarding</strong></td>
                <td>Offer accepted to Day 1</td>
                <td>Send paperwork, order equipment, create accounts, assign buddy</td>
                <td>HR / Owner</td>
                <td>Prompt 1 (Compliance section)</td>
              </tr>
              <tr>
                <td><strong>Day 1</strong></td>
                <td>First day</td>
                <td>Welcome, compliance completion, tool setup, team introductions</td>
                <td>Manager</td>
                <td>Prompt 1 (Culture + Connection), Prompt 3 (30-day goals)</td>
              </tr>
              <tr>
                <td><strong>Week 1</strong></td>
                <td>Days 2-5</td>
                <td>First tasks, shadowing, tool training, daily check-ins</td>
                <td>Manager + Buddy</td>
                <td>Prompt 2 (role-specific tasks), Prompt 4 (task tracker)</td>
              </tr>
              <tr>
                <td><strong>Day 30</strong></td>
                <td>30 days in</td>
                <td>Formal review, feedback survey, goal adjustment</td>
                <td>Manager</td>
                <td>Prompt 3 (60-day milestones), Prompt 5 (Day 30 survey)</td>
              </tr>
              <tr>
                <td><strong>Day 60</strong></td>
                <td>60 days in</td>
                <td>Mid-point check, independent project review, support adjustment</td>
                <td>Manager</td>
                <td>Prompt 3 (90-day milestones)</td>
              </tr>
              <tr>
                <td><strong>Day 90</strong></td>
                <td>90 days in</td>
                <td>Transition review, Day 90 survey, onboarding officially complete</td>
                <td>Manager + HR</td>
                <td>Prompt 5 (Day 90 survey)</td>
              </tr>
            </tbody>
          </table>

          <h3>Common mistakes to avoid</h3>
          <p>
            <strong>Mistake 1: Overloading Day 1.</strong> The first day should be 60-90 minutes of compliance, then relationship-building. If the entire day is forms and logins, you have met legal obligations and practically given the new hire a reason to doubt their decision. Use the AI-generated checklist to sequence tasks correctly — Compliance first, Connection second.
          </p>
          <p>
            <strong>Mistake 2: Skipping the 30-day review.</strong> It feels informal, so it gets skipped. Do not skip it. A five-minute conversation — what went well, what was confusing, what is needed — is the simplest retention tool available. The 30-day survey prompt in this guide makes it structured and fast.
          </p>
          <p>
            <strong>Mistake 3: Treating onboarding as a Day 1 event.</strong> Orientation is a single day. Onboarding is a 90-day process. The 30-60-90 plan prompt keeps the timeline visible so neither the manager nor the new hire forgets what comes after Week 1.
          </p>

          <h2>Measuring onboarding success</h2>
          <p>
            You cannot improve what you do not measure. Track three metrics using the simplest tools available. A spreadsheet is enough. <Link href="/guides/ai-business-data-analysis/">Use AI to analyze the trends</Link> if you want to go deeper.
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>What It Measures</th>
                <th>How to Track</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Time-to-first-task</strong></td>
                <td>How many days until the new hire completes meaningful work</td>
                <td>Log start date and first deliverable date in a spreadsheet</td>
                <td>Under 5 days</td>
              </tr>
              <tr>
                <td><strong>30-day pulse score</strong></td>
                <td>New hire confidence and clarity after first month</td>
                <td>Day 30 survey (Prompt 5) — average 1-5 rating</td>
                <td>4.0 or higher</td>
              </tr>
              <tr>
                <td><strong>90-day retention rate</strong></td>
                <td>Percentage of new hires still employed at 90 days</td>
                <td>Count hires from 90 days ago still active</td>
                <td>85% or higher</td>
              </tr>
            </tbody>
          </table>

          <p>
            The industry baseline for 90-day retention is 70-75%. A structured onboarding process should push you above 85%. If you are below 80%, the problem is almost always in the first 30 days — unclear expectations, missing check-ins, or a slow start that creates doubt. Use the 30-day survey to diagnose which one.
          </p>

          <div className="cta-block">
            <h3>🛠️ Want all 70+ prompts in one place?</h3>
            <p>
              The <strong>AI Shortcut Stack</strong> includes these onboarding prompts plus 70+ more for sales, marketing, customer service, SOPs, contracts, and operations. One-time purchase. No subscription.
            </p>
            <Link href="/products/prompt-stack" className="btn-primary">
              See the Prompt Stack →
            </Link>
          </div>

          <h2>Related guides</h2>
          <p>
            If you are building systems for your business, these guides will help:
          </p>
          <ul>
            <li><Link href="/guides/write-sops-with-ai/">Write SOPs with AI</Link> — Turn your onboarding checklist into a documented, repeatable team procedure</li>
            <li><Link href="/guides/ai-customer-service-prompts/">AI Prompts for Customer Service</Link> — Onboarding customer service reps with role-specific training</li>
            <li><Link href="/guides/ai-prompts-for-sales/">AI Prompts for Sales</Link> — Onboarding sales reps with scripts, templates, and first-week targets</li>
            <li><Link href="/guides/meeting-notes-to-action-items/">Meeting Notes to Action Items</Link> — Run check-in meetings that produce actual outcomes</li>
            <li><Link href="/guides/how-to-use-chatgpt-for-business/">How to Use ChatGPT for Small Business</Link> — 30+ prompts for every department, including HR and operations</li>
          </ul>

          <h2>Frequently asked questions</h2>
          <div className="faq-section">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <h3 className="faq-question">{f.q}</h3>
                <p className="faq-answer">{f.a}</p>
              </div>
            ))}
          </div>
        </article>
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
        <p className="footer-copyright">
          © 2026 ProfitSlab. All rights reserved. · Powered by{" "}
          <a href="https://www.evenrue.fi/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Evenrue</a>
        </p>
      </footer>
    </>
  );
}
