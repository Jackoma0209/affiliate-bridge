import Link from "next/link";

import { config } from "@/config";
import { cn } from "@/lib/utils";

export function AuthorProfile({
  className,
  linkName = true,
  label = "Written by",
}: {
  className?: string;
  linkName?: boolean;
  label?: string;
}) {
  const authorName = linkName ? (
    <Link
      href="/contact"
      className="rounded-sm text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
    >
      {config.authorName}
    </Link>
  ) : (
    <span>{config.authorName}</span>
  );

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm shadow-black/[0.03]",
        className
      )}
    >
      {config.authorImagePath ? (
        // eslint-disable-next-line @next/next/no-img-element -- The project explicitly requires semantic img elements for editorial images.
        <img
          src={config.authorImagePath}
          width={800}
          height={800}
          alt={`${config.authorName}, author of ${config.siteName}`}
          className="size-16 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          role="img"
          aria-label={`${config.authorName}, author of ${config.siteName}`}
          className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary ring-2 ring-primary/20"
        >
          J
        </div>
      )}

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
        <p className="mt-1 text-lg font-semibold text-card-foreground">{authorName}</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{config.authorBio}</p>
        <p className="mt-1 text-sm leading-6">
          <a
            href={config.xUrl}
            className="font-medium text-foreground underline-offset-4 hover:underline"
            rel="me"
          >
            @{config.xHandle}
          </a>
        </p>
      </div>
    </div>
  );
}
