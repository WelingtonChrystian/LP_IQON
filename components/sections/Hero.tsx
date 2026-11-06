import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { SystemDiagram } from "@/components/visuals/SystemDiagram";
import { ctas, hero } from "@/content/site";
import { team } from "@/content/team";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="grain relative isolate overflow-hidden bg-abismo/65 backdrop-blur-[2px] pb-14 pt-28 sm:pb-20 sm:pt-36 lg:flex lg:min-h-[88vh] lg:items-center lg:pb-16 lg:pt-28"
    >
      <Container className="relative grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="relative z-10 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-lilas/25 bg-noite/80 px-3 py-1 text-label font-medium uppercase tracking-wider text-lilas-claro">
            <span className="size-1.5 rounded-full bg-lilas animate-pulse" />
            Método Consultivo
          </div>

          <h1 id="hero-title" className="mt-5 text-display font-semibold tracking-tight text-luz">
            <span className="block text-balance">{hero.titleLead}</span>
            <span className="block text-balance text-lilas">{hero.titleSignature}</span>
          </h1>

          <p className="mt-5 max-w-[32rem] text-lead text-pretty text-luz-suave motion-safe:anim-rise [--delay:120ms]">
            {hero.subtitle}
          </p>

          <div
            id="hero-cta"
            className="mt-8 flex flex-col gap-3 motion-safe:anim-rise [--delay:240ms] sm:flex-row sm:flex-wrap sm:items-center"
          >
            <WhatsAppCta className={buttonStyles({ variant: "light", size: "md" })}>
              {ctas.hero}
            </WhatsAppCta>
            <a
              href={ctas.heroSecondary.href}
              className={buttonStyles({ variant: "outline-dark", size: "md" })}
            >
              {ctas.heroSecondary.label}
            </a>
          </div>

          <div className="mt-10 flex max-w-[32rem] items-center gap-3.5 border-t border-lilas/15 pt-5 motion-safe:anim-rise [--delay:360ms]">
            <div aria-hidden="true" className="flex shrink-0 -space-x-2">
              {team.map((member) => (
                <span
                  key={member.name}
                  className="grid size-8 place-items-center rounded-full border border-lilas/40 bg-noite font-display text-sm leading-none text-luz"
                >
                  {member.name.charAt(0)}
                </span>
              ))}
            </div>
            <p className="text-small text-pretty text-luz-suave">
              <span className="text-luz font-medium">Agatha, Welington e Alanna:</span>{" "}
              {hero.teamLine}
            </p>
          </div>
        </div>

        {/* Diagrama compacto e elegante */}
        <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:col-span-5 lg:max-w-[440px] lg:justify-self-end">
          <SystemDiagram />
        </div>
      </Container>
    </section>
  );
}
