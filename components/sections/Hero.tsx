import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { SystemDiagram } from "@/components/visuals/SystemDiagram";
import { ctas, hero } from "@/content/site";
import { team } from "@/content/team";

function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} e ${names[names.length - 1]}`;
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="grain relative isolate overflow-hidden bg-abismo pb-20 pt-32 sm:pb-24 sm:pt-40 lg:flex lg:min-h-svh lg:items-center lg:pb-20 lg:pt-32"
    >
      <Container className="relative grid items-center gap-y-16 lg:grid-cols-12 lg:gap-x-12">
        <div className="relative z-10 lg:col-span-7">
          <h1 id="hero-title" className="font-display text-display font-normal text-luz">
            <span className="block text-balance">{hero.titleLead}</span>{" "}
            <span className="block text-balance italic">{hero.titleSignature}</span>
          </h1>

          <p className="mt-8 max-w-[34rem] text-lead text-pretty text-luz-suave motion-safe:anim-rise [--delay:120ms]">
            {hero.subtitle}
          </p>

          <div
            id="hero-cta"
            className="mt-10 flex flex-col gap-3 motion-safe:anim-rise [--delay:240ms] sm:flex-row sm:flex-wrap sm:items-center"
          >
            <WhatsAppCta className={buttonStyles({ variant: "light", size: "lg" })}>
              {ctas.hero}
            </WhatsAppCta>
            <a
              href={ctas.heroSecondary.href}
              className={buttonStyles({ variant: "outline-dark", size: "lg" })}
            >
              {ctas.heroSecondary.label}
            </a>
          </div>

          <div className="mt-14 flex max-w-[34rem] items-center gap-4 border-t border-lilas/15 pt-6 motion-safe:anim-rise [--delay:360ms]">
            <div aria-hidden="true" className="flex shrink-0 -space-x-2.5">
              {team.map((member) => (
                <span
                  key={member.name}
                  className="grid size-10 place-items-center rounded-full border border-lilas/40 bg-noite font-display text-lg leading-none text-luz"
                >
                  {member.name.charAt(0)}
                </span>
              ))}
            </div>
            <p className="text-small text-pretty text-luz-suave">
              <span className="text-luz">{joinNames(team.map((member) => member.name))}:</span>{" "}
              {hero.teamLine}
            </p>
          </div>
        </div>

        {/* No desktop o sistema aparece ao lado do título; em telas menores, na seção seguinte. */}
        <div className="hidden w-full max-w-[600px] justify-self-end lg:col-span-5 lg:block xl:-mr-6">
          <SystemDiagram />
        </div>
      </Container>
    </section>
  );
}
