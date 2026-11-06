import { Plus } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { faq, faqSection } from "@/content/faq";
import { ctas, whatsappMessages } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="on-light section-y bg-papel text-tinta">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-label font-medium uppercase tracking-wider text-violeta">
            {faqSection.tagline}
          </p>
          <h2 id="duvidas-title" className="mt-1.5 font-display text-h2 text-balance">
            {faqSection.title}
          </h2>
          <p className="mt-2.5 text-small text-pretty text-tinta-suave">
            {faqSection.intro}
          </p>
          <a
            href={whatsappHref(whatsappMessages.question)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ variant: "outline-light", size: "md", className: "mt-6" })}
          >
            {ctas.question}
            <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
          </a>
        </div>

        <div className="border-t border-tinta/10 lg:col-span-8">
          {faq.map((item) => (
            <details key={item.question} name="duvidas" className="faq-item group border-b border-tinta/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-sans text-h4 font-medium text-tinta transition-colors hover:text-violeta">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="grid size-6 shrink-0 place-items-center rounded-full border border-tinta/20 transition duration-200 group-open:rotate-45 group-open:border-violeta group-open:bg-violeta group-open:text-white"
                >
                  <Plus className="size-3.5" strokeWidth={2} />
                </span>
              </summary>
              <div className="pb-5 pr-8 text-small text-pretty text-tinta-suave leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
