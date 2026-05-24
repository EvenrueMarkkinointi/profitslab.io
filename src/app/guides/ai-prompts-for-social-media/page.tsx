import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "AI Prompts for Social Media: One Session, a Week of Posts",
  description:
    "40+ AI prompts for LinkedIn, Twitter/X, Instagram, and Facebook. Create a week of social media content in one 30-minute session.",
  alternates: { canonical: "https://www.profitslab.io/guides/ai-prompts-for-social-media/" },
  openGraph: {
    title: "AI Prompts for Social Media: One Session, a Week of Posts | ProfitSlab",
    description:
      "40+ ready-to-use AI prompts for social media. LinkedIn, Twitter, Instagram, and Facebook — copy, paste, and schedule.",
    url: "https://www.profitslab.io/guides/ai-prompts-for-social-media/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Will AI-generated social posts sound robotic?",
    a: "Only if you use generic prompts. The prompts in this guide include voice instructions, storytelling frameworks, and constraint-based formatting. Output sounds like a human who knows their audience — because the prompt forces specificity. Always edit before posting.",
  },
  {
    q: "Which AI model is best for social media content?",
    a: "Claude 4 for long-form LinkedIn posts and storytelling. ChatGPT-4o for quick Twitter threads and high-volume content. Gemini 2.5 for data-driven posts and carousel scripts. Test all three and pick what matches your brand voice.",
  },
  {
    q: "Can I use these prompts for client work?",
    a: "Yes. All prompts are framework-based, not template-based. You can adapt them for any industry, brand voice, or platform. If you manage social media for clients, batch-create content for all accounts in one session.",
  },
  {
    q: "How often should I post?",
    a: "Quality beats frequency. 3–5 strong posts per week beats 1 mediocre post daily. The workflow in this guide produces 7 posts in 30 minutes — enough for a week. Focus on engagement (replies and shares) over raw post count.",
  },
  {
    q: "Do I need to disclose AI-generated content?",
    a: "Most platforms do not require disclosure for AI-assisted content unless it is political, health-related, or sponsored. The prompts in this guide produce drafts — you edit, personalize, and approve every post. The final output is human-curated, not purely AI-generated.",
  },
];

export default function AIPromptsForSocialMedia() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Prompts for Social Media: One Session, a Week of Posts",
            description:
              "40+ AI prompts for LinkedIn, Twitter/X, Instagram, and Facebook. Create a week of social media content in one 30-minute session.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-05-24",
            dateModified: "2026-05-24",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/ai-prompts-for-social-media/",
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
                name: "AI Prompts for Social Media",
                item: "https://www.profitslab.io/guides/ai-prompts-for-social-media/",
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
              <span aria-current="page">AI Prompts for Social Media</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Marketing</span>
              <h1>AI Prompts for Social Media: One Session, a Week of Posts</h1>
              <p className="article-lead">
                40+ copy-paste prompts for LinkedIn, Twitter/X, Instagram, and Facebook.
                Create a week of content in 30 minutes — without sounding like a robot.
              </p>
              <div className="article-meta">
                <span>Updated May 2026</span>
                <span>·</span>
                <span>11 min read</span>
                <span>·</span>
                <span>Tested with GPT-4o, Claude 4, Gemini 2.5</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#framework">The 5-Post Framework</a></li>
                <li><a href="#linkedin">LinkedIn Prompts</a></li>
                <li><a href="#twitter">Twitter/X Prompts</a></li>
                <li><a href="#instagram">Instagram Prompts</a></li>
                <li><a href="#facebook">Facebook Prompts</a></li>
                <li><a href="#threads">Content Thread Prompts</a></li>
                <li><a href="#workflow">The 30-Minute Weekly Workflow</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                Social media is the highest-leverage marketing channel for small businesses — but
                it is also the most time-consuming. Most founders quit after 2 weeks because they
                cannot sustain the content treadmill.
              </p>
              <p>
                <strong>AI changes the math.</strong> One 30-minute session with the right prompts
                produces a week of posts. The key is not speed — it is structure. Generic prompts
                produce generic posts. Framework-based prompts produce content that sounds like you.
              </p>
              <p>
                This guide uses the 5-Post Framework: <strong>Educate, Entertain, Engage, Promote, Proof.</strong>
                Rotate these five post types and your feed stays fresh without burning out your audience.
              </p>
            </section>

            {/* Section 1: Framework */}
            <section id="framework">
              <h2>The 5-Post Framework: Why Most Business Social Feeds Fail</h2>
              <p>
                Most business social feeds are boring because they are all the same type of post:
                promotion after promotion. The 5-Post Framework fixes this by rotating content types.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">E</div>
                  <div>
                    <strong>Educate</strong>
                    <p>Teach something your audience does not know. Tips, how-tos, industry insights. Builds authority.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">E</div>
                  <div>
                    <strong>Entertain</strong>
                    <p>Behind-the-scenes, stories, relatable moments. Humanizes your brand and boosts engagement.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">E</div>
                  <div>
                    <strong>Engage</strong>
                    <p>Questions, polls, fill-in-the-blanks. Starts conversations in comments. Algorithm loves this.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">P</div>
                  <div>
                    <strong>Promote</strong>
                    <p>Direct offer, product highlight, or CTA. Keep to 1 in 5 posts or you will lose followers.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">P</div>
                  <div>
                    <strong>Proof</strong>
                    <p>Case studies, testimonials, results. Shows you deliver what you promise. Builds trust.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>The rule:</strong> For every 5 posts, use each type once. Your audience gets
                value without feeling sold to — and the algorithm sees engagement variety.
              </p>
            </section>

            {/* Section 2: LinkedIn */}
            <section id="linkedin">
              <h2>LinkedIn Prompts: Authority and Storytelling</h2>
              <p>
                LinkedIn rewards long-form storytelling and professional insights. These prompts
                write posts that get saved, shared, and commented on.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Educational Carousel Post</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Audience: [who you help]
