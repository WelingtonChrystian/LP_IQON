import { cn } from "@/lib/cn";

/** Logotipo tipográfico da IQON (Cormorant Garamond com espaçamento largo, como na identidade atual). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block font-display font-medium leading-none tracking-[0.4em] [margin-inline-end:-0.4em]",
        className,
      )}
    >
      IQON
    </span>
  );
}
