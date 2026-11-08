// components/blog/TableOfContents.tsx
"use client";

import { useEffect, useState } from "react";

export type Heading = {
  level: number;
  text: string;
  id: string;
};

type Props = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <div className="mb-3 text-[10.5px] uppercase tracking-[0.2em] text-muted">
        On this page
      </div>
      <ul className="space-y-0.5 border-l border-line">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block border-l-2 py-1.5 text-[12.5px] leading-snug transition-all duration-200 ${
                  h.level === 3 ? "pl-6" : "pl-3.5"
                } ${
                  isActive
                    ? "-ml-px border-accent text-ink"
                    : "-ml-px border-transparent text-muted hover:border-accent/40 hover:text-ink/80"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}