import { getBrandLogo } from "@/lib/assets";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCta } from "@/components/layout/MobileCta";
import { Hero } from "@/components/sections/Hero";
import { Recognition } from "@/components/sections/Recognition";
import { RealProblem } from "@/components/sections/RealProblem";
import { BigIdea } from "@/components/sections/BigIdea";
import { Mechanism } from "@/components/sections/Mechanism";
import { DailyLoop } from "@/components/sections/DailyLoop";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Method30 } from "@/components/sections/Method30";
import { Inside } from "@/components/sections/Inside";
import { Situations } from "@/components/sections/Situations";
import { Bonus } from "@/components/sections/Bonus";
import { Proof } from "@/components/sections/Proof";
import { ForWho } from "@/components/sections/ForWho";
import { Comparison } from "@/components/sections/Comparison";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Page() {
  const logoSrc = getBrandLogo();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-semibold focus:text-[#04120a]"
      >
        Pular para o conteúdo
      </a>

      <Header logoSrc={logoSrc} />

      <main id="conteudo">
        {/* 1. reconhecimento imediato + produto + preço */}
        <Hero />

        {/* 2. a dor, em conversas que o leitor já viveu */}
        <Recognition />

        {/* 3. o custo real: improviso não é falta de esforço */}
        <RealProblem />

        {/* 4. a virada de perspectiva (big idea) */}
        <BigIdea />

        {/* 5. o mecanismo proprietário */}
        <Mechanism />

        {/* 6. como isso vira rotina dentro do app */}
        <DailyLoop />

        {/* 7. o produto aparece */}
        <AppShowcase />

        {/* 8. a jornada de 30 dias */}
        <Method30 />

        {/* 9. profundidade do conteúdo */}
        <Inside />

        {/* 10. situações concretas tratadas */}
        <Situations />

        {/* 11. bônus */}
        <Bonus />

        {/* 12. prova real (só aparece com assets reais) */}
        <Proof />

        {/* 13. filtro honesto */}
        <ForWho />

        {/* 14. improviso x processo */}
        <Comparison />

        {/* 15. oferta */}
        <Offer />

        {/* 16. objeções finais */}
        <Faq />

        {/* 17. último empurrão */}
        <FinalCta />
      </main>

      <Footer logoSrc={logoSrc} />
      <MobileCta />
    </>
  );
}
