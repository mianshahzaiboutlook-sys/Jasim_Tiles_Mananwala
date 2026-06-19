"use client";

import { useEffect } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1
      ? "reveal-delay-1"
      : delay === 2
        ? "reveal-delay-2"
        : delay === 3
          ? "reveal-delay-3"
          : delay === 4
            ? "reveal-delay-4"
            : "";

  return (
    <div className={`reveal ${delayClass} ${className}`}>{children}</div>
  );
}
