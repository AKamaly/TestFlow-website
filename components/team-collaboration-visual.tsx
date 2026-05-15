"use client";

export default function TeamCollaborationVisual() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        padding: "20px 18px 14px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 250,
        width: "100%",
        position: "relative",
      }}
    >
      {/* Top section: Active team members */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
            }}
          />
          <span style={{ fontSize: 12, color: "#a1a1aa", fontWeight: 500 }}>Live session</span>
        </div>

        {/* Overlapping avatars */}
        <div style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 99,
              border: "2px solid #111113", // matches the card background
              overflow: "hidden",
              zIndex: 4,
            }}
          >
            <img
              src="https://i.pravatar.cc/100?img=33"
              alt="Team member"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 99,
              border: "2px solid #111113",
              overflow: "hidden",
              marginLeft: -10,
              zIndex: 3,
            }}
          >
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="Team member"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 99,
              border: "2px solid #111113",
              overflow: "hidden",
              marginLeft: -10,
              zIndex: 2,
            }}
          >
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Team member"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 99,
              border: "2px solid #111113",
              background: "#27272a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: -10,
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, color: "#e4e4e7" }}>+5</span>
          </div>
        </div>
      </div>

      {/* Main collaboration area */}
      <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 24 }}>
        {/* Document/Plan card */}
        <div
          style={{
            background: "linear-gradient(180deg, #1c1c1f 0%, #151518 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "16px 18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            width: "90%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header of doc */}
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: "#3b82f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Power Validation Plan</span>
          </div>

          {/* Lines of code/text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.15)", width: "100%" }} />
            <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.1)", width: "80%" }} />
            <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.05)", width: "65%" }} />
          </div>
        </div>

        {/* Live Cursor 1 */}
        <div
          style={{
            position: "absolute",
            top: 15,
            right: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#a855f7" stroke="white" strokeWidth="1.5">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>
          <div style={{ background: "#a855f7", color: "white", fontSize: 9, fontWeight: 600, padding: "2px 6px", borderRadius: 4, marginLeft: 12 }}>
            Alex
          </div>
        </div>

        {/* Live Cursor 2 */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 20,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ec4899" stroke="white" strokeWidth="1.5">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>
          <div style={{ background: "#ec4899", color: "white", fontSize: 9, fontWeight: 600, padding: "2px 6px", borderRadius: 4, marginLeft: 12 }}>
            Sarah
          </div>
        </div>
      </div>
    </div>
  );
}
