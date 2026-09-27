"use client";

import { useEffect, useState } from "react";
import { WhatsAppCta } from "@/components/diagnostic/WhatsAppCta";
import { buttonStyles } from "@/components/ui/button";
import { ctas } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * CTA fixo no mobile: aparece depois que o CTA do hero sai da tela
 * e some nas áreas marcadas com data-hide-sticky-cta (contato e rodapé).
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;

    const hideZones = document.querySelectorAll("[data-hide-sticky-cta]");
    const zonesInView = new Set<Element>();
    let scrolledPastHero = false;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroCta) {
          scrolledPastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        } else if (entry.isIntersecting) {
          zonesInView.add(entry.target);
        } else {
          zonesInView.delete(entry.target);
        }
      }
      setVisible(scrolledPastHero && zonesInView.size === 0);
    });

    observer.observe(heroCta);
    hideZones.forEach((zone) => observer.observe(zone));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-lilas/15 bg-abismo/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-500 ease-out-soft motion-reduce:transition-none lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <WhatsAppCta className={buttonStyles({ variant: "light", className: "w-full" })}>
        {ctas.conversation}
      </WhatsAppCta>
    </div>
  );
}
