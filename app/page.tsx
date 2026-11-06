import { ThreeBackground } from "@/components/3d/ThreeBackground";
import { ThreeLoader } from "@/components/3d/ThreeLoader";
import { DiagnosticProvider } from "@/components/diagnostic/DiagnosticProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { PainPoints } from "@/components/sections/PainPoints";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

/**
 * Landing Page IQON — Modelo Compacto & Premium com Three.js:
 * - ThreeLoader: Transição de entrada suave e tecnológica
 * - ThreeBackground: Canvas 3D interativo com reação ao scroll e mouse
 * - 1. Hero — Posicionamento
 * - 2. Gargalos — Bento Grid interativo
 * - 3. O Método IQON — 3 etapas compactas
 * - 4. Frentes de Atuação — Abas interativas
 * - 5. Manifesto & Princípios
 * - 6. Equipe
 * - 7. Como Funciona a Parceria
 * - 8. FAQ
 * - 9. CTA Final
 */
export default function Home() {
  return (
    <DiagnosticProvider>
      <ThreeLoader />
      <ThreeBackground />
      <Header />
      <main id="conteudo" tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <PainPoints />
        <Process />
        <Services />
        <Manifesto />
        <Team />
        <Results />
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
