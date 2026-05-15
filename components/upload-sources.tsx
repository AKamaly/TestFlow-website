"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useCallback } from "react";

const PDF_ICON = (
  <div className="w-8 h-8 flex-shrink-0">
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="7" fill="#ef4444" />
      <path
        d="M9 7h10l6 6v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
        fill="white"
        opacity="0.15"
      />
      <path d="M19 7l6 6h-4a2 2 0 0 1-2-2V7z" fill="white" opacity="0.3" />
      <text
        x="6"
        y="24"
        fontFamily="Inter, sans-serif"
        fontSize="7.5"
        fontWeight="700"
        fill="white"
        letterSpacing="0.5"
      >
        PDF
      </text>
    </svg>
  </div>
);

const SOURCES = [
  {
    icon: PDF_ICON,
    name: "TLE4971_datasheet.pdf",
    sub: "PDF · 2.4 MB",
  },
  {
    icon: (
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-xl leading-none">
        📋
      </div>
    ),
    name: "VI_sweep_testspec.xlsx",
    sub: "Spreadsheet · 340 KB",
  },
  {
    icon: (
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-xl leading-none">
        🌐
      </div>
    ),
    name: "https://infineon.com/tle4971",
    sub: "URL · Product page",
  },
];

type SourceItem = {
  icon: ReactNode;
  name: string;
  sub: string;
  visible?: boolean;
};

