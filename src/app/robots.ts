import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/audit/start",
        "/audit/*",
        "/ai-shortcut-stack/thank-you",
      ],
    },
    sitemap: "https://www.profitslab.io/sitemap.xml",
  };
}
