import React, { useState } from "react";

export interface AccordionItemData {
  id?: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenIndex?: number | null;
  name?: string;
  className?: string;
  itemClassName?: string;
}

/**
 * Universal accessible accordion component with mutual exclusion behavior:
 * - Initially opens the first item (`defaultOpenIndex = 0`) by default
 * - Opening another item closes the previously opened one
 * - Supports toggling the active item closed on re-click
 * - Preserves native `<details>` / `<summary>` semantics and `.feature-acc` hover styling
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  name,
  className = "",
  itemClassName = "feature-acc",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={className}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <details
            key={item.id ?? idx}
            className={itemClassName}
            open={isOpen}
            name={name}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                handleToggle(idx);
              }}
            >
              <span>{item.title}</span>
              <span className="acc-icon" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </summary>
            <p>{item.content}</p>
          </details>
        );
      })}
    </div>
  );
};
