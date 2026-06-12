import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Meeting Notes to Action Items: The 2-Minute AI Workflow",
  description:
    "Turn messy meeting notes into assigned action items in 2 minutes. Copy-paste AI prompts for follow-up emails, task exports, and cleanup. No paid tools needed.",
  alternates: { canonical: "https://www.profitslab.io/guides/meeting-notes-to-action-items/" },
  openGraph: {
    title: "Meeting Notes to Action Items | ProfitSlab",
    description:
      "Turn messy meeting notes into assigned action items in 2 minutes. Copy-paste AI prompts for follow-up emails, task exports, and cleanup.",
    url: "https://www.profitslab.io/guides/meeting-notes-to-action-items/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can AI really turn meeting notes into action items in 2 minutes?",
    a: "Yes. The 2-minute claim is based on timed workflow testing with real meeting notes. Prompt 1 (raw notes to action items) takes 30 seconds to paste and 60 seconds to review. Prompt 2 (follow-up email) takes 30 seconds. The remaining time is spent confirming owners and deadlines. If your notes are well-structured, the total time from notes to sent follow-up email is under 2 minutes. Messy notes add 1-2 minutes for cleanup.",
  },
  {
    q: "What AI tool works best for this workflow?",
    a: "Any general-purpose LLM works. ChatGPT (GPT-4o), Claude 3.7 Sonnet, and Gemini 2.5 Pro all handle meeting note extraction well. Claude tends to produce more structured, conservative outputs. ChatGPT is faster and better at following exact formatting instructions. Notion AI is convenient if you already store notes in Notion. The prompts in this guide are tool-agnostic — copy-paste them into whichever AI you already use.",
  },
  {
    q: "Do I need a paid meeting transcription tool?",
    a: "No. This workflow works with any notes you already have — typed bullet points, a transcript from Zoom, Google Meet, or Microsoft Teams, or even a voice memo you transcribed. If you have a recording, you can paste the transcript into AI and run the same prompts. Paid tools like Read AI or Otter.ai are helpful but not required. The workflow is designed for small businesses that want results without another subscription.",
  },
  {
    q: "How do I prevent AI from hallucinating owners or deadlines?",
    a: "Use the safety checklist at the end of this guide. The three rules are: (1) always add \u0022if no owner is stated, mark as TBD and suggest the most likely person\u0022 to your prompt, (2) never let AI invent deadlines — require \u0022TBD\u0022 if none was mentioned, and (3) scan the output for action items that sound plausible but were never actually discussed. The 30-second review at the end catches 90% of hallucinations.",
  },
  {
    q: "Can this workflow handle client meetings, not just internal team meetings?",
    a: "Yes. In fact, client meetings are where this workflow shines because the stakes are higher and the follow-up email matters more. Prompt 2 includes a client-facing variation that is polished and professional. For client calls, you may also want to run two versions: one internal (candid, includes your own next steps) and one client-facing (polished, includes their action items). The prompts support both.",
  },
  {
    q: "What if my meeting notes are just a wall of text with no structure?",
    a: "Use Prompt 3 (the cleanup prompt). It is specifically designed for unstructured, messy, or half-finished notes. The prompt tells AI to extract only decisions and commitments, ignore discussion noise, and flag anything that needs clarification. Even a stream-of-consciousness voice memo can be turned into clean action items in one pass. If the notes are extremely messy, run Prompt 3 first, then Prompt 1 on the cleaned output.",
  },
  {
    q: "How do I turn this into a habit my team actually follows?",
    a: "Save the prompts as shortcuts in your AI tool (ChatGPT custom instructions, Claude projects, or Notion AI snippets). Then document a 5-minute SOP: \u0022After every meeting, paste notes into AI, run the action items prompt, confirm owners, send the follow-up email.\u0022 Assign one person per meeting to own the post-meeting workflow. For recurring meetings, the same person handles it every time so the habit sticks. Link this SOP in your meeting calendar invites so it is visible.",
  },
];

