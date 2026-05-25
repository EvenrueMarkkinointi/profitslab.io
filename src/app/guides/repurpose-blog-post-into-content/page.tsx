import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "How to Repurpose One Blog Post into 10 Pieces of Content (AI Workflow)",
  description:
    "Turn one blog post into 10 content pieces using ChatGPT. Copy-paste prompts for LinkedIn, Twitter, email, video scripts, and more. No extra writing required.",
  alternates: { canonical: "https://www.profitslab.io/guides/repurpose-blog-post-into-content/" },
  openGraph: {
    title: "How to Repurpose One Blog Post into 10 Pieces of Content | ProfitSlab",
    description:
      "Turn one blog post into 10 content pieces using ChatGPT. Copy-paste prompts for every platform. No extra writing required.",
    url: "https://www.profitslab.io/guides/repurpose-blog-post-into-content/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Will repurposed content get penalized by Google for duplicate content?",
    a: "No. Google does not penalize duplicate content unless it is exact-copy spam on the same domain. Repurposing means adapting the content for different formats and platforms — a LinkedIn post is not the same as a blog post, even if they share the same core idea. Each piece should be rewritten for the platform and audience. This is standard content strategy, not duplicate content.",
  },
  {
    q: "How long does the full repurposing workflow take?",
    a: "With AI: 45–60 minutes from blog post to 10 pieces. Without AI: 4–6 hours. The prompts in this guide handle the rewriting, formatting, and platform-specific tweaks. Your time is spent reviewing, editing for brand voice, and scheduling. Most small business owners can batch a week's worth of content from one blog post in under an hour.",
  },
  {
    q: "Can I repurpose content from other people\u0027s blogs?",
    a: "Only with permission or proper attribution. Repurposing your own original content is the intended use case. If you want to share someone else\u0027s insights, write an original commentary piece that references their work, then repurpose your commentary. Never copy and repurpose someone else\u0027s full article without permission.",
  },
  {
    q: "Which AI model works best for content repurposing?",
    a: "ChatGPT-4o or Claude 4 for most text formats. Claude tends to write more natural social copy with better tone variation. ChatGPT is faster for bulk generation and structured formats like email sequences. For video scripts, either works well — just specify the speaking style you want (conversational, energetic, instructional).",
  },
  {
    q: "How is this different from the AI Shortcut Stack?",
    a: "This guide covers the complete repurposing workflow with prompts for 10 specific content formats. The AI Shortcut Stack includes these prompts plus 70+ more for sales, customer service, operations, and hiring. Start here for free; upgrade when you want the full library.",
  },
];

