"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function PixelEvent({ event, params }: { event: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", event, params);
    }
  }, [event, params]);

  return null;
}
