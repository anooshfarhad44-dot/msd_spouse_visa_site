import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children ? <p className="lead">{children}</p> : null}
    </>
  );
}
