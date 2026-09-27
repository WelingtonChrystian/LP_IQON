import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { processSection, steps } from "@/content/process";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="grain section-y bg-abismo">
      <Container>
        <SectionIntro id="processo-title" title={processSection.title} />

        <ol className="relative mt-14 lg:mt-20 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:before:absolute lg:before:inset-x-0 lg:before:top-0 lg:before:h-px lg:before:bg-lilas/25">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative border-l border-lilas/25 pb-12 pl-8 last:pb-0 lg:border-l-0 lg:pb-0 lg:pl-0 lg:pt-10"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-lilas lg:-top-1 lg:left-0"
              />
              <p aria-hidden="true" className="font-display text-[2.5rem] leading-none text-lilas">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-h4 text-balance text-luz">{step.title}</h3>
              <p className="mt-3 text-small text-pretty text-luz-suave">{step.text}</p>
              <p className="mt-4 font-display text-[1.25rem] leading-snug italic text-pretty text-luz">
                {step.note}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
