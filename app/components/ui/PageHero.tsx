import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-[#0f6b72] font-extrabold text-sm tracking-widest uppercase">
        {eyebrow}
      </p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#182d32] leading-tight m-0">
        {title}
      </h1>
      {children ? (
        <p className="mt-4 text-[#62777d] text-lg leading-relaxed">{children}</p>
      ) : null}
    </div>
  );
}
