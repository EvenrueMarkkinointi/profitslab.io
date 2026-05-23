"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SESSION_KEY = "ps_exit_shown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;

    // Desktop: mouse leaves viewport through the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) show();
    };

    // Mobile: user scrolls back up past a significant threshold
    let maxScroll = 0;
    let mobileTriggered = false;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > maxScroll) maxScroll = y;
      if (!mobileTriggered && maxScroll > 600 && y < maxScroll - 300) {
        mobileTriggered = true;
        show();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const show = () => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  };

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <div className="exit-overlay" onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}>
      <div className={`exit-modal${leaving ? " exit-modal-leave" : ""}`} role="dialog" aria-modal="true" aria-labelledby="exit-heading">
        <button className="exit-close" onClick={dismiss} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="exit-eyebrow">Not sure where to start?</div>
        <h2 className="exit-heading" id="exit-heading">
          Find out exactly where AI can save your business the most time.
        </h2>
        <p className="exit-body">
          Answer 20 quick questions and get a free personalized report — your biggest AI opportunities ranked by effort and impact.
        </p>
        <p className="exit-sub">
          The audit shows where to start. The Shortcut Stack gives you the prompts to act on it.
        </p>
        <Link href="/audit" className="btn-primary exit-cta" onClick={dismiss}>
          Take the Free AI Audit →
        </Link>
        <button className="exit-skip" onClick={dismiss}>
          No thanks, I&apos;ll figure it out myself
        </button>
      </div>
    </div>
  );
}
