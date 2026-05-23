"use client";

import { useEffect, useState } from "react";

const purchases = [
  { name: "James R.", location: "London, UK" },
  { name: "Sarah M.", location: "New York, US" },
  { name: "Tom K.", location: "Sydney, AU" },
  { name: "Lisa B.", location: "Toronto, CA" },
  { name: "Mark P.", location: "Amsterdam, NL" },
  { name: "Anna L.", location: "Berlin, DE" },
  { name: "David W.", location: "Chicago, US" },
  { name: "Emma S.", location: "Melbourne, AU" },
  { name: "Chris H.", location: "Dublin, IE" },
  { name: "Julia T.", location: "Stockholm, SE" },
  { name: "Ryan O.", location: "Boston, US" },
  { name: "Mia C.", location: "Paris, FR" },
  { name: "Alex N.", location: "Helsinki, FI" },
  { name: "Sophie W.", location: "Auckland, NZ" },
  { name: "Dan F.", location: "Singapore" },
];

const timeLabels = [
  "2 minutes ago",
  "7 minutes ago",
  "14 minutes ago",
  "23 minutes ago",
  "38 minutes ago",
  "52 minutes ago",
  "1 hour ago",
  "2 hours ago",
  "3 hours ago",
  "5 hours ago",
];

const SESSION_KEY = "ps_popup_shown";

export default function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [entry, setEntry] = useState<{ name: string; location: string; time: string } | null>(null);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;

    // Random delay: 8–25 seconds
    const delay = 8000 + Math.random() * 17000;

    const showTimer = setTimeout(() => {
      const p = purchases[Math.floor(Math.random() * purchases.length)];
      const t = timeLabels[Math.floor(Math.random() * timeLabels.length)];
      setEntry({ ...p, time: t });
      setVisible(true);
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(SESSION_KEY, "1");
      }

      // Auto-dismiss after 5.5 seconds
      const hideTimer = setTimeout(() => dismiss(), 5500);
      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(showTimer);
  }, []);

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 380);
  };

  if (!visible || !entry) return null;

  return (
    <div className={`purchase-popup${leaving ? " purchase-popup-leave" : ""}`} role="status" aria-live="polite">
      <div className="purchase-popup-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </div>
      <div className="purchase-popup-body">
        <div className="purchase-popup-name">
          {entry.name} <span className="purchase-popup-location">from {entry.location}</span>
        </div>
        <div className="purchase-popup-action">just purchased the AI Shortcut Stack</div>
        <div className="purchase-popup-time">{entry.time}</div>
      </div>
      <button className="purchase-popup-close" onClick={dismiss} aria-label="Dismiss">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
