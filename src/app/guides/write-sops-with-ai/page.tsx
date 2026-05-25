import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Write SOPs in 10 Minutes Using ChatGPT: Step-by-Step Template",
  description:
    "Turn chaotic processes into clear, documented SOPs using ChatGPT. Copy-paste prompts + a reusable template. No writing skills required.",
  alternates: { canonical: "https://www.profitslab.io/guides/write-sops-with-ai/" },
  openGraph: {
    title: "Write SOPs in 10 Minutes Using ChatGPT | ProfitSlab",
    description:
      "Turn chaotic processes into clear, documented SOPs using ChatGPT. Copy-paste prompts + a reusable template.",
    url: "https://www.profitslab.io/guides/write-sops-with-ai/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Do I need to be a good writer to create SOPs with AI?",
    a: "No. You only need to know the steps of the task. ChatGPT does the structuring, formatting, and wording. Your job is to review the output and add any missing details. Most people spend more time fixing typos than creating the actual SOP — AI eliminates that entirely.",
  },
  {
    q: "How detailed should an SOP be?",
    a: "Detailed enough that someone who has never done the task can follow it without asking questions. If a step requires judgment (e.g., 'choose the best option'), add criteria for how to decide. If a tool has a specific setting, include the exact click path. Err on the side of too much detail — you can always trim later.",
  },
  {
    q: "Can ChatGPT create SOPs for technical or regulated tasks?",
    a: "Yes, but with caveats. ChatGPT can structure the SOP and write clear instructions. However, for regulated industries (healthcare, finance, aviation), you must have a subject matter expert review the output for compliance. Use AI for speed and structure — not as the final authority on safety or legal requirements.",
  },
  {
    q: "What is the difference between an SOP and a checklist?",
    a: "An SOP explains HOW to do something step by step. A checklist is a list of items to verify. Use an SOP when training someone on a process. Use a checklist when verifying quality or completeness. Many SOPs include a checklist at the end as a quality gate.",
  },
  {
    q: "How is this different from the AI Shortcut Stack?",
    a: "This guide gives you the SOP-specific prompts and a complete template system. The AI Shortcut Stack includes these prompts plus 70+ more for sales, marketing, customer service, and hiring. Start here for free; upgrade when you want the full library.",
  },
];