export default function RepurposeBlogPost() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Repurpose One Blog Post into 10 Pieces of Content (AI Workflow)",
            description:
              "Turn one blog post into 10 content pieces using ChatGPT. Copy-paste prompts for every platform.",
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
              "@id": "https://www.profitslab.io/guides/repurpose-blog-post-into-content/",
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
                name: "Repurpose Blog Post",
                item: "https://www.profitslab.io/guides/repurpose-blog-post-into-content/",
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
                <span aria-current="page">Repurposing</span>
              </div>
            </nav>
            <span className="article-tag">Marketing</span>
            <h1>How to Repurpose One Blog Post into 10 Pieces of Content</h1>
            <p className="article-lead">
              Turn one article into a week of content across every platform. Copy-paste prompts included. No extra writing required.
            </p>
            <div className="article-meta">
              <span>ProfitSlab</span>
              <span>·</span>
              <time dateTime="2026-05-25">May 25, 2026</time>
              <span>·</span>
              <span>~3,400 words</span>
            </div>
          </div>
        </div>

        <article className="article-body">
          <h2>Why content repurposing is non-negotiable</h2>
          <p>
            Small business owners publish a blog post, share it once on LinkedIn, and move on. The post gets 200 views, 5 likes, and disappears into the archive. Three hours of work, one moment of visibility.
          </p>
          <p>
            The problem is not the content — it is the distribution. Most businesses create once and distribute once. Smart businesses create once and distribute ten times, each format optimized for the platform it lives on.
          </p>
          <p>
            AI makes this practical. The core ideas are already written. What takes time is reformatting — turning a blog post into a Twitter thread, an email, a LinkedIn carousel, a video script. ChatGPT does the reformatting in seconds. Your job is to pick the best pieces and add your voice.
          </p>
          <p>
            This guide gives you the exact workflow: one blog post in, ten content pieces out, one hour of work.
          </p>

          <div className="prompt-block">
            <h4>💡 Mid-guide checkpoint</h4>
            <p>
              Want a personalized AI plan for YOUR content strategy?{" "}
              <Link href="/audit">Take the free 5-minute AI Audit →</Link>
            </p>
          </div>

          <h2>The repurposing matrix: what becomes what</h2>
          <p>
            Not every format works for every piece. Use this matrix to decide which outputs make sense for your blog post:
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>Output Format</th>
                <th>Best For</th>
                <th>Platform</th>
                <th>Time (AI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>LinkedIn post</strong></td>
                <td>Professional insights, B2B takeaways</td>
                <td>LinkedIn</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td><strong>Twitter/X thread</strong></td>
                <td>Lists, frameworks, quick tips</td>
                <td>X / Twitter</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td><strong>Email newsletter</strong></td>
                <td>Deep dives, stories, actionable advice</td>
                <td>Email</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td><strong>Instagram carousel</strong></td>
                <td>Visual frameworks, step-by-step guides</td>
                <td>Instagram</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td><strong>Short video script</strong></td>
                <td>Hook + one key insight + CTA</td>
                <td>TikTok / Reels / Shorts</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td><strong>YouTube script</strong></td>
                <td>Educational content, tutorials</td>
                <td>YouTube</td>
                <td>5 min</td>
              </tr>
              <tr>
                <td><strong>PDF lead magnet</strong></td>
                <td>Actionable checklists, templates</td>
                <td>Lead capture</td>
                <td>5 min</td>
              </tr>
              <tr>
                <td><strong>FAQ page</strong></td>
                <td>Common questions from the topic</td>
                <td>Website SEO</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td><strong>Reddit post</strong></td>
                <td>Genuine advice, community value</td>
                <td>Reddit</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td><strong>Guest pitch</strong></td>
                <td>Industry publications, podcasts</td>
                <td>Outreach</td>
                <td>3 min</td>
              </tr>
            </tbody>
          </table>

          <h2>Prompt 1: LinkedIn post from blog article</h2>
          <p>
            LinkedIn rewards personal perspective. The post should feel like a founder sharing a lesson, not a company publishing a press release.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Write a LinkedIn post based on the single most valuable insight from this article. Format:
            </p>
            <ol>
              <li><strong>Hook (1 sentence):</strong> A contrarian take, surprising stat, or personal story that stops the scroll</li>
              <li><strong>Setup (2–3 sentences):</strong> Context for why this matters</li>
              <li><strong>The insight (3–4 sentences):</strong> The core idea, explained simply</li>
              <li><strong>Proof (1–2 sentences):</strong> A result, example, or lesson learned</li>
              <li><strong>CTA (1 sentence):</strong> Ask a question or invite discussion</li>
            </ol>
            <p>
              Tone: confident but not arrogant. First person (&quot;I&quot;, &quot;we&quot;). No corporate language. Max 150 words. Include 3–5 relevant hashtags at the end.
            </p>
          </div>

          <h2>Prompt 2: Twitter/X thread from blog article</h2>
          <p>
            Threads work best for list-based content, frameworks, or step-by-step breakdowns. Each tweet should stand alone but build on the last.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Turn the key framework or list from this article into a 7-tweet thread. Rules:
            </p>
            <ul>
              <li>Tweet 1: Hook — bold statement or surprising fact. No hashtags.</li>
              <li>Tweets 2–6: One idea per tweet. Number them (1/ 2/ 3/ etc.). Punchy, under 280 characters each.</li>
              <li>Tweet 7: CTA — ask a question, link to the full blog post, or offer a resource.</li>
              <li>Include line breaks between tweets for readability.</li>
            </ul>
            <p>
              Tone: direct, slightly irreverent, no fluff. Write like a founder who knows what they are talking about and does not need to prove it.
            </p>
          </div>

          <h2>Prompt 3: Email newsletter from blog article</h2>
          <p>
            Email is the only channel you own. A newsletter should feel personal — like a note to a smart friend, not a broadcast.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Rewrite this as a conversational email newsletter. Format:
            </p>
            <ol>
              <li><strong>Subject line:</strong> 5–7 words, curiosity-driven, no clickbait</li>
              <li><strong>Preview text:</strong> 1 sentence that complements (not repeats) the subject line</li>
              <li><strong>Open (3–4 sentences):</strong> Personal hook — a story, observation, or question</li>
              <li><strong>Body (4–6 short paragraphs):</strong> The core insight, rewritten conversationally</li>
              <li><strong>Actionable tip (1 paragraph):</strong> One specific thing the reader can do today</li>
              <li><strong>Close (2 sentences):</strong> Warm sign-off with a forward-looking question</li>
            </ol>
            <p>
              Tone: friendly, slightly informal. Use contractions. Write like you are emailing one person, not a list. No HTML formatting suggestions — plain text only.
            </p>
          </div>

          <h2>Prompt 4: Instagram carousel from blog article</h2>
          <p>
            Carousels get saved and shared. The key is visual structure — each slide should make sense on its own but work as a sequence.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Create an Instagram carousel outline (5–7 slides) based on the main framework or process in this article. For each slide, provide:
            </p>
            <ol>
              <li><strong>Slide title:</strong> 3–5 words, bold, attention-grabbing</li>
              <li><strong>Slide content:</strong> 1–2 sentences or 3–5 bullet points max</li>
              <li><strong>Visual direction:</strong> What the slide should look like (minimal text, icon, color block, etc.)</li>
            </ol>
            <p>
              Slide 1 is the hook/cover. Slide 2 sets up the problem. Slides 3–5 are the core content. Slide 6 is a tip or warning. Slide 7 is the CTA (follow, save, comment, or link in bio).
            </p>
          </div>

          <h2>Prompt 5: Short video script from blog article</h2>
          <p>
            Short-form video (TikTok, Reels, Shorts) needs a strong hook in the first 2 seconds. The script should feel like you are talking to the camera, not reading an essay.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Write a 60-second video script based on the most surprising or counterintuitive point in this article. Format:
            </p>
            <ol>
              <li><strong>Hook (0–3 seconds):</strong> Direct to camera, bold statement or question</li>
              <li><strong>Setup (3–15 seconds):</strong> Quick context — why this matters</li>
              <li><strong>The insight (15–45 seconds):</strong> The core idea, explained simply with one example</li>
              <li><strong>CTA (45–60 seconds):</strong> Clear next step — follow, comment, or visit link</li>
            </ol>
            <p>
              Include [B-roll] notes where visuals should cut in. Include [Text on screen] notes for key phrases that should appear as overlays. Tone: energetic but not cringe. Like a founder explaining something they genuinely care about.
            </p>
          </div>

          <h2>Prompt 6: YouTube script from blog article</h2>
          <p>
            YouTube scripts need structure but should feel conversational. The blog post provides the research; the script provides the performance.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Convert this into a 5-minute YouTube script. Format:
            </p>
            <ul>
              <li><strong>Title suggestion:</strong> Clickable but not clickbait</li>
              <li><strong>Thumbnail text suggestion:</strong> 2–3 words that fit on a thumbnail</li>
              <li><strong>Intro (0:30):</strong> Hook + what the viewer will learn + why you are qualified to teach it</li>
              <li><strong>Section 1 (1:30):</strong> Problem setup — what most people get wrong</li>
              <li><strong>Section 2 (2:30):</strong> The solution — step-by-step breakdown</li>
              <li><strong>Section 3 (1:00):</strong> Real example or case study</li>
              <li><strong>Outro (0:30):</strong> Summary + CTA (subscribe, resource link, related video)</li>
            </ul>
            <p>
              Write in spoken English — short sentences, contractions, natural pauses marked as [pause]. Include [Visual] cues for B-roll or screen captures.
            </p>
          </div>

          <h2>Prompt 7: PDF lead magnet from blog article</h2>
          <p>
            A PDF lead magnet turns readers into subscribers. It should be immediately useful — something people would pay for, but you give away for free.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Extract the most actionable framework or checklist from this article and turn it into a one-page PDF lead magnet. Include:
            </p>
            <ol>
              <li><strong>Title:</strong> Benefit-driven, 5–7 words</li>
              <li><strong>Subtitle:</strong> One sentence explaining what they will get</li>
              <li><strong>Core content:</strong> A checklist, template, or step-by-step framework (5–7 items)</li>
              <li><strong>Tip box:</strong> One pro tip most people miss</li>
              <li><strong>Footer:</strong> Website URL + copyright</li>
            </ol>
            <p>
              Format as plain text with clear section breaks. I will convert to designed PDF myself. Target: fits on one page, scannable in 30 seconds, valuable enough to save.
            </p>
          </div>

          <h2>Prompt 8: FAQ page from blog article</h2>
          <p>
            FAQ pages serve two purposes: they help readers who skim, and they rank for long-tail search queries related to your topic.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Generate 5 frequently asked questions based on this article. Each FAQ should:
            </p>
            <ul>
              <li>Answer a question someone might search on Google</li>
              <li>Include a specific, actionable answer (not vague)</li>
              <li>Be 2–3 sentences long</li>
              <li>Use the exact phrasing a real person would search for</li>
            </ul>
            <p>
              Format as Q/A pairs. I will use these on a dedicated FAQ page for SEO.
            </p>
          </div>

          <h2>Prompt 9: Reddit post from blog article</h2>
          <p>
            Reddit hates promotion but loves genuine value. The post should feel like you are helping a community, not marketing to it.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Write a Reddit post for r/smallbusiness or r/entrepreneur based on the most practical tip in this article. Rules:
            </p>
            <ul>
              <li>No links in the main post (Reddit filters them)</li>
              <li>Lead with the problem, not the solution</li>
              <li>Share a personal story or specific result</li>
              <li>Include the tip as something you learned, not something you are selling</li>
              <li>End with an open question to spark discussion</li>
              <li>Total length: 150–200 words</li>
            </ul>
            <p>
              Tone: humble, helpful, slightly self-deprecating. Like a founder who figured something out and wants to share it, not an expert lecturing.
            </p>
          </div>

          <h2>Prompt 10: Guest pitch from blog article</h2>
          <p>
            Guest posts and podcast appearances multiply your reach. The pitch should be about their audience, not your article.
          </p>

          <div className="prompt-block">
            <div className="prompt-label">COPY · PASTE · EDIT</div>
            <p>
              Here is my blog post:
            </p>
            <p>
              [Paste full blog post]
            </p>
            <p>
              Write a guest post pitch email based on this article. Format:
            </p>
            <ol>
              <li><strong>Subject line:</strong> 4–6 words, specific to their audience</li>
              <li><strong>Open (1 sentence):</strong> Compliment a specific recent piece of their content</li>
              <li><strong>Pitch (2–3 sentences):</strong> The angle, why it fits their audience, and what they will learn</li>
              <li><strong>Proof (1 sentence):</strong> Brief credibility signal</li>
              <li><strong>Ask (1 sentence):</strong> Soft CTA — &quot;Would this be a fit?&quot;</li>
              <li><strong>Sign-off:</strong> First name only</li>
            </ol>
            <p>
              Tone: respectful, specific, not desperate. No templates that sound like templates. Personalize every line.
            </p>
          </div>

          <h2>Real example: one blog post → 10 pieces</h2>
          <p>
            Here is how the workflow looks with a real blog post. Let us say you wrote: &quot;How I Reduced Customer Support Time by 60% Using AI Prompts&quot;
          </p>

          <table className="article-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Format</th>
                <th>Output</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>LinkedIn post</td>
                <td>Personal story about the support bottleneck + the one prompt that changed everything</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Twitter thread</td>
                <td>7-tweet breakdown: the 5 AI prompts for customer service, numbered</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Email newsletter</td>
                <td>Story-driven email: &quot;The Tuesday I Almost Quit Support&quot; with the framework</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Instagram carousel</td>
                <td>5 slides: The 5 prompts as visual cards</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Short video script</td>
                <td>60-second: &quot;One AI prompt that handles angry customers&quot;</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td>6</td>
                <td>YouTube script</td>
                <td>5-minute tutorial: &quot;Build Your First AI Customer Response System&quot;</td>
                <td>5 min</td>
              </tr>
              <tr>
                <td>7</td>
                <td>PDF lead magnet</td>
                <td>&quot;20 AI Customer Service Prompts — Cheat Sheet&quot;</td>
                <td>5 min</td>
              </tr>
              <tr>
                <td>8</td>
                <td>FAQ page</td>
                <td>5 Q/As: &quot;Will AI responses sound robotic?&quot;, &quot;Which model for support?&quot;, etc.</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Reddit post</td>
                <td>r/smallbusiness: &quot;How I cut support tickets in half without hiring&quot;</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Guest pitch</td>
                <td>Pitch to customer service blog: &quot;AI support for teams under 10 people&quot;</td>
                <td>3 min</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Total time:</strong> 31 minutes of AI work. The original blog post took 3 hours to write. That is 10 pieces of content from 3.5 hours of total work — roughly 21 minutes per piece.
          </p>

          <h2>The weekly content sprint workflow</h2>
          <p>
            Batch this into a weekly ritual. One focused session, one week of content:
          </p>

          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="workflow-step-number">1</div>
              <div className="workflow-step-content">
                <h4>Write the anchor (Monday, 3 hours)</h4>
                <p>Write one blog post. This is your only original writing for the week.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">2</div>
              <div className="workflow-step-content">
                <h4>Run the prompts (Tuesday, 45 min)</h4>
                <p>Paste the blog post into ChatGPT. Run all 10 prompts. Collect outputs in a doc.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">3</div>
              <div className="workflow-step-content">
                <h4>Edit for voice (Wednesday, 30 min)</h4>
                <p>Review each piece. Add personal touches, fix tone, remove anything that sounds generic.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">4</div>
              <div className="workflow-step-content">
                <h4>Design/carousel (Thursday, 30 min)</h4>
                <p>Create Instagram carousels, PDF layout, and thumbnail text in Canva.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-number">5</div>
              <div className="workflow-step-content">
                <h4>Schedule (Friday, 15 min)</h4>
                <p>Load everything into your scheduler. Done for the week.</p>
              </div>
            </div>
          </div>

          <p>
            <strong>Total weekly investment:</strong> 5 hours. <strong>Output:</strong> 10+ pieces across 6+ platforms. That is more content than most agencies produce for $2,000/month.
          </p>

          <div className="cta-block">
            <h3>🛠️ Want the prompts that power this workflow?</h3>
            <p>
              The <strong>AI Shortcut Stack</strong> has 80 copy-paste prompts for content repurposing, sales, customer service, operations, and hiring. One-time purchase. No subscription.
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
