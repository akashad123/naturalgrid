import React from "react";

interface StaggerRollTextProps {
  text: string;
  baseDurationMs?: number;
  stepDurationMs?: number;
}

/**
 * Splits button label characters dynamically into dual masked layers so hover
 * triggers a cascading vertical character roll without changing button bounds
 * or collapsing spaces inside flex containers.
 */
export const StaggerRollText: React.FC<StaggerRollTextProps> = ({
  text,
  baseDurationMs = 200,
  stepDurationMs = 24,
}) => {
  const chars = Array.from(text);

  return (
    <span className="stagger-roll">
      <span className="stagger-roll-primary">
        {chars.map((char, idx) => (
          <span
            key={idx}
            className="stagger-roll-char"
            style={{ transitionDuration: `${baseDurationMs + idx * stepDurationMs}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="stagger-roll-secondary" aria-hidden="true">
        {chars.map((char, idx) => (
          <span
            key={idx}
            className="stagger-roll-char"
            style={{ transitionDuration: `${baseDurationMs + idx * stepDurationMs}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};