export default function MeetingNotesToActionItems() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Meeting Notes to Action Items: The 2-Minute AI Workflow",
            description:
              "Turn messy meeting notes into assigned action items in 2 minutes. Copy-paste AI prompts for follow-up emails, task exports, and cleanup. No paid tools needed.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-06-12",
            dateModified: "2026-06-12",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/meeting-notes-to-action-items/",
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
                name: "Meeting Notes to Action Items",
                item: "https://www.profitslab.io/guides/meeting-notes-to-action-items/",
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
                <span aria-current="page">Meeting Notes</span>
              </div>
            </nav>
            <span className="article-tag">Operations</span>
            <h1>Meeting Notes to Action Items: The 2-Minute AI Workflow</h1>
            <p className="article-lead">
              Turn messy meeting notes into assigned, dated action items in under 2 minutes. No transcription software. No paid tools. Just copy-paste prompts that work with any AI.
            </p>
            <div className="article-meta">
              <span>ProfitSlab</span>
              <span>·</span>
              <time dateTime="2026-06-12">June 12, 2026</time>
              <span>·</span>
              <span>~2,800 words</span>
            </div>
          </div>
        </div>

        <article className="article-body">
          <h2>Why most meeting notes never become action items</h2>
          <p>
            The meeting ends. Everyone nods. Someone says, \u0022I will send a summary.\u0022 Then nothing happens. Three days later, nobody remembers who was supposed to do what. The deadline passes. The client follows up. You scramble to reconstruct what was decided.
          </p>
          <p>
            This is not a discipline problem. It is a <strong>translation problem</strong>. Raw meeting notes — whether typed bullets, a Zoom transcript, or a voice memo — are not tasks. They are a record of conversation. Turning them into action items requires three decisions: what needs to be done, who owns it, and when is it due. Most people skip this step because it takes time and mental effort.
          </p>
          <p>
            AI removes that friction. With the right prompts, you can paste raw notes into <Link href="/guides/how-to-use-chatgpt-for-business/">ChatGPT or Claude</Link> and get back structured action items in under a minute. The follow-up email takes another 30 seconds. The entire workflow from notes to sent accountability email fits in 2 minutes — faster than most people spend searching for the meeting recording.
          </p>
          <p>
            This guide gives you five copy-paste prompts. They work with any AI tool. They handle clean notes, messy notes, missing owners, and export to any project management system. No subscriptions required. No new software to learn.
          </p>

          <h2>The 2-minute workflow at a glance</h2>
          <p>
            Before the prompts, here is the full workflow. Each step is timed based on real testing with actual meeting notes from client calls, team standups, and project reviews.
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>What You Do</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Paste</strong></td>
                <td>Copy your raw notes and paste into AI</td>
                <td>15 sec</td>
              </tr>
              <tr>
                <td><strong>2. Extract</strong></td>
                <td>Run Prompt 1 — get action items with owners and dates</td>
                <td>45 sec</td>
              </tr>
              <tr>
                <td><strong>3. Review</strong></td>
                <td>Confirm owners, flag TBD items, fix anything AI missed</td>
                <td>30 sec</td>
              </tr>
              <tr>
                <td><strong>4. Email</strong></td>
                <td>Run Prompt 2 — generate follow-up email with action items</td>
                <td>30 sec</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td>From notes to sent accountability email</td>
                <td><strong>2 min</strong></td>
              </tr>
            </tbody>
          </table>

          <p>
            If your notes are messy — vague language, no owners, half-finished thoughts — add Prompt 3 (cleanup) before Prompt 1. That adds 60 seconds. Even the worst notes become clear action items in under 4 minutes.
          </p>

          <h2>Prompt 1 — Turn raw meeting notes into action items</h2>
          <p>
            This is the core prompt. Paste any notes — typed bullets, a transcript, or even a voice memo you dictated — and get back structured action items with owners, deadlines, and a definition of done for each task.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              I have raw meeting notes below. Extract every action item and format them as a clean list.
            </p>
            <p>
              <strong>Rules:</strong>
            </p>
            <ol>
              <li>Only extract items that require someone to do something. Do not include discussion, context, or decisions with no next step.</li>
              <li>Every action item must include: a clear task description, a named owner (if stated in the notes), and a due date (if stated). If no owner is named, mark as TBD and suggest the most likely person based on context.</li>
              <li>If no deadline is mentioned, mark as TBD. Do not invent dates.</li>
              <li>Add a one-sentence \u0022definition of done\u0022 for each item — what does completion look like?</li>
              <li>Flag any action item that is vague or unclear with [NEEDS CLARIFICATION].</li>
              <li>Sort by priority: urgent/deadline-driven first, then everything else.</li>
            </ol>
            <p>
              <strong>Output format:</strong>
            </p>
            <p>
              - [Task] — Owner: [Name or TBD] — Due: [Date or TBD] — Done when: [Definition of done]
            </p>
            <p>
              <strong>Raw meeting notes:</strong>
            </p>
            <p>
              [Paste your notes here]
            </p>
          </div>

          <p>
            <strong>What to expect:</strong> AI will return 3-8 action items depending on the meeting length. Some will have owners and dates. Others will be TBD. The definition-of-done line is the most valuable part — it turns vague tasks into specific deliverables. For example, \u0022look into pricing\u0022 becomes \u0022send vendor pricing comparison to team by Friday — done when comparison doc is shared in Slack.\u0022
          </p>

          <h2>Prompt 2 — Write the follow-up email in 30 seconds</h2>
          <p>
            Action items are worthless if nobody knows they exist. The follow-up email closes the accountability loop. This prompt generates a professional email from your action items, ready to send to attendees, stakeholders, or clients.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Write a follow-up email based on these meeting action items.
            </p>
            <p>
              <strong>Constraints:</strong>
            </p>
            <ul>
              <li>6-10 sentences max</li>
              <li>Subject line: clear and specific, under 60 characters</li>
              <li>Bullet the action items with Owner + Due date</li>
              <li>Include one line of \u0022open questions\u0022 or items that need clarification</li>
              <li>Tone: neutral, professional, not overly formal</li>
              <li>End with a clear next step or check-in date</li>
            </ul>
            <p>
              <strong>Meeting context:</strong> [Internal team meeting / Client call / Project review / Standup]
            </p>
            <p>
              <strong>Attendees:</strong> [Names, or omit if not needed]
            </p>
            <p>
              <strong>Action items:</strong>
            </p>
            <p>
              [Paste the output from Prompt 1 here]
            </p>
          </div>

          <h3>Internal vs. client-facing versions</h3>
          <p>
            For internal team emails, keep the tone direct and candid. Flag blockers, mention dependencies, and assign accountability without softening language. For client-facing emails, add a thank-you line, keep the \u0022open questions\u0022 section polished, and frame action items as collaboration rather than assignments. Change the meeting context line in the prompt and the tone shifts automatically.
          </p>

          <h2>Prompt 3 — Clean up messy or vague notes</h2>
          <p>
            Sometimes your notes are a disaster. Half-sentences. Thoughts that trail off. Vague commitments like \u0022we should look into that\u0022 with no owner. This prompt is a pre-processor. Run it before Prompt 1 when your notes are unstructured, and you will get dramatically better output.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              I have messy, unstructured meeting notes below. Clean them up and extract only the decisions and commitments.
            </p>
            <p>
              <strong>Instructions:</strong>
            </p>
            <ol>
              <li>Remove all discussion, backstory, and debate. Keep only what was decided.</li>
              <li>Convert vague commitments into specific tasks. For example, \u0022we should review the budget\u0022 becomes \u0022Review Q3 budget and flag variances over 10%.\u0022</li>
              <li>Guess the owner for each task based on who was speaking or their role. Mark uncertain owners with [?].</li>
              <li>Preserve any deadlines mentioned, even if informal (\u0022by next Friday\u0022 = specific date).</li>
              <li>Output a clean, structured summary: Decisions, Action Items, Open Questions.</li>
            </ol>
            <p>
              <strong>Messy notes:</strong>
            </p>
            <p>
              [Paste your raw, unstructured notes here]
            </p>
          </div>

          <p>
            <strong>Pro tip:</strong> If you recorded a voice memo, paste the transcript directly into this prompt. AI is surprisingly good at extracting signal from the noise of spoken language — hesitations, tangents, and all. The cleanup prompt turns a 10-minute ramble into 6 clear bullet points.
          </p>

          <h2>Prompt 4 — Assign owners when nobody was named</h2>
          <p>
            In many meetings, especially fast-moving ones, nobody explicitly says \u0022Alex will handle this.\u0022 The task is discussed, everyone assumes someone else is doing it, and it dies. This prompt uses context and role inference to suggest owners for unassigned tasks. You still confirm them, but AI does the hard work of matching tasks to people.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              I have action items with no clear owners. Suggest the most likely owner for each based on the context below.
            </p>
            <p>
              <strong>Team context:</strong>
            </p>
            <p>
              [List each team member and their role: e.g., \u0022Sarah — Marketing Manager, handles campaigns and content.\u0022 \u0022Jake — Lead Developer, owns technical decisions and architecture.\u0022]
            </p>
            <p>
              <strong>Action items needing owners:</strong>
            </p>
            <p>
              [Paste the TBD items from Prompt 1 output here]
            </p>
            <p>
              <strong>Instructions:</strong>
            </p>
            <ol>
              <li>Suggest one owner per task based on role alignment and who was most involved in the discussion.</li>
              <li>If a task could belong to two people, suggest a primary owner and a secondary reviewer.</li>
              <li>Flag any task that seems like it should be split into two smaller items.</li>
              <li>Output as: Task — Suggested Owner — Confidence (High/Medium/Low) — Reasoning</li>
            </ol>
          </div>

          <p>
            <strong>Always confirm inferred owners.</strong> AI suggestions are educated guesses, not assignments. Send a quick message: \u0022AI suggested you own the Q3 budget review based on your role — does that work?\u0022 This takes 10 seconds and prevents the wrong person from being surprised by a deadline.
          </p>

          <h2>Prompt 5 — Export to your project management tool</h2>
          <p>
            Action items in an email are good. Action items in your task tracker are better. This prompt converts your action items into the import format for Notion, Asana, Trello, ClickUp, or Monday.com. One copy-paste and your meeting tasks are where they belong.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Convert these action items into a format I can import into [Notion / Asana / Trello / ClickUp / Monday.com / Google Sheets].
            </p>
            <p>
              <strong>Action items:</strong>
            </p>
            <p>
              [Paste output from Prompt 1 here]
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul>
              <li>Columns: Task Name, Owner, Due Date, Priority (High/Medium/Low), Status (Not started), Definition of Done</li>
              <li>Format as a markdown table for easy copy-paste into any tool</li>
              <li>Include a \u0022Source: [Meeting Name] — [Date]\u0022 column so tasks are traceable</li>
              <li>Sort by Due Date, then Priority</li>
            </ul>
          </div>

          <p>
            For Notion users, paste the markdown table into a database and it automatically converts to rows. For Asana, use the CSV export format and import via the CSV importer. For Trello, ask AI to output a JSON card format. The prompt adapts to whichever tool your team already uses.
          </p>

          <div className="prompt-block" style={{ background: "#f8f9fa" }}>
            <h4>💡 Mid-guide checkpoint</h4>
            <p>
              Not sure where AI fits best in your workflow?{" "}
              <Link href="/audit">Take the free 5-minute AI Audit →</Link>
            </p>
          </div>

          <h2>The safety checklist: what AI gets wrong</h2>
          <p>
            AI is fast, not perfect. Before you send that follow-up email or add tasks to your project tracker, run through this 30-second checklist. It catches the three most common AI errors in meeting note extraction.
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Check</th>
                <th>What to Look For</th>
                <th>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Hallucinated owners</strong></td>
                <td>AI assigned an owner who was never in the meeting</td>
                <td>Mark TBD, suggest the correct person</td>
              </tr>
              <tr>
                <td><strong>2. Invented deadlines</strong></td>
                <td>AI added a date that was never discussed</td>
                <td>Replace with TBD, add to open questions</td>
              </tr>
              <tr>
                <td><strong>3. Missed action items</strong></td>
                <td>A task was buried in discussion and AI skipped it</td>
                <td>Manually add it, re-run the prompt with the missed item highlighted</td>
              </tr>
              <tr>
                <td><strong>4. Vague definitions of done</strong></td>
                <td>\u0022Complete the review\u0022 is not a definition of done</td>
                <td>Rewrite to a specific deliverable: \u0022Send reviewed doc with comments to team\u0022</td>
              </tr>
              <tr>
                <td><strong>5. Merged tasks</strong></td>
                <td>AI combined two distinct tasks into one</td>
                <td>Split into separate items with different owners if needed</td>
              </tr>
            </tbody>
          </table>

          <p>
            The golden rule: <strong>AI drafts. You decide.</strong> The 30-second review is non-negotiable. It is the difference between a workflow that saves 20 minutes and a workflow that creates confusion.
          </p>

          <h2>Real example: from client call to action items in 2 minutes</h2>
          <p>
            Here is how a marketing consultant used this workflow after a 30-minute client call about a Q3 campaign launch.
          </p>

          <h3>Step 1: The raw notes</h3>
          <p>
            She typed these bullets during the call (no transcription tool, just Notes app):
          </p>
          <ul>
            <li>Client wants to launch LinkedIn campaign by July 15</li>
            <li>They have a 3k budget, need to confirm if that covers creative + ad spend</li>
            <li>We should send them the case study from the SaaS client</li>
            <li>They asked about tracking — we use UTM codes, need to explain that</li>
            <li>Next call same time next week to review creative direction</li>
            <li>They want to see 3 ad concepts before they approve</li>
          </ul>

          <h3>Step 2: Run Prompt 1 (45 seconds)</h3>
          <p>
            She pasted the bullets into ChatGPT with Prompt 1. Output:
          </p>
          <ul>
            <li>Draft 3 LinkedIn ad concepts for Q3 campaign — Owner: TBD (suggest: consultant) — Due: July 8 — Done when: 3 concepts sent to client for review</li>
            <li>Confirm $3k budget breakdown (creative + ad spend) — Owner: TBD (suggest: consultant) — Due: July 1 — Done when: budget breakdown email sent and client confirms</li>
            <li>Send SaaS case study to client — Owner: TBD (suggest: consultant) — Due: TBD — Done when: case study PDF delivered via email</li>
            <li>Prepare UTM tracking explanation for client — Owner: TBD (suggest: consultant) — Due: July 1 — Done when: 1-page tracking guide sent</li>
            <li>Schedule follow-up call for next week — Owner: TBD (suggest: consultant) — Due: TBD — Done when: calendar invite sent for same time next week</li>
          </ul>

          <h3>Step 3: Review and confirm (30 seconds)</h3>
          <p>
            She confirmed she owned all tasks. She added July 1 to the case study item. She split the budget confirmation into two items: one for her to calculate, one for the client to confirm.
          </p>

          <h3>Step 4: Run Prompt 2 (30 seconds)</h3>
          <p>
            She pasted the confirmed action items into Prompt 2. AI generated a 6-sentence follow-up email with a clear subject line, bullet list, and a check-in date. She sent it immediately.
          </p>

          <p>
            <strong>Total time: 1 minute 45 seconds.</strong> The client had a clear list of next steps before they were back at their desk. Compare this to the typical post-meeting drift: no summary, no action items, and a follow-up call where everyone asks \u0022what did we decide again?\u0022
          </p>

          <h2>How to turn this into a team habit</h2>
          <p>
            One person using this workflow is helpful. A whole team using it is transformative. Here is how to make it stick without adding bureaucracy.
          </p>

          <h3>Save the prompts as shortcuts</h3>
          <p>
            In ChatGPT, save Prompt 1 and Prompt 2 as custom instructions or GPTs. In Claude, add them to a project. In Notion, create AI snippets. The goal is zero friction: after a meeting, the prompts are one click away, not a hunt through documents.
          </p>

          <h3>Document a 5-minute SOP</h3>
          <p>
            Write it down. <Link href="/guides/write-sops-with-ai/">Use the SOP guide here</Link> to create a one-page process: \u0022After every meeting, paste notes into AI, run the action items prompt, confirm owners, send the follow-up email.\u0022 Assign one person per meeting to own this. For recurring meetings, the same person handles it every time. Consistency beats perfection.
          </p>

          <h3>Link it in your calendar invites</h3>
          <p>
            Add a line to your meeting template: \u0022Action items and follow-up email will be sent within 30 minutes of this meeting.\u0022 This sets expectations before the meeting even starts. Attendees know accountability is built in.
          </p>

          <h3>Track outcomes over time</h3>
          <p>
            For a month, track two numbers: how many meetings had action items sent, and how many of those action items were completed by the due date. You will see a pattern. Teams that send action items within 30 minutes of a meeting have 2-3x higher completion rates than teams that wait a day. Speed creates accountability. <Link href="/guides/ai-business-data-analysis/">Use AI to track these numbers</Link> if you want to measure the impact.
          </p>

          <div className="cta-block">
            <h3>🛠️ Want all 70+ prompts in one place?</h3>
            <p>
              The <strong>AI Shortcut Stack</strong> includes these meeting prompts plus 70+ more for sales, marketing, customer service, SOPs, contracts, and operations. One-time purchase. No subscription.
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
            <li><Link href="/guides/how-to-use-chatgpt-for-business/">How to Use ChatGPT for Small Business</Link> — 30+ prompts for every department</li>
            <li><Link href="/guides/write-sops-with-ai/">Write SOPs with AI</Link> — Turn this meeting workflow into a documented team procedure</li>
            <li><Link href="/guides/ai-business-data-analysis/">AI Business Data Analysis</Link> — Track meeting completion rates and team accountability metrics</li>
            <li><Link href="/guides/ai-contract-drafting/">AI Contract Drafting for Small Business</Link> — After the meeting, draft the contract or scope of work</li>
            <li><Link href="/guides/best-ai-tools-small-business/">Best AI Tools for Small Business in 2026</Link> — 20+ tools tested and ranked</li>
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
