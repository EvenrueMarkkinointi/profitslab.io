import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Shortcut Stack — 80 Copy-Paste AI Prompts for Business",
  description:
    "Stop guessing what to ask AI. 80 ready-to-use prompts for sales, marketing, ops, hiring and more. $19 one-time. Works with ChatGPT, Claude, Gemini.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
        {/* Open Graph */}
        <meta property="og:title" content="AI Shortcut Stack — 80 Copy-Paste AI Prompts for Business" />
        <meta property="og:description" content="Stop guessing what to ask AI. 80 ready-to-use prompts for sales, marketing, ops, hiring and more. $19 one-time. Works with ChatGPT, Claude, Gemini." />
        <meta property="og:image" content="https://www.profitslab.io/images/og-image.png" />
        <meta property="og:url" content="https://www.profitslab.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfitSlab" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Shortcut Stack — 80 Prompts, $19, Instant Access" />
        <meta name="twitter:description" content="Stop writing prompts from scratch. 80 copy-paste prompts for real business tasks." />
        <meta name="twitter:image" content="https://www.profitslab.io/images/og-image.png" />
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
