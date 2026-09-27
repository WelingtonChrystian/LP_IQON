import { cn } from "@/lib/cn";

type ButtonVariant = "light" | "brand" | "outline-dark" | "outline-light";
type ButtonSize = "md" | "lg";

// text-balance + padding vertical: rótulos longos quebram em linhas equilibradas nas telas estreitas.
const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full text-center text-balance font-sans font-medium leading-snug transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out-soft select-none active:scale-[0.98] motion-reduce:transition-none";

const variants: Record<ButtonVariant, string> = {
  // Superfícies escuras
  light: "bg-luz text-abismo hover:bg-white hover:shadow-[0_0_0_6px_rgb(185_154_240/0.18)]",
  "outline-dark": "border border-lilas/35 text-luz hover:border-lilas/70 hover:bg-lilas/10",
  // Superfícies claras
  brand: "bg-violeta text-white hover:bg-violeta-escuro hover:shadow-[0_0_0_6px_rgb(107_33_200/0.14)]",
  "outline-light": "border border-tinta/20 text-tinta hover:border-tinta/45 hover:bg-tinta/5",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-12 px-6 py-2.5 text-small",
  lg: "min-h-14 px-7 py-3 text-body",
};

export function buttonStyles({
  variant = "light",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
