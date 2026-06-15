"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-stone-800">
      {faqs.map(({ q, a }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="text-stone-50 font-semibold text-base group-hover:text-orange-400 transition-colors duration-200 pr-4">
              {q}
            </span>
            <span
              className={`text-orange-500 text-xl flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-64 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-stone-400 text-sm leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
