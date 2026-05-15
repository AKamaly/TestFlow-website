"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ReviewAnalytics() {
  const cardPassRef = useRef<HTMLDivElement>(null);
  const cardTrendsRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pctPassRef = useRef<HTMLDivElement>(null);
  const pctFailRef = useRef<HTMLDivElement>(null);
  const arrowPassRef = useRef<HTMLDivElement>(null);
  const ttRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGPathElement | null)[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const after = useCallback((ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
  }, []);

  const countUp = useCallback(
    (el: HTMLDivElement, from: number, to: number, duration: number, cb?: () => void) => {
      const startTime = performance.now();
      function tick(now: number) {
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${Math.round(from + (to - from) * eased)}%`;
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${to}%`;
          if (cb) cb();
        }
      }
      requestAnimationFrame(tick);
    },
    []
  );

  const reset = useCallback(() => {
    if (cardTrendsRef.current) cardTrendsRef.current.style.animation = "fadeOut 0.4s ease forwards";
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (pillRef.current) pillRef.current.style.opacity = "0";
    if (tooltipRef.current) {
      tooltipRef.current.style.animation = "none";
      tooltipRef.current.style.opacity = "0";
    }
    if (arrowPassRef.current) arrowPassRef.current.style.opacity = "0";
    if (pctPassRef.current) pctPassRef.current.textContent = "0%";
    if (pctFailRef.current) pctFailRef.current.textContent = "0%";
    ttRowRefs.current.forEach((r) => {
      if (r) {
        r.style.animation = "none";
        r.style.opacity = "0";
      }
    });
    lineRefs.current.forEach((l) => l?.classList.remove("draw"));
    dotRefs.current.forEach((d) => d?.classList.remove("show"));
    after(500, () => {
      if (cardPassRef.current) {
        cardPassRef.current.style.animation = "none";
        cardPassRef.current.style.opacity = "0";
      }
      if (cardTrendsRef.current) {
        cardTrendsRef.current.style.animation = "none";
        cardTrendsRef.current.style.opacity = "0";
      }
      void cardPassRef.current?.offsetWidth;
      after(300, start);
    });
  }, [after]); // eslint-disable-line react-hooks/exhaustive-deps

  const showTrends = useCallback(() => {
    if (cardTrendsRef.current) {
      cardTrendsRef.current.style.animation = "cardReveal 0.5s cubic-bezier(.22,1.2,.36,1) forwards";
    }
    after(400, () => lineRefs.current[0]?.classList.add("draw"));
    after(900, () => lineRefs.current[1]?.classList.add("draw"));
    after(1400, () => lineRefs.current[2]?.classList.add("draw"));
    after(1700, () => {
      dotRefs.current.forEach((dot, i) => {
        after(i * 60, () => dot?.classList.add("show"));
      });
    });
    after(2700, () => {
      if (cursorRef.current) {
        cursorRef.current.style.top = "115px";
        cursorRef.current.style.left = "200px";
      }
      after(620, () => {
        if (tooltipRef.current) tooltipRef.current.style.animation = "tooltipReveal 0.35s cubic-bezier(.22,1.2,.36,1) forwards";
        ttRowRefs.current.forEach((row, i) => {
          after(i * 100 + 200, () => {
            if (row) row.style.animation = "legendRow 0.3s ease forwards";
          });
        });
      });
    });
    after(6500, reset);
  }, [after, reset]);

  const start = useCallback(() => {
    if (cardPassRef.current) cardPassRef.current.style.animation = "cardReveal 0.5s cubic-bezier(.22,1.2,.36,1) forwards";
    if (pillRef.current) pillRef.current.style.opacity = "1";

    after(600, () => {
      if (cursorRef.current) {
        cursorRef.current.style.top = "130px";
        cursorRef.current.style.left = "260px";
        cursorRef.current.style.opacity = "1";
      }
    });

    after(400, () => {
      if (pctPassRef.current)
        countUp(pctPassRef.current, 0, 94, 1400, () => {
          if (arrowPassRef.current) arrowPassRef.current.style.opacity = "1";
        });
      if (pctFailRef.current) countUp(pctFailRef.current, 0, 6, 1400);
    });

    after(2800, () => {
      if (cardPassRef.current) {
        cardPassRef.current.style.animation = "fadeOut 0.28s ease forwards";
      }
      after(220, showTrends);
    });
  }, [after, countUp, showTrends]);

  useEffect(() => {
    const t = setTimeout(start, 400);
    return () => {
      clearTimeout(t);
      timeouts.current.forEach(clearTimeout);
    };
  }, [start]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center mx-auto"
      style={{
        height: 380,
        width: "100%",
        maxWidth: 440,
        padding: 20,
        fontFamily: "Inter, sans-serif",
        background: "#f0f0f0",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <style>{`
        @keyframes cardReveal { from{opacity:0;transform:translateY(12px) scale(0.96);} to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes fadeOut { from{opacity:1;} to{opacity:0;} }
        @keyframes drawLine { from{stroke-dashoffset:1000;} to{stroke-dashoffset:0;} }
        @keyframes tooltipReveal { from{opacity:0;transform:translateY(-6px) scale(0.95);} to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes legendRow { from{opacity:0;transform:translateX(-6px);} to{opacity:1;transform:translateX(0);} }
        @keyframes thinkingDot { 0%,80%,100%{transform:scale(0.4);opacity:0.2;} 40%{transform:scale(1);opacity:1;} }
        .line-path { fill:none; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; stroke-dasharray:1000; stroke-dashoffset:1000; }
        .line-path.draw { animation: drawLine 1.4s cubic-bezier(.4,0,.2,1) forwards; }
        .dot-marker { fill:#fff; stroke-width:1.5; opacity:0; transition:opacity 0.3s; }
        .dot-marker.show { opacity:1; }
      `}</style>

      <div className="relative w-full flex flex-col items-center justify-center z-10" style={{ maxWidth: 340 }}>
        <div className="relative w-full flex items-center justify-center" style={{ height: 220 }}>
          <div
            ref={cardPassRef}
            className="absolute w-full bg-white rounded-2xl border border-zinc-200"
            style={{ padding: 18, boxShadow: "0 8px 28px rgba(0,0,0,0.08)", opacity: 0 }}
          >
            <div className="text-[17px] font-bold text-zinc-900 mb-3" style={{ letterSpacing: "-0.01em" }}>
              Pass Rate
            </div>
            <div className="grid grid-cols-2 border border-zinc-200 rounded-xl overflow-hidden">
              <div className="flex flex-col gap-1" style={{ padding: "12px 14px" }}>
                <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 11v8a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4v-3.4a2 2 0 0 0-.6-1.4L13 5l-1 1v3a1 1 0 0 0 1 1h6" />
                  <path d="M3 11h4v9H3z" />
                </svg>
                <div className="flex items-center gap-1.5">
                  <div ref={pctPassRef} className="text-[22px] font-semibold text-zinc-900" style={{ letterSpacing: "-0.02em", minWidth: 46 }}>
                    0%
                  </div>
                  <div
                    ref={arrowPassRef}
                    className="w-4 h-4 rounded-full border-[1.5px] border-zinc-900 flex items-center justify-center"
                    style={{ opacity: 0, transition: "opacity 0.4s" }}
                  >
                    <svg viewBox="0 0 10 10" className="w-2 h-2" style={{ stroke: "#09090b", fill: "none", strokeWidth: 2 }}>
                      <polyline points="5,8 5,2" />
                      <polyline points="2,5 5,2 8,5" />
                    </svg>
                  </div>
                </div>
                <div className="text-[11px] text-zinc-400">Passed</div>
              </div>
              <div className="flex flex-col gap-1 border-l border-zinc-200" style={{ padding: "12px 14px" }}>
                <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transform: "scale(-1,-1)" }}>
                  <path d="M7 11v8a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4v-3.4a2 2 0 0 0-.6-1.4L13 5l-1 1v3a1 1 0 0 0 1 1h6" />
                  <path d="M3 11h4v9H3z" />
                </svg>
                <div ref={pctFailRef} className="text-[22px] font-semibold text-zinc-900" style={{ letterSpacing: "-0.02em", minWidth: 46 }}>
                  0%
                </div>
                <div className="text-[11px] text-zinc-400">Failed</div>
              </div>
            </div>
          </div>

          <div
            ref={cardTrendsRef}
            className="absolute w-full bg-white rounded-2xl border border-zinc-200"
            style={{ padding: 18, boxShadow: "0 8px 28px rgba(0,0,0,0.08)", opacity: 0 }}
          >
            <div className="text-[17px] font-bold text-zinc-900 mb-3" style={{ letterSpacing: "-0.01em" }}>
              Trends
            </div>
            <div className="relative" style={{ height: 140 }}>
              <svg viewBox="0 0 280 130" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                <path ref={(el) => { lineRefs.current[0] = el; }} className="line-path" stroke="#facc15" d="M 5,75 Q 50,30 90,40 T 175,75 T 275,70" />
                <circle ref={(el) => { dotRefs.current[0] = el; }} className="dot-marker" cx="50" cy="42" r="3" stroke="#facc15" />
                <circle ref={(el) => { dotRefs.current[1] = el; }} className="dot-marker" cx="115" cy="48" r="3" stroke="#facc15" />
                <circle ref={(el) => { dotRefs.current[2] = el; }} className="dot-marker" cx="200" cy="78" r="3" stroke="#facc15" />
                <path ref={(el) => { lineRefs.current[1] = el; }} className="line-path" stroke="#f87171" d="M 5,95 Q 50,60 95,55 T 180,80 T 270,100" />
                <circle ref={(el) => { dotRefs.current[3] = el; }} className="dot-marker" cx="55" cy="62" r="3" stroke="#f87171" />
                <circle ref={(el) => { dotRefs.current[4] = el; }} className="dot-marker" cx="120" cy="58" r="3" stroke="#f87171" />
                <circle ref={(el) => { dotRefs.current[5] = el; }} className="dot-marker" cx="205" cy="92" r="3" stroke="#f87171" />
                <path ref={(el) => { lineRefs.current[2] = el; }} className="line-path" stroke="#3b82f6" d="M 5,105 Q 60,95 115,82 T 200,55 T 275,40" />
                <circle ref={(el) => { dotRefs.current[6] = el; }} className="dot-marker" cx="60" cy="92" r="3" stroke="#3b82f6" />
                <circle ref={(el) => { dotRefs.current[7] = el; }} className="dot-marker" cx="135" cy="75" r="3" stroke="#3b82f6" />
                <circle ref={(el) => { dotRefs.current[8] = el; }} className="dot-marker" cx="210" cy="50" r="3" stroke="#3b82f6" />
              </svg>

              <div
                ref={tooltipRef}
                className="absolute top-1 right-1 bg-white border border-zinc-200 rounded-xl z-10"
                style={{ padding: "8px 10px", boxShadow: "0 6px 18px rgba(0,0,0,0.1)", opacity: 0 }}
              >
                {[
                  { color: "#3b82f6", label: "Power (W)", val: "2" },
                  { color: "#facc15", label: "Voltage (V)", val: "3.3" },
                  { color: "#f87171", label: "Current (mA)", val: "23" },
                ].map((row, i) => (
                  <div key={i} ref={(el) => { ttRowRefs.current[i] = el; }} className="flex items-center gap-2" style={{ padding: "2.5px 0", fontSize: 10.5, opacity: 0 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: row.color, flexShrink: 0 }} />
                    <span style={{ color: "#52525b", flex: 1, whiteSpace: "nowrap" }}>{row.label}</span>
                    <span style={{ fontWeight: 600, color: "#09090b" }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={cursorRef}
            className="absolute pointer-events-none z-20"
            style={{
              width: 16,
              height: 16,
              top: 130,
              left: 260,
              opacity: 0,
              transition: "top 0.6s cubic-bezier(.4,0,.2,1), left 0.6s cubic-bezier(.4,0,.2,1), opacity 0.3s",
            }}
          >
            <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
              <path d="M4 2L16 10L10 11.5L7.5 18L4 2Z" fill="#09090b" stroke="white" strokeWidth="1.2" />
            </svg>
          </div>
        </div>

        <div
          ref={pillRef}
          className="flex items-center gap-2 rounded-full text-white text-[11.5px] font-medium"
          style={{
            background: "#09090b",
            padding: "6px 14px 6px 6px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
            marginTop: 14,
            opacity: 0,
            transition: "opacity 0.4s",
          }}
        >
          <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="7" width="10" height="10" rx="1" />
              <path d="M7 9H5M7 12H5M7 15H5M17 9h2M17 12h2M17 15h2M9 7V5M12 7V5M15 7V5M9 17v2M12 17v2M15 17v2" />
            </svg>
          </div>
          <span>Updating analytics</span>
          <div className="flex items-center gap-[3px]">
            {[0, 0.25, 0.5].map((delay, i) => (
              <div
                key={i}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "white",
                  animation: `thinkingDot 1.4s ease-in-out ${delay}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
