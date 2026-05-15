"use client";

import { useEffect, useRef, useCallback } from "react";

const INSTRUMENTS = [
  {
    id: "c0",
    name: "Power Supply",
    img: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Power%20supply-GnbhcZtaC99c5rRP3tWGw7AKeQy3Qa.png",
    emoji: "⚡",
  },
  {
    id: "c1",
    name: "Oscilloscope",
    img: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Oscilloscope-izPvPwNtwdyrRkQ0J50yQCAlyA0zMz.png",
    emoji: "📡",
  },
  {
    id: "c2",
    name: "Phase Noise",
    img: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/phase%20noise%20instrument-NzHm7c6vSJyV5O3fNHSG24XwRwt68k.png",
    emoji: "🔬",
  },
  {
    id: "c3",
    name: "VNA",
    img: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/VNA-H6hx3tz2aH06Fjx5D8yxseu6BXxInA.png",
    emoji: "📊",
  },
];

export default function ConnectInstruments() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const completionCardRef = useRef<HTMLDivElement>(null);
  const completionPillRef = useRef<HTMLDivElement>(null);
  const completionCheckRef = useRef<HTMLDivElement>(null);
  const completionTitleRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const after = useCallback((ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
  }, []);

  const getCardPos = useCallback((idx: number) => {
    if (!sceneRef.current || !cardRefs.current[idx]) return { top: 0, left: 0 };
    const sr = sceneRef.current.getBoundingClientRect();
    const cr = cardRefs.current[idx]!.getBoundingClientRect();
    return {
      top: cr.top - sr.top + cr.height / 2,
      left: cr.left - sr.left + cr.width / 2 - 10,
    };
  }, []);

  const moveTo = useCallback(
    (top: number, left: number, cb: () => void) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.top = `${top}px`;
      cursorRef.current.style.left = `${left}px`;
      after(380, cb);
    },
    [after]
  );

  const click = useCallback(
    (cb: () => void) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = "scale(0.8)";
      after(150, () => {
        if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
        cb();
      });
    },
    [after]
  );

  const addToRail = useCallback((inst: (typeof INSTRUMENTS)[0]) => {
    if (!railRef.current) return;
    railRef.current.querySelectorAll(".rail-btn").forEach((b) => {
      (b as HTMLElement).style.background = "#fff";
      (b as HTMLElement).style.borderColor = "#e4e4e7";
      (b as HTMLElement).style.transform = "scale(1)";
      (b as HTMLElement).style.boxShadow = "none";
    });

    const btn = document.createElement("div");
    btn.className = "rail-btn";
    btn.style.cssText = `
      width:40px;height:40px;border-radius:10px;
      border:1px solid #18181b;background:#18181b;
      display:flex;align-items:center;justify-content:center;
      overflow:hidden;flex-shrink:0;
      opacity:0;transform:scale(0.6);
      transition:all 0.35s cubic-bezier(.34,1.4,.64,1);
      box-shadow:0 4px 10px rgba(0,0,0,0.2);
    `;

    const img = document.createElement("img");
    img.src = inst.img;
    img.alt = inst.name;
    img.style.cssText = "width:26px;height:26px;object-fit:contain;filter:invert(1);";
    btn.appendChild(img);

    const addBtn = railRef.current.querySelector(".rail-add");
    railRef.current.insertBefore(btn, addBtn);

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        btn.style.opacity = "1";
        btn.style.transform = "scale(1.08)";
        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 300);
      })
    );
  }, []);

  const selectCard = useCallback(
    (idx: number, cb: () => void) => {
      const card = cardRefs.current[idx];
      if (!card) return;
      const pos = getCardPos(idx);
      moveTo(pos.top, pos.left, () => {
        card.style.background = "#fff";
        card.style.borderColor = "#d4d4d8";
        card.style.boxShadow = "0 6px 20px rgba(0,0,0,0.09)";
        card.style.transform = "translateY(-4px)";
        const sublabel = card.querySelector(".sublabel") as HTMLElement | null;
        if (sublabel) sublabel.style.opacity = "1";

        after(260, () => {
          click(() => {
            card.style.transform = "translateY(0)";
            card.style.borderColor = "#09090b";
            card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
            addToRail(INSTRUMENTS[idx]);
            after(360, cb);
          });
        });
      });
    },
    [addToRail, after, click, getCardPos, moveTo]
  );

  const showCards = useCallback(
    (cb: () => void) => {
      cardRefs.current.forEach((card, i) => {
        after(i * 90, () => {
          if (card) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition =
              "opacity 0.35s cubic-bezier(.34,1.4,.64,1), transform 0.35s cubic-bezier(.34,1.4,.64,1), background 0.3s, border-color 0.3s, box-shadow 0.3s";
          }
          if (i === cardRefs.current.length - 1) after(220, cb);
        });
      });
    },
    [after]
  );

  const runCompletion = useCallback((onDone: () => void) => {
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (dialogRef.current) {
      dialogRef.current.style.opacity = "0.18";
      dialogRef.current.style.transform = "translateY(96px) scale(0.7)";
      dialogRef.current.style.transition =
        "opacity 0.4s ease, transform 0.5s cubic-bezier(.34,1.2,.64,1)";
    }

    after(120, () => {
      if (completionCardRef.current) {
        completionCardRef.current.style.opacity = "1";
        completionCardRef.current.style.transform = "translateX(-50%) translateY(0) scale(1)";
      }
    });

    after(340, () => {
      if (completionCheckRef.current) {
        completionCheckRef.current.style.opacity = "1";
        completionCheckRef.current.style.transform = "scale(1)";
      }
    });

    after(520, () => {
      if (completionTitleRef.current) {
        completionTitleRef.current.style.opacity = "1";
        completionTitleRef.current.style.transform = "translateY(0)";
      }
    });

    after(780, () => {
      if (completionPillRef.current) {
        completionPillRef.current.style.opacity = "1";
        completionPillRef.current.style.transform = "translateY(0) scale(1)";
      }
    });

    after(2100, onDone);
  }, [after]);

  const runSequence = useCallback(() => {
    if (!cursorRef.current) return;
    if (completionCardRef.current) {
      completionCardRef.current.style.opacity = "0";
      completionCardRef.current.style.transform = "translateX(-50%) translateY(8px) scale(0.97)";
    }
    if (completionCheckRef.current) {
      completionCheckRef.current.style.opacity = "0";
      completionCheckRef.current.style.transform = "scale(0.4)";
    }
    if (completionTitleRef.current) {
      completionTitleRef.current.style.opacity = "0";
      completionTitleRef.current.style.transform = "translateY(8px)";
    }
    if (completionPillRef.current) {
      completionPillRef.current.style.opacity = "0";
      completionPillRef.current.style.transform = "translateY(10px) scale(0.95)";
    }
    if (dialogRef.current) {
      dialogRef.current.style.opacity = "0";
      dialogRef.current.style.transform = "translateY(10px) scale(0.97)";
      dialogRef.current.style.transition =
        "opacity 0.35s cubic-bezier(.34,1.4,.64,1), transform 0.35s cubic-bezier(.34,1.4,.64,1)";
    }
    cursorRef.current.style.opacity = "1";
    after(120, () => {
      if (dialogRef.current) {
        dialogRef.current.style.opacity = "1";
        dialogRef.current.style.transform = "translateY(0) scale(1)";
      }
    });
    after(280, () => {
      showCards(() => {
        selectCard(0, () =>
          after(280, () =>
            selectCard(1, () =>
              after(280, () =>
                selectCard(2, () =>
                  after(280, () => selectCard(3, () => runCompletion(reset)))
                )
              )
            )
          )
        );
      });
    });
  }, [showCards, selectCard, runCompletion, after]); // eslint-disable-line react-hooks/exhaustive-deps

  const reset = useCallback(() => {
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (dialogRef.current) {
      dialogRef.current.style.opacity = "0";
      dialogRef.current.style.transform = "translateY(10px) scale(0.97)";
    }
    if (completionCardRef.current) {
      completionCardRef.current.style.opacity = "0";
      completionCardRef.current.style.transform = "translateX(-50%) translateY(8px) scale(0.97)";
    }
    if (completionCheckRef.current) {
      completionCheckRef.current.style.opacity = "0";
      completionCheckRef.current.style.transform = "scale(0.4)";
    }
    if (completionTitleRef.current) {
      completionTitleRef.current.style.opacity = "0";
      completionTitleRef.current.style.transform = "translateY(8px)";
    }
    if (completionPillRef.current) {
      completionPillRef.current.style.opacity = "0";
      completionPillRef.current.style.transform = "translateY(10px) scale(0.95)";
    }
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.style.opacity = "0";
      card.style.transform = "translateY(8px)";
      card.style.transition = "none";
      card.style.background = "rgba(250,250,250,0.5)";
      card.style.borderColor = "#e4e4e7";
      card.style.boxShadow = "none";
      const sublabel = card.querySelector(".sublabel") as HTMLElement | null;
      if (sublabel) sublabel.style.opacity = "0";
    });
    if (railRef.current) {
      railRef.current.querySelectorAll(".rail-btn").forEach((b) => b.remove());
    }
    after(140, runSequence);
  }, [after, runSequence]);

  useEffect(() => {
    const t = setTimeout(runSequence, 500);
    return () => {
      clearTimeout(t);
      timeouts.current.forEach(clearTimeout);
    };
  }, [runSequence]);

  return (
    <div
      ref={sceneRef}
      className="relative overflow-hidden rounded-2xl bg-[#f0f0f0] flex items-center justify-center"
      style={{ height: 380, padding: "28px 20px", fontFamily: "Inter, sans-serif" }}
    >
      <div
        ref={dialogRef}
        className="flex w-full bg-white rounded-2xl overflow-hidden border border-zinc-200"
        style={{
          maxWidth: 400,
          height: "100%",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          opacity: 0,
          transform: "translateY(10px) scale(0.97)",
        }}
      >
        <div
          ref={railRef}
          className="flex flex-col items-center py-3 gap-1 border-r border-gray-100 bg-white/50"
          style={{ width: 64, flexShrink: 0 }}
        >
          <div
            className="rail-add flex items-center justify-center text-gray-400 font-light"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "2px dashed #d1d5db",
              fontSize: 18,
              marginTop: 2,
            }}
          >
            +
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <div
            className="flex items-center justify-between border-b border-gray-100 flex-shrink-0"
            style={{ padding: "12px 14px 10px" }}
          >
            <span className="text-[13px] font-semibold text-zinc-950">Choose Instrument Type</span>
            <div
              className="flex items-center justify-center text-zinc-400 bg-zinc-100 rounded-md text-[11px]"
              style={{ width: 20, height: 20 }}
            >
              ✕
            </div>
          </div>

          <div
            className="grid overflow-hidden flex-1"
            style={{ gridTemplateColumns: "1fr 1fr", gap: 8, padding: 10 }}
          >
            {INSTRUMENTS.map((inst, i) => (
              <div
                key={inst.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="flex flex-col items-center cursor-default"
                style={{
                  borderRadius: 12,
                  padding: 10,
                  border: "1px solid #e4e4e7",
                  background: "rgba(250,250,250,0.5)",
                  gap: 6,
                  opacity: 0,
                  transform: "translateY(8px)",
                }}
              >
                <div
                  className="flex items-center justify-center w-full"
                  style={{
                    height: 56,
                    borderRadius: 8,
                    background: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
                    border: "1px solid #e4e4e7",
                    padding: 8,
                  }}
                >
                  <img
                    src={inst.img}
                    alt={inst.name}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <div className="text-[11px] font-semibold text-zinc-900 text-center">{inst.name}</div>
                <div
                  className="sublabel text-[9px] font-bold uppercase text-zinc-400"
                  style={{ letterSpacing: "0.1em", opacity: 0, transition: "opacity 0.2s" }}
                >
                  Select
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={cursorRef}
        className="absolute pointer-events-none z-20"
        style={{
          top: 180,
          left: 80,
          opacity: 0,
          width: 18,
          height: 18,
          transition:
            "top 0.45s cubic-bezier(.4,0,.2,1), left 0.45s cubic-bezier(.4,0,.2,1), transform 0.2s ease, opacity 0.3s",
        }}
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          style={{ width: 18, height: 18, filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))" }}
        >
          <path d="M4 2L16 10L10 11.5L7.5 18L4 2Z" fill="#09090b" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div
        ref={completionCardRef}
        className="absolute left-1/2 -translate-x-1/2 top-8 z-30 rounded-3xl bg-white border border-zinc-200 w-[86%] max-w-[340px]"
        style={{
          opacity: 0,
          transform: "translateX(-50%) translateY(8px) scale(0.97)",
          transition: "opacity 0.35s ease, transform 0.45s cubic-bezier(.34,1.2,.64,1)",
          boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
          padding: "14px 14px 12px",
        }}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg">✦</div>
          <div className="h-[2px] w-12 bg-zinc-200 border-dotted border-t border-zinc-300" />
          <div
            ref={completionCheckRef}
            className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold"
            style={{
              opacity: 0,
              transform: "scale(0.4)",
              transition: "opacity 0.25s ease, transform 0.35s cubic-bezier(.34,1.4,.64,1)",
            }}
          >
            ✓
          </div>
          <div className="h-[2px] w-12 bg-zinc-200 border-dotted border-t border-zinc-300" />
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg">✚</div>
        </div>

        <div
          ref={completionTitleRef}
          className="mt-4 text-center text-[22px] font-semibold tracking-[-0.02em] text-zinc-900"
          style={{
            opacity: 0,
            transform: "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.35s ease",
          }}
        >
          Your Instruments are connected!
        </div>

        <div className="mt-3 h-3 w-full rounded-full bg-zinc-100" />
        <div className="mt-2.5 mx-auto h-3 w-1/3 rounded-full bg-zinc-100" />
      </div>

      <div
        ref={completionPillRef}
        className="absolute bottom-5 z-30 rounded-full bg-black text-white flex items-center gap-3"
        style={{
          opacity: 0,
          transform: "translateY(10px) scale(0.95)",
          transition: "opacity 0.35s ease, transform 0.45s cubic-bezier(.34,1.2,.64,1)",
          padding: "10px 18px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.24)",
        }}
      >
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">✦</div>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-base font-bold">✓</div>
        </div>
        <span className="text-lg font-medium tracking-tight">Setup complete</span>
      </div>
    </div>
  );
}
