import { Container } from "@/components/ui/Container";
import { manifesto, principles } from "@/content/positioning";

export function Manifesto() {
  const [firstLine, secondLine] = manifesto.titleLines;

  return (
    <section id="posicionamento" aria-labelledby="manifesto-title" className="section-y bg-noite">
      <Container>
        <h2 id="manifesto-title" className="font-display text-h2 text-luz">
          <span className="block text-balance">{firstLine}</span>{" "}
          <span className="block text-balance italic sm:pl-[12%] lg:pl-[22%]">{secondLine}</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-5 lg:col-start-3">
            {manifesto.argument.map((paragraph) => (
              <p key={paragraph} className="text-lead text-pretty text-luz-suave">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <p className="text-lead text-pretty text-luz">{manifesto.stance}</p>
            <p className="mt-6 font-display text-h3 italic text-lilas-claro">{manifesto.closing}</p>
          </div>
        </div>

        <ul className="mt-20 grid gap-x-16 gap-y-14 md:grid-cols-2 lg:mt-28 lg:gap-x-24">
          {principles.map((principle) => (
            <li key={principle.title} className="border-t border-lilas/20 pt-7">
              <h3 className="font-display text-h4 text-balance text-luz">{principle.title}</h3>
              <div className="mt-4 space-y-3 text-body text-pretty">
                {principle.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? "text-luz" : "text-luz-suave"}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-5 font-display text-[1.375rem] leading-snug italic text-pretty text-lilas-claro">
                {principle.closing}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
