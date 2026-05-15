"use client";

export default function AITestPlannerVisual() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        padding: "20px 18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 320,
        gap: 0,
        width: "100%",
      }}
    >
      {/* Top row — two input cards */}
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "center" }}>
        {/* Card 1: Upload Spec — PDF icon (red) */}
        <div
          style={{
            background: "#1c1c1f",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 10,
            padding: "10px 12px",
            flex: 1,
            maxWidth: 150,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: "#dc2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="7" y="18" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">PDF</text>
              </svg>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>Upload spec</span>
          </div>
          <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,0.07)", width: "85%" }} />
        </div>

        {/* Card 2: Testing Standard — CSV icon (green) */}
        <div
          style={{
            background: "#1c1c1f",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 10,
            padding: "10px 12px",
            flex: 1,
            maxWidth: 150,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
                <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="1.5" />
                <line x1="3" y1="15" x2="21" y2="15" stroke="white" strokeWidth="1.5" />
                <line x1="9" y1="3" x2="9" y2="21" stroke="white" strokeWidth="1.5" />
                <line x1="15" y1="3" x2="15" y2="21" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>Testing standard</span>
          </div>
          <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,0.07)", width: "70%" }} />
        </div>
      </div>

      {/* Dotted connector lines */}
      <svg width="100%" height="36" viewBox="0 0 320 36" preserveAspectRatio="none" style={{ display: "block", maxWidth: 320 }}>
        <line x1="80" y1="0" x2="160" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="240" y1="0" x2="160" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>

      {/* AI Planner pill */}
      <div
        style={{
          background: "#fff",
          borderRadius: 99,
          padding: "7px 16px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          boxShadow: "0 0 16px rgba(255,255,255,0.06), 0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#09090b">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#09090b", whiteSpace: "nowrap" }}>AI Planner</span>
      </div>

      {/* Dotted line down to result */}
      <svg width="2" height="22" style={{ display: "block" }}>
        <line x1="1" y1="0" x2="1" y2="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>

      {/* Result card */}
      <div
        style={{
          background: "#1c1c1f",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: 12,
          padding: "10px 14px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 99,
              background: "#0a0a0b",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>Plan generated</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: "#52525b", textDecoration: "line-through" }}>Manual — weeks</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>47 test cases</span>
          </div>
          <span style={{ fontSize: 11, color: "#71717a" }}>100% coverage</span>
        </div>
      </div>
    </div>
  );
}
