"use client";

export default function VisualWorkflowBuilderVisual() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 250,
        width: "100%",
        position: "relative",
        background: "radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.05) 0%, transparent 70%)",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Connection Lines (SVG) */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        {/* Line from Node 1 to Node 2 */}
        <path
          d="M 50% 70 L 50% 120"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Line from Node 2 to Node 3 */}
        <path
          d="M 50% 160 L 50% 200"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2"
          fill="none"
        />
        {/* Arrowhead at Node 3 */}
        <polygon points="calc(50% - 4),192 50%,200 calc(50% + 4),192" fill="rgba(255, 255, 255, 0.3)" />
      </svg>

      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%" }}>
        
        {/* Node 1: Setup */}
        <div
          style={{
            background: "#18181b",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 8,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "60%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span style={{ fontSize: 11, fontWeight: 500, color: "#d4d4d8" }}>Initialize Instruments</span>
        </div>

        {/* Node 2: The "Dragged" / "Active" Node */}
        <div
          style={{
            background: "linear-gradient(135deg, #1c1c21 0%, #18181b 100%)",
            border: "1px solid #d946ef", // Fuchsia border for active state
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            width: "70%",
            boxShadow: "0 0 20px rgba(217, 70, 239, 0.15), 0 8px 16px rgba(0,0,0,0.4)",
            transform: "rotate(-2deg) scale(1.05)",
            position: "relative",
          }}
        >
          <div style={{ width: 24, height: 24, borderRadius: 6, background: "#d946ef", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Measure Voltage Loop</span>
            <span style={{ fontSize: 9, color: "#a1a1aa" }}>Iterate over 100 samples</span>
          </div>


        </div>

        {/* Node 3: Result */}
        <div
          style={{
            background: "#18181b",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 8,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "60%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <span style={{ fontSize: 11, fontWeight: 500, color: "#d4d4d8" }}>Log to CSV Report</span>
        </div>

      </div>
    </div>
  );
}