Key lesson: [the one thing they need to know]

Write a LinkedIn post structured as a 5-slide carousel:
- Slide 1: Hook — a bold statement or question that stops the scroll
- Slide 2: The problem — why most people get this wrong
- Slide 3: The insight — the counterintuitive truth
- Slide 4: The proof — one example or stat
- Slide 5: The CTA — "Save this" or "Comment your experience"

Each slide: 1–2 sentences max. Tone: authoritative but accessible.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Story-Based Post</div>
                <pre className="prompt-text">
{`Story: [a recent experience, mistake, or win]
Lesson: [the takeaway for your audience]

Write a LinkedIn post that:
1. Opens with a one-sentence hook (not "I want to share a story")
2. Tells the story in 4–5 short paragraphs
3. Includes one specific detail that makes it real (a number, a name, a moment)
4. Ends with the lesson and one question for the audience
5. Is under 300 words

Tone: personal, reflective, not preachy.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Contrarian Opinion Post</div>
                <pre className="prompt-text">
{`Common advice: [what everyone says]
Your take: [why it is wrong or incomplete]
Better approach: [what to do instead]

Write a LinkedIn post that:
1. States the common advice in one sentence
2. Explains why it fails — with one specific example
3. Offers your alternative approach (3 bullet points)
4. Invites disagreement: "Agree or disagree? Tell me below."
5. Is under 250 words

Tone: confident, evidence-based, not arrogant.`}
                </pre>
              </div>
            </section>

            {/* Section 3: Twitter/X */}
            <section id="twitter">
              <h2>Twitter/X Prompts: Brevity That Breaks Through</h2>
              <p>
                Twitter is the hardest platform to write for because every character counts. These
                prompts produce concise, high-impact tweets and threads.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Single Tweet</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Angle: [insight, tip, or opinion]

Write 3 versions of a single tweet:
1. A contrarian take (challenges common wisdom)
2. A listicle tweet ("3 things I learned...")
3. A curiosity tweet (poses a question or teases an insight)

Each under 280 characters. No hashtags. Tone: sharp, confident.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Twitter Thread</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Key points: [3–5 things you want to teach]

Write a Twitter thread:
- Tweet 1: Hook — one sentence that makes people click "Show more"
- Tweet 2–4: One key point per tweet, each with a specific example
- Tweet 5: Summary + CTA ("Follow for more" or "Reply with your experience")

Each tweet: under 280 characters. Format: clean, no emojis in every tweet. Tone: expert, generous.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Quote Tweet Response</div>
                <pre className="prompt-text">
{`Original tweet: [paste or describe the tweet]
Your perspective: [agree, disagree, or expand]

Write a quote tweet that:
1. Responds to the original in one sentence
2. Adds one new insight or data point
3. Is under 280 characters total

Tone: constructive, not snarky. Add value, not noise.`}
                </pre>
              </div>
            </section>

            {/* Section 4: Instagram */}
            <section id="instagram">
              <h2>Instagram Prompts: Visual-First Content</h2>
              <p>
                Instagram is visual, but captions drive saves and shares. These prompts write
                captions that work with carousel posts, Reels, and Stories.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Carousel Caption</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Slides: [number of slides, 5–10]
Goal: [educate, promote, or entertain]

Write an Instagram carousel caption that:
1. Hook (first line): bold statement or question
2. Body: 3–4 short paragraphs with line breaks for readability
3. Each paragraph teases one slide
4. CTA: "Save this for later" or "Tag someone who needs this"
5. 3–5 relevant hashtags (not 30)

Tone: friendly, energetic, not salesy. Under 200 words.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Reels Script</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Length: [30 or 60 seconds]
Goal: [educate, entertain, or promote]

Write a Reels script with:
1. Hook (0–3 sec): what to say in the first 3 seconds
2. Main content: speaking points, one per 10-second segment
3. CTA (last 5 sec): what to say before the video ends
4. On-screen text suggestions for each segment

Tone: energetic, conversational. Under 150 words total.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Story Sequence</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Story frames: [3–5 frames]

Write an Instagram Story sequence:
1. Frame 1: Poll or question sticker text
2. Frame 2: The answer or insight (one sentence)
3. Frame 3: Proof or example
4. Frame 4: CTA (swipe-up, DM, or link sticker text)

Each frame: under 15 words. Tone: casual, direct, friendly.`}
                </pre>
              </div>
            </section>

            {/* Section 5: Facebook */}
            <section id="facebook">
              <h2>Facebook Prompts: Community and Conversation</h2>
              <p>
                Facebook rewards posts that start conversations in comments. These prompts write
                community-focused content for business pages and groups.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Community Question Post</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Community: [who follows your page]

