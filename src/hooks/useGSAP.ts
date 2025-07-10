"use client";

import { useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPAnimationOptions {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger.Vars;
  timeline?: boolean;
  stagger?: number;
  delay?: number;
}

export const useGSAP = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(callback, containerRef);
    return () => ctx.revert();
  }, dependencies);

  return containerRef;
};

export const useScrollAnimation = (
  selector: string,
  options: GSAPAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector);

      elements.forEach((element: any, index: number) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
            ...options.from,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: options.stagger
              ? index * options.stagger
              : options.delay || 0,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              ...options.scrollTrigger,
            },
            ...options.to,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
};

export const useParallax = (selector: string, speed: number = 0.5) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector);

      elements.forEach((element: any) => {
        gsap.fromTo(
          element,
          { yPercent: -50 },
          {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: speed,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, speed]);

  return containerRef;
};

export const useStaggerAnimation = (
  selector: string,
  staggerDelay: number = 0.1
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selector, staggerDelay]);

  return containerRef;
};

export const useFloatingAnimation = (
  selector: string,
  intensity: number = 15
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector);

      elements.forEach((element: any, index: number) => {
        gsap.to(element, {
          y: `+=${intensity}`,
          duration: 3 + index * 0.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, intensity]);

  return containerRef;
};
