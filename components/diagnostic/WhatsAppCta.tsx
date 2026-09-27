"use client";

import type { ComponentProps } from "react";
import { composeLeadMessage, whatsappHref } from "@/lib/whatsapp";
import { useDiagnostic } from "./DiagnosticProvider";

type WhatsAppCtaProps = Omit<ComponentProps<"a">, "href" | "target" | "rel">;

/** Link para o WhatsApp da IQON com as dores marcadas já escritas na mensagem. */
export function WhatsAppCta({ children, ...props }: WhatsAppCtaProps) {
  const { selected } = useDiagnostic();

  return (
    <a
      href={whatsappHref(composeLeadMessage(selected))}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}