export default function WriteSOPsWithAI() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Write SOPs in 10 Minutes Using ChatGPT: Step-by-Step Template",
            description:
              "Turn chaotic processes into clear, documented SOPs using ChatGPT. Copy-paste prompts + a reusable template.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-05-25",
            dateModified: "2026-05-25",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/write-sops-with-ai/",
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
                name: "Write SOPs with AI",
                item: "https://www.profitslab.io/guides/write-sops-with-ai/",
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
                <span aria-current="page">SOPs</span>
              </div>
            </nav>
            <span className="article-tag">Operations</span>
            <h1>Write SOPs in 10 Minutes Using ChatGPT</h1>
            <p className="article-lead">
              Turn chaotic processes into clear, documented instructions. No writing skills required — just copy, paste, and edit.
            </p>
            <div className="article-meta">
              <span>ProfitSlab</span>
              <span>·</span>
              <time dateTime="2026-05-25">May 25, 2026</time>
              <span>·</span>
              <span>~3,200 words</span>
            </div>
          </div>
        </div>

        <article className="article-body">
          <h2>Why most SOPs never get written</h2>
          <p>
            Small business owners know they need standard operating procedures. They solve training headaches, reduce errors, and make the business sellable. But writing them feels like homework — tedious, time-consuming, and never urgent enough to actually do.
          </p>
          <p>
            The result? Knowledge lives in one person&apos;s head. When they leave, the process breaks. New team members ask the same questions repeatedly. Quality varies depending on who is working that day.
          </p>
          <p>
            ChatGPT fixes the bottleneck. Not by making you a better writer — by doing the writing for you. You explain the process in plain language. AI structures it, formats it, and fills in the gaps. Your job is review, not authorship.
          </p>

          <div className="prompt-block">
            <h4>💡 Mid-guide checkpoint</h4>
            <p>
              Want a personalized AI plan for YOUR business operations?{" "}
              <Link href="/audit">Take the free 5-minute AI Audit →</Link>
            </p>
          </div>

          <h2>The 4-part SOP framework that works every time</h2>
          <p>
            Every effective SOP has the same structure. Master this once, reuse it forever:
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Purpose</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Purpose</strong></td>
                <td>Why this SOP exists and what it achieves</td>
                <td>1–2 sentences</td>
              </tr>
              <tr>
                <td><strong>Scope</strong></td>
                <td>When to use this SOP and who should follow it</td>
                <td>1–2 sentences</td>
              </tr>
              <tr>
                <td><strong>Procedure</strong></td>
                <td>Numbered steps in exact order</td>
                <td>5–15 steps</td>
              </tr>
              <tr>
                <td><strong>Quality Check</strong></td>
                <td>How to verify the task was done correctly</td>
                <td>3–5 checkpoints</td>
              </tr>
            </tbody>
          </table>

          <h2>Prompt 1: Generate the SOP structure</h2>
          <p>
            Start here. This prompt creates the complete framework from a rough description of the task.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              I need an SOP for the following business process:
            </p>
            <p>
              [Describe the process in 2–3 sentences. Example: &quot;We onboard new clients by sending a welcome email, creating a project folder in Google Drive, scheduling a kickoff call, and adding them to our Slack channel.&quot;]
            </p>
            <p>
              Write a complete SOP using this structure:
            </p>
            <ol>
              <li><strong>Purpose:</strong> Why this process exists</li>
              <li><strong>Scope:</strong> When to use it and who is responsible</li>
              <li><strong>Procedure:</strong> Numbered steps with exact details (tool names, click paths, time limits)</li>
              <li><strong>Quality Check:</strong> 3–5 checkpoints to verify the task was done correctly</li>
            </ol>
            <p>
              Use clear, direct language. No jargon. Each step should be actionable — start with a verb. If a step requires a decision, include the criteria for deciding.
            </p>
          </div>

          <h2>Prompt 2: Expand a vague process into detailed steps</h2>
          <p>
            Sometimes you know the general idea but not the exact clicks. This prompt forces specificity.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is a rough description of a business process:
            </p>
            <p>
              [Paste your rough description]
            </p>
            <p>
              Break this into detailed, numbered steps. For each step:
            </p>
            <ul>
              <li>Start with an action verb (Click, Open, Write, Send, etc.)</li>
              <li>Include the exact tool or software name</li>
              <li>Include the specific setting, menu, or button if relevant</li>
              <li>Add a time estimate if applicable</li>
              <li>Flag any step that requires human judgment and add decision criteria</li>
            </ul>
            <p>
              Target reading level: 8th grade. No abbreviations without explanation.
            </p>
          </div>

          <h2>Prompt 3: Create a quality checklist from any SOP</h2>
          <p>
            Every SOP needs a quality gate. This prompt extracts the verification points from your procedure.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is an SOP I just wrote:
            </p>
            <p>
              [Paste the Procedure section from your SOP]
            </p>
            <p>
              Create a 5-point quality checklist at the end. Each checkpoint should be a yes/no question that verifies the task was completed correctly. Include at least one checkpoint that checks for common mistakes.
            </p>
          </div>

          <h2>Prompt 4: Convert an SOP into a training script</h2>
          <p>
            SOPs are for reference. Training scripts are for teaching. Use this when onboarding someone new.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Convert this SOP into a conversational training script:
            </p>
            <p>
              [Paste your full SOP]
            </p>
            <p>
              Format as a script where an experienced team member explains each step to a new hire. Include:
            </p>
            <ul>
              <li>Why each step matters (not just what to do)</li>
              <li>Common mistakes and how to avoid them</li>
              <li>One or two tips that only experienced people know</li>
              <li>Questions the new hire might ask, with answers</li>
            </ul>
            <p>
              Tone: friendly, practical, not corporate.
            </p>
          </div>

          <h2>Prompt 5: Update an outdated SOP</h2>
          <p>
            Tools change. Processes evolve. Use this instead of rewriting from scratch.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is our current SOP:
            </p>
            <p>
              [Paste existing SOP]
            </p>
            <p>
              We made the following changes to the process:
            </p>
            <ul>
              <li>[Change 1: e.g., &quot;We switched from Asana to Monday.com&quot;]</li>
              <li>[Change 2: e.g., &quot;We no longer send the welcome packet by email — it is now a Notion page&quot;]</li>
              <li>[Change 3 if applicable]</li>
            </ul>
            <p>
              Rewrite the SOP to reflect these changes. Keep the same structure (Purpose, Scope, Procedure, Quality Check). Highlight any step that is new or significantly different.
            </p>
          </div>

          <h2>Real example: Client onboarding SOP</h2>
          <p>
            Here is what the output looks like when you run Prompt 1 on a real business process.
          </p>

          <h3>Input (what the business owner typed)</h3>
          <blockquote className="article-blockquote">
            &quot;We onboard new clients by sending a welcome email, creating a project folder in Google Drive, scheduling a kickoff call, and adding them to our Slack channel. I usually do it myself but want my assistant to handle it.&quot;
          </blockquote>

          <h3>Output (what ChatGPT produced)</h3>

          <div className="prompt-block" style={{ background: "#f8f9fa" }}>
            <p><strong>Purpose:</strong> To onboard new clients efficiently, set clear expectations, and ensure the project team has all necessary access and information within 24 hours of contract signature.</p>
            <p><strong>Scope:</strong> Use this SOP for all new client engagements after the contract is signed. Primary owner: Operations Assistant. Escalation: Project Manager if tools are unavailable.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
              <li><strong>Send welcome email</strong> — Within 2 hours of contract signature. Use template &quot;New Client Welcome&quot; in Gmail. CC the Project Manager. Include: next steps, kickoff call scheduling link, and primary contact info.</li>
              <li><strong>Create project folder</strong> — In Google Drive under &quot;Clients/2026&quot;. Name format: &quot;ClientName_ProjectName&quot;. Create subfolders: &quot;01_Discovery&quot;, &quot;02_Deliverables&quot;, &quot;03_Feedback&quot;, &quot;04_Final&quot;.</li>
              <li><strong>Schedule kickoff call</strong> — Send Calendly link via welcome email. Book 45 minutes. Add to shared team calendar with title &quot;Kickoff: [ClientName]&quot;. Include Google Meet link.</li>
              <li><strong>Add to Slack</strong> — Create private channel &quot;#client-clientname&quot;. Invite Project Manager and assigned team members. Pin the kickoff call details and Drive folder link.</li>
              <li><strong>Update CRM</strong> — Mark deal as &quot;Closed-Won&quot; in HubSpot. Assign Project Manager as owner. Set expected close date to project end date.</li>
            </ol>
            <p><strong>Quality Check:</strong></p>
            <ul>
              <li>□ Welcome email sent within 2 hours</li>
              <li>□ Google Drive folder created with correct naming</li>
              <li>□ Kickoff call scheduled within 48 hours</li>
              <li>□ Slack channel created and team invited</li>
              <li>□ CRM updated and Project Manager assigned</li>
            </ul>
          </div>

          <p>
            Total time from rough description to finished SOP: <strong>8 minutes</strong>. The remaining 2 minutes were spent reviewing and adding the CRM step, which the owner had forgotten to mention initially.
          </p>

          <h2>How to store and organize your SOPs</h2>
          <p>
            Writing SOPs is useless if nobody can find them. Choose a system that your team already uses:
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Best for</th>
                <th>Setup time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Notion</strong></td>
                <td>Teams that want search, categories, and linked databases</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td><strong>Google Docs</strong></td>
                <td>Simple folders, easy sharing, no learning curve</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td><strong>ClickUp / Monday</strong></td>
                <td>Teams already using project management tools</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td><strong>Slack Canvas</strong></td>
                <td>Teams living in Slack who need quick reference</td>
                <td>15 min</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Naming convention:</strong> Use &quot;[Function] — [Task] — SOP&quot; for every file. Examples:
          </p>
          <ul>
            <li>Operations — Client Onboarding — SOP</li>
            <li>Marketing — Blog Publish Workflow — SOP</li>
            <li>Sales — Proposal Follow-Up — SOP</li>
          </ul>

          <h2>Common SOP mistakes (and how AI fixes them)</h2>

          <table className="article-table">
            <thead>
              <tr>
                <th>Mistake</th>
                <th>Why it happens</th>
                <th>AI fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Too vague</td>
                <td>Writer assumes reader knows context</td>
                <td>Prompt explicitly requests tool names and click paths</td>
              </tr>
              <tr>
                <td>Too long</td>
                <td>No structure — everything dumped in</td>
                <td>4-part framework keeps it focused</td>
              </tr>
              <tr>
                <td>No quality check</td>
                <td>Writer forgets to define &quot;done&quot;</td>
                <td>Prompt 3 auto-generates checklists</td>
              </tr>
              <tr>
                <td>Outdated fast</td>
                <td>Tools change, nobody updates the doc</td>
                <td>Prompt 5 rewrites in minutes instead of hours</td>
              </tr>
              <tr>
                <td>Never used</td>
                <td>Stored in a folder nobody checks</td>
                <td>AI converts SOPs into Slack-friendly formats</td>
              </tr>
            </tbody>
          </table>

          <h2>The 10-minute SOP workflow</h2>
          <p>
            Here is the exact process for creating any SOP from scratch:
          </p>

          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="workflow-step-number">1</div>
              <div className="workflow-step-content">
                <h4>Describe the process (2 min)</h4>
                <p>Talk it out or type 2–3 sentences. Do not worry about structure.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">2</div>
              <div className="workflow-step-content">
                <h4>Run Prompt 1 (2 min)</h4>
                <p>Paste your description into ChatGPT. Get the full structured SOP back.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">3</div>
              <div className="workflow-step-content">
                <h4>Review and add missing details (3 min)</h4>
                <p>Check for tool-specific steps you forgot. Add time limits. Fix any steps that need decision criteria.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">4</div>
              <div className="workflow-step-content">
                <h4>Run Prompt 3 for quality check (1 min)</h4>
                <p>Generate the yes/no verification checklist.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">5</div>
              <div className="workflow-step-content">
                <h4>Save and name correctly (2 min)</h4>
                <p>Use the naming convention. Store where your team will find it.</p>
              </div>
            </div>
          </div>

          <p>
            <strong>Total time: 10 minutes.</strong> Compare that to the 2+ hours it used to take to write, format, and second-guess an SOP from scratch.
          </p>

          <div className="cta-block">
            <h3>🛠️ Ready to systematize your whole business?</h3>
            <p>
              The <strong>AI Shortcut Stack</strong> has 80 copy-paste prompts for SOPs, sales, marketing, customer service, hiring, and operations. One-time purchase. No subscription.
            </p>
            <Link href="/products/prompt-stack" className="btn-primary">
              See the Prompts →
            </Link>
          </div>

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
