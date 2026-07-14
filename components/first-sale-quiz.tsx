"use client";

import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { LeadCapture } from "@/components/lead-capture";
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
    helper: "This changes whether your first step should be validation or building the offer.",
    options: [
      { value: "yes", label: "Yes, it already exists" },
      { value: "idea", label: "I have a product idea" },
      { value: "no", label: "Not yet" },
    ],
  },
  {
    id: "storeType",
    legend: "What do you want to sell first?",
    helper: "Choose the simplest description of your first offer.",
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
    helper: "An audience can be customers, followers, community contacts, or an email list.",
    options: [
      { value: "yes", label: "Yes, an active audience" },
      { value: "small", label: "A small starting audience" },
      { value: "no", label: "Not yet" },
    ],
  },
  {
    id: "time",
    legend: "How much time can you spend this week?",
    helper: "A realistic pace is more useful than an ambitious plan you cannot finish.",
    options: [
      { value: "two", label: "2–4 hours" },
      { value: "five", label: "5–8 hours" },
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
      ? "Keep the first version lean: one product, one page, and one traffic source."
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
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const result = useMemo(() => getResult(answers), [answers]);
  const question = questions[step];
  const selectedValue = answers[question.id as keyof Answers];
  const progress = completed ? 100 : ((step + 1) / questions.length) * 100;

  function selectAnswer(value: string) {
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);

    trackEvent("quiz_answer", {
      question: question.id,
      answer: value,
      question_number: step + 1,
    });

    if (step === 0 && !answers.hasProduct) {
      trackEvent("quiz_start", { first_question: question.id });
    }

    if (step < questions.length - 1) {
      window.setTimeout(
        () => setStep((current) => Math.min(current + 1, questions.length - 1)),
        160
      );
      return;
    }

    const completedResult = getResult(nextAnswers);
    if (completedResult) {
      setCompleted(true);
      trackEvent("quiz_complete", {
        store_type: nextAnswers.storeType,
        audience: nextAnswers.audience,
        time_available: nextAnswers.time,
      });
    }
  }

  function resetQuiz() {
    setAnswers(initialAnswers);
    setStep(0);
    setCompleted(false);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_80px_var(--card-glow)]">
      <div className="border-b border-border bg-muted/65 px-5 py-4 sm:px-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
              {completed ? "Your result" : `Question ${step + 1} of ${questions.length}`}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {completed
                ? "A practical starting route based on your answers."
                : "Choose the answer that best matches your situation."}
            </p>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-border/70" aria-hidden="true">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!completed ? (
        <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-primary">Find your simplest first path</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              {question.legend}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {question.helper}
            </p>
            <div className="mt-6 rounded-2xl bg-muted/65 p-4 text-sm leading-6 text-muted-foreground">
              Your result will include a recommended store model, a first validation task, a traffic action, and a realistic pace.
            </div>
          </div>

          <fieldset>
            <legend className="sr-only">{question.legend}</legend>
            <div className="grid gap-3">
              {question.options.map((option) => {
                const inputId = `${question.id}-${option.value}`;
                const isSelected = selectedValue === option.value;

                return (
                  <label
                    key={option.value}
                    htmlFor={inputId}
                    className={cn(
                      "group flex min-h-14 cursor-pointer items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground ring-4 ring-primary/10"
                        : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/45"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        id={inputId}
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={isSelected}
                        onChange={() => selectAnswer(option.value)}
                        className="size-4 accent-emerald-700"
                      />
                      {option.label}
                    </span>
                    <ArrowRight
                      className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </label>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(current - 1, 0))}
                disabled={step === 0}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-35"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back
              </button>
              <p className="text-xs text-muted-foreground">Your result appears immediately.</p>
            </div>
          </fieldset>
        </div>
      ) : result ? (
        <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-primary">Recommended starting model</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-balance">
              {result.recommendedStoreType}
            </h3>
            <div className="mt-6 grid gap-4">
              {[result.firstAction, result.trafficAction, result.pace].map((item, index) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-border bg-background p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AffiliateCta eventName="quiz_result_cta_click" className="sm:w-auto">
                Start Building on Shopify
              </AffiliateCta>
              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                Retake quiz
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              Shopify is optional. The Shopify button is an affiliate link and does not guarantee a sale.
            </p>
          </div>

          <LeadCapture
            variant="compact"
            source="quiz_result"
            resultTag={`${answers.storeType}:${answers.hasProduct}:${answers.audience}:${answers.time}`}
          />
        </div>
      ) : null}
    </div>
  );
}
