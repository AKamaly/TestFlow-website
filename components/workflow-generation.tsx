"use client";

import { useEffect, useRef, useCallback } from "react";

const CODE_LINES = [
  { text: "#START_SCRIPT", color: "text-gray-500", indent: 0 },
  { text: "Loop_start(1): 10 (N1)", color: "text-purple-600", indent: 0 },
  { text: "#NODE1 (Power Supply, 2280S-32-6, Keithley)", color: "text-gray-500", indent: 0 },
  { text: "INST:: powersupply123", color: "text-blue-600", indent: 1 },
  { text: "#ACTION: (Wait,Wait)", color: "text-gray-500", indent: 1 },
  { text: "CMD: wait(100)", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Turn_On,Turn_On)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :OUTP ON", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Turn_Off,Turn_Off)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :OUTP OFF", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Read_State,Read_State)", color: "text-gray-500", indent: 1 },
  { text: "QRY: :OUTPut:STATe?", color: "text-green-600", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Set_slew_rate_rise,Set_slew_rate_rise)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :VOLT:SLEW:RISe 10", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Set_slew_rate_fall,Set_slew_rate_fall)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :VOLT:SLEW:FALL 20", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Set_Current,Set_current)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :CURR 30", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Set_Voltage,Set_voltage)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :VOLT 5.0", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Measure_Voltage,Measure_Voltage)", color: "text-gray-500", indent: 1 },
  { text: "QRY: :MEAS:VOLT?", color: "text-green-600", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#END_NODE1", color: "text-gray-500", indent: 0 },
  { text: "#NODE2 (Oscilloscope, MXO54, R&S)", color: "text-gray-500", indent: 0 },
  { text: "INST:: oscilloscope456", color: "text-blue-600", indent: 1 },
  { text: "#ACTION: (Capture,Capture)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :RUN", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Set_Timebase,Set_Timebase)", color: "text-gray-500", indent: 1 },
  { text: "CMD: :TIM:SCAL 0.001", color: "text-orange-500", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#ACTION: (Read_Waveform,Read_Waveform)", color: "text-gray-500", indent: 1 },
  { text: "QRY: :WAVeform:DATA?", color: "text-green-600", indent: 2 },
  { text: "#END_ACTION", color: "text-gray-500", indent: 1 },
  { text: "#END_NODE2", color: "text-gray-500", indent: 0 },
  { text: "Loop_end(1)", color: "text-purple-600", indent: 0 },
  { text: "#END_SCRIPT", color: "text-gray-500", indent: 0 },
];

const NODES = [
  {
    id: "n0",
    label: "Loop",
    sub: "",
    badge: "Logic · 5x",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    id: "n1",
    label: "Power Supply",
    sub: "Keysight E3631A",
    badge: "Instrument",
    img: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Power%20supply-GnbhcZtaC99c5rRP3tWGw7AKeQy3Qa.png",
  },
  {
    id: "n2",
    label: "Oscilloscope",
    sub: "R&S MXO54",
    badge: "Instrument",
    img: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Oscilloscope-izPvPwNtwdyrRkQ0J50yQCAlyA0zMz.png",
  },
  {
    id: "n3",
    label: "Delay",
    sub: "",
    badge: "500ms",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const PROMPT = "Generate a VI sweep validation workflow for TLE4971";
const DISPLAY_CODE_LINES = CODE_LINES.slice(0, 18);

export default function WorkflowGeneration() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const chatTextRef = useRef<HTMLDivElement>(null);
  const sendBtnRef = useRef<HTMLDivElement>(null);
  const thinkingRef = useRef<HTMLDivElement>(null);
  const wfPanelRef = useRef<HTMLDivElement>(null);
  const nodesViewRef = useRef<HTMLDivElement>(null);
  const scriptViewRef = useRef<HTMLDivElement>(null);
  const codeInnerRef = useRef<HTMLDivElement>(null);
  const codeScrollRef = useRef<HTMLDivElement>(null);
  const scriptHeaderRef = useRef<HTMLDivElement>(null);
  const scriptBodyRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const runBtnRef = useRef<HTMLDivElement>(null);
  const tabPlannerRef = useRef<HTMLDivElement>(null);
  const tabScriptRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const edgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollAnimRef = useRef<number | null>(null);
  const idxRef = useRef(0);
  const resetRef = useRef<() => void>(() => {});

  const after = useCallback((ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
  }, []);

  const setTabActive = useCallback((tab: "planner" | "script") => {
    if (!tabPlannerRef.current || !tabScriptRef.current) return;
    if (tab === "planner") {
      tabPlannerRef.current.style.background = "white";
      tabPlannerRef.current.style.color = "#09090b";
      tabPlannerRef.current.style.fontWeight = "500";
      tabPlannerRef.current.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
      tabScriptRef.current.style.background = "transparent";
      tabScriptRef.current.style.color = "#71717a";
      tabScriptRef.current.style.fontWeight = "400";
      tabScriptRef.current.style.boxShadow = "none";
    } else {
      tabScriptRef.current.style.background = "white";
      tabScriptRef.current.style.color = "#09090b";
      tabScriptRef.current.style.fontWeight = "500";
      tabScriptRef.current.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
      tabPlannerRef.current.style.background = "transparent";
      tabPlannerRef.current.style.color = "#71717a";
      tabPlannerRef.current.style.fontWeight = "400";
      tabPlannerRef.current.style.boxShadow = "none";
    }
  }, []);

  const startCodeScroll = useCallback(() => {
    const inner = codeInnerRef.current;
    const container = codeScrollRef.current;
    if (!inner || !container) return;
    inner.style.transform = "translateY(0)";
    const totalH = inner.scrollHeight;
    const visibleH = container.clientHeight;
    const scrollDist = Math.max(0, totalH - visibleH + 16);
    const duration = 2000;
    let start: number | null = null;

    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      if (inner) inner.style.transform = `translateY(-${progress * scrollDist}px)`;
      if (progress < 1) {
        scrollAnimRef.current = requestAnimationFrame(step);
      } else {
        setTimeout(() => resetRef.current(), 500);
      }
    }

    scrollAnimRef.current = requestAnimationFrame(step);
  }, []);

  const switchToScript = useCallback(() => {
    setTabActive("script");
    if (tabBarRef.current) {
      tabBarRef.current.style.opacity = "0";
      tabBarRef.current.style.transform = "translateY(-6px)";
    }
    if (runBtnRef.current) {
      runBtnRef.current.style.opacity = "0";
      runBtnRef.current.style.transform = "translateY(-6px)";
    }
    if (scriptViewRef.current) {
      scriptViewRef.current.style.display = "flex";
      scriptViewRef.current.style.opacity = "0";
      scriptViewRef.current.style.transform = "translateX(14px) scale(0.985)";
    }
    if (scriptHeaderRef.current) {
      scriptHeaderRef.current.style.opacity = "0";
      scriptHeaderRef.current.style.transform = "translateY(-6px)";
    }
    if (scriptBodyRef.current) {
      scriptBodyRef.current.style.opacity = "0";
      scriptBodyRef.current.style.transform = "translateY(8px)";
    }
    after(120, () => {
      if (nodesViewRef.current) {
        nodesViewRef.current.style.opacity = "0";
        nodesViewRef.current.style.transform = "translateY(6px) scale(0.985)";
      }
    });
    after(360, () => {
      if (nodesViewRef.current) nodesViewRef.current.style.display = "none";
      if (tabBarRef.current) {
        tabBarRef.current.style.opacity = "1";
        tabBarRef.current.style.transform = "translateY(0)";
      }
      if (runBtnRef.current) {
        runBtnRef.current.style.opacity = "1";
        runBtnRef.current.style.transform = "translateY(0)";
      }
    });
    after(500, () => {
      if (scriptViewRef.current) {
        scriptViewRef.current.style.opacity = "1";
        scriptViewRef.current.style.transform = "translateX(0) scale(1)";
      }
    });
    after(620, () => {
      if (scriptHeaderRef.current) {
        scriptHeaderRef.current.style.opacity = "1";
        scriptHeaderRef.current.style.transform = "translateY(0)";
      }
    });
    after(720, () => {
      if (scriptBodyRef.current) {
        scriptBodyRef.current.style.opacity = "1";
        scriptBodyRef.current.style.transform = "translateY(0)";
      }
      startCodeScroll();
    });
  }, [after, setTabActive, startCodeScroll]);

  const showNodes = useCallback(() => {
    if (thinkingRef.current) thinkingRef.current.style.opacity = "0";
    const panel = wfPanelRef.current;
    if (!panel) return;
    panel.style.display = "flex";
    after(20, () => {
      if (panel) panel.style.opacity = "1";
    });
    setTabActive("planner");

    const seq = ["n0", "e0", "n1", "e1", "n2", "e2", "n3"];
    let delay = 0;
    seq.forEach((id) => {
      const isEdge = id.startsWith("e");
      const edgeIdx = isEdge ? parseInt(id[1], 10) : -1;
      const nodeIdx = !isEdge ? parseInt(id[1], 10) : -1;
      after(delay, () => {
        if (isEdge && edgeRefs.current[edgeIdx]) {
          edgeRefs.current[edgeIdx]!.style.height = "20px";
          edgeRefs.current[edgeIdx]!.style.opacity = "1";
        } else if (!isEdge && nodeRefs.current[nodeIdx]) {
          nodeRefs.current[nodeIdx]!.style.opacity = "1";
          nodeRefs.current[nodeIdx]!.style.transform = "translateY(0) scale(1)";
          nodeRefs.current[nodeIdx]!.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        }
      });
      delay += isEdge ? 170 : 300;
    });
    after(delay + 1000, switchToScript);
  }, [after, setTabActive, switchToScript]);

  const send = useCallback(() => {
    const cc = chatRef.current;
    if (!cc) return;
    cc.style.opacity = "0";
    cc.style.transform = "translate(-50%,-50%) scale(0.95)";
    after(450, () => {
      if (cc) cc.style.display = "none";
      if (thinkingRef.current) thinkingRef.current.style.opacity = "1";
      after(1200, showNodes);
    });
  }, [after, showNodes]);

  const type = useCallback(() => {
    const chatText = chatTextRef.current;
    if (!chatText) return;
    if (idxRef.current === 0)
      chatText.innerHTML =
        '<span style="display:inline-block;width:1.5px;height:14px;background:#09090b;margin-left:1px;vertical-align:middle;animation:blink 1s infinite;"></span>';
    if (idxRef.current < PROMPT.length) {
      chatText.innerHTML = `<span style="color:#09090b;">${PROMPT.slice(
        0,
        idxRef.current + 1
      )}</span><span style="display:inline-block;width:1.5px;height:14px;background:#09090b;margin-left:1px;vertical-align:middle;animation:blink 1s infinite;"></span>`;
      idxRef.current++;
      if (idxRef.current === PROMPT.length && sendBtnRef.current) sendBtnRef.current.style.opacity = "1";
      after(46 + Math.random() * 28, type);
    } else {
      after(800, send);
    }
  }, [after, send]);

  const reset = useCallback(() => {
    if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
    const panel = wfPanelRef.current;
    if (panel) panel.style.opacity = "0";
    after(400, () => {
      if (panel) panel.style.display = "none";
      nodeRefs.current.forEach((n) => {
        if (!n) return;
        n.style.opacity = "0";
        n.style.transform = "translateY(8px) scale(0.97)";
        n.style.transition = "none";
      });
      edgeRefs.current.forEach((e) => {
        if (!e) return;
        e.style.height = "0";
        e.style.opacity = "0";
        e.style.transition = "none";
      });
      if (nodesViewRef.current) {
        nodesViewRef.current.style.display = "flex";
        nodesViewRef.current.style.opacity = "1";
        nodesViewRef.current.style.transform = "translateX(0) scale(1)";
      }
      if (tabBarRef.current) {
        tabBarRef.current.style.opacity = "1";
        tabBarRef.current.style.transform = "translateY(0)";
      }
      if (scriptViewRef.current) {
        scriptViewRef.current.style.display = "none";
        scriptViewRef.current.style.opacity = "0";
        scriptViewRef.current.style.transform = "translateX(14px) scale(0.985)";
      }
      if (scriptHeaderRef.current) {
        scriptHeaderRef.current.style.opacity = "0";
        scriptHeaderRef.current.style.transform = "translateY(-6px)";
      }
      if (scriptBodyRef.current) {
        scriptBodyRef.current.style.opacity = "0";
        scriptBodyRef.current.style.transform = "translateY(8px)";
      }
      if (runBtnRef.current) {
        runBtnRef.current.style.opacity = "0";
        runBtnRef.current.style.transform = "translateY(-6px)";
      }
      if (codeInnerRef.current) codeInnerRef.current.style.transform = "translateY(0)";
      setTabActive("planner");
      idxRef.current = 0;
      const cc = chatRef.current;
      if (cc) {
        cc.style.display = "block";
        cc.style.transform = "translate(-50%,-50%) scale(1)";
      }
      if (sendBtnRef.current) sendBtnRef.current.style.opacity = "0";
      after(100, () => {
        if (cc) cc.style.opacity = "1";
        after(500, type);
      });
    });
  }, [after, setTabActive, type]);

  useEffect(() => {
    resetRef.current = reset;
  }, [reset]);

  useEffect(() => {
    const t = setTimeout(type, 800);
    return () => {
      clearTimeout(t);
      timeouts.current.forEach(clearTimeout);
      if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
    };
  }, [type]);

  return (
    <div
      ref={sceneRef}
      className="relative overflow-hidden rounded-2xl bg-[#f0f0f0] flex flex-col items-center justify-center"
      style={{ height: 380, padding: "28px 20px", fontFamily: "Inter, sans-serif" }}
    >
      <style>{`@keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}`}</style>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div
        ref={thinkingRef}
        className="absolute z-10 flex items-center gap-2 text-[11px] text-zinc-500"
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0, transition: "opacity 0.4s" }}
      >
        {[0, 0.2, 0.4].map((delay, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-zinc-900"
            style={{ animation: `pulse 1.2s ease-in-out ${delay}s infinite` }}
          />
        ))}
        <span>Generating workflow...</span>
      </div>

      <div
        ref={wfPanelRef}
        className="w-full flex-col"
        style={{ maxWidth: 400, display: "none", opacity: 0, height: "100%", transition: "opacity 0.4s" }}
      >
        <div className="relative flex items-center justify-start mb-2 flex-shrink-0">
          <div
            ref={tabBarRef}
            className="flex items-center p-[3px] rounded-full"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 4px 16px -4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.6)",
              backdropFilter: "blur(24px)",
              transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {[
              {
                ref: tabPlannerRef,
                label: "Workflow",
                icon: (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                ),
              },
              {
                ref: tabScriptRef,
                label: "Script",
                icon: (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
              },
            ].map(({ ref, label, icon }) => (
              <div key={label} ref={ref} className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] transition-all duration-200" style={{ color: "#71717a" }}>
                {icon}
                {label}
              </div>
            ))}
            <div className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] text-zinc-400">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="18" r="3" />
                <path d="M6 9v2a6 6 0 0 0 6 6" />
              </svg>
              Schematic
            </div>
          </div>
          <div
            ref={runBtnRef}
            className="absolute right-0 flex items-center gap-1 px-3 py-[5px] rounded-lg text-[11px] font-medium text-white"
            style={{ background: "#09090b", opacity: 0, transform: "translateY(-6px)", transition: "opacity 0.3s ease, transform 0.34s cubic-bezier(.22,1,.36,1)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
            Run
          </div>
        </div>

        <div ref={nodesViewRef} className="flex flex-col items-center flex-1 justify-center gap-0" style={{ padding: "6px 0", overflow: "visible" }}>
          {NODES.map((node, i) => (
            <div key={node.id}>
              <div
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="relative flex flex-row items-center gap-2 bg-white border border-zinc-200 rounded-xl flex-shrink-0"
                style={{
                  padding: "8px 12px",
                  width: 280,
                  opacity: 0,
                  transform: "translateY(10px) scale(0.94)",
                  transition: "opacity 0.42s cubic-bezier(.22,1,.36,1), transform 0.42s cubic-bezier(.22,1,.36,1), box-shadow 0.42s cubic-bezier(.22,1,.36,1)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  willChange: "opacity, transform",
                }}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-zinc-600 border-2 border-zinc-200 z-10" style={{ top: -5 }} />
                <div className="w-[30px] h-[30px] flex items-center justify-center flex-shrink-0 bg-zinc-50 rounded-[7px] border border-zinc-200">
                  {node.img ? <img src={node.img} alt={node.label} style={{ width: 22, height: 22, objectFit: "contain" }} /> : node.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold text-zinc-900">{node.label}</div>
                  {node.sub && <div className="text-[9px] text-zinc-400 mt-px">{node.sub}</div>}
                </div>
                <div className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-500 ml-auto flex-shrink-0">{node.badge}</div>
                <div className="absolute left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-zinc-600 border-2 border-zinc-200 z-10" style={{ bottom: -5 }} />
              </div>
              {i < NODES.length - 1 && (
                <div
                  ref={(el) => {
                    edgeRefs.current[i] = el;
                  }}
                  style={{
                    width: 3,
                    height: 0,
                    opacity: 0,
                    background: "linear-gradient(180deg, #9ca3af 0%, #6b7280 100%)",
                    margin: "0 auto",
                    borderRadius: 999,
                    transition: "height 0.26s cubic-bezier(.22,1,.36,1), opacity 0.2s ease",
                    display: "block",
                    boxShadow: "0 0 0 1px rgba(113,113,122,0.2)",
                    willChange: "height, opacity",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div ref={scriptViewRef} className="flex-col flex-1 rounded-xl overflow-hidden border border-zinc-200" style={{ display: "none", opacity: 0, transform: "translateX(14px) scale(0.985)", transition: "opacity 0.38s ease, transform 0.42s cubic-bezier(.22,1,.36,1)", background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div
            ref={scriptHeaderRef}
            className="flex items-center justify-between px-3 py-[7px] border-b border-zinc-100 flex-shrink-0"
            style={{ opacity: 0, transform: "translateY(-6px)", transition: "opacity 0.28s ease, transform 0.34s cubic-bezier(.22,1,.36,1)" }}
          >
            <div className="flex gap-1">
              {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <span className="text-[11px] font-medium text-zinc-400">vi_sweep_test.atoms</span>
            <div style={{ width: 40 }} />
          </div>
          <div
            ref={scriptBodyRef}
            className="flex-1 overflow-hidden relative"
            style={{ opacity: 0, transform: "translateY(8px)", transition: "opacity 0.3s ease, transform 0.38s cubic-bezier(.22,1,.36,1)" }}
          >
            <div ref={codeScrollRef} className="h-full overflow-hidden relative">
            <div ref={codeInnerRef} className="absolute top-0 left-0 right-0" style={{ padding: "8px 12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "9.5px", lineHeight: 1.65 }}>
              {DISPLAY_CODE_LINES.map((line, i) => (
                <span key={i} className={`block whitespace-nowrap ${line.color}`} style={{ paddingLeft: line.indent === 1 ? 12 : line.indent === 2 ? 24 : 0 }}>
                  {line.text}
                </span>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={chatRef}
        className="w-full absolute z-20"
        style={{ maxWidth: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", transition: "opacity 0.45s, transform 0.45s" }}
      >
        <div className="bg-white border border-zinc-200 rounded-[18px] shadow-lg" style={{ padding: "14px 16px 10px" }}>
          <div ref={chatTextRef} className="text-sm mb-3 min-h-[22px] leading-relaxed">
            <span className="text-zinc-400">Describe what you want to test and the agent will build it automatically...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full overflow-hidden border border-zinc-200 bg-zinc-100">
              <div className="flex items-center gap-1 px-2.5 py-[5px] text-[11px] font-medium text-zinc-500 rounded-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Chat
              </div>
              <div className="flex items-center gap-1 px-2.5 py-[5px] text-[11px] font-medium text-white rounded-full bg-zinc-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                Agent
              </div>
            </div>
            {[
              <path key="a" d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />,
              <path key="b" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />,
            ].map((p, i) => (
              <div key={i} className="w-[30px] h-[30px] flex items-center justify-center text-zinc-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  {p}
                </svg>
              </div>
            ))}
            <div
              ref={sendBtnRef}
              className="ml-auto w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0"
              style={{ opacity: 0, transition: "opacity 0.3s" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.2;} 50%{opacity:1;} }
      `}</style>
    </div>
  );
}
