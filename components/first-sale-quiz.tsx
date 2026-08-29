"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { LeadForm } from "@/components/lead-form";
import { config } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Answers = {
  hasProduct: string;
  storeType: string;
  audience: string;
  time: string;
};

type Intent = "trial_now" | "trial_lean" | "trial_after_sentence" | "checklist_first";

const questions = [
  {
    id: "hasProduct",
    legend: "Do you already have a product?",
    options: [
      { value: "yes", label: "Yes, it exists" },
      { value: "idea", label: "I have an idea" },
      { value: "no", label: "Not yet" },
    ],
  },
  {
    id: "storeType",
    legend: "What do you want to sell first?",
    options: [
      { value: "physical", label: "Physical products" },
      { value: "digital", label: "Digital products" },
      { value: "services", label: "Services" },
      { value: "pod", label: "Print-on-demand" },
      { value: "dropshipping", label: "Dropshipping" },
    ],
  },
  {
    id: "audience",
    legend: "Do you have an audience already?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "small", label: "A small one" },
      { value: "no", label: "Not yet" },
    ],
  },
  {
    id: "time",
    legend: "How much time can you spend this week?",
    options: [
      { value: "two", label: "2-4 hours" },
      { value: "five", label: "5-8 hours" },
      { value: "ten", label: "10+ hours" },
    ],
  },
] as const;

const initialAnswers: Answers = {
  hasProduct: "",
  storeType: "",
  audience: "",
  time: "",
};

function getIntent(answers: Answers): Intent {
  if (answers.hasProduct === "yes" && (answers.time === "five" || answers.time === "ten")) {
    return "trial_now";
  }
  if (answers.hasProduct === "yes") {
    return "trial_lean";
  }
  if (answers.hasProduct === "idea" && answers.time === "ten") {
    return "trial_after_sentence";
  }
  return "checklist_first";
}

function getResult(answers: Answers) {
  if (
    !answers.storeType ||
    !answers.hasProduct ||
    !answers.audience ||
    !answers.time
  ) {
    return null;
  }

  const storeTypeMap: Record<string, string> = {
    physical: "A focused physical-product store",
    digital: "A simple digital-download store",
    services: "A service checkout page",
    pod: "A print-on-demand test store",
    dropshipping: "A supplier-backed product test store",
  };

  const modelAction: Record<string, string> = {
    physical:
      "Write honest delivery times and a returns line before you polish the theme.",
    digital:
      "Make the file, the outcome, and the delivery email obvious on one product page.",
    services:
      "Sell one named package with a clear scope, price, and next step — not an open-ended enquiry form.",
    pod: "Pick one niche design, one mockup style, and one buyer. Do not launch a catalogue of 40 shirts.",
    dropshipping:
      "Name one supplier you can actually reach and publish real delivery estimates. Vague shipping kills trust.",
  };

  const firstAction =
    answers.hasProduct === "no"
      ? "Choose one customer problem and list three possible offers before opening a theme editor."
      : answers.hasProduct === "idea"
        ? "Finish the offer sentence, then show it to five relevant people before spending a day on branding."
        : "Write one clear product page that explains the buyer, outcome, delivery, and returns.";

  const trafficAction =
    answers.audience === "yes"
      ? "Invite ten relevant contacts to review the offer and tell you what is unclear."
      : answers.audience === "small"
        ? "Use your existing audience for feedback, then test one community or search-led channel."
        : "Choose one place where buyers already ask questions and prepare a useful, non-spammy contribution.";

  const pace =
    answers.time === "two"
      ? "Keep the first version lean: one product, one page, one traffic source."
      : answers.time === "five"
        ? "Complete the core store and checkout this week, but avoid redesign loops."
        : "Use the extra time for original photos, policy checks, mobile testing, and a small traffic experiment.";

  const intent = getIntent(answers);

  const nextStepCopy: Record<Intent, string> = {
    trial_now: `Open Shopify today (${config.shopifyTrialOffer}), pick Dawn or another clean theme, and skip to Day 3 of the checklist.`,
    trial_lean:
      "Open a simple trial, then stop at a working store shell. Do not spend the week on logos.",
    trial_after_sentence:
      "Write the offer sentence today. Open Shopify on Day 2 only after a stranger would understand who the product is for.",
    checklist_first:
      "Use Day 1 of the checklist before you pay for a theme, ads, or inventory.",
  };

  return {
    recommendedStoreType: storeTypeMap[answers.storeType],
    firstAction,
    modelAction: modelAction[answers.storeType],
    trafficAction,
    pace,
    intent,
    nextStepCopy: nextStepCopy[intent],
    readyToBuild: intent === "trial_now" || intent === "trial_lean",
  };
}

