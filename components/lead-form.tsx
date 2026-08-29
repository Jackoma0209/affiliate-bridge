"use client";

import { CheckCircle2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

import { trackEvent } from "@/lib/analytics";
import { readAttribution } from "@/lib/attribution";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  source: string;
  compact?: boolean;
  className?: string;
  submitLabel?: string;
};

export function LeadForm({
  source,
  compact = false,
  className,
  submitLabel = "Join the Launch Tips List",
}: LeadFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const attribution = readAttribution();
    const tracking = {
      cta_location: source,
      traffic_source: attribution?.source || "website",
      page_path: window.location.pathname,
    };

    trackEvent("checklist_request_submit", tracking);
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          consent,
          website: formData.get("website") || "",
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !payload.ok) {
        throw new Error(
          payload.message || "We couldn't save your signup. Please try again."
        );
      }

      setStatus("success");
      setMessage(payload.message || "You're on the list.");
      trackEvent("checklist_request_success", tracking);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't save your signup. Please try again."
      );
      trackEvent("checklist_request_error", tracking);
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-lg border border-primary/30 bg-primary/10 p-4",
          className
        )}
        role="status"
      >
        <div className="flex gap-3">
          <CheckCircle2
            className="mt-0.5 size-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold text-card-foreground">Signup saved</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {message} Tomorrow’s email is Day 2 — that’s when most people
              should open Shopify.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-3", className)}>
      <div className={cn("grid gap-3", compact ? "sm:grid-cols-[1fr_1.4fr]" : "sm:grid-cols-2")}>
        {compact ? null : (
          <label className="grid gap-2 text-sm font-medium text-card-foreground">
            First name{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
            <input
              type="text"
              name="firstName"
              autoComplete="given-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              maxLength={100}
              className="min-h-12 rounded-lg border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </label>
        )}
        <label
          className={cn(
            "grid gap-2 text-sm font-medium text-card-foreground",
            compact && "sm:col-span-2"
          )}
        >
          {compact ? (
            <span className="sr-only">Email address</span>
          ) : (
            "Email address"
          )}
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="min-h-12 rounded-lg border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[10000px] h-px w-px opacity-0"
        aria-hidden="true"
      />

      <label className="flex items-start gap-3 text-xs leading-5 text-muted-foreground">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          className="mt-1 size-4 accent-emerald-600"
        />
        <span>
          Email me the Day 2 trial reminder and practical launch tips. I can
          unsubscribe at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 disabled:cursor-wait disabled:opacity-60"
      >
        <Mail className="size-4" aria-hidden="true" />
        {status === "loading" ? "Saving..." : submitLabel}
      </button>

      {status === "error" ? (
        <p className="text-sm leading-6 text-destructive" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
