import { ArrowUpRight, Check } from "lucide-react";
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
      className="grain section-y relative isolate overflow-hidden bg-abismo/75 backdrop-blur-[2px]"
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center w-full min-w-0">
        <div className="w-full min-w-0 lg:col-span-5">
          <p className="text-label font-medium uppercase tracking-wider text-lilas">
            {finalCta.tagline}
          </p>
          <h2 id="contato-title" className="mt-1.5 text-h2 font-semibold tracking-tight text-balance text-luz">
            {finalCta.title}
          </h2>
          <p className="mt-2 text-h3 font-medium text-lilas">
            {finalCta.lead}
          </p>
          <p className="mt-3 text-small text-pretty text-luz-suave max-w-md leading-relaxed">
            {finalCta.text}
          </p>

          <ul className="mt-6 space-y-2.5">
            {finalCta.assurances.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-small text-luz">
                <span
                  aria-hidden="true"
                  className="grid size-4 place-items-center rounded-full bg-lilas/20 text-lilas-claro shrink-0"
                >
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-lilas/15 pt-5">
            <p className="text-small text-luz-suave">{instagramInvite.title}</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-small font-medium text-luz underline decoration-lilas/50 underline-offset-4 hover:decoration-lilas transition-colors"
            >
              {instagramInvite.linkLabel}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>

        <LeadForm className="w-full min-w-0 lg:col-span-7" />
      </Container>
    </section>
  );
}
