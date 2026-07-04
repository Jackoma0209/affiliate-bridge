import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/content";

export function Benefits() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What you get
        </h2>
        <div className="mt-10 space-y-4">
          {content.benefits.map((benefit) => (
            <Card key={benefit.headline} className="shadow-none">
              <CardHeader>
                <CardDescription className="text-xs font-medium tracking-wide text-emerald-700 uppercase">
                  {benefit.feature}
                </CardDescription>
                <CardTitle className="text-lg font-semibold">
                  {benefit.headline}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.payoff}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}