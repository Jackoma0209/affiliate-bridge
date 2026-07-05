"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return "light";
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const notify = () => onStoreChange();

  window.addEventListener("storage", notify);
  window.addEventListener("themechange", notify);
  media.addEventListener("change", notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("themechange", notify);
    media.removeEventListener("change", notify);
  };
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getCurrentTheme,
    () => "light"
  );
  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        const resolved = nextTheme;
        document.documentElement.classList.toggle("dark", resolved === "dark");
        document.documentElement.dataset.theme = resolved;
        window.localStorage.setItem("theme", resolved);
        window.dispatchEvent(new Event("themechange"));
        trackEvent("theme_toggle_click");
      }}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-card-foreground transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none",
        className
      )}
    >
      <span suppressHydrationWarning>
        {theme === "dark" ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
