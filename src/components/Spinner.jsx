"use client";

export default function Spinner() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-white/30">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute h-16 w-16 rounded-full border-[3px] border-red-100 border-t-red-600 animate-spin" />

        {/* Middle Ring */}
        <div
          className="absolute h-11 w-11 rounded-full border-[3px] border-white border-b-red-500 animate-spin"
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
        />

        {/* Inner Ring */}
        <div
          className="absolute h-7 w-7 rounded-full border-[3px] border-red-200 border-l-red-600 animate-spin"
          style={{ animationDuration: "0.8s" }}
        />

        {/* Pulse Glow */}
        <div className="absolute h-4 w-4 rounded-full bg-red-600 animate-ping opacity-20" />

        {/* Center Dot */}
        <div className="h-3 w-3 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_12px_rgba(220,38,38,0.7)]" />
      </div>
    </div>
  );
}
