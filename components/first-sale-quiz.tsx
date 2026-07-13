"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Answers = {
  hasProduct: string;
  storeType: string;
  audience: string;
  time: string;
};

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

function getResult(answers: Answers) {
  if (!answers.storeType || !answers.hasProduct || !answers.audience || !answers.time) {
    return null;
  }

  const storeTypeMap: Record<string, string> = {
    physical: "A focused physical-product store",
    digital: "A simple digital-download store",
    services: "A service checkout page",
    pod: "A print-on-demand test store",
    dropshipping: "A supplier-backed product test store",
  };

  const firstAction =
    answers.hasProduct === "no"
      ? "Choose one customer problem and list three possible offers before opening a theme editor."
      : answers.hasProduct === "idea"
        ? "Validate the idea with five potential buyers before spending time on branding."
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

  return {
    recommendedStoreType: storeTypeMap[answers.storeType],
    firstAction,
    trafficAction,
    pace,
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
            <fieldset key={question.id} className="rounded-lg border border-border bg-card p-4 shadow-sm shadow-black/[0.03]">
              <legend className="text-sm font-semibold text-card-foreground">{question.legend}</legend>
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
                            trackEvent("quiz_start", { first_question: question.id });
                          }
                          const next = { ...answers, [question.id]: option.value };
                          setAnswers(next);
                          if (getResult(next)) {
                            trackEvent("quiz_complete", {
                              store_type: next.storeType,
                              audience: next.audience,
                              time_available: next.time,
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

      <aside className="rounded-lg border border-border bg-foreground p-5 text-background shadow-[0_22px_70px_var(--card-glow)] dark:bg-card dark:text-card-foreground" aria-live="polite">
        <p className="text-sm font-semibold text-primary">Your practical starting path</p>
        {result ? (
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-background/60 dark:text-muted-foreground">Recommended store type</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">{result.recommendedStoreType}</h3>
            </div>
            <div className="space-y-3 text-sm leading-6 text-background/75 dark:text-muted-foreground">
              {[result.firstAction, result.trafficAction, result.pace].map((item) => (
                <p key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="grid gap-3">
              <Link href="/checklist" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-card px-4 text-sm font-semibold text-card-foreground ring-1 ring-border hover:bg-muted">
                Open My 7-Day Checklist
              </Link>
              <AffiliateCta eventName="quiz_result_cta_click" variant="light" className="w-full">
                Start My Shopify Trial
              </AffiliateCta>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">Answer all four questions.</h3>
            <p className="text-sm leading-6 text-background/75 dark:text-muted-foreground">
              Your result will include a store model, first validation task, traffic action, and realistic pace. It is shown immediately without an email gate.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
