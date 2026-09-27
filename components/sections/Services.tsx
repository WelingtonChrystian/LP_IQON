import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import {
  additionalServices,
  additionalServicesTitle,
  coreServices,
  scope,
  servicesSection,
} from "@/content/services";
import { ctas, whatsappMessages } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="on-light section-y bg-papel text-tinta"
    >
      <Container>
        <SectionIntro
          id="servicos-title"
          tone="light"
          title={servicesSection.title}
          intro={servicesSection.intro}
        />

        <ol className="mt-14 border-t border-tinta/15 lg:mt-20">
          {coreServices.map((service, index) => (
            <li
              key={service.id}
              className="grid gap-6 border-b border-tinta/15 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14"
            >
              <div className="lg:col-span-5">
                <h3>
                  <span className="block text-small font-medium text-violeta">
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")} · </span>
                    {service.name}
                    <span className="sr-only">: </span>
                  </span>
                  <span className="mt-3 block font-display text-h3 text-balance">{service.title}</span>
                </h3>
                <p className="mt-3 max-w-[28rem] text-body text-pretty text-tinta-suave">
                  {service.audience}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-small font-medium text-tinta-suave">
                  {servicesSection.deliversLabel}
                </p>
                <p className="mt-2 text-body text-pretty text-tinta">{service.delivers}</p>
                <p className="mt-6 font-display text-h4 italic text-pretty text-tinta">
                  {service.outcome}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <h3 className="font-display text-h3 lg:col-span-4">{additionalServicesTitle}</h3>
          <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {additionalServices.map((service) => (
              <li key={service.name}>
                <p className="font-medium text-tinta">{service.name}</p>
                <p className="mt-1.5 text-small text-pretty text-tinta-suave">{service.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="on-dark grain mt-20 rounded-[2rem] bg-abismo p-7 text-luz sm:p-12 lg:mt-24 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-display text-h3 text-balance">{scope.title}</h3>
              <p className="mt-4 text-body text-pretty text-luz-suave">{scope.intro}</p>
              <a
                href={whatsappHref(whatsappMessages.question)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: "outline-dark", className: "mt-8" })}
              >
                {ctas.scope}
                <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
              </a>
            </div>

            <div className="lg:col-span-7">
              <h4 className="text-small font-medium text-lilas">{scope.includedTitle}</h4>
              <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {scope.included.map((item) => (
                  <li key={item} className="flex gap-3.5 text-body">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] size-2.5 shrink-0 rounded-full bg-lilas"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-lilas/15 pt-10 lg:mt-14">
            <h4 className="text-small font-medium text-luz-suave">{scope.clientSideTitle}</h4>
            <ul className="mt-5 grid gap-8 md:grid-cols-3">
              {scope.clientSide.map(({ item, note }) => (
                <li key={item} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] size-2.5 shrink-0 rounded-full border border-luz-suave"
                  />
                  <span>
                    <span className="block text-body text-luz">{item}</span>
                    <span className="mt-1 block text-small text-pretty text-luz-suave">{note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
