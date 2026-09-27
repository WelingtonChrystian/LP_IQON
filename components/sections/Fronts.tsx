import { Container } from "@/components/ui/Container";
import { FrontGlyph, SystemDiagram } from "@/components/visuals/SystemDiagram";
import { fronts, frontsSection } from "@/content/fronts";

/**
 * Legenda do sistema de três frentes. No desktop o diagrama aparece no hero, logo acima;
 * em telas menores ele vem aqui, entre o título e a legenda.
 */
export function Fronts() {
  const [captionLead, captionClose] = frontsSection.caption;

  return (
    <section
      id="frentes"
      aria-labelledby="frentes-title"
      className="grain bg-abismo pb-24 sm:pb-28 lg:pb-36"
    >
      <Container>
        <div className="grid gap-x-12 gap-y-12 border-t border-lilas/15 pt-16 sm:pt-20 lg:grid-cols-12 lg:pt-24">
          <h2
            id="frentes-title"
            className="font-display text-h2 text-balance text-luz lg:col-span-5 lg:col-start-1 lg:row-start-1"
          >
            {frontsSection.title}
          </h2>

          <div className="mx-auto w-full max-w-[34rem] lg:hidden">
            <SystemDiagram />
          </div>

          <ul className="border-t border-lilas/15 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center">
            {fronts.map((front, index) => (
              <li
                key={front.id}
                className="flex items-start gap-5 border-b border-lilas/15 py-7 sm:items-center sm:gap-8"
              >
                <FrontGlyph highlight={index} className="mt-1 w-11 sm:mt-0 sm:w-14" />
                <div className="grid gap-1.5 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-8">
                  <h3 className="font-display text-h3 leading-none text-luz">{front.name}</h3>
                  <p className="text-lead text-pretty text-luz-suave">{front.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="font-display text-h3 italic text-lilas-claro lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-end">
            <span className="block">{captionLead}</span> <span className="block">{captionClose}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
