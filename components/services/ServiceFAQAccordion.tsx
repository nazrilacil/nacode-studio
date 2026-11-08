// components/services/ServiceFAQAccordion.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Item = { question: string; answer: string };

export default function ServiceFAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-ink">
                {item.question}
              </span>
              {isOpen ? (
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              ) : (
                <Plus className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
              )}
            </button>
            {isOpen && (
              <div className="pb-5 pr-8 text-[14px] leading-relaxed text-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}