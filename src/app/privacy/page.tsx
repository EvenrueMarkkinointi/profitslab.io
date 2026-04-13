import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ProfitSlab",
  description: "Privacy Policy for ProfitSlab and AI Shortcut Stack.",
};

export default function Privacy() {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <a href="/" className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            ProfitSlab
          </a>
          <a href="/" className="nav-back">← Back to site</a>
        </div>
      </nav>

      <main className="main">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: January 2025</p>
        </div>

        <div className="content">
          <p>Evenrue Marketing ltd respects your privacy and is committed to protecting your personal data. This privacy notice will inform you as to how we look after your personal data when you visit our website and when we collect personal data from you.</p>

          <h2>1. Important Information and Who We Are</h2>
          <h3>Purpose of this privacy policy</h3>
          <p>This privacy notice aims to give you information on how Evenrue Marketing ltd collects and processes your personal data, including any data you may provide through this website or when you enter into a contract with, or request services from, us.</p>
          <p>This website is not intended for children and we do not knowingly collect data relating to children.</p>

          <h3>Controller</h3>
          <p>Evenrue Marketing ltd is the controller and responsible for your personal data (collectively referred to as ProfitSlab, &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this privacy policy).</p>

          <h3>Contact details</h3>
          <p><strong>Full name of legal entity:</strong> Evenrue Marketing ltd (Business ID: 3159075-2)</p>
          <p><strong>Email address:</strong> <a href="mailto:hello@profitslab.io">hello@profitslab.io</a></p>
          <p><strong>Website:</strong> <a href="https://profitslab.io">profitslab.io</a></p>
          <p>You have the right to make a complaint at any time to the Finnish Data Protection Authority.</p>

          <h3>Changes to the privacy policy</h3>
          <p>This version was last updated on January 2025. It is important that the personal data we hold about you is accurate and current.</p>

          <h3>Third-party links</h3>
          <p>Our website may include links to third-party websites, plug-ins and applications. We do not control these third-party websites and are not responsible for their privacy statements.</p>

          <h2>2. The Data We Collect About You</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
          <ul>
            <li><strong>Identity Data</strong> including first name and surname and company details (if applicable).</li>
            <li><strong>Contact Data</strong> including address, telephone number, mobile number, and email address.</li>
            <li><strong>Technical Data</strong> including internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> including details on how you interact with our website and services.</li>
            <li><strong>Marketing and Communications Data</strong> including your preferences in receiving marketing from us.</li>
          </ul>

          <h2>3. How Is Your Personal Data Collected?</h2>
          <h3>Direct interactions</h3>
          <p>You may give us your Identity and Contact Data by filling in an order form or by corresponding with us by post, phone, email or otherwise.</p>

          <h3>Automated technologies or interactions</h3>
          <p>As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns using cookies and similar technologies.</p>

          <h3>Third parties or publicly available sources</h3>
          <p>We may receive personal data about you from analytics providers such as Google, advertising networks, and search information providers.</p>

          <h2>4. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h3>Marketing</h3>
          <p>With your consent and/or where permitted by law, we may use your data for marketing purposes. We do not share your personal data with any third party company or entity for marketing purposes.</p>

          <h2>5. Disclosures of Your Personal Data</h2>
          <p>We may have to share your personal data with third parties for the purposes of providing our services to you. We require all third parties to respect the security of your personal data and to treat it in accordance with the law.</p>

          <h2>6. International Transfers</h2>
          <p>Your data is stored in the European Economic Area. We may transfer your personal data outside the EEA for the purpose of delivering our services to you, ensuring a sufficient level of security through standard contractual clauses adopted by the European Commission.</p>

          <h2>7. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</p>

          <h2>8. Data Retention</h2>
          <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for. By Finnish law we have to keep basic information about our clients for up to five years after they cease being customers for legal and tax purposes.</p>

          <h2>9. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
          <ul>
            <li><strong>Request access</strong> to your personal data.</li>
            <li><strong>Request correction</strong> of inaccurate data we hold about you.</li>
            <li><strong>Request erasure</strong> of your personal data.</li>
            <li><strong>Object to processing</strong> of your personal data.</li>
            <li><strong>Request restriction of processing</strong> of your personal data.</li>
            <li><strong>Request the transfer</strong> of your personal data to you or to a third party.</li>
            <li><strong>Withdraw consent</strong> at any time where we are relying on consent to process your personal data.</li>
          </ul>

          <h2>10. Contact</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <p>
            <strong>Evenrue Marketing ltd</strong><br />
            Business ID: 3159075-2<br />
            Email: <a href="mailto:hello@profitslab.io">hello@profitslab.io</a>
          </p>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-copyright">© 2026 ProfitSlab. All rights reserved. <a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Back to site</a></p>
      </footer>
    </>
  );
}
