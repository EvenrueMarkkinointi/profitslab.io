"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuditStart() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleStart(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !businessType) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/audit/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, businessType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to create audit");
      router.push(`/audit/${data.id}/q/1`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <>
      <nav className="audit-nav">
        <div className="audit-nav-inner">
          <Link href="/audit" className="nav-logo" style={{ color: "var(--text-primary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, fontSize: "0.875rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            AI Audit in a Box
          </Link>
        </div>
      </nav>

      <div className="audit-container" style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
          Before we start
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
          We&apos;ll send your full report to your email. The audit takes about 15 minutes.
        </p>

        <form onSubmit={handleStart} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
              Your email address
            </label>
            <input
              type="email"
              required
              className="audit-input"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
              What best describes your business?
            </label>
            <select
              required
              className="audit-input"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              style={{ cursor: "pointer" }}
            >
              <option value="">Select one…</option>
              <option value="solo">Solo operator / freelancer</option>
              <option value="small">Small business (2–10 people)</option>
              <option value="medium">Growing business (11–50 people)</option>
              <option value="agency">Agency or service business</option>
              <option value="ecommerce">E-commerce or product business</option>
              <option value="other">Other</option>
            </select>
          </div>

          {error && (
            <p style={{ color: "#f87171", fontSize: "0.875rem" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !email || !businessType}
            className="audit-btn audit-btn-primary"
          >
            {loading ? "Starting…" : "Start the Audit →"}
          </button>

          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textAlign: "center" }}>
            No spam. We&apos;ll only email your audit results.
          </p>
        </form>
      </div>
    </>
  );
}
