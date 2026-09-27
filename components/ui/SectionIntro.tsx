import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionIntroProps = {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  level?: "h2" | "h3";
  className?: string;
};

/** Título + texto de apoio alinhados no grid de 12 colunas. */
export function SectionIntro({
  id,
  title,
  intro,
  tone = "dark",
  level: Heading = "h2",
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:gap-12", className)}>
      <Heading
        id={id}
        className={cn(
          "font-display text-h2 text-balance",
          // Sem texto de apoio, o título pode ocupar mais colunas.
          intro ? "lg:col-span-6" : "lg:col-span-8",
          tone === "dark" ? "text-luz" : "text-tinta",
        )}
      >
        {title}
      </Heading>
      {intro ? (
        <p
          className={cn(
            "max-w-[36rem] text-lead text-pretty lg:col-span-5 lg:col-start-8 lg:self-end",
            tone === "dark" ? "text-luz-suave" : "text-tinta-suave",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
