"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS, TOTAL_QUESTIONS } from "@/lib/questions";

export default function QuestionPage({
  params,
}: {
  params: Promise<{ id: string; step: string }>;
}) {
  const { id, step } = use(params);
  const router = useRouter();
  const stepNum = parseInt(step, 10);
  const question = QUESTIONS[stepNum - 1];
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  if (!question) {
    return <div style={{ padding: "2rem", color: "var(--text-primary)" }}>Question not found.</div>;
  }

  const progress = ((stepNum - 1) / TOTAL_QUESTIONS) * 100;

  async function handleNext() {
    if (selected === null) return;
    setLoading(true);

    try {
      await fetch("/api/audit/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, questionId: question.id, value: selected }),
      });

      if (stepNum < TOTAL_QUESTIONS) {
        router.push(`/audit/${id}/q/${stepNum + 1}`);
      } else {
        // Last question — trigger scoring and go straight to the report
        await fetch("/api/audit/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        router.push(`/audit/${id}/report`);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <>
      <nav className="audit-nav">
        <div className="audit-nav-inner">
          <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Question {stepNum} of {TOTAL_QUESTIONS}
          </span>
        </div>
      </nav>

      <div className="audit-container" style={{ maxWidth: 680 }}>
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${progress}%` }} />
        </div>

        <div className="question-card">
          <div className="question-category">{question.category}</div>
          <div className="question-text">{question.text}</div>

          <div className="answer-grid">
            {question.answers.map((answer) => (
              <button
                key={answer.value}
                className={`answer-btn${selected === answer.value ? " selected" : ""}`}
                onClick={() => setSelected(answer.value)}
              >
                {answer.label}
              </button>
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
            <button
              className="audit-btn audit-btn-primary"
              disabled={selected === null || loading}
              onClick={handleNext}
            >
              {loading
                ? "Saving…"
                : stepNum === TOTAL_QUESTIONS
                ? "Get My Report →"
                : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
