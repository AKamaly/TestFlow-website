'use client';

import React, { useEffect, useMemo, useState } from "react";

const INTRO_STYLE_ID = "faq1-animations";

const faqs = [
    {
        question: "Is TestFlow a LabVIEW replacement?",
        answer: "Yes, for most hardware validation tasks. TestFlow offers a modern, code-optional approach that replaces complex LabVIEW VIs with intuitive, reusable workflows, while still allowing Python scripting for advanced needs.",
        meta: "General",
    },
    {
        question: "Can I migrate existing workflows?",
        answer: "Yes. While we don't import .vi files directly, our AI can help map your test logic into TestFlow workflows quickly. We find that rebuilding in TestFlow often clarifies and simplifies legacy logic.",
        meta: "Migration",
    },
    {
        question: "What hardware is supported?",
        answer: "We support standard bench instruments (Oscilloscopes, Power Supplies, DMMs, etc.) via SCPI over USB, Ethernet, GPIB, and Serial. We handle the driver complexity for you.",
        meta: "Hardware",
    },
    {
        question: "Do I need drivers?",
        answer: "No. TestFlow comes with built-in drivers for a vast range of common instruments. You just connect them, and we handle the communication protocols.",
        meta: "Setup",
    },
    {
        question: "Is it open / scriptable?",
        answer: "Absolutely. You can drop into Python at any point in a workflow to write custom logic, analysis, or specific control sequences using standard libraries.",
        meta: "Extensibility",
    },
];

const palettes = {
    dark: {
        surface: "bg-neutral-950 text-neutral-100",
        panel: "bg-neutral-900/50",
        border: "border-white/10",
        heading: "text-white",
        muted: "text-neutral-400",
        iconRing: "border-white/20",
        iconSurface: "bg-white/5",
        icon: "text-white",
        toggle: "border-white/20 text-white",
        toggleSurface: "bg-white/10",
        glow: "rgba(255, 255, 255, 0.08)",
        aurora: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(120, 119, 198, 0.15), transparent 65%), #000000",
        shadow: "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
        overlay: "linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 65%)",
    },
};

export function LabViewFaq() {
    const palette = palettes.dark;
    const [theme, setTheme] = useState("dark");
    const [activeIndex, setActiveIndex] = useState(0);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        if (typeof document === "undefined") return;
        if (document.getElementById(INTRO_STYLE_ID)) return;
        const style = document.createElement("style");
        style.id = INTRO_STYLE_ID;
        // reuse animations from liquid-faq-section if needed, or assume they are global/loaded
        // Including truncated version here for safety if not global
        style.innerHTML = `
      @keyframes faq1-fade-up {
        0% { transform: translate3d(0, 20px, 0); opacity: 0; filter: blur(6px); }
        60% { filter: blur(0); }
        100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); }
      }
      .faq1-fade {
        opacity: 0;
        transform: translate3d(0, 24px, 0);
        filter: blur(12px);
        transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
      }
      .faq1-fade--ready {
        animation: faq1-fade-up 860ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
      }
    `;
        document.head.appendChild(style);
    }, []);


    const toggleQuestion = (index: number) => setActiveIndex((prev) => (prev === index ? -1 : index));

    useEffect(() => {
        if (typeof window === "undefined") {
            setHasEntered(true);
            return;
        }
        const onLoad = () => setHasEntered(true);
        if (document.readyState === "complete") onLoad();
        else window.addEventListener("load", onLoad, { once: true });
        return () => window.removeEventListener("load", onLoad);
    }, []);

    const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
        target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
    };

    const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
        const target = event.currentTarget;
        target.style.removeProperty("--faq-x");
        target.style.removeProperty("--faq-y");
    };

    return (
        <div className={`relative w-full overflow-hidden transition-colors duration-700 ${palette.surface}`} id="faq">
            <div className="absolute inset-0 z-0" style={{ background: palette.aurora }} />
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-80"
                style={{ background: palette.overlay, mixBlendMode: "screen" }}
            />

            <section
                className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-12 px-6 py-24 lg:max-w-5xl lg:px-12 ${hasEntered ? "faq1-fade--ready" : "faq1-fade"
                    }`}
            >
                <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-4">
                        <p className={`text-xs uppercase tracking-[0.35em] ${palette.muted}`}>FAQ</p>
                        <h2 className={`text-3xl font-semibold leading-tight md:text-5xl ${palette.heading}`}>
                            FAQs
                        </h2>
                    </div>
                </header>

                <ul className="space-y-4">
                    {faqs.map((item, index) => {
                        const open = activeIndex === index;
                        const panelId = `faq-panel-${index}`;
                        const buttonId = `faq-trigger-${index}`;

                        return (
                            <li
                                key={item.question}
                                className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${palette.border} ${palette.panel} ${palette.shadow}`}
                                onMouseMove={setCardGlow}
                                onMouseLeave={clearCardGlow}
                            >
                                <div
                                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        }`}
                                    style={{
                                        background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), ${palette.glow}, transparent 70%)`,
                                    }}
                                />

                                <button
                                    type="button"
                                    id={buttonId}
                                    aria-controls={panelId}
                                    aria-expanded={open}
                                    onClick={() => toggleQuestion(index)}
                                    style={{ "--faq-outline": "rgba(255,255,255,0.35)" } as React.CSSProperties}
                                    className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--faq-outline)]"
                                >
                                    <span
                                        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${palette.iconRing} ${palette.iconSurface}`}
                                    >
                                        <span
                                            className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${palette.iconRing
                                                } ${open ? "animate-ping" : ""}`}
                                        />
                                        <svg
                                            className={`relative h-5 w-5 transition-transform duration-500 ${palette.icon} ${open ? "rotate-45" : ""}`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>

                                    <div className="flex flex-1 flex-col gap-4">
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                            <h3 className={`text-lg font-medium leading-tight sm:text-xl ${palette.heading}`}>
                                                {item.question}
                                            </h3>
                                            {item.meta && (
                                                <span
                                                    className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto ${palette.border} ${palette.muted}`}
                                                >
                                                    {item.meta}
                                                </span>
                                            )}
                                        </div>

                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            className={`overflow-hidden text-sm leading-relaxed transition-[max-height] duration-500 ease-out ${open ? "max-h-64" : "max-h-0"
                                                } ${palette.muted}`}
                                        >
                                            <p className="pr-2">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
