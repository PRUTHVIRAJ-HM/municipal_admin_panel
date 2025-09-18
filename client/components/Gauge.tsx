import React from "react";
import { cn } from "@/lib/utils";

export default function Gauge({ value, label, className }: { value: number; label?: string; className?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      <div
        className="relative grid place-items-center rounded-full"
        style={{ width: 180, height: 180 }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(hsl(var(--primary)) ${pct * 3.6}deg, hsl(var(--muted)) 0)`,
            filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.06))",
          }}
        />
        <div className="absolute inset-2 rounded-full bg-card" />
        <div className="relative z-10 text-center">
          <div className="text-3xl font-bold tracking-tight">{pct.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Your Point</div>
        </div>
      </div>
      {label ? <div className="mt-2 text-sm text-muted-foreground">{label}</div> : null}
    </div>
  );
}
