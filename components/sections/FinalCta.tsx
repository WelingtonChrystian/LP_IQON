import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { finalCta, instagramInvite } from "@/content/contact";
import { site } from "@/content/site";
import { LeadForm } from "./LeadForm";

export function FinalCta() {
  return (
    <section
      id="contato"
      data-hide-sticky-cta
      aria-labelledby="contato-title"
      className="grain section-y relative isolate overflow-hidden bg-abismo"
    >
      {/* Anel duplo da identidade IQON, fechando a página. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-72 top-1/2 -z-10 size-[46rem] -translate-y-1/2 rounded-full border border-lilas/10 lg:-right-48"
      >
        <div className="absolute inset-12 rounded-full border border-lilas/10" />
      </div>

      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 id="contato-title" className="font-display text-h2 text-balance text-luz">
            {finalCta.title}
          </h2>
          <p className="mt-6 text-lead text-pretty text-luz">{finalCta.lead}</p>
          <p className="mt-3 max-w-[30rem] text-lead text-pretty text-luz-suave">{finalCta.text}</p>
          <p className="mt-6 max-w-[30rem] font-display text-h4 italic text-pretty text-lilas-claro">
            {finalCta.note}
          </p>

          <ul className="mt-10 space-y-4">
            {finalCta.assurances.map((item) => (
              <li key={item} className="flex gap-3.5 text-body text-luz">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] size-2.5 shrink-0 rounded-full border border-lilas"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-lilas/15 pt-8">
            <p className="text-body text-pretty text-luz">{instagramInvite.title}</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-12 items-center gap-1.5 text-small font-medium text-luz underline decoration-lilas/50 underline-offset-4 transition-colors hover:decoration-lilas"
            >
              {instagramInvite.linkLabel}
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only"> ({site.instagram.handle}, abre em uma nova aba)</span>
            </a>
          </div>
        </div>

        <LeadForm className="lg:col-span-6 lg:col-start-7" />
      </Container>
    </section>
  );
}
