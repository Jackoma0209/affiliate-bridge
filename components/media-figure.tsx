import { cn } from "@/lib/utils";

type MediaFigureProps = {
  src: string;
  mobileSrc?: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  contain?: boolean;
  className?: string;
  imgClassName?: string;
};

export function MediaFigure({
  src,
  mobileSrc,
  alt,
  caption,
  width,
  height,
  priority = false,
  contain = false,
  className,
  imgClassName,
}: MediaFigureProps) {
  return (
    <figure className={cn("max-w-3xl", className)}>
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <picture>
          {mobileSrc ? (
            <source media="(max-width: 767px)" srcSet={mobileSrc} />
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element -- Editorial stills need explicit alt and captions. */}
          <img
            src={src}
            alt={alt}
            width={width ?? 1280}
            height={height ?? 720}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className={cn(
              "h-auto w-full",
              contain
                ? "object-contain bg-background"
                : "max-h-[28rem] object-cover object-center",
              imgClassName
            )}
          />
        </picture>
      </div>
      {caption ? (
        <figcaption className="mt-2 px-1 text-xs leading-5 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
