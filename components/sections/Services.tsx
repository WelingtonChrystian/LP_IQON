"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import {
  actionModules,
  customScope,
  frontsOfActionSection,
} from "@/content/services";
import { ctas } from "@/content/site";
import { cn } from "@/lib/cn";

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const current = actionModules[activeTab];

  return (
    <section
      id="frentes"
      aria-labelledby="frentes-title"
      className="on-light section-y bg-papel text-tinta"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-medium uppercase tracking-wider text-violeta">
            {frontsOfActionSection.tagline}
          </p>
          <h2 id="frentes-title" className="mt-1.5 font-display text-h2 text-balance">
            {frontsOfActionSection.title}
          </h2>
          <p className="mt-3 text-lead text-pretty text-tinta-suave">
            {frontsOfActionSection.intro}
          </p>
        </div>

        {/* Seletor em Abas / Pills compactas */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-tinta/10 pb-4">
          {actionModules.map((module, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={module.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={cn(
                  "rounded-full px-4 py-2 text-small font-medium transition-all select-none cursor-pointer",
                  isActive
                    ? "bg-violeta text-white shadow-sm"
                    : "bg-tinta/5 text-tinta-suave hover:bg-tinta/10 hover:text-tinta",
                )}
              >
                {module.shortName}
              </button>
            );
          })}
        </div>

        {/* Card Interativo da Frente Ativa */}
        <div className="mt-5 rounded-2xl border border-tinta/10 bg-white p-6 sm:p-8 shadow-xs">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-label font-semibold uppercase tracking-wider text-violeta">
                  Frente 0{activeTab + 1}
                </span>
                <h3 className="mt-1 font-sans text-h3 font-medium text-tinta">
                  {current.name}
                </h3>
                <p className="mt-2.5 text-body font-medium text-tinta leading-snug">
                  {current.headline}
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-nevoa/60 p-3.5">
                <p className="text-label font-semibold uppercase tracking-wider text-tinta-suave">
                  Para quem é:
                </p>
                <p className="mt-1 text-small text-tinta-suave">
                  {current.audience}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between border-t border-tinta/10 pt-5 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <div>
                <p className="text-label font-semibold uppercase tracking-wider text-tinta-suave">
                  O que contempla:
                </p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {current.delivers.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-nevoa/40 px-3 py-2 text-small text-tinta"
                    >
                      <Check className="size-3.5 shrink-0 text-violeta" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-tinta/10 pt-4">
                <p className="text-small font-medium text-violeta">
                  ✦ {current.outcome}
                </p>
                <WhatsAppCta
                  className="inline-flex items-center gap-1.5 text-small font-semibold text-tinta hover:text-violeta transition-colors"
                >
                  Consultar frente <ArrowRight className="size-4" />
                </WhatsAppCta>
              </div>
            </div>
          </div>
        </div>

        {/* Como estruturamos a proposta sob medida — Grid de 4 pilares enxutos */}
        <div className="mt-8 rounded-2xl bg-abismo p-6 text-luz sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-lilas/15 pb-4">
            <h3 className="font-sans text-h4 font-medium text-luz">
              {customScope.title}
            </h3>
            <WhatsAppCta className={buttonStyles({ variant: "outline-dark", size: "md" })}>
              {ctas.scope}
            </WhatsAppCta>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customScope.points.map((point) => (
              <div key={point.title} className="rounded-xl border border-lilas/15 bg-noite-card/60 p-4">
                <h4 className="text-small font-semibold text-lilas-claro">
                  {point.title}
                </h4>
                <p className="mt-1.5 text-small text-luz-suave leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
