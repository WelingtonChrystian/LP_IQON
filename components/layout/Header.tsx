import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/visuals/Wordmark";
import { ctas, navigation } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lilas/10 bg-abismo/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="-mx-2 inline-flex items-center rounded-lg px-2 text-luz">
          <Wordmark className="text-lg" />
          <span className="sr-only">, voltar ao início</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-small text-luz-suave transition-colors duration-200 hover:text-luz"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppCta className={buttonStyles({ variant: "light", size: "md" })}>
              {ctas.header}
            </WhatsAppCta>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
