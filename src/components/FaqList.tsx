"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-3xl bg-cream-dark">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="px-6 py-5 sm:px-8">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-gold" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-muted">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
