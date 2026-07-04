import { AffiliateCta } from "@/components/affiliate-cta";
import { content } from "@/content";

export function UrgencyCta() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {content.urgency.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
          {content.urgency.body}
        </p>
        <p className="mt-4 text-base font-medium text-foreground">
          {content.urgency.riskReversal}
        </p>
        <div className="mt-10 flex justify-center">
          <AffiliateCta large>{content.urgency.cta}</AffiliateCta>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {content.urgency.microCopy}
        </p>
      </div>
    </section>
  );
}