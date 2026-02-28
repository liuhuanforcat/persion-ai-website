"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
  /** 用于背景图时，不渲染 img，用 div + backgroundImage */
  asBackground?: boolean;
};

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallback,
  asBackground = false,
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    if (fallback != null) return <>{fallback}</>;
    return <div className={className} aria-label={alt} />;
  }

  if (asBackground) {
    return (
      <div
        className={className}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
