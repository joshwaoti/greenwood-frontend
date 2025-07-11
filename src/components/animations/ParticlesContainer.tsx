"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Detect low-end devices
    const checkLowEnd = () => {
      // Check for low memory or slow connection
      const connection = (navigator as any).connection;
      const memory = (navigator as any).deviceMemory;

      const isSlowConnection =
        connection &&
        (connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g");
      const isLowMemory = memory && memory < 4;

      setIsLowEnd(isSlowConnection || isLowMemory);
    };

    checkMobile();
    checkLowEnd();

    // Initialize particles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      console.log(container);
    },
    []
  );

  // Don't render particles on very low-end devices
  if (isLowEnd) {
    return null;
  }

  // Adjust particle count based on device
  const particleCount = isMobile ? 50 : 100;
  const fpsLimit = isMobile ? 60 : 120;

  if (init) {
    return (
      <Particles
        className="w-full h-full absolute translate-z-0"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: fpsLimit,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: !isMobile,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: isMobile ? 100 : 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#10b981",
            },
            links: {
              color: "#059669",
              distance: isMobile ? 120 : 150,
              enable: true,
              opacity: isMobile ? 0.15 : 0.25,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: isMobile ? 1 : 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: particleCount,
            },
            opacity: {
              value: isMobile ? 0.2 : 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: isMobile ? 4 : 6 },
            },
          },
          detectRetina: true,
        }}
      />
    );
  }

  return <></>;
};

export default ParticlesContainer;
