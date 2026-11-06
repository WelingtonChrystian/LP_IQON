import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { team, teamSection, type TeamMember } from "@/content/team";
import { cn } from "@/lib/cn";

export function Team() {
  return (
    <section id="equipe" aria-labelledby="equipe-title" className="on-light section-y bg-nevoa text-tinta">
      <Container>
        <div className="max-w-2xl">
          <p className="text-label font-medium uppercase tracking-wider text-violeta">
            {teamSection.tagline}
          </p>
          <h2 id="equipe-title" className="mt-1.5 font-display text-h2 text-balance">
            {teamSection.title}
          </h2>
          <p className="mt-2.5 text-lead text-pretty text-tinta-suave">
            {teamSection.intro}
          </p>
        </div>

        {/* 3 cards de equipe modernos e enxutos */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-tinta/10 bg-white p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5">
                  <Portrait member={member} />
                  <div>
                    <h3 className="font-sans text-h4 font-medium text-tinta">
                      {member.name}
                    </h3>
                    <p className="text-label font-semibold text-violeta uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mt-3.5 text-small text-pretty text-tinta-suave leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-4 border-t border-tinta/10 pt-3">
                <span className="inline-block rounded-full bg-nevoa px-2.5 py-1 text-label font-medium text-tinta-suave">
                  ✦ {member.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const portraitRing = "size-12 rounded-full ring-1 ring-tinta/10";

function Portrait({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo.src}
        alt={member.photo.alt}
        width={96}
        height={96}
        className={cn(portraitRing, "object-cover")}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        portraitRing,
        "grid place-items-center border border-tinta/15 bg-nevoa font-display text-lg font-medium text-violeta shrink-0",
      )}
    >
      {member.name.charAt(0)}
    </span>
  );
}
