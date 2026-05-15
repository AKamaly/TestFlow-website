"use client";

export default function DesignedForSpeedVisual() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        padding: "24px 20px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      {/* Timeline rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Row 1 — Manual (struck through) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: "#71717a",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                height: 6,
                borderRadius: 99,
                background: "rgba(255,255,255,0.08)",
                width: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 99,
                  background: "rgba(255,255,255,0.12)",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <span
            style={{
              fontSize: 11,
              color: "#52525b",
              textDecoration: "line-through",
              whiteSpace: "nowrap",
              fontWeight: 500,
            }}
          >
            12 weeks
          </span>
        </div>

        {/* Row 2 — TestFlow (highlighted) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: "#ffffff",
              flexShrink: 0,
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                height: 6,
                borderRadius: 99,
                background: "rgba(255,255,255,0.06)",
                width: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 99,
                  background: "linear-gradient(90deg, #d4d4d8, #ffffff)",
                  width: "18%",
                  boxShadow: "0 0 12px rgba(255,255,255,0.4)",
                }}
              />
            </div>
          </div>
          <span
            style={{
              fontSize: 11,
              color: "#ffffff",
              whiteSpace: "nowrap",
              fontWeight: 600,
            }}
          >
            2 days
          </span>
        </div>
      </div>

      {/* Speed metric card */}
      <div
        style={{
          background: "#111113",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: "16px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 11, color: "#71717a", fontWeight: 500 }}>
            Validation cycle
          </span>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>
            40x faster
          </span>
        </div>

        {/* Speedometer-like arc */}
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          {/* Background arc */}
          <path
            d="M6 32 A22 22 0 0 1 50 32"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Filled arc — most of the way */}
          <path
            d="M6 32 A22 22 0 0 1 46 18"
            stroke="url(#speedGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Needle dot */}
          <circle cx="46" cy="18" r="3.5" fill="#ffffff" />
          <circle cx="46" cy="18" r="2" fill="#111113" />
          <defs>
            <linearGradient id="speedGrad" x1="6" y1="32" x2="50" y2="10">
              <stop offset="0%" stopColor="#71717a" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Step indicators */}
      <div style={{ display: "flex", gap: 6 }}>
        {[
          { label: "Spec upload", done: true },
          { label: "Plan generated", done: true },
          { label: "Scripts built", done: true },
          { label: "Executed", done: true },
        ].map((step, i) => (
          <div
            key={step.label}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                height: 3,
                width: "100%",
                borderRadius: 99,
                background: step.done
                  ? `linear-gradient(90deg, ${i === 0 ? "#71717a" : "#ffffff"}, #ffffff)`
                  : "rgba(255,255,255,0.06)",
                boxShadow: step.done
                  ? "0 0 8px rgba(255,255,255,0.3)"
                  : "none",
              }}
            />
            <span
              style={{
                fontSize: 9,
                color: step.done ? "#a1a1aa" : "#3f3f46",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
