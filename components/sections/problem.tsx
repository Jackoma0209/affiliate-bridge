import { content } from "@/content";

export function Problem() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {content.problem.headline}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {content.problem.subhead}
        </p>
        <ul className="mt-8 space-y-4">
          {content.problem.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-base leading-relaxed text-foreground"
            >
              <span
                className="mt-2 size-2 shrink-0 rounded-full bg-emerald-600"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base font-medium text-muted-foreground">
          {content.problem.bridge}
        </p>
      </div>
    </section>
  );
}