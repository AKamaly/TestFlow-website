"use client";

import { useEffect, useRef } from "react";

export default function AdvancedReporting() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    let Chart: any;

    const loadChart = async () => {
      const chartModule = await import("chart.js/auto");
      Chart = chartModule.default;

      if (!canvasRef.current) return;

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "line",
        data: {
          labels: ["Run 1", "Run 2", "Run 3", "Run 4", "Run 5", "Run 6"],
          datasets: [
            {
              label: "Pass rate",
              data: [72, 75, 80, 85, 90, 94],
              borderColor: "#a855f7",
              backgroundColor: "rgba(168,85,247,0.06)",
              borderWidth: 2.5,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#a855f7",
              pointBorderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 7,
              tension: 0.4,
              fill: true,
            },
            {
              label: "Avg baseline",
              data: [65, 68, 70, 72, 71, 73],
              borderColor: "#d4d4d8",
              backgroundColor: "transparent",
              borderWidth: 1.5,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#d4d4d8",
              pointBorderWidth: 1.5,
              pointRadius: 4,
              tension: 0.4,
              fill: false,
            },
            {
              label: "Industry avg",
              data: [60, 62, 63, 64, 65, 66],
              borderColor: "#e4e4e7",
              backgroundColor: "transparent",
              borderWidth: 1.5,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#e4e4e7",
              pointBorderWidth: 1.5,
              pointRadius: 4,
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
          scales: {
            x: {
              grid: { color: "rgba(0,0,0,0.04)" },
              ticks: {
                font: { family: "Inter", size: 11 },
                color: "#a1a1aa",
              },
            },
            y: {
              min: 55,
              max: 100,
              grid: { color: "rgba(0,0,0,0.04)" },
              ticks: {
                font: { family: "Inter", size: 11 },
                color: "#a1a1aa",
                callback: (v: any) => v + "%",
              },
            },
          },
        },
      });
    };

    loadChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-3 mx-auto w-full"
      style={{
        background: "#f8f8f8",
        borderRadius: 20,
        padding: 20,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Chart card */}
      <div
        className="bg-white"
        style={{
          borderRadius: 18,
          padding: "20px 20px 14px",
          border: "1px solid #efefef",
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="font-semibold text-zinc-900"
          style={{ fontSize: 16, marginBottom: 14 }}
        >
          Validation Results
        </div>

        {/* Chart area */}
        <div className="relative" style={{ height: 160 }}>
          <canvas
            ref={canvasRef}
            role="img"
            aria-label="Pass rate trend chart showing improvement over 6 test runs reaching 94%"
            style={{ width: "100%", height: "100%" }}
          >
            Pass rate: 72%, 75%, 80%, 85%, 90%, 94%
          </canvas>

          {/* Tooltip */}
          <div
            className="absolute bg-white flex items-center gap-2"
            style={{
              top: 0,
              right: 0,
              border: "1px solid #e4e4e7",
              borderRadius: 12,
              padding: "9px 14px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 3,
                background: "#a855f7",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, color: "#71717a" }}>Pass rate</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#09090b" }}>
              94%
            </span>
          </div>

          {/* Cursor */}
          <div
            className="absolute pointer-events-none"
            style={{ top: 90, left: "51%" }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 2L16 10L10 11.5L7.5 18L4 2Z"
                fill="#09090b"
                stroke="white"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="flex items-center"
        style={{
          background: "#f4f4f5",
          borderRadius: 16,
          padding: "14px 22px",
        }}
      >
        {/* Passed */}
        <div className="flex items-center gap-2 flex-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M7 11v8a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4v-3.4a2 2 0 0 0-.6-1.4L13 5l-1 1v3a1 1 0 0 0 1 1h6" />
            <path d="M3 11h4v9H3z" />
          </svg>
          <span style={{ fontSize: 17, fontWeight: 600, color: "#09090b" }}>
            94%
          </span>
          <span style={{ fontSize: 13, color: "#71717a" }}>Passed</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 30,
            background: "#e4e4e7",
            margin: "0 10px",
            flexShrink: 0,
          }}
        />

        {/* Failed */}
        <div className="flex items-center gap-2 flex-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.8"
            strokeLinecap="round"
            style={{ transform: "scale(-1,-1)" }}
          >
            <path d="M7 11v8a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4v-3.4a2 2 0 0 0-.6-1.4L13 5l-1 1v3a1 1 0 0 0 1 1h6" />
            <path d="M3 11h4v9H3z" />
          </svg>
          <span style={{ fontSize: 17, fontWeight: 600, color: "#09090b" }}>
            6%
          </span>
          <span style={{ fontSize: 13, color: "#71717a" }}>Failed</span>
        </div>
      </div>
    </div>
  );
}
