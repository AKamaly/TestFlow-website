"use client";

export default function AgenticTestVisual() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        padding: "20px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 320,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "80%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* User message */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-end", gap: 10, width: "100%" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #27272a 0%, #18181b 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px 16px 4px 16px",
            padding: "10px 16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <span style={{ fontSize: 12, color: "#e4e4e7", fontWeight: 500 }}>
            let&apos;s do load regulation test
          </span>
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 99,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 0 12px rgba(99, 102, 241, 0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <img
            src="https://i.pravatar.cc/100?img=11"
            alt="User"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* SVG Connecting Path */}
      <svg style={{ position: "absolute", top: 40, right: 30, width: "70%", height: 100, zIndex: 1, pointerEvents: "none" }}>
        <path
          d="M 100% 10 Q 80% 40 40% 50 T 0 80"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="glowGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.5)" />
          </linearGradient>
        </defs>
      </svg>

      {/* AI Response - Code Block */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "flex-start", gap: 12, marginTop: 16 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            background: "linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 0 15px rgba(255,255,255,0.15)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
        </div>
        
        <div
          style={{
            background: "#09090b",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "12px 12px 12px 4px",
            width: "85%",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 10, color: "#a1a1aa", fontWeight: 500, letterSpacing: "0.02em" }}>Generating workflow...</span>
            <div style={{ display: "flex", gap: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
            </div>
          </div>
          <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ color: "#c678dd", fontSize: 11, fontFamily: "monospace" }}>import</span>
              <span style={{ color: "#e4e4e7", fontSize: 11, fontFamily: "monospace" }}>instruments</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ color: "#c678dd", fontSize: 11, fontFamily: "monospace" }}>def</span>
              <span style={{ color: "#61afef", fontSize: 11, fontFamily: "monospace" }}>load_regulation</span><span style={{ color: "#e4e4e7", fontSize: 11, fontFamily: "monospace" }}>():</span>
            </div>
            <div style={{ display: "flex", gap: 8, paddingLeft: 12 }}>
              <span style={{ color: "#e4e4e7", fontSize: 11, fontFamily: "monospace" }}>dmm.measure(</span><span style={{ color: "#98c379", fontSize: 11, fontFamily: "monospace" }}>"voltage"</span><span style={{ color: "#e4e4e7", fontSize: 11, fontFamily: "monospace" }}>)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Execution status */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16, position: "relative", zIndex: 2, paddingLeft: 42 }}>
        <div
          style={{
            flex: 1,
            background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.05) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a1a1aa", boxShadow: "0 0 8px rgba(255,255,255,0.3)" }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: "#e4e4e7" }}>Ready to execute</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 10, color: "#a1a1aa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Run</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#a1a1aa">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
