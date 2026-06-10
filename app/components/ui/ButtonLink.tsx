import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "outline";
};

export default function ButtonLink({
  href,
  children,
  variant = "accent",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}
