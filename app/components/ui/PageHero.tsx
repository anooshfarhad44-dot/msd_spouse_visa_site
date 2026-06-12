// import type { ReactNode } from "react";

// type PageHeroProps = {
//   eyebrow: string;
//   title: string;
//   children?: ReactNode;
// };

// export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
//   return (
//     <div className="mb-5">
//       <p className="mb-3 text-[#0f6b72] font-bold text-sm uppercase">
//         {eyebrow}
//       </p>
//       <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#182d32] leading-tight m-0">
//         {title}
//       </h1>
//       {children ? (
//         <p className="mt-4 text-[#62777d] text-lg leading-relaxed">{children}</p>
//       ) : null}
//     </div>
//   );
// }


import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;

  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function PageHero({
  eyebrow,
  title,
  children,
  eyebrowClassName = "text-[14px] md:text-[16px]",
  titleClassName = "text-[18px] md:text-[27px] lg:text-[33px]",
  descriptionClassName = "text-[10px] md:text-[12px] lg:text-[14px]",
}: PageHeroProps) {
  return (
    <div className="mb-5">
      <p
        className={`mb-1 font-bold uppercase text-[#0f6b72] ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>

      <h1
        className={`font-extrabold text-[#182d32] leading-tight m-0 ${titleClassName}`}
      >
        {title}
      </h1>

      {children && (
        <p
          className={`mt-2 text-[#62777d] leading-relaxed ${descriptionClassName}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}