"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import PageTransitionOverlay from "@/components/animations/PageTransitionOverlay";

export default function NavigationTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    // If pathname changed, we're navigating
    if (pathname !== currentPath) {
      setIsTransitioning(true);
      setCurrentPath(pathname);

      // Hide overlay after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1200); // 0.6s duration + 0.6s max delay

      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath]);

  // Show overlay on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && <PageTransitionOverlay key={pathname} />}
    </AnimatePresence>
  );
}
