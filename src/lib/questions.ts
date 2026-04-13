export type Answer = {
  label: string;
  value: number; // 0–3
};

export type Question = {
  id: number;
  category: string;
  text: string;
  answers: Answer[];
};

export const QUESTIONS: Question[] = [
  // Content & Marketing (4 questions)
  {
    id: 1,
    category: "Content & Marketing",
    text: "How do you currently create content (blog posts, social media, emails)?",
    answers: [
      { label: "Manually — all written from scratch each time", value: 0 },
      { label: "Occasionally use AI, but mostly manual", value: 1 },
      { label: "Mix of templates and AI assistance", value: 2 },
      { label: "Mostly AI-assisted with a clear system", value: 3 },
    ],
  },
  {
    id: 2,
    category: "Content & Marketing",
    text: "How long does it typically take to produce one week's worth of marketing content?",
    answers: [
      { label: "More than 8 hours", value: 0 },
      { label: "4–8 hours", value: 1 },
      { label: "1–4 hours", value: 2 },
      { label: "Less than 1 hour", value: 3 },
    ],
  },
  {
    id: 3,
    category: "Content & Marketing",
    text: "Do you have a documented process for creating and distributing content?",
    answers: [
      { label: "No — it's ad hoc every time", value: 0 },
      { label: "Informal notes, but nothing structured", value: 1 },
      { label: "A rough workflow that varies", value: 2 },
      { label: "Yes — a documented, repeatable system", value: 3 },
    ],
  },
  {
    id: 4,
    category: "Content & Marketing",
    text: "How often do you repurpose one piece of content across multiple channels?",
    answers: [
      { label: "Never — each channel gets unique content", value: 0 },
      { label: "Occasionally, when I remember to", value: 1 },
      { label: "Most of the time", value: 2 },
      { label: "Always — it's built into the process", value: 3 },
    ],
  },

  // Email & CRM (3 questions)
  {
    id: 5,
    category: "Email & CRM",
    text: "How are follow-up emails handled after a lead or customer interaction?",
    answers: [
      { label: "Manually — written one by one", value: 0 },
      { label: "Some templates, but heavily customized each time", value: 1 },
      { label: "Templates with light personalization", value: 2 },
      { label: "Automated sequences with smart personalization", value: 3 },
    ],
  },
  {
    id: 6,
    category: "Email & CRM",
    text: "Do you have automated email sequences set up for new leads or customers?",
    answers: [
      { label: "No automated emails at all", value: 0 },
      { label: "One basic welcome email", value: 1 },
      { label: "A short sequence (2–3 emails)", value: 2 },
      { label: "Full nurture sequences for different segments", value: 3 },
    ],
  },
  {
    id: 7,
    category: "Email & CRM",
    text: "How do you handle customer service or support emails?",
    answers: [
      { label: "Write every response from scratch", value: 0 },
      { label: "Copy-paste from past replies", value: 1 },
      { label: "Saved templates for common questions", value: 2 },
      { label: "AI-assisted responses with template library", value: 3 },
    ],
  },

  // Operations & Admin (4 questions)
  {
    id: 8,
    category: "Operations & Admin",
    text: "How do you document recurring business processes (SOPs)?",
    answers: [
      { label: "We don't — it all lives in people's heads", value: 0 },
      { label: "Some notes scattered in docs/chat", value: 1 },
      { label: "Basic SOPs for main processes", value: 2 },
      { label: "Documented SOPs for most key processes", value: 3 },
    ],
  },
  {
    id: 9,
    category: "Operations & Admin",
    text: "How much time per week is spent on repetitive administrative tasks?",
    answers: [
      { label: "More than 10 hours", value: 0 },
      { label: "5–10 hours", value: 1 },
      { label: "2–5 hours", value: 2 },
      { label: "Less than 2 hours", value: 3 },
    ],
  },
  {
    id: 10,
    category: "Operations & Admin",
    text: "Do you use AI to help draft internal documents (memos, reports, meeting notes)?",
    answers: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Regularly — it's part of our workflow", value: 3 },
    ],
  },
  {
    id: 11,
    category: "Operations & Admin",
    text: "How do you currently onboard new team members or contractors?",
    answers: [
      { label: "No formal process — ad hoc each time", value: 0 },
      { label: "A rough checklist", value: 1 },
      { label: "Basic documentation and a checklist", value: 2 },
      { label: "Structured onboarding with docs, tasks, and templates", value: 3 },
    ],
  },

  // Sales & Outreach (3 questions)
  {
    id: 12,
    category: "Sales & Outreach",
    text: "How do you currently write outreach messages (cold email, LinkedIn, etc.)?",
    answers: [
      { label: "All from scratch every time", value: 0 },
      { label: "Loosely adapted from old messages", value: 1 },
      { label: "Templates with manual personalization", value: 2 },
      { label: "AI-assisted, personalized at scale", value: 3 },
    ],
  },
  {
    id: 13,
    category: "Sales & Outreach",
    text: "How consistent is your follow-up process after an initial sales contact?",
    answers: [
      { label: "Inconsistent — often forget to follow up", value: 0 },
      { label: "Some follow-ups but no system", value: 1 },
      { label: "Mostly consistent with reminders", value: 2 },
      { label: "Fully systematized — never miss a follow-up", value: 3 },
    ],
  },
  {
    id: 14,
    category: "Sales & Outreach",
    text: "Do you have templated responses for common sales questions or objections?",
    answers: [
      { label: "No — improvise every time", value: 0 },
      { label: "Mental notes, nothing written", value: 1 },
      { label: "A few written scripts", value: 2 },
      { label: "A library of responses for most scenarios", value: 3 },
    ],
  },

  // HR & Hiring (3 questions)
  {
    id: 15,
    category: "HR & Hiring",
    text: "How do you handle writing job descriptions and hiring materials?",
    answers: [
      { label: "Write from scratch each time", value: 0 },
      { label: "Adapt old job posts manually", value: 1 },
      { label: "Template-based with some editing", value: 2 },
      { label: "AI-assisted with a reusable system", value: 3 },
    ],
  },
  {
    id: 16,
    category: "HR & Hiring",
    text: "Do you have standard interview questions and evaluation criteria documented?",
    answers: [
      { label: "No — we improvise in interviews", value: 0 },
      { label: "Informal notes", value: 1 },
      { label: "Basic question list", value: 2 },
      { label: "Structured interview guides per role", value: 3 },
    ],
  },
  {
    id: 17,
    category: "HR & Hiring",
    text: "How are rejection or offer communications handled after interviews?",
    answers: [
      { label: "Written manually each time", value: 0 },
      { label: "Copy-pasted with edits", value: 1 },
      { label: "Templates used most of the time", value: 2 },
      { label: "Standardized, AI-polished templates", value: 3 },
    ],
  },

  // Strategy & Planning (3 questions)
  {
    id: 18,
    category: "Strategy & Planning",
    text: "How do you currently approach business planning and strategic decision-making?",
    answers: [
      { label: "Mostly reactive — deal with things as they come", value: 0 },
      { label: "Informal planning, rarely documented", value: 1 },
      { label: "Quarterly goals with some structure", value: 2 },
      { label: "Regular strategic reviews with documented plans", value: 3 },
    ],
  },
  {
    id: 19,
    category: "Strategy & Planning",
    text: "Do you use AI to help with research, analysis, or decision-making?",
    answers: [
      { label: "Never", value: 0 },
      { label: "Occasionally for research", value: 1 },
      { label: "Regularly for research and drafting", value: 2 },
      { label: "Integrated into planning and analysis workflows", value: 3 },
    ],
  },
  {
    id: 20,
    category: "Strategy & Planning",
    text: "Overall, how would you rate your current use of AI tools in your business?",
    answers: [
      { label: "Barely using AI at all", value: 0 },
      { label: "Experimenting but no consistent use", value: 1 },
      { label: "Using AI for some tasks regularly", value: 2 },
      { label: "AI is integrated into most workflows", value: 3 },
    ],
  },
];

