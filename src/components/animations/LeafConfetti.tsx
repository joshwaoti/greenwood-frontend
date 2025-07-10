"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const leaves = Array.from({ length: 15 });

export default function LeafConfetti() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      leaves.forEach((_, i) => {
        const leaf = document.createElement("div");
        leaf.className =
          "pointer-events-none fixed top-0 left-0 w-3 h-3 bg-greenwood-deep-green opacity-0 rounded-full motion-safe:animate-leaf-float";
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDelay = `${Math.random() * 10}s`;
        containerRef.current?.appendChild(leaf);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="z-0" />;
}
