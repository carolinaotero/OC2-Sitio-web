import React from 'react';
import { usePageTitle } from "../hooks/usePageTitle";
import svgPaths from "../imports/Nosotros-1/svg-4mdnwotgja";
import imgNosotrosEstrategia1 from "../imports/Nosotros-1/nosotros-estrategia-ajedrez.webp";
import imgNosotrosEstrategia1Svg from "../imports/Nosotros-1/nosotros-estrategia-ajedrez.svg";
import textos from '../content/textos-nosotros.json';
import { FadeUp } from "../components/ScrollReveal";

function HeroSection() {
  const h = textos.nosotros.hero;
  return (
    <div className="w-full relative px-6 md:px-[48px] pb-16 md:pb-[160px] max-w-[1400px] mx-auto flex justify-center items-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-[1280px]">
        <FadeUp delay={0} className="flex flex-col items-start gap-8 z-10 w-full lg:w-1/2">
          <p className="font-sans font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none">
            {h.eyebrow}
          </p>
          <div className="flex flex-col font-serif font-normal text-[#5d89b4] text-5xl sm:text-6xl md:text-[80px] lg:text-[96px] tracking-tight md:tracking-[-1.92px] leading-[1.1] md:leading-[96px]">
            <span className="block">{h.palabra1}</span>
            <span className="block">{h.palabra2}</span>
            <span className="block italic text-[#a28c6a]">{h.palabra3}</span>
          </div>
          <div className="h-[20px] w-[66px] -mt-4">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
              <path d="M0 0L66 10.0182L0 20V0Z" fill="#DFCAA3" />
            </svg>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} y={24} className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[580px]">
            <picture>
              <source srcSet={imgNosotrosEstrategia1} type="image/webp" />
              <img
                alt="Estrategia y ajedrez"
                className="w-full h-auto block pointer-events-none"
                src={imgNosotrosEstrategia1Svg}
              />
            </picture>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

function PhilosophySection() {
  const f = textos.nosotros.filosofia;
  return (
    <div className="bg-[#5d89b4] w-full relative py-16 md:py-24 lg:py-[96px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[48px] flex flex-col items-center gap-[64px] md:gap-[96px]">

        <FadeUp delay={0} className="flex flex-col items-center gap-[24px] max-w-[628px] text-center w-full">
          <h2 className="font-serif font-normal text-white text-[32px] md:text-[48px] leading-[1.2] md:leading-[60px]">
            {f.titulo_1} <br className="hidden md:block" />
            <span className="italic text-[#dfcaa3]">{f.titulo_2}</span>
          </h2>
          <div className="w-[117px] h-[1px] bg-[#DFCAA3]" />
        </FadeUp>

        <FadeUp delay={0.15} className="flex flex-col items-start gap-8 w-full max-w-[720px]">
          <div className="w-full overflow-hidden">
            <div className="float-left w-[68px] md:w-[103px] shrink-0 aspect-[103/101] relative mr-[20px] md:mr-[32px] mb-[4px] mt-1 md:mt-0">
              <svg className="absolute inset-0 w-full h-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 134.614 132">
                <path d={svgPaths.p374d6f80} fill="#DFCAA3" />
              </svg>
            </div>
            <div className="font-['Manrope',sans-serif] font-normal text-white text-[18px] md:text-[22px] leading-[1.5]">
              <p>{f.parrafo1}</p>
            </div>
          </div>

          <div className="flex flex-col font-['Manrope',sans-serif] font-normal text-white text-[18px] md:text-[22px] leading-[1.5] gap-[24px] w-full">
            <p>{f.parrafo2}</p>
            <p>{f.parrafo3}</p>
            <p>{f.parrafo4}</p>
          </div>
        </FadeUp>

        {/* Logo Bottom */}
        <div className="w-[120px] md:w-[171px] h-[40px] md:h-[56px] relative mt-8">
          <svg className="absolute inset-0 w-full h-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 171 56">
            <path d={svgPaths.p107a8d80} fill="#DFCAA3" />
            <path d={svgPaths.p3f239a00} fill="#DFCAA3" />
            <path d={svgPaths.p26ffc000} fill="#DFCAA3" />
            <path d={svgPaths.p7ccc480} fill="#DFCAA3" />
          </svg>
        </div>
        
      </div>
    </div>
  );
}

function QuoteDivider() {
  return (
    <div className="flex items-center justify-center w-full max-w-[237px] gap-[8px]">
      <div className="h-[2px] flex-1 bg-[#A28C6A]" />
      <div className="w-[43px] h-[32px] shrink-0 relative">
        <svg className="absolute inset-0 w-full h-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 43 32">
          <path d={svgPaths.p13b45d80} fill="#A28C6A" />
          <path d={svgPaths.p23447200} fill="#A28C6A" />
        </svg>
      </div>
      <div className="h-[2px] flex-1 bg-[#A28C6A]" />
    </div>
  );
}

function QuoteDividerBottom() {
  return (
    <div className="flex items-center justify-center w-full max-w-[237px] gap-[8px] scale-x-[-1] scale-y-[-1]">
      <div className="h-[2px] flex-1 bg-[#A28C6A]" />
      <div className="w-[43px] h-[32px] shrink-0 relative">
        <svg className="absolute inset-0 w-full h-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 43 32">
          <path d={svgPaths.p20a59200} fill="#A28C6A" />
          <path d={svgPaths.p22545f00} fill="#A28C6A" />
        </svg>
      </div>
      <div className="h-[2px] flex-1 bg-[#A28C6A]" />
    </div>
  );
}

function QuoteSection() {
  const c = textos.nosotros.quote;
  return (
    <div className="w-full bg-[#fbf9f3] py-16 md:py-[98px]">
      <FadeUp className="max-w-[1280px] mx-auto px-6 md:px-[48px] flex flex-col items-center justify-center gap-[32px]">
        <QuoteDivider />
        <h2 className="font-serif font-normal text-[#a28c6a] text-[28px] md:text-[40px] text-center leading-[1.2] max-w-[600px] tracking-tight md:tracking-[-0.8px]">
          {c.texto}
        </h2>
        <QuoteDividerBottom />
      </FadeUp>
    </div>
  );
}

export function Nosotros() {
  usePageTitle('Nosotros | OC2 Consultoría en Comunicaciones');
  return (
    <div className="bg-[#fbf9f3] flex flex-col items-center w-full min-h-screen pt-40">
      <HeroSection />
      <PhilosophySection />
      <QuoteSection />
    </div>
  );
}
