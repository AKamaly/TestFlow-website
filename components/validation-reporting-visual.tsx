"use client";

export default function ValidationReportingVisual() {
  return (
    <div className="flex flex-col gap-2.5 w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Chart card */}
      <div
        style={{
          background: "#111113",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 16px 12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 12 }}>
          Trends
        </div>

        {/* SVG Chart */}
        <div style={{ position: "relative", height: 110 }}>
          <svg
            viewBox="0 0 400 110"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Gray line 1 — subtle wave */}
            <path
              d="M0 70 C50 70, 80 30, 130 50 S200 80, 250 55 S330 20, 400 40"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            {/* Gray line 2 — another wave */}
            <path
              d="M0 85 C60 85, 100 50, 150 70 S220 95, 280 75 S360 45, 400 60"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />
            {/* Purple line — highlighted, steeper wave */}
            <path
              d="M0 60 C40 60, 70 10, 120 35 S190 90, 250 50 S330 5, 400 30"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
            />
            {/* Purple fill under line */}
            <path
              d="M0 60 C40 60, 70 10, 120 35 S190 90, 250 50 S330 5, 400 30 L400 110 L0 110 Z"
              fill="url(#purpleGrad)"
            />

            <defs>
              <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Dots on purple line */}
            <circle cx="120" cy="35" r="4" fill="#111113" stroke="#a855f7" strokeWidth="2" />
            <circle cx="250" cy="50" r="4" fill="#111113" stroke="#a855f7" strokeWidth="2" />

            {/* Dots on gray lines */}
            <circle cx="130" cy="50" r="3" fill="#111113" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <circle cx="250" cy="55" r="3" fill="#111113" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <circle cx="150" cy="70" r="3" fill="#111113" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <circle cx="280" cy="75" r="3" fill="#111113" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

            {/* Cursor arrow */}
            <g transform="translate(172, 50)">
              <path
                d="M2 2 L18 11 L11 13 L8.5 20 L2 2Z"
                fill="#e4e4e7"
                stroke="#111113"
                strokeWidth="1"
              />
            </g>
          </svg>

          {/* Tooltip */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "#1c1c1f",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "7px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                background: "#a855f7",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 12, color: "#a1a1aa" }}>Pass rate</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>94%</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          background: "#1a1a1d",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Passed */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round">
            <path d="M7 11v8a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4v-3.4a2 2 0 0 0-.6-1.4L13 5l-1 1v3a1 1 0 0 0 1 1h6" />
            <path d="M3 11h4v9H3z" />
          </svg>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>94%</span>
          <span style={{ fontSize: 12, color: "#71717a" }}>Passed</span>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.08)", margin: "0 8px", flexShrink: 0 }} />

        {/* Failed */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" style={{ transform: "scale(-1,-1)" }}>
            <path d="M7 11v8a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4v-3.4a2 2 0 0 0-.6-1.4L13 5l-1 1v3a1 1 0 0 0 1 1h6" />
            <path d="M3 11h4v9H3z" />
          </svg>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>6%</span>
          <span style={{ fontSize: 12, color: "#71717a" }}>Failed</span>
        </div>
      </div>
    </div>
  );
}
