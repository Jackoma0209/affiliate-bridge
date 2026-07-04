import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/content";

export function SocialProof() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Real people. Real results.
        </h2>
        <div className="mt-10 space-y-4">
          {content.testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-none">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {testimonial.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <blockquote className="text-muted-foreground">
                  &ldquo;{testimonial.before}&rdquo;
                </blockquote>
                <p className="text-foreground">{testimonial.change}</p>
                <p className="font-medium text-emerald-700">{testimonial.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}