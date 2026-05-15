"use client";

import React, { useState } from "react";
import {
  Menu,
  Download,
  Share2,
  Moon,
  ChevronDown,
  ChevronUp,
  Square,
  GitBranch,
  Plus,
  MousePointer2,
  FileText,
  Braces,
  File as FileIcon,
  RotateCcw,
  Repeat,
  Timer,
  Pencil,
  Copy,
  Trash2,
  Check,
  Sparkles,
  Zap,
  Cpu,
  Activity,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidGlassInput from "@/components/liquid-glass-input";

const POWER_SUPPLY_IMG =
  "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Power%20supply-GnbhcZtaC99c5rRP3tWGw7AKeQy3Qa.png";
const OSCILLOSCOPE_IMG =
  "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Oscilloscope-izPvPwNtwdyrRkQ0J50yQCAlyA0zMz.png";
const DYNAMIC_LOAD_IMG =
  "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Dynamic-Load.png";

type NodeData = {
  label: string;
  sub?: string;
  badge: string;
  img?: string;
  icon?: React.ReactNode;
  highlighted?: boolean;
};

const NODES: NodeData[] = [
  {
    label: "Loop",
    sub: "4 iterations",
    badge: "Logic",
    icon: <Repeat className="w-12 h-12 text-white/65" strokeWidth={1.5} />,
  },
  {
    label: "Power Supply",
    sub: "Keithley 2450",
    badge: "Instrument",
    img: POWER_SUPPLY_IMG,
    highlighted: true,
  },
  {
    label: "Oscilloscope",
    sub: "Tektronix MDO",
    badge: "Instrument",
    img: OSCILLOSCOPE_IMG,
  },
  {
    label: "Delay",
    sub: "",
    badge: "Logic",
    icon: <Timer className="w-12 h-12 text-white/65" strokeWidth={1.5} />,
  },
  {
    label: "Dynamic Load",
    sub: "Chroma 6200P",
    badge: "Instrument",
    img: DYNAMIC_LOAD_IMG,
  },
  {
    label: "End Loop",
    sub: "Closes Loop (4 iterations)",
    badge: "Logic",
    icon: <Repeat className="w-12 h-12 text-white/65 -scale-x-100" strokeWidth={1.5} />,
  },
];

const ACTION_PILLS = ["Set Voltage", "Wait", "Turn On", "Set Voltage Slew", "Measure Voltage"];

type LogEntry = {
  ts: string;
  type: "tool" | "create" | "info" | "warn";
  title: string;
  detail?: string;
};

const AGENT_LOG: LogEntry[] = [
  { ts: "12:42:01", type: "info", title: "Parsing data sheet", detail: "USB-PD Source post-converter spec" },
  { ts: "12:42:03", type: "tool", title: "instrument.lookup", detail: 'query: "programmable DC source"' },
  { ts: "12:42:05", type: "create", title: "Added Loop node", detail: "4 iterations (v_load_sweep 5V-20V)" },
  { ts: "12:42:06", type: "create", title: "Added Power Supply", detail: "Keithley 2450" },
  { ts: "12:42:07", type: "create", title: "Added Oscilloscope", detail: "Tektronix MDO" },
  { ts: "12:42:08", type: "create", title: "Added Delay", detail: "1000 ms" },
  { ts: "12:42:09", type: "create", title: "Added Dynamic Load", detail: "Chroma 6200P" },
  { ts: "12:42:10", type: "create", title: "Added End Loop", detail: "closes Loop (1)" },
  { ts: "12:42:11", type: "tool", title: "script.generate", detail: "compiling ATOMS sequence" },
  { ts: "12:42:13", type: "info", title: "Workflow ready", detail: "6 nodes, 3 instruments" },
];

export default function StitchSandbox() {
  const [logOpen, setLogOpen] = useState(false);

  return (
    <div
      className="h-full w-full relative overflow-hidden text-white font-sans"
      style={{
        backgroundColor: "#0a0a0c",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.18) 1.4px, transparent 1.4px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* ----------------- TOP BAR ----------------- */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        {/* Left */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg">
          <button className="p-1 rounded-md hover:bg-white/10">
            <Menu className="w-5 h-5 text-white/80" />
          </button>
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/90">Load Trans</span>
        </div>

        {/* Center tabs - slight offset to align with canvas */}
        <div
          className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg"
          style={{ marginLeft: 90 }}
        >
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-white/65 hover:bg-white/[0.05] transition-colors">
            <Square className="w-3.5 h-3.5" />
            Planner
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium text-white bg-white/[0.1]">
            <Braces className="w-3.5 h-3.5" />
            Script
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-white/65 hover:bg-white/[0.05] transition-colors">
            <GitBranch className="w-3.5 h-3.5" />
            Schematic
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl hover:bg-white/[0.07] text-sm text-white/85 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl hover:bg-white/[0.07] text-sm text-white/85 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl hover:bg-white/[0.07] transition-colors">
            <Moon className="w-4 h-4 text-white/85" />
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center">
            <img
              src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Testflow%20logo%20white%20liquid%20glass%20.png"
              alt="TestFlow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ----------------- LEFT PANEL (AI CHAT + AGENT LOG) ----------------- */}
      <div className="absolute top-24 left-4 bottom-4 w-[380px] z-10 flex flex-col gap-3">
        {/* AI Chat - liquid glass, shrinks when log is open */}
        <motion.div
          animate={{ flexBasis: logOpen ? "45%" : "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col overflow-hidden min-h-0"
          style={{ flexGrow: 1, flexShrink: 1 }}
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-white/10 pointer-events-none" />
          <div className="relative flex-1 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_60px_-12px_rgba(120,100,200,0.2)] p-5 flex flex-col overflow-hidden min-h-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 rounded-full bg-white/[0.06] flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
                <span className="text-[11px] text-white/45 font-medium">Session · Load Trans</span>
              </div>
              <button className="p-1.5 rounded-md hover:bg-white/5 transition-colors">
                <RotateCcw className="w-3.5 h-3.5 text-white/40" />
              </button>
            </div>

            {/* Scrollable conversation */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4 min-h-0 custom-scroll">
              {/* User msg 1 */}
              <UserMessage text="How should I tailor this test, for load transient" />

              {/* Assistant text */}
              <AssistantBlock>
                <p>
                  For load transient testing, you want to observe how the USB-PD Source voltage responds to sudden changes in load. This usually involves rapidly switching the load between different levels and monitoring the output voltage overshoot, undershoot, and settling time.
                </p>
                <p>To tailor the previous compliance test plan for load transient testing:</p>
                <ol className="list-decimal pl-5 space-y-1.5">
                  <li>Use the Dynamic Load&apos;s ability to rapidly switch load current.</li>
                  <li>At each USB-PD level (5V, 9V, 15V, 20V), apply step changes in load current.</li>
                  <li>Use the Oscilloscope to capture the transient response on the output voltage line.</li>
                </ol>
              </AssistantBlock>

              {/* Tool call card */}
              <ToolCard
                icon={<Cpu className="w-3.5 h-3.5 text-blue-400" />}
                title="instrument.lookup"
                status="done"
                rows={[
                  { k: "query", v: '"programmable DC source"' },
                  { k: "matched", v: "Chroma 62000P" },
                ]}
              />

              {/* Generated nodes card */}
              <GeneratedNodesCard
                items={[
                  { label: "Loop", sub: "4 iterations" },
                  { label: "Power Supply", sub: "Keithley 2450" },
                  { label: "Oscilloscope", sub: "Tektronix MDO" },
                  { label: "Delay", sub: "1000 ms" },
                  { label: "Dynamic Load", sub: "Chroma 6200P" },
                  { label: "End Loop", sub: "closes Loop" },
                ]}
              />

              {/* Assistant follow-up */}
              <AssistantBlock>
                <p>
                  I&apos;ve laid out the workflow above. Power Supply sweeps the USB-PD voltage levels, the Dynamic Load switches load current step-wise, and the Oscilloscope captures transient response.
                </p>
                <p className="text-white/65">Want me to add overshoot/undershoot assertions, or wire this to a report template?</p>
              </AssistantBlock>

              {/* User follow up */}
              <UserMessage text="Add the overshoot assertions and a 1ms time base" />

              <ToolCard
                icon={<Activity className="w-3.5 h-3.5 text-emerald-400" />}
                title="script.update"
                status="running"
                rows={[
                  { k: "node", v: "Oscilloscope" },
                  { k: "TIMEBASE", v: "0.001s" },
                  { k: "assert", v: "overshoot < 200mV" },
                ]}
              />
            </div>
          </div>
        </motion.div>

        {/* Agent log: collapsible panel that grows upward */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-white/15 via-white/5 to-white/10 pointer-events-none" />
          <div className="relative rounded-xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.12] shadow-lg overflow-hidden">
            {/* Toggle button (always visible) */}
            <button
              onClick={() => setLogOpen(o => !o)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="relative w-1.5 h-1.5">
                  <div className="absolute inset-0 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <span className="text-sm text-white/85 font-medium">Agent log</span>
                <span className="text-[10px] text-white/35 ml-1">{AGENT_LOG.length} events</span>
              </div>
              <motion.div animate={{ rotate: logOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronUp className="w-4 h-4 text-white/45" />
              </motion.div>
            </button>

            {/* Expandable log content */}
            <AnimatePresence initial={false}>
              {logOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden border-t border-white/[0.08]"
                >
                  <div className="max-h-[320px] overflow-y-auto p-3 space-y-2 custom-scroll">
                    {AGENT_LOG.map((entry, i) => (
                      <LogRow key={i} entry={entry} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ----------------- CENTER CANVAS (NODES) ----------------- */}
      <div className="absolute inset-x-0 top-20 bottom-40 flex items-center justify-center pointer-events-none pl-[90px] pr-[80px]">
        <div className="flex flex-col items-center gap-0 pointer-events-auto">
          {NODES.map((node, i) => (
            <React.Fragment key={i}>
              <NodeCard node={node} showActions={node.highlighted} />
              {i < NODES.length - 1 && <DashedEdge />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ----------------- CODE PANEL (floating, near quick actions) ----------------- */}
      <div className="absolute top-1/2 -translate-y-1/2 right-20 z-10 w-[380px]">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-white/10 pointer-events-none" />
        <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_60px_-12px_rgba(120,100,200,0.25)] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-[11px] font-mono text-white/55 ml-2">load_trans.atoms</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-[11px] font-medium text-white/90 transition-colors">
              <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
              Run
            </button>
          </div>

          {/* Code body */}
          <div className="px-4 py-3 max-h-[420px] overflow-y-auto custom-scroll font-mono text-[11px] leading-[1.7]">
            <CodeLine n={1} indent={0}><span className="text-zinc-500">#START_SCRIPT</span></CodeLine>
            <CodeLine n={2} indent={0}><span className="text-purple-300">Loop_start</span><span className="text-white/70">(1): 4 (N1)</span></CodeLine>
            <CodeLine n={3} indent={0}><span className="text-white/60">Variable:</span><span className="text-cyan-300"> v_load_sweep</span></CodeLine>
            <CodeLine n={4} indent={0}><span className="text-white/60">Range:</span><span className="text-white/80"> (5,20),(undefined,undefined,undefined)</span></CodeLine>
            <CodeLine n={5} indent={1}><span className="text-zinc-500">#NODE1 (Power Supply, 2450, Keithley, SMU_2450)</span></CodeLine>
            <CodeLine n={6} indent={1}><span className="text-blue-300">INST::</span><span className="text-white/80"> 21321</span></CodeLine>
            <CodeLine n={7} indent={1}><span className="text-zinc-500">#ACTION: (Source_Function,Source Function)</span></CodeLine>
            <CodeLine n={8} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> :SOUR:FUNC VOLTage</span></CodeLine>
            <CodeLine n={9} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={10} indent={1}><span className="text-zinc-500">#ACTION: (Set_Voltage,Set Voltage)</span></CodeLine>
            <CodeLine n={11} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> :SOUR:VOLT ${'${v_load_sweep}'}</span></CodeLine>
            <CodeLine n={12} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={13} indent={1}><span className="text-zinc-500">#ACTION: (Turn_ON,Turn ON)</span></CodeLine>
            <CodeLine n={14} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> :OUTP ON</span></CodeLine>
            <CodeLine n={15} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={16} indent={1}><span className="text-zinc-500">#END_NODE1 (N2)</span></CodeLine>
            <CodeLine n={17} indent={1}><span className="text-zinc-500">#NODE2 (Oscilloscope, MDO, Tektronix, MDO)</span></CodeLine>
            <CodeLine n={18} indent={1}><span className="text-blue-300">INST::</span><span className="text-white/80"> 21</span></CodeLine>
            <CodeLine n={19} indent={1}><span className="text-zinc-500">#ACTION: (Set_Timebase,Set Timebase)</span></CodeLine>
            <CodeLine n={20} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> HORizontal:SCAle 0.001</span></CodeLine>
            <CodeLine n={21} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={22} indent={1}><span className="text-zinc-500">#ACTION: (Measurement,Measurement)</span></CodeLine>
            <CodeLine n={23} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> MEASUrement:IMMed:SOUrce CH1</span></CodeLine>
            <CodeLine n={24} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> MEASUrement:IMMed:TYPe AMPLitude</span></CodeLine>
            <CodeLine n={25} indent={2}><span className="text-emerald-300">QRY:</span><span className="text-white/80"> MEASUrement:IMMed:VALue?</span></CodeLine>
            <CodeLine n={26} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={27} indent={1}><span className="text-zinc-500">#END_NODE2 (N3)</span></CodeLine>
            <CodeLine n={28} indent={1}><span className="text-zinc-500">#NODE3 (Delay)</span></CodeLine>
            <CodeLine n={29} indent={1}><span className="text-cyan-300">Delay:</span><span className="text-white/80"> 1000,ms</span></CodeLine>
            <CodeLine n={30} indent={1}><span className="text-zinc-500">#END_NODE3 (N4)</span></CodeLine>
            <CodeLine n={31} indent={1}><span className="text-zinc-500">#NODE4 (Dynamic Load, 6200P, Chroma, 6200P)</span></CodeLine>
            <CodeLine n={32} indent={1}><span className="text-blue-300">INST::</span><span className="text-white/80"> 47</span></CodeLine>
            <CodeLine n={33} indent={1}><span className="text-zinc-500">#ACTION: (Set_Current,Set Current)</span></CodeLine>
            <CodeLine n={34} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> :CURR 2.5</span></CodeLine>
            <CodeLine n={35} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={36} indent={1}><span className="text-zinc-500">#ACTION: (Output_On,Output On)</span></CodeLine>
            <CodeLine n={37} indent={2}><span className="text-amber-300">CMD:</span><span className="text-white/80"> :INPut ON</span></CodeLine>
            <CodeLine n={38} indent={1}><span className="text-zinc-500">#END_ACTION</span></CodeLine>
            <CodeLine n={39} indent={1}><span className="text-zinc-500">#END_NODE4 (LE1)</span></CodeLine>
            <CodeLine n={40} indent={0}><span className="text-purple-300">Loop_end</span><span className="text-white/70">(1)</span></CodeLine>
            <CodeLine n={41} indent={0}><span className="text-zinc-500">#END_SCRIPT</span></CodeLine>
          </div>
        </div>
      </div>

      {/* ----------------- RIGHT TOOLBAR ----------------- */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-white/10 pointer-events-none" />
        <div className="relative flex flex-col items-center gap-1 p-1.5 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.12] shadow-xl">
          <ToolbarButton icon={<Plus className="w-4 h-4" />} />
          <div className="w-6 border-t border-white/10 my-1" />
          <ToolbarButton icon={<MousePointer2 className="w-4 h-4" />} />
          <ToolbarButton icon={<FileText className="w-4 h-4" />} />
          <ToolbarButton icon={<Braces className="w-4 h-4" />} />
          <div className="text-[9px] text-white/30 font-medium tracking-wider py-1">VISA</div>
          <ToolbarButton icon={<FileIcon className="w-4 h-4" />} />
        </div>
      </div>

      {/* ----------------- BOTTOM CHAT INPUT ----------------- */}
      <div
        className="absolute bottom-6 px-4 z-30"
        style={{ left: "calc(50% + 45px)", transform: "translateX(-50%)", width: "100%", maxWidth: 720 }}
      >
        <LiquidGlassInput
          initialValue="I want to create a VI sweep test for my post-converter device. Check my instruments and create the workflow."
          page="stitch"
        />
      </div>

      {/* Custom scrollbar styling */}
      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.16);
        }
      `}</style>
    </div>
  );
}

/* ----------------- Chat sub-components ----------------- */

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="flex items-start gap-2 max-w-[88%]">
        <div className="rounded-2xl bg-white/[0.07] border border-white/[0.08] px-3.5 py-2.5 text-[13px] text-white/90 backdrop-blur-sm">
          {text}
        </div>
        <div className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AssistantBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/30 border border-white/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Sparkles className="w-3 h-3 text-purple-300" />
      </div>
      <div className="text-[13px] leading-[1.6] text-white/85 space-y-2.5 flex-1 min-w-0">{children}</div>
    </div>
  );
}

function ToolCard({
  icon,
  title,
  status,
  rows,
}: {
  icon: React.ReactNode;
  title: string;
  status: "done" | "running";
  rows: { k: string; v: string }[];
}) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[11px] font-mono text-white/80">{title}</span>
        </div>
        {status === "done" ? (
          <div className="flex items-center gap-1 text-[10px] text-emerald-400">
            <Check className="w-3 h-3" />
            done
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-[10px] text-amber-300">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            running
          </div>
        )}
      </div>
      <div className="px-3 py-2 space-y-1">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px] font-mono">
            <span className="text-white/40 min-w-[70px]">{r.k}</span>
            <span className="text-white/80 truncate">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GeneratedNodesCard({ items }: { items: { label: string; sub: string }[] }) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-purple-300" />
          <span className="text-[11px] font-medium text-white/80">Generated workflow</span>
        </div>
        <span className="text-[10px] text-white/40">{items.length} nodes</span>
      </div>
      <div className="px-3 py-2 space-y-1.5">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px]">
            <div className="w-4 h-4 rounded-md bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-emerald-300" />
            </div>
            <span className="text-white/85 font-medium">{it.label}</span>
            <span className="text-white/40">{it.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogRow({ entry }: { entry: LogEntry }) {
  const color =
    entry.type === "tool"
      ? "text-blue-300"
      : entry.type === "create"
      ? "text-emerald-300"
      : entry.type === "warn"
      ? "text-amber-300"
      : "text-white/60";
  const dotColor =
    entry.type === "tool"
      ? "bg-blue-400"
      : entry.type === "create"
      ? "bg-emerald-400"
      : entry.type === "warn"
      ? "bg-amber-400"
      : "bg-white/40";
  return (
    <div className="flex items-start gap-2.5 text-[11px] font-mono py-1 px-2 rounded-md hover:bg-white/[0.03] transition-colors">
      <span className="text-white/30 mt-0.5">{entry.ts}</span>
      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${dotColor}`} />
      <div className="flex-1 min-w-0">
        <div className={`font-medium ${color}`}>{entry.title}</div>
        {entry.detail && <div className="text-white/45 text-[10px] mt-0.5">{entry.detail}</div>}
      </div>
    </div>
  );
}

/* ----------------- Canvas sub-components ----------------- */

function CodeLine({ n, indent, children }: { n: number; indent: number; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 hover:bg-white/[0.02] -mx-2 px-2 rounded">
      <span className="text-white/20 select-none w-5 text-right flex-shrink-0">{n}</span>
      <span className="whitespace-pre" style={{ paddingLeft: indent * 14 }}>
        {children}
      </span>
    </div>
  );
}

function ToolbarButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-9 h-9 rounded-lg flex items-center justify-center text-white/55 hover:text-white hover:bg-white/[0.06] transition-colors">
      {icon}
    </button>
  );
}

function DashedEdge() {
  return (
    <div className="flex flex-col items-center gap-1 py-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-white/25" />
      ))}
    </div>
  );
}

function NodeCard({ node, showActions }: { node: NodeData; showActions?: boolean }) {
  return (
    <div className="relative">
      {showActions && (
        <div className="absolute top-1/2 -translate-y-1/2 right-full mr-3 z-20">
          <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-b from-white/15 via-white/5 to-white/10 pointer-events-none" />
          <div className="relative flex flex-col items-center gap-1 px-1 py-1.5 rounded-lg bg-white/[0.05] backdrop-blur-xl border border-white/[0.12] shadow-lg">
            <button className="p-1.5 rounded hover:bg-white/[0.08]">
              <Pencil className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <button className="p-1.5 rounded hover:bg-white/[0.08]">
              <Copy className="w-3.5 h-3.5 text-white/60" />
            </button>
            <button className="p-1.5 rounded hover:bg-white/[0.08]">
              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            </button>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/45 via-white/25 to-white/30 pointer-events-none" />
        <div
          className="relative flex flex-row items-center gap-5 rounded-2xl bg-white/[0.22] backdrop-blur-2xl border border-white/[0.35] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] transition-all hover:bg-white/[0.28]"
          style={{ padding: "18px 24px 18px 22px", width: 360 }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/50 ring-2 ring-[#0a0a0c]"
            style={{ top: -5 }}
          />

          {/* Big icon / image - no container */}
          <div className="flex items-center justify-center flex-shrink-0" style={{ width: 72, height: 72 }}>
            {node.img ? (
              <img src={node.img} alt={node.label} className="w-[72px] h-[72px] object-contain" />
            ) : (
              node.icon
            )}
          </div>

          {/* Text shifted right */}
          <div className="flex-1 min-w-0 pl-3">
            <div className="text-[16px] font-semibold text-white leading-tight">{node.label}</div>
            <div className="mt-2">
              <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.15] text-white/90 border border-white/[0.18]">
                {node.badge}
              </span>
            </div>
            {node.sub && <div className="text-[12px] text-white/80 mt-2">{node.sub}</div>}
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/50 ring-2 ring-[#0a0a0c]"
            style={{ bottom: -5 }}
          />
        </div>
      </div>

      {showActions && (
        <div className="absolute top-1/2 -translate-y-1/2 left-full ml-7 flex flex-col gap-2 items-start z-10">
          {ACTION_PILLS.map((pill, i) => (
            <div key={i} className="relative" style={{ marginLeft: i % 2 === 0 ? 0 : 14 }}>
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-b from-white/15 via-white/5 to-white/10 pointer-events-none" />
              <div className="relative px-3 py-1.5 rounded-lg bg-white/[0.05] backdrop-blur-xl border border-white/[0.12] text-[11px] text-white/85 shadow-md whitespace-nowrap">
                {pill}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
