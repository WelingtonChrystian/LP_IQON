import { Container } from "@/components/ui/Container";
import { results } from "@/content/process";

export function Results() {
  return (
    <section
      id="parceria"
      aria-labelledby="resultados-title"
      className="section-y overflow-hidden bg-noite/80 backdrop-blur-[2px]"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-label font-medium uppercase tracking-wider text-lilas">
              {results.tagline}
            </p>
            <h2
              id="resultados-title"
              className="mt-1.5 font-display text-h2 text-balance text-luz"
            >
              {results.title}
            </h2>
            <p className="mt-2.5 text-h4 font-semibold text-lilas">
              {results.closing}
            </p>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {results.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-small text-pretty text-luz-suave leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <WindingPath className="mt-8 lg:mt-12" />
      </Container>
    </section>
  );
}

const pathClass = "text-lilas/70 motion-safe:anim-draw-on-scroll";

function WindingPath({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <svg viewBox="0 0 1200 90" fill="none" className="h-auto w-full overflow-visible max-h-16">
        <path
          d="M0 50C120 50 180 20 290 28S450 75 540 58C610 44 668 12 646 6C624 0 584 18 596 42C608 65 668 76 738 60S900 24 1000 38S1130 65 1200 52"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeOpacity={0.8}
          pathLength={1}
          strokeDasharray={1}
          className={pathClass}
        />
      </svg>
    </div>
  );
}
