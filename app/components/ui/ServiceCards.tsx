"use client";

import { useEffect, useRef } from "react";

type CardItem = {
  title: string;
  text: string;
};

type ServiceCardsProps = {
  items: CardItem[];
  twoColumns?: boolean;
};

export default function ServiceCards({ items, twoColumns = false }: ServiceCardsProps) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    const nodes = Array.from(root.current.querySelectorAll<HTMLElement>(".service-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n, i) => {
      // set a staggered delay
      n.style.transitionDelay = `${i * 100}ms`;
      n.classList.add("reveal");
      observer.observe(n);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div ref={root} className={`card-grid${twoColumns ? " two-card-grid" : ""}`}>
      {items.map((item, idx) => (
        <article className="service-card" key={item.title} aria-hidden={false}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "linear-gradient(135deg, #f4c400, #0f6b72)", display: "grid", placeItems: "center", color: "white", fontWeight: 800 }}>
              {item.title.split(" ").slice(0,2).map(word=>word[0]).join("")}
            </div>
            <h3 style={{ margin: 0 }}>{item.title}</h3>
          </div>
          <p style={{ marginTop: 12 }}>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
