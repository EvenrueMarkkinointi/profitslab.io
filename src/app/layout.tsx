import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.profitslab.io"),
  title: {
    default: "Practical AI for Small Businesses | ProfitSlab",
    template: "%s | ProfitSlab",
  },
  description:
    "Step-by-step AI guides, a free business audit, and ready-to-use prompts for small business owners. No fluff, no jargon — just practical AI that saves time.",
  authors: [{ name: "ProfitSlab by Evenrue" }],
  referrer: "strict-origin-when-cross-origin",
  alternates: {
    canonical: "https://www.profitslab.io/",
  },
  openGraph: {
    title: "Practical AI for Small Businesses | ProfitSlab",
    description:
      "Step-by-step AI guides, a free business audit, and ready-to-use prompts for small business owners. No fluff, no jargon.",
    url: "https://www.profitslab.io/",
    siteName: "ProfitSlab",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical AI for Small Businesses | ProfitSlab",
    description: "Free AI audit, step-by-step guides, and copy-paste prompts for business owners. No jargon.",
    images: ["https://www.profitslab.io/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0a0a1a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ProfitSlab",
              url: "https://www.profitslab.io",
              logo: "https://www.profitslab.io/images/logo.png",
              parentOrganization: {
                "@type": "Organization",
                name: "Evenrue Markkinointi Oy",
                url: "https://www.evenrue.fi",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@profitslab.io",
                contactType: "customer service",
              },
            }),
          }}
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1834140310519972');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1834140310519972&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
