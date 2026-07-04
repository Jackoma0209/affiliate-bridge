import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/content";

export function Solution() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-lg leading-relaxed text-foreground italic">
          {content.solution.empathy}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {content.solution.intro}
        </p>
        <div className="mt-10 space-y-4">
          {content.solution.steps.map((step, index) => (
            <Card key={step.title} className="shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-base font-semibold">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="pl-11 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}