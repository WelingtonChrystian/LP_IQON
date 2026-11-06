import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/visuals/Wordmark";
import { footer, navigation, site, whatsappMessages } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

const linkClass =
  "inline-flex items-center text-small text-luz-suave transition-colors hover:text-luz py-1";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-hide-sticky-cta className="border-t border-lilas/10 bg-abismo">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-12 lg:py-12">
        <div className="sm:col-span-2 lg:col-span-6">
          <a href="#inicio" className="-mx-2 inline-flex items-center rounded-lg px-2 text-luz">
            <Wordmark className="text-xl" />
            <span className="sr-only">, voltar ao início</span>
          </a>
          <p className="mt-2 text-small font-medium text-luz">{site.tagline}</p>
          <p className="mt-2 max-w-md text-small text-pretty text-luz-suave">{footer.description}</p>
        </div>

        <nav aria-labelledby="rodape-navegacao" className="lg:col-span-3">
          <h2 id="rodape-navegacao" className="text-label font-medium uppercase tracking-wider text-lilas-claro">
            Navegação
          </h2>
          <ul className="mt-2.5 space-y-1">
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
          <h2 className="text-label font-medium uppercase tracking-wider text-lilas-claro">Contato</h2>
          <ul className="mt-2.5 space-y-1">
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
        <p className="border-t border-lilas/10 py-5 text-label text-luz-suave/80">
          © {year} {site.name}. {footer.rights}
        </p>
      </Container>
    </footer>
  );
}
