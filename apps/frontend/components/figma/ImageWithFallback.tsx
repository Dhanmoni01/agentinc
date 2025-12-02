"use client";

import { useState } from "react";
import clsx from "clsx";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div
        className={clsx(
          "flex h-full w-full items-center justify-center bg-slate-200 text-xs text-slate-500",
          fallbackClassName,
          className,
        )}
      >
        Image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={clsx("h-full w-full object-cover", className)}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}
