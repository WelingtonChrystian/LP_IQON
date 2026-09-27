import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { team, teamSection, type TeamMember } from "@/content/team";
import { cn } from "@/lib/cn";

export function Team() {
  const [closingLead, closingEnd] = teamSection.closing;

  return (
    <section id="equipe" aria-labelledby="equipe-title" className="on-light section-y bg-nevoa text-tinta">
      <Container>
        <SectionIntro
          id="equipe-title"
          tone="light"
          title={teamSection.title}
          intro={teamSection.intro}
        />

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20">
          {team.map((member) => (
            <li key={member.name} className="border-t border-tinta/15 pt-8">
              <Portrait member={member} />
              <h3 className="mt-7 font-display text-h3">{member.name}</h3>
              <p className="mt-1 text-small font-medium text-violeta">{member.role}</p>
              <p className="mt-4 text-body text-pretty text-tinta-suave">{member.bio}</p>
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-[52rem] font-display text-h3 italic text-balance text-tinta lg:mt-24">
          <span className="block">{closingLead}</span> <span className="block">{closingEnd}</span>
        </p>
      </Container>
    </section>
  );
}

const portraitRing = "size-24 rounded-full ring-1 ring-tinta/10 ring-offset-[6px] ring-offset-nevoa";

/** Foto quando houver; até lá, monograma no anel duplo da marca. */
function Portrait({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo.src}
        alt={member.photo.alt}
        width={192}
        height={192}
        className={cn(portraitRing, "object-cover")}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        portraitRing,
        "grid place-items-center border border-tinta/15 bg-papel font-display text-[2.75rem] leading-none text-violeta",
      )}
    >
      {member.name.charAt(0)}
    </span>
  );
}
