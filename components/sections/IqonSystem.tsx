import { ArrowRight } from "lucide-react";
import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ctas } from "@/content/site";
import { systemParts, systemSection } from "@/content/system";

/** As quatro partes da operação lidas como um só conjunto: grade 2 × 2 com um nó central. */
export function IqonSystem() {
  return (
    <section id="metodo" aria-labelledby="metodo-title" className="grain section-y bg-abismo">
      <Container>
        <SectionIntro id="metodo-title" title={systemSection.title} intro={systemSection.intro} />

        <ol className="mt-14 border-t border-lilas/15 md:grid md:grid-cols-2 md:border-l lg:mt-20">
          {systemParts.map((part, index) => (
            <li
              key={part.id}
              className="relative border-b border-lilas/15 py-10 md:border-r md:p-10 lg:p-14"
            >
              {index === 0 ? (
                // Nó central: o ponto em que as quatro partes se encontram.
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 z-10 hidden size-14 translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-lilas/40 bg-abismo md:grid"
                >
                  <span className="grid size-7 place-items-center rounded-full border border-lilas/60">
                    <span className="size-1.5 rounded-full bg-luz" />
                  </span>
                </span>
              ) : null}
              <p aria-hidden="true" className="font-display text-[2.5rem] leading-none text-lilas">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-h3 text-luz">{part.name}</h3>
              <p className="mt-3 max-w-[32rem] text-body text-pretty text-luz-suave">{part.text}</p>
              <p className="mt-6 flex max-w-[32rem] gap-3 font-display text-h4 italic text-pretty text-luz">
                <ArrowRight
                  aria-hidden="true"
                  className="mt-[0.3em] size-5 shrink-0 text-lilas"
                  strokeWidth={1.75}
                />
                {part.result}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-8 lg:mt-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <p className="max-w-[44rem] font-display text-h3 italic text-balance text-luz">
            {systemSection.closing}
          </p>
          <WhatsAppCta
            className={buttonStyles({ variant: "light", size: "lg", className: "shrink-0" })}
          >
            {ctas.system}
          </WhatsAppCta>
        </div>
      </Container>
    </section>
  );
}
