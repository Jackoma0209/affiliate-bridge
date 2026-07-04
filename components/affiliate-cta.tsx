import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import { cn } from "@/lib/utils";

type AffiliateCtaProps = {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
};

export function AffiliateCta({
  children,
  className,
  large = false,
}: AffiliateCtaProps) {
  return (
    <a
      href={config.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`Get ${config.productName} — affiliate link`}
      className={cn(
        buttonVariants({ size: "lg" }),
        "w-full border-0 bg-emerald-600 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 sm:w-auto",
        large ? "min-h-14 px-8 py-6 text-lg" : "min-h-12 px-6",
        className
      )}
    >
      {children}
    </a>
  );
}