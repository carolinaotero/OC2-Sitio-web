import React from 'react';
import { usePageTitle } from "../hooks/usePageTitle";
import imgElDiscurso from "../imports/Section1TheSpeech/el-discurso.svg";
import imgComunicar from "../imports/Section2Communication/comunicar.svg";
import imgPrensaWebp from "../imports/Section3Press-1/prensa.webp";
import imgPrensaSVG from "../imports/Section3Press-1/prensa.svg";
import imgDemocracySVG from "../imports/Section2Communication-1/democracia-y-periodismo.svg";
import { FadeUp } from "../components/ScrollReveal";
import textos from "../content/textos-maximas.json";

function HeroSection() {
  const h = textos.maximas.hero;
  return (
    <section className="flex flex-col items-center justify-center w-full relative pb-8 md:pb-12" data-name="Hero Section: Perspective Split">
      <FadeUp className="flex flex-col gap-8 items-center max-w-[896px] w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="font-sans font-semibold text-[#a28c6a] text-sm tracking-[0.7px] uppercase leading-none">
            {h.eyebrow}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-serif font-normal text-[#5d89b4] text-5xl md:text-[96px] text-center tracking-[-0.05em] leading-[1.1] md:leading-[1]">
            {h.titulo_1}<br /><span className="italic text-[#a28c6a]">{h.titulo_2}</span>
          </h1>
        </div>
        <div style={{ marginTop: 16 }}>
          <svg width="79" height="24" viewBox="0 0 79 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L79 12.0219L0 24V0Z" fill="#DFCAA3"/>
          </svg>
        </div>
      </FadeUp>
    </section>
  );
}

function QuoteCard({ texto, autor, delay }: { texto: string; autor: string; delay: number }) {
  return (
    <FadeUp delay={delay} className="flex flex-col gap-4 items-start">
      <div className="bg-[#dfcaa3] h-px w-8 shrink-0" />
      <p className="font-serif font-medium text-[#3c5b79] text-xl md:text-[24px] leading-[1.5]">
        "{texto}".
      </p>
      {autor && (
        <p className="font-sans text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase leading-[1.6]">{autor}</p>
      )}
    </FadeUp>
  );
}

function Section1TheSpeech() {
  const sec = textos.maximas.secciones[0];
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-12 relative w-full items-start">
      <FadeUp delay={0} className="md:col-span-5 flex flex-col gap-6 items-start w-full">
        <h2 className="font-serif font-medium text-[#5d89b4] text-4xl md:text-[56px] tracking-[-1.12px] leading-[1.1]">
          {sec.titulo}
        </h2>
        <div className="flex flex-col items-center justify-center w-full mt-8 md:mt-16">
          <img src={imgElDiscurso} alt={sec.titulo} className="w-full max-w-[320px] h-auto block pointer-events-none" />
        </div>
      </FadeUp>
      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
        {sec.citas.map((c, i) => (
          <QuoteCard key={i} texto={c.texto} autor={c.autor} delay={(i + 1) * 0.1} />
        ))}
      </div>
    </section>
  );
}

function Section2Communication() {
  const sec = textos.maximas.secciones[1];
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-12 relative w-full items-start">
      <div className="md:col-span-7 order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
        {sec.citas.map((c, i) => (
          <QuoteCard key={i} texto={c.texto} autor={c.autor} delay={(i + 1) * 0.1} />
        ))}
      </div>
      <FadeUp delay={0} className="md:col-span-4 md:col-start-9 order-1 md:order-2 flex flex-col gap-6 items-end w-full text-right">
        <h2 className="font-serif font-medium text-[#5d89b4] text-4xl md:text-[56px] tracking-[-1.12px] leading-[1.1]">
          {sec.titulo}
        </h2>
        <div className="flex flex-col items-end justify-center w-full mt-8 md:mt-16">
          <img src={imgComunicar} alt={sec.titulo} className="w-full max-w-[296px] h-auto block pointer-events-none" />
        </div>
      </FadeUp>
    </section>
  );
}

function Section3Press() {
  const sec = textos.maximas.secciones[2];
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-12 relative w-full items-start">
      <FadeUp delay={0} className="md:col-span-5 flex flex-col gap-6 items-start w-full">
        <h2 className="font-serif font-medium text-[#5d89b4] text-4xl md:text-[56px] tracking-[-1.12px] leading-[1.1]">
          {sec.titulo}
        </h2>
        <div className="flex flex-col items-center justify-center w-full mt-8 md:mt-16">
          <picture>
            <source srcSet={imgPrensaWebp} type="image/webp" />
            <img src={imgPrensaSVG} alt={sec.titulo} className="w-full max-w-[296px] h-auto block pointer-events-none" />
          </picture>
        </div>
      </FadeUp>
      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
        {sec.citas.map((c, i) => (
          <QuoteCard key={i} texto={c.texto} autor={c.autor} delay={(i + 1) * 0.1} />
        ))}
      </div>
    </section>
  );
}

function Section4Democracy() {
  const sec = textos.maximas.secciones[3];
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-12 relative w-full items-start">
      <div className="md:col-span-7 order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
        {sec.citas.map((c, i) => (
          <QuoteCard key={i} texto={c.texto} autor={c.autor} delay={(i + 1) * 0.1} />
        ))}
      </div>
      <FadeUp delay={0} className="md:col-span-4 md:col-start-9 order-1 md:order-2 flex flex-col gap-6 items-end w-full text-right">
        <h2 className="font-serif font-medium text-[#5d89b4] text-4xl md:text-[56px] tracking-[-1.12px] leading-[1.1]">
          {sec.titulo}
        </h2>
        <div className="flex flex-col items-end justify-center w-full mt-8 md:mt-16">
          <img src={imgDemocracySVG} alt={sec.titulo} className="w-full max-w-[266px] h-auto block pointer-events-none" />
        </div>
      </FadeUp>
    </section>
  );
}


export function Maximas() {
  usePageTitle('Máximas | OC2 Consultoría en Comunicaciones');
  return (
    <div className="pt-40 min-h-screen bg-[#FBF9F3] flex flex-col w-full overflow-hidden">
      {/* Hero Section Container */}
      <div className="w-full px-6 md:px-12 pb-12 md:pb-20 flex flex-col items-center max-w-[1400px] mx-auto">
        <HeroSection />
      </div>

      {/* Section 1: El Discurso (with background) */}
      <div className="w-full bg-[#F5EFE3] px-6 md:px-12 py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Section1TheSpeech />
        </div>
      </div>

      {/* Section 2: Comunicar (no background, takes global background) */}
      <div className="w-full bg-[#FBF9F3] px-6 md:px-12 py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Section2Communication />
        </div>
      </div>

      {/* Section 3: Prensa (with background) */}
      <div className="w-full bg-[#F5EFE3] px-6 md:px-12 py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Section3Press />
        </div>
      </div>
      
      {/* Section 4: Democracia & Periodismo (no background, takes global background) */}
      <div className="w-full bg-[#FBF9F3] px-6 md:px-12 py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Section4Democracy />
        </div>
      </div>
    </div>
  );
}