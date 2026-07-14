"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { trackEvent } from "@/lib/analytics";

export function MobileStickyCta() {
  const [subscribed, setSubscribed] = useState(true);
  const [heroFormVisible, setHeroFormVisible] = useState(true);

  useEffect(() => {
    const updateSubscription = () => {
      setSubscribed(window.localStorage.getItem("gyfs_checklist_subscribed") === "true");
    };

    updateSubscription();
    window.addEventListener("gyfs-checklist-subscribed", updateSubscription);

    const heroForm = document.getElementById("hero-lead-capture");
    const observer = heroForm
      ? new IntersectionObserver(
          ([entry]) => setHeroFormVisible(entry.isIntersecting),
          { threshold: 0.15 }
        )
      : null;

    if (heroForm && observer) {
      observer.observe(heroForm);
    }

    return () => {
      window.removeEventListener("gyfs-checklist-subscribed", updateSubscription);
      observer?.disconnect();
    };
  }, []);

  if (subscribed || heroFormVisible) {
    return null;
  }

  function scrollToForm() {
    trackEvent("sticky_checklist_click", {
      cta_location: "mobile_sticky",
      destination: "#lead-capture",
    });
    document.getElementById("lead-capture")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <div className="safe-area-bottom fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 pt-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto max-w-sm">
        <button
          type="button"
          onClick={scrollToForm}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
        >
          Get the Free Checklist
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <p className="mt-1.5 text-center text-xs font-medium text-muted-foreground">
          Seven practical days · instant access
        </p>
      </div>
    </div>
  );
}
