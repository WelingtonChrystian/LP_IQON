"use client";

import { Check } from "lucide-react";
import { useDiagnostic } from "@/components/diagnostic/DiagnosticProvider";
import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { diagnosis, pains } from "@/content/pains";
import { ctas } from "@/content/site";
import { cn } from "@/lib/cn";

export function PainPoints() {
  const { selected, isSelected, toggle } = useDiagnostic();
  const markedCount = pains.filter((pain) => selected.includes(pain.id)).length;

  return (
    <section
      id="gargalos"
      aria-labelledby="gargalos-title"
      className="on-light section-y bg-nevoa text-tinta"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-label font-medium uppercase tracking-wider text-violeta">
              {diagnosis.tagline}
            </p>
            <h2 id="gargalos-title" className="mt-1.5 font-display text-h2 text-balance">
              {diagnosis.title}
            </h2>
          </div>
          <p className="text-small text-tinta-suave max-w-md">
            {diagnosis.intro}
          </p>
        </div>

        {/* Bento Grid compacto de gargalos clicáveis */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => {
            const checked = isSelected(pain.id);
            return (
              <label
                key={pain.id}
                className={cn(
                  "group relative flex cursor-pointer flex-col justify-between rounded-2xl border p-5 transition-all duration-200 select-none",
                  checked
                    ? "border-violeta bg-white shadow-sm ring-1 ring-violeta"
                    : "border-tinta/10 bg-white/60 hover:border-violeta/40 hover:bg-white",
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggle(pain.id)}
                />

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-label font-medium uppercase tracking-wider transition-colors",
                        checked
                          ? "bg-violeta/10 text-violeta font-semibold"
                          : "bg-tinta/5 text-tinta-suave",
                      )}
                    >
                      {pain.tag}
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-5 place-items-center rounded-full border transition-all",
                        checked
                          ? "border-violeta bg-violeta text-white"
                          : "border-tinta/25 text-transparent group-hover:border-violeta/60",
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-sans text-h4 font-medium text-tinta">
                    {pain.title}
                  </h3>

                  <p className="mt-1.5 text-small text-pretty text-tinta-suave">
                    {pain.detail}
                  </p>
                </div>
              </label>
            );
          })}
        </div>

        {/* Barra de ação compacta */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 rounded-2xl border border-tinta/10 bg-white/70 px-5 py-3.5 backdrop-blur-sm">
          <p aria-live="polite" className="text-small font-medium text-tinta">
            {diagnosis.status(markedCount)}
          </p>

          <WhatsAppCta
            className={buttonStyles({
              variant: "brand",
              size: "md",
              className: "shrink-0",
            })}
          >
            {ctas.diagnosis}
          </WhatsAppCta>
        </div>
      </Container>
    </section>
  );
}
