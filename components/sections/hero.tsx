import { AffiliateCta } from "@/components/affiliate-cta";
import { config } from "@/config";
import { content } from "@/content";

export function Hero() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium tracking-wide text-emerald-700 uppercase">
          {content.hero.eyebrow}
        </p>
        <h1 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {content.hero.headline}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
          {content.hero.subhead}
        </p>
        <p className="mt-4 text-base font-semibold text-foreground">
          Starting at {config.price}
        </p>
        <div className="mt-8 flex justify-center">
          <AffiliateCta>{content.hero.cta}</AffiliateCta>
        </div>
      </div>
    </section>
  );
}