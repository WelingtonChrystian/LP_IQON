"use client";

import { Check } from "lucide-react";
import { useDiagnostic } from "@/components/diagnostic/DiagnosticProvider";
import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { diagnosis, pains } from "@/content/pains";
import { ctas } from "@/content/site";

export function PainPoints() {
  const { selected, isSelected, toggle } = useDiagnostic();
  // Só os pontos desta seção: a opção "ainda não sei" existe apenas no formulário final.
  const markedCount = pains.filter((pain) => selected.includes(pain.id)).length;

  return (
    <section
      id="desafios"
      aria-labelledby="desafios-title"
      className="on-light section-y bg-nevoa text-tinta"
    >
      <Container className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="desafios-title" className="font-display text-h2 text-balance">
            {diagnosis.title}
          </h2>
          <p className="mt-6 max-w-[30rem] text-lead text-pretty text-tinta-suave">
            {diagnosis.intro}
          </p>
        </div>

        <fieldset className="lg:col-span-7 lg:col-start-6 lg:row-span-2">
          <legend className="sr-only">{diagnosis.legend}</legend>
          <ul className="border-t border-tinta/15">
            {pains.map((pain) => (
              <li key={pain.id} className="border-b border-tinta/15">
                <label className="group -mx-2 flex cursor-pointer items-start gap-5 rounded-2xl px-2 py-6 transition-colors duration-300 hover:bg-white/50 has-checked:bg-white/70 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-violeta motion-reduce:transition-none sm:-mx-4 sm:gap-6 sm:px-4 sm:py-7">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isSelected(pain.id)}
                    onChange={() => toggle(pain.id)}
                  />
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border-[1.5px] border-tinta/30 text-white transition-colors duration-300 group-hover:border-violeta/60 group-has-checked:border-violeta group-has-checked:bg-violeta motion-reduce:transition-none"
                  >
                    <Check
                      className="size-4 scale-50 opacity-0 transition duration-300 group-has-checked:scale-100 group-has-checked:opacity-100 motion-reduce:transition-none"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-h4 text-tinta">{pain.title}</span>
                    <span className="mt-1.5 block text-body text-tinta-suave">{pain.detail}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        <div className="lg:col-span-5 lg:self-end">
          <p aria-live="polite" className="text-small text-tinta-suave">
            {diagnosis.status(markedCount)}
          </p>
          <WhatsAppCta
            className={buttonStyles({ variant: "brand", size: "lg", className: "mt-5 w-full sm:w-auto" })}
          >
            {ctas.diagnosis}
          </WhatsAppCta>
        </div>
      </Container>
    </section>
  );
}
