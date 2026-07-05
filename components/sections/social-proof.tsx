import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/content";

export function SocialProof() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What a realistic first win looks like
        </h2>
        <p className="mt-4 text-muted-foreground">
          Results vary. These are example milestones, not guaranteed outcomes.
        </p>
        <div className="mt-10 space-y-4">
          {content.realisticWins.map((win, index) => (
            <Card key={win} className="shadow-none">
              <CardContent className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm font-semibold text-emerald-700">
                  {index + 1}
                </span>
                <p className="text-muted-foreground">{win}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
