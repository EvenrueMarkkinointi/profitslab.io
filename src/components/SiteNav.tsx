import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          ProfitSlab
        </Link>
        <div className="site-nav-links">
          <Link href="/guides" className="site-nav-link">Guides</Link>
          <Link href="/products" className="site-nav-link">Products</Link>
          <Link href="/audit" className="site-nav-link">AI Audit</Link>
        </div>
        <Link href="/audit" className="btn-primary site-nav-cta">
          Get the Free Audit →
        </Link>
      </div>
    </nav>
  );
}
