"use client";

import { useEffect, useRef, useCallback } from "react";

const TERM_LINES = [
  { cls: "text-blue-400", text: "[INFO] Connecting to instruments..." },
  { cls: "text-green-400", text: "[OK] Power Supply :: KEYSIGHT E3631A" },
  { cls: "text-green-400", text: "[OK] Oscilloscope :: R&S MXO54" },
  { cls: "text-blue-400", text: "[INFO] Starting Loop iteration 1/5" },
  { cls: "text-zinc-200", text: ">> :OUTP ON" },
  { cls: "text-purple-400", text: "<< OUTP: ON" },
  { cls: "text-zinc-200", text: ">> :VOLT 1.0" },
  { cls: "text-zinc-200", text: ">> :RUN" },
  { cls: "text-purple-400", text: "<< WAV: 0.998V @ 10ms" },
  { cls: "text-blue-400", text: "[INFO] Loop iteration 2/5" },
  { cls: "text-zinc-200", text: ">> :VOLT 2.0" },
  { cls: "text-purple-400", text: "<< WAV: 1.997V @ 10ms" },
  { cls: "text-blue-400", text: "[INFO] Loop iteration 3/5" },
  { cls: "text-zinc-200", text: ">> :VOLT 3.0" },
  { cls: "text-purple-400", text: "<< WAV: 2.995V @ 10ms" },
  { cls: "text-blue-400", text: "[INFO] Loop iteration 4/5" },
  { cls: "text-zinc-200", text: ">> :VOLT 4.0" },
  { cls: "text-purple-400", text: "<< WAV: 3.994V @ 10ms" },
  { cls: "text-blue-400", text: "[INFO] Loop iteration 5/5" },
  { cls: "text-zinc-200", text: ">> :VOLT 5.0" },
  { cls: "text-purple-400", text: "<< WAV: 4.991V @ 10ms" },
  { cls: "text-zinc-200", text: ">> :OUTP OFF" },
  { cls: "text-green-400", text: "[OK] Saving measurements to CSV..." },
  { cls: "text-green-400", text: "[OK] Exporting waveform images..." },
  { cls: "text-green-400", text: "[OK] Generating PDF report..." },
  { cls: "text-green-400", text: "[DONE] Execution complete · 5/5 passed" },
];

const CSV_ICON = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#16a34a" />
    <text x="2" y="13" fontFamily="Inter,sans-serif" fontSize="6.5" fontWeight="700" fill="white">
      CSV
    </text>
  </svg>
);

const IMG_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 11,15 8,12 3,17" />
  </svg>
);

const PDF_ICON = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#ef4444" />
    <path
      d="M5 4h6l4 4v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
      fill="white"
      opacity="0.15"
    />
    <path d="M11 4l4 4h-3a1 1 0 0 1-1-1V4z" fill="white" opacity="0.3" />
    <text x="3" y="15" fontFamily="Inter,sans-serif" fontSize="4.5" fontWeight="700" fill="white">
      PDF
    </text>
  </svg>
);

const FILES = [
  { id: "fc0", icon: CSV_ICON, label: "vi_sweep.csv" },
  { id: "fc1", icon: IMG_ICON, label: "waveforms.png" },
  { id: "fc2", icon: PDF_ICON, label: "report.pdf" },
];

