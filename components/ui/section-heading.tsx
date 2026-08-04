import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-black uppercase tracking-wide text-red-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black uppercase text-white md:text-4xl">{title}</h2>
      <div
        className={
          align === "center"
            ? "section-heading-line mx-auto mt-3 h-1 w-24 bg-red-600"
            : "section-heading-line mt-3 h-1 w-24 bg-red-600"
        }
      />
    </div>
  );
}
