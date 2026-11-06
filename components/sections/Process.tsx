import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { processSection, steps } from "@/content/process";

export function Process() {
  return (
    <section id="metodo" aria-labelledby="metodo-title" className="grain section-y bg-abismo/75 backdrop-blur-[2px]">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-medium uppercase tracking-wider text-lilas">
            {processSection.tagline}
          </p>
          <h2 id="metodo-title" className="mt-1.5 font-display text-h2 text-balance text-luz">
            {processSection.title}
          </h2>
          <p className="mt-3 text-lead text-pretty text-luz-suave">
            {processSection.intro}
          </p>
        </div>

        {/* 3 cards horizontais compactos */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-2xl border border-lilas/20 bg-noite-card/80 p-6 backdrop-blur-sm sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-lilas/10 pb-4">
                  <span className="rounded-full border border-lilas/30 bg-lilas/10 px-2.5 py-0.5 text-label font-medium uppercase tracking-wider text-lilas-claro">
                    {step.stage}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-light text-lilas/40"
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 font-sans text-h3 font-medium text-luz">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-small text-pretty text-luz-suave leading-relaxed">
                  {step.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-lilas/10 pt-4">
                  {step.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-small text-luz">
                      <span
                        aria-hidden="true"
                        className="grid size-3.5 shrink-0 place-items-center rounded-full bg-lilas/20 text-lilas-claro"
                      >
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-lilas/10 pt-4">
                <p className="text-label font-medium text-lilas-claro">
                  ✦ {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
