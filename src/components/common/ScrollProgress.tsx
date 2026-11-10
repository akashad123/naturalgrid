import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
};
