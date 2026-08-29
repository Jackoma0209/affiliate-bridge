import Link from "next/link";

import { config } from "@/config";
import { cn } from "@/lib/utils";

export function DisclosureLine({
  className,
  extra,
}: {
  className?: string;
  extra?: string;
}) {
  return (
    <p className={cn("text-xs leading-5 text-muted-foreground", className)}>
      {config.affiliateDisclosureShort}{" "}
      <Link
        href="/affiliate-disclosure"
        className="font-medium text-foreground underline-offset-4 hover:underline"
      >
        Full disclosure
      </Link>
      .{extra ? ` ${extra}` : ""}
    </p>
  );
}
