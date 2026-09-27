import { DiagnosticProvider } from "@/components/diagnostic/DiagnosticProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Fronts } from "@/components/sections/Fronts";
import { Hero } from "@/components/sections/Hero";
import { IqonSystem } from "@/components/sections/IqonSystem";
import { Manifesto } from "@/components/sections/Manifesto";
import { PainPoints } from "@/components/sections/PainPoints";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

/**
 * Ordem da narrativa: problema → tensão → diagnóstico → sistema IQON → serviços →
 * processo → prova → objeções → conversa.
 */
export default function Home() {
  return (
    <DiagnosticProvider>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Fronts />
        <PainPoints />
        <Manifesto />
        <IqonSystem />
        <Services />
        <Process />
        <Results />
        <Team />
        {/* Portfolio e Testimonials só aparecem quando content/proof.ts tiver dados reais. */}
        <Portfolio />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </DiagnosticProvider>
  );
}