export const TOTAL_QUESTIONS = QUESTIONS.length;
export const MAX_RAW_SCORE = QUESTIONS.length * 3; // 60

export type CategoryScore = {
  name: string;
  raw: number;
  max: number;
  normalized: number;
};

export type Tier = "Quick Wins" | "Growth Ready" | "Scale Mode";

export type Opportunity = {
  title: string;
  category: string;
  description: string;
  estimatedHours: number;
  difficulty: "easy" | "medium" | "hard";
};

const OPPORTUNITY_MAP: Record<string, Opportunity[]> = {
  "Content & Marketing": [
    {
      title: "AI Content Calendar",
      category: "Content & Marketing",
      description: "Use prompt chains to generate a full month of content in under 2 hours.",
      estimatedHours: 6,
      difficulty: "easy",
    },
    {
      title: "Content Repurposing System",
      category: "Content & Marketing",
      description: "One blog post → 5 social posts → 2 email subjects → 1 short video script.",
      estimatedHours: 4,
      difficulty: "easy",
    },
  ],
  "Email & CRM": [
    {
      title: "Automated Follow-Up Sequences",
      category: "Email & CRM",
      description: "Set up 3–5 email sequences covering new leads, post-purchase, and re-engagement.",
      estimatedHours: 5,
      difficulty: "medium",
    },
    {
      title: "Customer Service Response Library",
      category: "Email & CRM",
      description: "Build a library of 20 AI-generated responses for your most common support questions.",
      estimatedHours: 3,
      difficulty: "easy",
    },
  ],
  "Operations & Admin": [
    {
      title: "SOP Documentation Sprint",
      category: "Operations & Admin",
      description: "Use AI to convert your top 5 recurring processes into documented SOPs in one afternoon.",
      estimatedHours: 8,
      difficulty: "medium",
    },
    {
      title: "Admin Automation Audit",
      category: "Operations & Admin",
      description: "Identify and template the 10 admin tasks you do every week.",
      estimatedHours: 4,
      difficulty: "easy",
    },
  ],
  "Sales & Outreach": [
    {
      title: "Cold Outreach Machine",
      category: "Sales & Outreach",
      description: "Build a multi-step outreach sequence: persona → email → follow-up → LinkedIn connect.",
      estimatedHours: 5,
      difficulty: "medium",
    },
    {
      title: "Sales Objection Playbook",
      category: "Sales & Outreach",
      description: "Document and AI-polish your top 10 sales objections and responses.",
      estimatedHours: 3,
      difficulty: "easy",
    },
  ],
  "HR & Hiring": [
    {
      title: "Hiring Pipeline Templates",
      category: "HR & Hiring",
      description: "Job post → interview guide → rejection/offer templates. Never write from scratch again.",
      estimatedHours: 4,
      difficulty: "easy",
    },
  ],
  "Strategy & Planning": [
    {
      title: "AI-Assisted Quarterly Review",
      category: "Strategy & Planning",
      description: "Use AI to structure your quarterly business review and surface key decisions faster.",
      estimatedHours: 3,
      difficulty: "medium",
    },
  ],
};

