"use client";

import { useEffect } from "react";

export default function MotionEnhancer() {
  useEffect(() => {
    const elementos = document.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const visiveis = Array.from(elementos).filter((elemento) => {
      const rect = elemento.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });

    visiveis.forEach((elemento) => {
      elemento.classList.add("aurea-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aurea-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    document.documentElement.classList.add("aurea-motion-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("aurea-motion-ready");
    };
  }, []);

  return null;
}
