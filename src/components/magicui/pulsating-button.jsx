import React from "react";
import { cn } from "@/lib/utils";

export const PulsatingButton = React.forwardRef(
  (
    {
      className,
      children,
      pulseColor = "#0096ff",
      duration = "1.5s",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground z-10",
          className
        )}
        style={{
          "--pulse-color": pulseColor,
          "--duration": duration,
        }}
        {...props}
      >
        <span className="relative z-20">{children}</span>

        {/* Pulsating glow layer */}
        <span
          className="absolute inset-0 rounded-lg animate-pulse-glow"
          style={{
            background: `radial-gradient(circle, var(--pulse-color) 10%, transparent 60%)`,
            animationDuration: `var(--duration)`,
            opacity: 0.6,
            zIndex: 0,
          }}
        ></span>
      </button>
    );
  }
);

PulsatingButton.displayName = "PulsatingButton";
