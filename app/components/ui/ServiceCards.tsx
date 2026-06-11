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
    const nodes = Array.from(root.current.querySelectorAll<HTMLElement>("[data-card]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((n, i) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(18px)";
      n.style.transition = `opacity 600ms ease ${i * 100}ms, transform 600ms ease ${i * 100}ms`;
      observer.observe(n);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      ref={root}
      className={`grid gap-5 mt-9 ${twoColumns ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
    >
      {items.map((item) => (
        <article
          data-card
          key={item.title}
          className="relative overflow-hidden p-7 bg-white border border-[#dbe7e9] rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.08)] hover:-translate-y-1 hover:border-[#0f6b72]/30 hover:shadow-[0_24px_70px_rgba(6,47,54,0.14)] transition-all duration-200 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-[#f4c400] before:to-[#0f6b72]"
        >
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4c400] to-[#0f6b72] grid place-items-center text-white font-extrabold text-sm shrink-0">
              {item.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
            </div>
            <h3 className="m-0 text-xl font-bold text-[#073f47]">{item.title}</h3>
          </div>
          <p className="mt-3 text-[#62777d] leading-relaxed">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
