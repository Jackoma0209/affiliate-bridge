"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, LoaderCircle, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

import { config } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const deliverables = [
  "Seven focused daily launch tasks",
  "Trust, checkout, traffic, and analytics checks",
  "A printable checklist you can save as a PDF",
] as const;

type LeadCaptureProps = {
  variant?: "hero" | "section" | "compact";
  source?: string;
  resultTag?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type SubscribeResponse = {
  success?: boolean;
  message?: string;
};

export function LeadCapture({
  variant = "section",
  source,
  resultTag,
}: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const compact = variant === "compact";
  const hero = variant === "hero";
  const captureSource = source ?? variant;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setSubmitState("error");
      setErrorMessage("Enter a valid email address to continue.");
      return;
    }

    if (honeypot) {
      setSubmitState("success");
      return;
    }

    setSubmitState("submitting");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          source: captureSource,
          resultTag,
          company: honeypot,
        }),
        signal: controller.signal,
      });

      const responseBody = (await response.json().catch(() => null)) as
        | SubscribeResponse
        | null;

      if (!response.ok || responseBody?.success === false) {
        throw new Error(
          responseBody?.message || "The signup service did not accept the request."
        );
      }

      setSubmitState("success");
      window.localStorage.setItem("gyfs_checklist_subscribed", "true");
      window.dispatchEvent(new Event("gyfs-checklist-subscribed"));
      trackEvent("checklist_request_submit", {
        cta_location: captureSource,
        quiz_result: resultTag,
      });
    } catch (error) {
      setSubmitState("error");

      if (error instanceof DOMException && error.name === "AbortError") {
        setErrorMessage(
          "The email service took too long to respond. Please try again, or open the checklist instantly below."
        );
      } else if (error instanceof Error && error.message) {
        setErrorMessage(
          `${error.message} You can still open the checklist instantly below.`
        );
      } else {
        setErrorMessage(
          "The form could not submit just now. Please try again, or open the checklist instantly below."
        );
      }
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  const formCard = (
    <div
      id={hero ? "hero-lead-capture" : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_var(--card-glow)]",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7",
        hero && "paper-grid"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {submitState === "success" ? (
        <div className={cn("flex flex-col", compact ? "gap-4" : "gap-5")}>
          <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Your checklist is unlocked</p>
            <h3 className={cn("mt-1 font-bold tracking-tight", compact ? "text-xl" : "text-2xl")}>
              Start with Day 1 today.
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Your request was accepted. Open the complete checklist now and save or print it for the week ahead.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/checklist"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_var(--card-glow)] transition hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
            >
              Open My Checklist
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={config.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
            >
              Start Building on Shopify
            </a>
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            Shopify is optional and the second button is an affiliate link. Results vary.
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Free 7-day launch checklist
              </p>
              <h2 className={cn("mt-2 font-bold tracking-tight text-card-foreground", compact ? "text-xl" : "text-2xl sm:text-3xl")}>
                {compact ? "Get this plan" : "Know exactly what to do each day"}
              </h2>
            </div>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="size-5" aria-hidden="true" />
            </span>
          </div>

          {!compact ? (
            <ul className="mt-5 grid gap-3">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-card-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-5 grid gap-3" noValidate>
            <div className={cn("grid gap-3", !compact && "sm:grid-cols-[0.7fr_1.3fr]")}>
              <div>
                <label htmlFor={`${captureSource}-first-name`} className="sr-only">
                  First name
                </label>
                <input
                  id={`${captureSource}-first-name`}
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name (optional)"
                  className="min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <div>
                <label htmlFor={`${captureSource}-email`} className="sr-only">
                  Email address
                </label>
                <input
                  id={`${captureSource}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  aria-describedby={`${captureSource}-form-note`}
                  className="min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
            </div>

            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor={`${captureSource}-company`}>Company</label>
              <input
                id={`${captureSource}-company`}
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
            >
              {submitState === "submitting" ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                  Unlocking my checklist…
                </>
              ) : (
                <>
                  Get the Free Checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
          </form>

          {submitState === "error" ? (
            <p className="mt-3 text-sm font-medium text-destructive" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <div id={`${captureSource}-form-note`} className="mt-4 flex gap-2 text-xs leading-5 text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              Instant checklist access after submitting. Your details are sent securely to Get Your First Sale. No spam.
            </p>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Prefer not to share your email?{" "}
            <Link href="/checklist" className="font-semibold text-foreground underline decoration-border underline-offset-4 hover:text-primary">
              Preview the checklist
            </Link>
          </p>
        </>
      )}
    </div>
  );

  if (hero || compact) {
    return formCard;
  }

  return (
    <section id="lead-capture" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-border bg-muted/65 p-5 sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            Take the plan with you
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Stop reopening tabs. Follow one clear task each day.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Get the printable checklist, open it on any device, and keep your launch focused on the work that makes a store ready for real visitors.
          </p>
        </div>
        {formCard}
      </div>
    </section>
  );
}
