"use client";

import { Menu, X } from "lucide-react";
import { useRef } from "react";
import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { Wordmark } from "@/components/visuals/Wordmark";
import { ctas, navigation, site } from "@/content/site";

/** Menu em <dialog> modal: foco preso, Esc fecha e o fundo fica inerte sem bibliotecas. */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-controls="menu-movel"
        className="grid size-12 place-items-center rounded-full border border-lilas/25 text-luz transition-colors duration-300 hover:bg-lilas/10"
      >
        <Menu aria-hidden="true" className="size-5" />
        <span className="sr-only">Abrir menu</span>
      </button>

      <dialog
        id="menu-movel"
        ref={dialogRef}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-abismo p-0 text-luz backdrop:bg-abismo/70 open:flex open:flex-col"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-lilas/10 px-5 sm:px-8">
          <Wordmark className="text-xl" />
          <button
            type="button"
            onClick={close}
            className="grid size-12 place-items-center rounded-full border border-lilas/25 transition-colors duration-300 hover:bg-lilas/10"
          >
            <X aria-hidden="true" className="size-5" />
            <span className="sr-only">Fechar menu</span>
          </button>
        </div>

        <nav aria-label="Menu principal" className="flex-1 overflow-y-auto px-5 py-10 sm:px-8">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="flex min-h-12 items-center font-sans text-2xl font-medium text-luz"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center text-small text-luz-suave underline decoration-lilas/40 underline-offset-4"
          >
            {site.instagram.handle} no Instagram
            <span className="sr-only"> (abre em uma nova aba)</span>
          </a>
        </nav>

        <div className="border-t border-lilas/10 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-8">
          <WhatsAppCta
            onClick={close}
            className={buttonStyles({ variant: "light", size: "lg", className: "w-full" })}
          >
            {ctas.conversation}
          </WhatsAppCta>
        </div>
      </dialog>
    </div>
  );
}
