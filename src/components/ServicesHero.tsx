import React from 'react';
import textos from '../content/textos-servicios.json';
import { FadeUp } from "./ScrollReveal";

export function ServicesHero() {
  const t = textos.servicios.hero;

  return (
    <section className="w-full relative pt-40 pb-[96px] overflow-hidden" data-name="Hero Section: Perspective Split">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[48px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-end justify-between w-full">

          {/* Left Column: Heading */}
          <FadeUp delay={0} className="flex flex-col gap-[32px] w-full max-w-[896px] flex-1">
            <div className="font-['Manrope',sans-serif] font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none w-full">
              {t.eyebrow}
            </div>

            <div className="flex flex-col gap-[16px] items-start w-full">
              <h1 className="font-['Newsreader',serif] font-normal text-[#5d89b4] text-5xl md:text-7xl lg:text-[96px] tracking-tight lg:tracking-[-1.92px] leading-[1.1] lg:leading-[96px] m-0 w-full md:w-auto">
                <span className="block leading-[1.1] lg:leading-[96px] m-0">Te ayudamos</span>
                <span className="block leading-[1.1] lg:leading-[96px] m-0">a construir</span>
                <span className="block font-['Newsreader',serif] italic text-[#a28c6a] leading-[1.1] lg:leading-[96px] m-0">tu reputación</span>
              </h1>
              <div className="h-[20px] w-[66px] shrink-0 mt-0">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
                  <path d="M0 0L66 10.0182L0 20V0Z" fill="#DFCAA3" />
                </svg>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Card */}
          <FadeUp delay={0.2} className="bg-[#f5efe3] flex flex-col gap-[32px] items-start overflow-clip pb-[48px] pt-[47px] px-8 md:px-[48px] relative rounded-[8px] shrink-0 w-full lg:w-[520px]">
            <div className="absolute bg-[#ecdfc8] right-[-64px] rounded-[12px] w-[128px] h-[128px] top-[-64px]" />

            <div className="flex flex-col font-['Manrope',sans-serif] font-normal text-[#3c5b79] w-full gap-[24px] md:gap-[29px] relative z-10">
              <p className="leading-[1.5] text-[18px] md:text-[22px] m-0">{t.descripcion_1}</p>
              <p className="leading-[1.6] md:leading-[29.25px] text-[16px] md:text-[18px] m-0">{t.descripcion_2}</p>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