export function computeResults(responses: Record<string, number>) {
  const categories = [...new Set(QUESTIONS.map((q) => q.category))];

  const categoryScores: CategoryScore[] = categories.map((cat) => {
    const catQs = QUESTIONS.filter((q) => q.category === cat);
    const raw = catQs.reduce((sum, q) => sum + (responses[String(q.id)] ?? 0), 0);
    const max = catQs.length * 3;
    return {
      name: cat,
      raw,
      max,
      normalized: Math.round((raw / max) * 100),
    };
  });

  const totalRaw = categoryScores.reduce((s, c) => s + c.raw, 0);
  const totalScore = Math.round((totalRaw / MAX_RAW_SCORE) * 100);

  const tier: Tier =
    totalScore >= 70 ? "Scale Mode" : totalScore >= 40 ? "Growth Ready" : "Quick Wins";

  // Find lowest-scoring categories and map to opportunities
  const sorted = [...categoryScores].sort((a, b) => a.normalized - b.normalized);
  const topOpportunities: Opportunity[] = [];
  for (const cat of sorted) {
    const opps = OPPORTUNITY_MAP[cat.name] ?? [];
    for (const opp of opps) {
      if (topOpportunities.length >= 6) break;
      topOpportunities.push(opp);
    }
    if (topOpportunities.length >= 6) break;
  }

  return { totalScore, categoryScores, tier, topOpportunities };
}