Write a Facebook post that:
1. Asks one specific question (not "What do you think?")
2. Provides one sentence of context so everyone understands
3. Invites personal stories or experiences
4. Includes a relevant image description for visual content
5. Is under 150 words

Goal: 10+ comments. Tone: warm, inclusive, curious.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Value-First Facebook Post</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Key tip: [one actionable thing]

Write a Facebook post that:
1. Opens with a relatable problem or frustration
2. Offers the solution in 3 bullet points
3. Includes one real example or mini case study
4. Ends with "Share this if it helped" or "Comment your biggest challenge"
5. Is under 200 words

Tone: helpful, conversational, like advice from a friend.`}
                </pre>
              </div>
            </section>

            {/* Section 6: Threads */}
            <section id="threads">
              <h2>Content Thread Prompts: Multi-Platform Sequences</h2>
              <p>
                Sometimes one post is not enough. These prompts create content series and threads
                that keep your audience engaged across multiple posts.
              </p>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: 5-Day Tip Series</div>
                <pre className="prompt-text">
{`Topic: [your topic]
Platform: [LinkedIn/Twitter/Instagram]
Goal: [build authority, grow followers, or promote a product]

Write a 5-day content series:
- Day 1: The myth (what most people believe)
- Day 2: The mistake (why the myth hurts them)
- Day 3: The insight (the counterintuitive truth)
- Day 4: The proof (one result or example)
- Day 5: The offer (soft CTA — "DM me" or "Link in bio")

Each post: under 200 words. Tone: consistent across all 5. Build narrative tension.`}
                </pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Prompt: Before/After Story Thread</div>
                <pre className="prompt-text">
{`Transformation: [what changed]
Subject: [person, company, or process]

Write a 3-part story thread:
- Part 1: The before state — specific pain, numbers, or frustration
- Part 2: The turning point — one decision or action that changed everything
- Part 3: The after state — specific results, with one number or metric

Each part: under 150 words. Post one per day or all at once as a thread.
Tone: honest, specific, not hype.`}
                </pre>
              </div>
            </section>

            {/* Section 7: Workflow */}
            <section id="workflow">
              <h2>The 30-Minute Weekly Workflow</h2>
              <p>
                Here is how to use these prompts to create a full week of content in one session.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Choose your 5-post mix (5 min)</strong>
                    <p>Pick one from each category: Educate, Entertain, Engage, Promote, Proof. Match to your business goals for the week.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Batch-generate drafts (15 min)</strong>
                    <p>Use the prompts. Fill in the blanks for all 5 posts. Get 5 drafts in 15 minutes.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Edit and personalize (10 min)</strong>
                    <p>Add your voice, fix one line per post, insert names or specific examples. Schedule in your tool of choice.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>The math:</strong> 5 posts/week × 52 weeks = 260 posts/year. At 30 minutes per
                week, that is 26 hours total — about 3 workdays for a full year of content.
              </p>

              <div className="article-cta-box">
                <h3>Want all 40+ social media prompts in one file?</h3>
                <p>
                  The <Link href="/products/prompt-stack">AI Shortcut Stack</Link> includes these
                  social media prompts plus 70+ more for customer service, sales, and operations.
                  One PDF. $19. Instant download.
                </p>
                <Link href="/products/prompt-stack" className="btn-primary">
                  Get the AI Shortcut Stack →
                </Link>
              </div>
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
              <h2>Not sure which platform to focus on?</h2>
              <p>
                Take the free <Link href="/audit">AI Audit</Link> — 20 questions that show exactly
                where AI can save you the most time in your marketing.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
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