export default function ExecuteInLab() {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const progressWrapRef = useRef<HTMLDivElement>(null);
  const termWrapRef = useRef<HTMLDivElement>(null);
  const termBodyRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressPctRef = useRef<HTMLSpanElement>(null);
  const progressLabelRef = useRef<HTMLSpanElement>(null);
  const statusDotRef = useRef<HTMLDivElement>(null);
  const headerLabelRef = useRef<HTMLSpanElement>(null);
  const runBtnRef = useRef<HTMLDivElement>(null);
  const resultsBoxRef = useRef<HTMLDivElement>(null);
  const fileChipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentPct = useRef(0);

  const after = useCallback((ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
  }, []);

  const updateProgress = useCallback((pct: number) => {
    if (progressFillRef.current) progressFillRef.current.style.width = `${pct}%`;
    if (progressPctRef.current) progressPctRef.current.textContent = `${Math.round(pct)}%`;
    if (progressLabelRef.current) {
      if (pct < 30) progressLabelRef.current.textContent = "Connecting instruments...";
      else if (pct < 70) progressLabelRef.current.textContent = "Running sweep iterations...";
      else if (pct < 99) progressLabelRef.current.textContent = "Exporting data...";
      else progressLabelRef.current.textContent = "Complete";
    }
  }, []);

  const addTermLine = useCallback((cls: string, text: string) => {
    if (!termBodyRef.current) return;
    const line = document.createElement("span");
    line.className = `block whitespace-nowrap text-[9px] leading-[1.7] font-mono ${cls}`;
    line.style.cssText = "opacity:0;animation:termLine 0.22s ease forwards;";
    line.textContent = text;
    termBodyRef.current.appendChild(line);
    termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
  }, []);

  const reset = useCallback(() => {
    if (progressTimer.current) clearInterval(progressTimer.current);
    if (cardRef.current) {
      cardRef.current.style.opacity = "0";
      cardRef.current.style.transition = "opacity 0.4s";
    }
    after(400, () => {
      [cardRef, headerRef, progressWrapRef, termWrapRef].forEach((r) => {
        if (r.current) {
          r.current.style.opacity = "0";
          r.current.style.animation = "";
        }
      });
      if (resultsBoxRef.current) {
        resultsBoxRef.current.style.opacity = "0";
        resultsBoxRef.current.style.animation = "";
      }
      fileChipRefs.current.forEach((c) => {
        if (c) {
          c.style.opacity = "0";
          c.style.animation = "";
        }
      });
      if (progressFillRef.current) progressFillRef.current.style.width = "0%";
      if (progressPctRef.current) progressPctRef.current.textContent = "0%";
      if (progressLabelRef.current) progressLabelRef.current.textContent = "Ready to run";
      if (termBodyRef.current) termBodyRef.current.innerHTML = "";
      if (statusDotRef.current) {
        statusDotRef.current.style.background = "#d4d4d8";
        statusDotRef.current.style.animation = "none";
      }
      if (headerLabelRef.current) headerLabelRef.current.textContent = "VI Sweep Test";
      if (runBtnRef.current)
        runBtnRef.current.innerHTML =
          '<svg viewBox="0 0 24 24" style="width:9px;height:9px;fill:white;"><polygon points="5,3 19,12 5,21"/></svg> Run';
      after(300, revealStart);
    });
  }, [after]);

  const showResults = useCallback(() => {
    if (statusDotRef.current) {
      statusDotRef.current.style.background = "#22c55e";
      statusDotRef.current.style.animation = "none";
    }
    if (headerLabelRef.current) headerLabelRef.current.textContent = "VI Sweep Test · Done";
    if (runBtnRef.current)
      runBtnRef.current.innerHTML =
        '<svg viewBox="0 0 10 8" style="width:9px;height:9px;stroke:white;fill:none;stroke-width:2.5;"><polyline points="1,4 3.5,6.5 9,1"/></svg> Done';

    if (resultsBoxRef.current) {
      resultsBoxRef.current.style.cssText = "animation: resultsReveal 0.5s cubic-bezier(.22,1.2,.36,1) forwards;";
    }
    fileChipRefs.current.forEach((chip, i) => {
      after(280 + i * 130, () => {
        if (chip) chip.style.cssText = "animation: fileReveal 0.45s cubic-bezier(.22,1.4,.36,1) forwards;";
      });
    });
    after(3800, reset);
  }, [after, reset]);

  const startExecution = useCallback(() => {
    if (statusDotRef.current) {
      statusDotRef.current.style.background = "#f59e0b";
      statusDotRef.current.style.animation = "pulse-dot 1s infinite";
    }
    if (headerLabelRef.current) headerLabelRef.current.textContent = "Executing...";

    currentPct.current = 0;
    const totalTime = TERM_LINES.length * 220;
    const interval = 80;
    progressTimer.current = setInterval(() => {
      currentPct.current = Math.min(currentPct.current + 100 / (totalTime / interval), 99);
      updateProgress(currentPct.current);
    }, interval);

    TERM_LINES.forEach((line, i) => {
      after(i * 220, () => {
        addTermLine(line.cls, line.text);
        if (i === TERM_LINES.length - 1) {
          if (progressTimer.current) clearInterval(progressTimer.current);
          after(200, () => {
            updateProgress(100);
            after(400, showResults);
          });
        }
      });
    });
  }, [addTermLine, after, showResults, updateProgress]);

  const clickRun = useCallback(() => {
    const btn = runBtnRef.current;
    if (!btn) return;
    btn.style.transform = "scale(0.97)";
    btn.style.background = "#374151";
    after(200, () => {
      if (btn) {
        btn.style.transform = "";
        btn.style.background = "#09090b";
      }
      if (btn)
        btn.innerHTML =
          '<svg viewBox="0 0 24 24" style="width:9px;height:9px;animation:spin 1s linear infinite;"><path d="M12 2a10 10 0 1 0 10 10" stroke="white" stroke-width="2" fill="none"/></svg> Running';
      startExecution();
    });
  }, [after, startExecution]);

  const revealStart = useCallback(() => {
    const applyReveal = (el: HTMLElement | null, anim: string) => {
      if (!el) return;
      el.style.animation = anim;
    };
    applyReveal(cardRef.current, "cardReveal 0.55s cubic-bezier(.22,1.2,.36,1) forwards");
    applyReveal(headerRef.current, "slideDown 0.4s ease forwards 0.35s");
    applyReveal(progressWrapRef.current, "slideRight 0.4s ease forwards 0.55s");
    applyReveal(termWrapRef.current, "termReveal 0.5s cubic-bezier(.22,1.2,.36,1) forwards 0.75s");
    after(1400, clickRun);
  }, [after, clickRun]);

  useEffect(() => {
    const t = setTimeout(revealStart, 300);
    return () => {
      clearTimeout(t);
      timeouts.current.forEach(clearTimeout);
      if (progressTimer.current) clearInterval(progressTimer.current);
    };
  }, [revealStart]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#f0f0f0] flex flex-col items-center justify-center"
      style={{ height: 380, padding: 20, fontFamily: "Inter, sans-serif" }}
    >
      <style>{`
        @keyframes cardReveal { from{opacity:0;transform:translateY(20px) scale(0.96);} to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-8px);} to{opacity:1;transform:translateY(0);} }
        @keyframes slideRight { from{opacity:0;transform:translateX(-10px);} to{opacity:1;transform:translateX(0);} }
        @keyframes termReveal { from{opacity:0;transform:scaleY(0.85);transform-origin:top;} to{opacity:1;transform:scaleY(1);} }
        @keyframes termLine { from{opacity:0;transform:translateX(-4px);} to{opacity:1;transform:translateX(0);} }
        @keyframes resultsReveal { from{opacity:0;transform:translateY(12px) scale(0.97);} to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes fileReveal { from{opacity:0;transform:translateY(10px) scale(0.88);} to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes pulse-dot { 0%,100%{opacity:0.3;} 50%{opacity:1;} }
        @keyframes spin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div
        ref={cardRef}
        className="bg-white border border-zinc-200 rounded-2xl w-full flex flex-col overflow-hidden relative z-10"
        style={{ maxWidth: 440, height: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", opacity: 0 }}
      >
        <div ref={headerRef} className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-100 flex-shrink-0" style={{ opacity: 0 }}>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-zinc-900">
            <div ref={statusDotRef} className="w-[7px] h-[7px] rounded-full" style={{ background: "#d4d4d8" }} />
            <span ref={headerLabelRef}>VI Sweep Test</span>
          </div>
          <div
            ref={runBtnRef}
            className="flex items-center gap-1 px-3 py-[5px] rounded-lg text-[11px] font-medium text-white cursor-default"
            style={{ background: "#09090b", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", transition: "all 0.2s" }}
          >
            <svg viewBox="0 0 24 24" style={{ width: 9, height: 9, fill: "white" }}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
            Run
          </div>
        </div>

        <div ref={progressWrapRef} className="flex-shrink-0" style={{ padding: "10px 14px 8px", opacity: 0 }}>
          <div className="flex justify-between items-center mb-1">
            <span ref={progressLabelRef} className="text-[10px] text-zinc-400">
              Ready to run
            </span>
            <span ref={progressPctRef} className="text-[10px] font-semibold text-zinc-900">
              0%
            </span>
          </div>
          <div className="h-[5px] bg-zinc-100 rounded-full overflow-hidden w-[94%]">
            <div
              ref={progressFillRef}
              className="h-full rounded-full"
              style={{ width: "0%", background: "linear-gradient(90deg,#09090b,#374151)", transition: "width 0.3s ease" }}
            />
          </div>
        </div>

        <div ref={termWrapRef} className="flex-1 overflow-hidden rounded-lg mx-2.5 mb-2" style={{ background: "#09090b", opacity: 0 }}>
          <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-zinc-800">
            {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
              <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
            ))}
            <span className="text-[9px] text-zinc-600 ml-0.5 font-mono">execution_log</span>
          </div>
          <div ref={termBodyRef} className="px-2.5 py-1.5 overflow-hidden" style={{ height: "calc(100% - 26px)", fontFamily: "'JetBrains Mono', monospace" }} />
        </div>

        <div
          ref={resultsBoxRef}
          className="mx-2.5 mb-2.5 border border-zinc-200 rounded-xl p-2.5 bg-zinc-50 flex-shrink-0"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-1 text-[10px] font-semibold text-zinc-900 mb-2">
            <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center">
              <svg viewBox="0 0 10 8" className="w-2 h-2" style={{ stroke: "white", fill: "none", strokeWidth: 2.5 }}>
                <polyline points="1,4 3.5,6.5 9,1" />
              </svg>
            </div>
            All measurements captured · 5 iterations
          </div>
          <div className="flex gap-1.5">
            {FILES.map((file, i) => (
              <div
                key={file.id}
                ref={(el) => {
                  fileChipRefs.current[i] = el;
                }}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-zinc-200 text-[10px] font-medium text-zinc-900"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)", opacity: 0 }}
              >
                {file.icon}
                {file.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
