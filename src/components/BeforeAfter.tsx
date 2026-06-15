"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (dragging) getPosition(e.clientX);
  }, [dragging, getPosition]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (dragging) getPosition(e.touches[0].clientX);
  }, [dragging, getPosition]);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", () => setDragging(false));
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", () => setDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", () => setDragging(false));
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", () => setDragging(false));
    };
  }, [dragging, onMouseMove, onTouchMove]);

  return (
    <div className="w-full">
      {/* Labels above */}
      <div className="flex justify-between mb-3 px-1">
        <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Before</span>
        <span className="text-xs font-bold uppercase tracking-widest text-orange-500">After</span>
      </div>

      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-sm cursor-col-resize select-none"
        style={{ aspectRatio: "4/3" }}
        onMouseDown={(e) => { setDragging(true); getPosition(e.clientX); }}
        onTouchStart={(e) => { setDragging(true); getPosition(e.touches[0].clientX); }}
      >
        {/* AFTER image (full, underneath) */}
        <div className="absolute inset-0">
          <Image
            src="/before2.png"
            alt="After junk removal — clean garage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
          {/* After label */}
          <div className="absolute bottom-4 right-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
            After
          </div>
        </div>

        {/* BEFORE image (clipped left side) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="absolute inset-0" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100vw" }}>
            <Image
              src="/before1.png"
              alt="Before junk removal — cluttered garage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Before label */}
          <div className="absolute bottom-4 left-4 bg-stone-800/90 text-stone-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
            Before
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-col-resize"
          style={{ left: `${position}%` }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 10M2 10L4 8M2 10L4 12" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10L18 10M18 10L16 8M18 10L16 12" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <p className="text-center text-stone-600 text-xs mt-3 uppercase tracking-widest">
        Drag to compare
      </p>
    </div>
  );
}
