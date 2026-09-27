import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { proofSections, testimonials } from "@/content/proof";

/** Só aparece quando houver depoimentos reais em content/proof.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="section-y bg-noite">
      <Container>
        <SectionIntro id="depoimentos-title" title={proofSections.testimonials.title} />
        <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <li key={`${testimonial.name}-${testimonial.business}`}>
              <figure className="flex h-full flex-col border-t border-lilas/20 pt-8">
                <blockquote className="font-display text-h4 text-pretty text-luz">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-6 text-small text-luz-suave">
                  <span className="block font-medium text-luz">{testimonial.name}</span>
                  {testimonial.role}, {testimonial.business}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
