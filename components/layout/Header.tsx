import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/visuals/Wordmark";
import { ctas, navigation } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lilas/10 bg-abismo/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <a href="#inicio" className="-mx-2 inline-flex min-h-12 items-center rounded-lg px-2 text-luz">
          <Wordmark className="text-xl" />
          <span className="sr-only">, voltar ao início</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-12 items-center rounded-full px-4 text-small text-luz-suave transition-colors duration-300 hover:text-luz"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppCta className={buttonStyles({ variant: "light" })}>
              {ctas.header}
            </WhatsAppCta>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
