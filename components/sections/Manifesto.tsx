import { Container } from "@/components/ui/Container";
import { manifesto, principles } from "@/content/positioning";

export function Manifesto() {
  const [firstLine, secondLine] = manifesto.titleLines;

  return (
    <section id="posicionamento" aria-labelledby="manifesto-title" className="section-y bg-noite/80 backdrop-blur-[2px]">
      <Container>
        <div className="max-w-3xl">
          <h2 id="manifesto-title" className="text-h2 font-semibold tracking-tight text-luz">
            <span className="block text-balance">{firstLine}</span>
            <span className="block text-balance text-lilas">{secondLine}</span>
          </h2>
          <p className="mt-3 text-lead text-luz-suave max-w-2xl">
            {manifesto.subtitle}
          </p>
        </div>

        {/* 4 Princípios em Grid 4 colunas compacto */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-lilas/15 bg-noite-card/60 p-5 backdrop-blur-sm"
            >
              <span className="font-display text-xl font-light text-lilas/50">
                {principle.number}
              </span>
              <h3 className="mt-2 font-sans text-h4 font-medium text-luz">
                {principle.title}
              </h3>
              <p className="mt-2 text-small text-luz-suave leading-relaxed">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
