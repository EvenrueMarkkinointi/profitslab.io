import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.profitslab.io/",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.profitslab.io/products/",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.profitslab.io/products/prompt-stack/",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.profitslab.io/products/connector-wtf/",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.profitslab.io/guides/",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.profitslab.io/guides/ai-customer-service-prompts/",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.profitslab.io/guides/best-ai-tools-small-business/",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.profitslab.io/guides/how-to-use-chatgpt-for-business/",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.profitslab.io/guides/ai-prompts-for-sales/",
      lastModified: new Date("2026-05-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.profitslab.io/audit",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.profitslab.io/audit/start",
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.profitslab.io/privacy",
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://www.profitslab.io/terms",
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