export default function UploadSources() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const addBtnRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  const animating = useRef(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const after = useCallback((ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
  }, []);

  const getAddBtnPos = useCallback(() => {
    if (!sceneRef.current || !addBtnRef.current) return { top: 0, left: 0 };
    const sr = sceneRef.current.getBoundingClientRect();
    const br = addBtnRef.current.getBoundingClientRect();
    return {
      top: br.top - sr.top + br.height / 2 - 4,
      left: br.left - sr.left + 36,
    };
  }, []);

  const moveCursor = useCallback(
    (top: number, left: number, cb: () => void) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.top = `${top}px`;
      cursorRef.current.style.left = `${left}px`;
      after(440, cb);
    },
    [after]
  );

  const clickEffect = useCallback(
    (cb: () => void) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = "scale(0.82)";
      after(150, () => {
        if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
        cb();
      });
    },
    [after]
  );

  const addSourceItem = useCallback(
    (idx: number, cb: () => void) => {
      const pos = getAddBtnPos();
      moveCursor(pos.top, pos.left, () => {
        if (addBtnRef.current) {
          addBtnRef.current.dataset.hovered = "true";
          addBtnRef.current.style.borderColor = "#09090b";
          addBtnRef.current.style.color = "#09090b";
          addBtnRef.current.style.backgroundColor = "#f4f4f5";
        }
        after(220, () => {
          clickEffect(() => {
            if (addBtnRef.current) {
              addBtnRef.current.style.borderColor = "";
              addBtnRef.current.style.color = "";
              addBtnRef.current.style.backgroundColor = "";
            }

            if (listRef.current) {
              const item = document.createElement("div");
              item.style.cssText = `
                background: #fff;
                border: 1px solid #e4e4e7;
                border-radius: 10px;
                padding: 10px 14px;
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
                opacity: 0;
                transform: translateY(8px);
                transition: opacity 0.4s cubic-bezier(.34,1.4,.64,1), transform 0.4s cubic-bezier(.34,1.4,.64,1);
              `;

              const src: SourceItem = SOURCES[idx];
              const nameEl = document.createElement("div");
              nameEl.style.cssText = "font-size:13px;font-weight:500;color:#09090b;";
              nameEl.textContent = src.name;
              const subEl = document.createElement("div");
              subEl.style.cssText = "font-size:10px;color:#71717a;margin-top:1px;";
              subEl.textContent = src.sub;
              const textWrap = document.createElement("div");
              textWrap.appendChild(nameEl);
              textWrap.appendChild(subEl);

              const iconWrap = document.createElement("div");
              iconWrap.style.cssText = "flex-shrink:0;";

              if (idx === 0) {
                iconWrap.innerHTML = `<div style="width:32px;height:32px;flex-shrink:0;"><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:32px;height:32px;"><rect width="32" height="32" rx="7" fill="#ef4444"/><path d="M9 7h10l6 6v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" fill="white" opacity="0.15"/><path d="M19 7l6 6h-4a2 2 0 0 1-2-2V7z" fill="white" opacity="0.3"/><text x="6" y="24" font-family="Inter,sans-serif" font-size="7.5" font-weight="700" fill="white" letter-spacing="0.5">PDF</text></svg></div>`;
              } else if (idx === 1) {
                iconWrap.innerHTML = `<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:20px;line-height:1;">📋</div>`;
              } else {
                iconWrap.innerHTML = `<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:20px;line-height:1;">🌐</div>`;
              }

              item.appendChild(iconWrap);
              item.appendChild(textWrap);
              listRef.current.appendChild(item);

              requestAnimationFrame(() =>
                requestAnimationFrame(() => {
                  item.style.opacity = "1";
                  item.style.transform = "translateY(0)";
                })
              );
            }

            const dot = dotsRef.current[idx];
            after(220, () => {
              if (dot) {
                dot.style.background = "#09090b";
                dot.style.borderColor = "#09090b";
                const check = dot.querySelector("svg") as SVGElement | null;
                if (check) check.style.opacity = "1";
              }
            });

            after(520, cb);
          });
        });
      });
    },
    [after, clickEffect, getAddBtnPos, moveCursor]
  );

  const runSequence = useCallback(() => {
    if (!cursorRef.current) return;
    cursorRef.current.style.opacity = "1";

    after(280, () => {
      addSourceItem(0, () => {
        after(420, () => {
          addSourceItem(1, () => {
            after(420, () => {
              addSourceItem(2, () => {
                after(1800, reset);
              });
            });
          });
        });
      });
    });
  }, [addSourceItem, after]); // eslint-disable-line react-hooks/exhaustive-deps

  const reset = useCallback(() => {
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (listRef.current) listRef.current.innerHTML = "";

    dotsRef.current.forEach((dot) => {
      if (!dot) return;
      dot.style.background = "transparent";
      dot.style.borderColor = "#d4d4d8";
      const check = dot.querySelector("svg") as SVGElement | null;
      if (check) check.style.opacity = "0";
    });

    if (addBtnRef.current) {
      addBtnRef.current.style.borderColor = "";
      addBtnRef.current.style.color = "";
      addBtnRef.current.style.backgroundColor = "";
    }

    after(600, runSequence);
  }, [after, runSequence]);

  useEffect(() => {
    const t = setTimeout(runSequence, 700);
    return () => {
      clearTimeout(t);
      timeouts.current.forEach(clearTimeout);
      animating.current = false;
    };
  }, [runSequence]);

  return (
    <div
      ref={sceneRef}
      className="relative overflow-hidden rounded-2xl bg-[#f0f0f0] flex flex-col items-center justify-center"
      style={{ minHeight: 380, padding: "28px 20px", fontFamily: "Inter, sans-serif" }}
    >
      <div
        className="relative z-10 w-full rounded-2xl bg-white border border-zinc-200 shadow-md"
        style={{ maxWidth: 400, padding: 24 }}
        id="upload-card"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-zinc-950">Sources</h3>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  dotsRef.current[i] = el;
                }}
                className="w-[22px] h-[22px] rounded-full border-[1.5px] border-zinc-300 flex items-center justify-center transition-all duration-300"
                style={{ background: "transparent" }}
              >
                <svg
                  viewBox="0 0 12 10"
                  className="w-[10px] h-[10px]"
                  style={{
                    opacity: 0,
                    transition: "opacity 0.3s",
                    stroke: "white",
                    fill: "none",
                    strokeWidth: 2.5,
                  }}
                >
                  <polyline points="1,5 4,8 11,1" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div ref={listRef} />

        <div
          ref={addBtnRef}
          className="flex items-center gap-2 rounded-xl text-sm text-zinc-400 transition-all duration-300 cursor-default"
          style={{
            border: "1.5px dashed #d4d4d8",
            padding: "10px 14px",
            background: "transparent",
          }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-sm font-light flex-shrink-0"
            style={{ border: "1.5px solid currentColor" }}
          >
            +
          </div>
          <span>Add source</span>
        </div>
      </div>

      <div
        ref={cursorRef}
        className="absolute pointer-events-none z-20"
        style={{
          top: 180,
          left: 120,
          opacity: 0,
          width: 20,
          height: 20,
          transition:
            "top 0.5s cubic-bezier(.4,0,.2,1), left 0.5s cubic-bezier(.4,0,.2,1), transform 0.2s ease, opacity 0.3s",
        }}
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          style={{ width: 20, height: 20, filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}
        >
          <path d="M4 2L16 10L10 11.5L7.5 18L4 2Z" fill="#09090b" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
