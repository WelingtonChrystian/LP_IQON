import { Container } from "@/components/ui/Container";
import { results } from "@/content/process";
import { cn } from "@/lib/cn";

/** Expectativa de resultado sem cronograma: o caminho existe, mas não é uma linha reta. */
export function Results() {
  const lastIndex = results.paragraphs.length - 1;

  return (
    <section
      id="resultados"
      aria-labelledby="resultados-title"
      className="section-y overflow-hidden bg-noite"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <h2
            id="resultados-title"
            className="font-display text-h2 text-balance text-luz lg:col-span-5"
          >
            {results.title}
          </h2>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7 lg:pt-3">
            {results.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={cn(
                  "text-lead text-pretty",
                  index === lastIndex ? "text-luz" : "text-luz-suave",
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <WindingPath className="mt-16 lg:mt-24" />

        <p className="mt-10 font-display text-h3 italic text-luz lg:mt-12">{results.closing}</p>
      </Container>
    </section>
  );
}

const pathClass = "text-lilas motion-safe:anim-draw-on-scroll";

/**
 * Traço que avança, volta e ajusta a rota. Ilustra o título sem eixo, escala de tempo
 * ou tendência de subida (não é um gráfico). Há um desenho para cada proporção de tela.
 */
function WindingPath({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <svg viewBox="0 0 400 120" fill="none" className="h-auto w-full overflow-visible sm:hidden">
        <path
          d="M0 72C50 72 80 44 130 50S190 92 222 80C250 70 276 34 262 26C248 18 226 36 234 58C242 82 280 90 312 80S370 58 400 66"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeOpacity={0.85}
          pathLength={1}
          strokeDasharray={1}
          className={pathClass}
        />
      </svg>
      <svg viewBox="0 0 1200 140" fill="none" className="hidden h-auto w-full overflow-visible sm:block">
        <path
          d="M0 86C120 86 180 48 290 56S450 116 540 96C610 80 668 32 646 20C624 8 584 32 596 64C608 98 668 112 738 96S900 42 1000 62S1130 98 1200 84"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeOpacity={0.85}
          pathLength={1}
          strokeDasharray={1}
          className={pathClass}
        />
      </svg>
    </div>
  );
}
