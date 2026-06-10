"use client";

import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

type Props = {
  items: Item[];
  singleOpen?: boolean;
};

export default function Accordion({ items, singleOpen = false }: Props) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  function toggle(i: number) {
    setOpen((s) => {
      const next = { ...s };
      const isOpen = !!next[i];
      if (singleOpen) {
        // close all then open this if was closed
        return isOpen ? {} : { [i]: true };
      }
      if (isOpen) delete next[i];
      else next[i] = true;
      return next;
    });
  }

  return (
    <div className="accordion-list">
      {items.map((it, i) => (
        <div className={`accordion-item ${open[i] ? "is-open" : ""}`} key={i}>
          <button
            type="button"
            className="accordion-toggle"
            aria-expanded={!!open[i]}
            onClick={() => toggle(i)}
          >
            <span className="accordion-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="accordion-title">{it.title}</span>
          </button>
          <div className="accordion-panel" aria-hidden={!open[i]}>
            <div className="accordion-content">{it.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
