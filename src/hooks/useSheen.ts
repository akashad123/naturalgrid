import React, { useCallback } from "react";

export function useSheen() {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mx", `${x}px`);
    target.style.setProperty("--my", `${y}px`);
  }, []);

  return { onMouseMove };
}
