import { Plus } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { faq, faqSection } from "@/content/faq";
import { ctas, whatsappMessages } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

/** Accordion nativo (<details name>): acessível, sem JavaScript e com um item aberto por vez. */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="on-light section-y bg-papel text-tinta">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="duvidas-title" className="font-display text-h2 text-balance">
            {faqSection.title}
          </h2>
          <p className="mt-6 max-w-[26rem] text-body text-pretty text-tinta-suave">
            {faqSection.intro}
          </p>
          <a
            href={whatsappHref(whatsappMessages.question)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ variant: "outline-light", className: "mt-8" })}
          >
            {ctas.question}
            <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
          </a>
        </div>

        <div className="border-t border-tinta/15 lg:col-span-7 lg:col-start-6">
          {faq.map((item) => (
            <details key={item.question} name="duvidas" className="faq-item group border-b border-tinta/15">
              <summary className="flex min-h-12 cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-h4 text-tinta transition-colors duration-300 hover:text-violeta">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-tinta/20 transition duration-300 group-open:rotate-45 group-open:border-violeta group-open:bg-violeta group-open:text-white motion-reduce:transition-none"
                >
                  <Plus className="size-4" strokeWidth={2} />
                </span>
              </summary>
              <div className="max-w-[60ch] space-y-3 pb-7 pr-14 text-body text-pretty text-tinta-suave">
                {item.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
