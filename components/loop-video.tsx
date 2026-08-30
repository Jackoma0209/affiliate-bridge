"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type LoopVideoProps = {
  src: string;
  poster: string;
  captions: string;
  title: string;
  caption?: string;
  eager?: boolean;
  className?: string;
};

export function LoopVideo({
  src,
  poster,
  captions,
  title,
  caption,
  eager = false,
  className,
}: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className={cn("mx-auto max-w-3xl print:hidden", className)}>
      <div className="overflow-hidden rounded-lg border border-border bg-muted">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload={eager ? "metadata" : "none"}
          poster={poster}
          aria-label={title}
          className="aspect-video h-auto w-full bg-muted object-cover"
        >
          <source src={src} type="video/mp4" />
          <track
            kind="captions"
            srcLang="en"
            src={captions}
            label="English"
            default
          />
        </video>
      </div>
      {caption ? (
        <figcaption className="mt-2 px-1 text-xs leading-5 text-muted-foreground">
          {caption} Sound is off.
        </figcaption>
      ) : (
        <figcaption className="mt-2 px-1 text-xs leading-5 text-muted-foreground">
          Sound is off. Captions are on.
        </figcaption>
      )}
    </figure>
  );
}
