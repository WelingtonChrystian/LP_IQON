import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { projects, proofSections } from "@/content/proof";

/** Só aparece quando houver projetos reais em content/proof.ts. */
export function Portfolio() {
  if (projects.length === 0) return null;

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-y bg-noite">
      <Container>
        <SectionIntro
          id="projetos-title"
          title={proofSections.projects.title}
          intro={proofSections.projects.intro}
        />
        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name}>
              <article>
                <div className="overflow-hidden rounded-3xl bg-abismo">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={800}
                    height={1000}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <p className="mt-6 text-small font-medium text-lilas">{project.category}</p>
                <h3 className="mt-1 font-display text-h3 text-luz">{project.name}</h3>
                <p className="mt-2 text-body text-pretty text-luz-suave">{project.context}</p>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-12 items-center text-small font-medium text-luz underline decoration-lilas/50 underline-offset-4 transition-colors hover:decoration-lilas"
                  >
                    {proofSections.projects.linkLabel}
                    <span className="sr-only"> {project.name} (abre em uma nova aba)</span>
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