export function FirstSaleQuiz() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [started, setStarted] = useState(false);
  const result = useMemo(() => getResult(answers), [answers]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div className="grid gap-4">
        {questions.map((question) => {
          const selectedValue = answers[question.id as keyof Answers];
          return (
            <fieldset
              key={question.id}
              className="rounded-lg border border-border bg-card p-4 shadow-sm shadow-black/[0.03]"
            >
              <legend className="text-sm font-semibold text-card-foreground">
                {question.legend}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {question.options.map((option) => {
                  const inputId = `${question.id}-${option.value}`;
                  const isSelected = selectedValue === option.value;
                  return (
                    <label
                      key={option.value}
                      htmlFor={inputId}
                      className={cn(
                        "inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                        isSelected
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <input
                        id={inputId}
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={isSelected}
                        onChange={() => {
                          if (!started) {
                            setStarted(true);
                            trackEvent("quiz_start", {
                              first_question: question.id,
                            });
                          }
                          const next = {
                            ...answers,
                            [question.id]: option.value,
                          };
                          setAnswers(next);
                          const completed = getResult(next);
                          if (completed) {
                            trackEvent("quiz_complete", {
                              store_type: next.storeType,
                              audience: next.audience,
                              time_available: next.time,
                              ready_to_build: completed.readyToBuild,
                              intent: completed.intent,
                            });
                          }
                        }}
                        className="size-4 accent-emerald-600"
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      <aside
        className="rounded-lg border border-border bg-foreground p-5 text-background shadow-[0_22px_70px_var(--card-glow)] dark:bg-card dark:text-card-foreground"
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-primary">
          Your practical starting path
        </p>
        {result ? (
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-background/60 dark:text-muted-foreground">
                Recommended store type
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                {result.recommendedStoreType}
              </h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {result.nextStepCopy}
              </p>
            </div>
            <div className="space-y-3 text-sm leading-6 text-background/75 dark:text-muted-foreground">
              {[
                result.firstAction,
                result.modelAction,
                result.trafficAction,
                result.pace,
              ].map((item) => (
                <p key={item} className="flex gap-2">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="grid gap-3">
              {result.readyToBuild ? (
                <>
                  <AffiliateCta
                    eventName="quiz_result_cta_click"
                    trackingPlacement={`quiz_${result.intent}`}
                    className="w-full"
                  >
                    {config.shopifyTrialCta}
                  </AffiliateCta>
                  <Link
                    href={result.intent === "trial_now" ? "/checklist#day-3" : "/checklist"}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-card px-4 text-sm font-semibold text-card-foreground ring-1 ring-border hover:bg-muted"
                  >
                    {result.intent === "trial_now"
                      ? "Skip to Day 3 of the checklist"
                      : "Open the 7-day checklist"}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/checklist#day-1"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:brightness-95"
                  >
                    Start Day 1 of the checklist
                  </Link>
                  <AffiliateCta
                    eventName="quiz_result_cta_click"
                    trackingPlacement={`quiz_${result.intent}`}
                    variant="light"
                    className="w-full"
                  >
                    {result.intent === "trial_after_sentence"
                      ? "I’ll open Shopify on Day 2"
                      : config.shopifyTrialCta}
                  </AffiliateCta>
                </>
              )}
            </div>
            <div className="rounded-lg border border-background/15 bg-background/5 p-4 dark:border-border dark:bg-muted/40">
              <p className="text-sm font-semibold">Get the Day 2 reminder</p>
              <p className="mt-1 text-xs leading-5 text-background/70 dark:text-muted-foreground">
                Optional. The result above is already yours — no email required.
              </p>
              <div className="mt-3">
                <LeadForm
                  source="quiz_result"
                  compact
                  submitLabel="Send me Day 2"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">
              Answer all four questions.
            </h3>
            <p className="text-sm leading-6 text-background/75 dark:text-muted-foreground">
              Your result will include a store model, the next action, and
              whether you should open Shopify today or stay on Day 1. Shown
              immediately, no email gate.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
