"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Loads Removed" },
  { value: 100, suffix: "+", label: "Trailer Rentals" },
  { value: null, display: "Same-Day", label: "Availability" },
  { value: null, display: "5-Star", label: "Service" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-black text-stone-50">
      {count}{suffix}
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-stone-800">
      {stats.map(({ value, suffix, display, label }) => (
        <div key={label} className="text-center">
          {value !== null && suffix ? (
            <Counter value={value} suffix={suffix} />
          ) : (
            <div className="text-3xl md:text-4xl font-black text-orange-500 whitespace-nowrap">{display}</div>
          )}
          <div className="text-stone-500 text-xs uppercase tracking-widest mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}
