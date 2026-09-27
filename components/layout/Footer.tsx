import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/visuals/Wordmark";
import { footer, navigation, site, whatsappMessages } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

const linkClass =
  "inline-flex min-h-12 items-center text-body text-luz transition-colors duration-300 hover:text-lilas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-hide-sticky-cta className="border-t border-lilas/10 bg-abismo">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-6">
          <a href="#inicio" className="-mx-2 inline-flex min-h-12 items-center rounded-lg px-2 text-luz">
            <Wordmark className="text-2xl" />
            <span className="sr-only">, voltar ao início</span>
          </a>
          <p className="mt-5 font-display text-h4 italic text-luz">{site.tagline}</p>
          <p className="mt-3 max-w-md text-small text-pretty text-luz-suave">{footer.description}</p>
        </div>

        <nav aria-labelledby="rodape-navegacao" className="lg:col-span-3">
          <h2 id="rodape-navegacao" className="text-small font-medium text-luz-suave">
            Navegação
          </h2>
          <ul className="mt-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-small font-medium text-luz-suave">Contato</h2>
          <ul className="mt-3">
            <li>
              <a
                href={whatsappHref(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp {site.whatsapp.display}
                <span className="sr-only"> (abre em uma nova aba)</span>
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram {site.instagram.handle}
                <span className="sr-only"> (abre em uma nova aba)</span>
              </a>
            </li>
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>

      <Container>
        <p className="border-t border-lilas/10 py-8 text-label text-luz-suave">
          © {year} {site.name}. {footer.rights}
        </p>
      </Container>
    </footer>
  );
}
