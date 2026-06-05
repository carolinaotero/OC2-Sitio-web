import React from 'react';
import imgDemocraciaArea3 from '../imports/Area3AsuntosPublicos-1/asuntos-publicos.webp';
import imgDemocraciaArea3Svg from '../imports/Area3AsuntosPublicos-1/asuntos-publicos.svg';
import svgPathsArea3 from '../imports/Area3AsuntosPublicos-1/svg-w8w1tmwdnc';
import textos from '../content/textos.json';
import { FadeUp } from "./ScrollReveal";

const cardIcons = [
  <svg key={0} viewBox="0 0 27.5 11.2019" className="w-[27.5px] h-[11.2px]"><path d={svgPathsArea3.p9a1b80} fill="#5D89B4" /></svg>,
  <svg key={1} viewBox="0 0 17.5 22.3558" className="w-[17.5px] h-[22.35px]"><path d={svgPathsArea3.pcca3e00} fill="#5D89B4" /></svg>,
  <svg key={2} viewBox="0 0 20 20" className="w-[20px] h-[20px]"><path d={svgPathsArea3.p2ecf1c00} fill="#5D89B4" /></svg>,
];

export function ServiceArea3() {
  const t = textos.servicios.area3;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[48px] w-full" data-name="Area 3: Asuntos Públicos">

      <div className="lg:col-span-1 relative h-full min-h-[60px] lg:min-h-[100px] flex">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[#bdc8d4] hidden lg:block"></div>
        <div className="font-['Newsreader',serif] italic text-[#bdc8d4] text-[36px] leading-[40px] pt-[16px] w-full text-left">03</div>
      </div>

      <FadeUp delay={0} className="lg:col-span-6 flex flex-col gap-[48px] pt-0 lg:pt-[16px]">
        <h2 className="font-['Newsreader',serif] font-medium text-[#5d89b4] text-4xl md:text-[56px] leading-[1.1] tracking-[-1.12px] m-0">
          {t.titulo}
        </h2>

        <div className="border-l-[2px] border-[#5d89b4] pl-[24px]">
          <p className="font-['Newsreader',serif] italic text-[#a28c6a] text-xl md:text-[24px] m-0 leading-[1.6] md:leading-[39px]">
            "{t.cita}".
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          {t.cards.map((card, idx) => (
            <div key={idx} className="bg-[#f5efe3] rounded-[8px] p-6 lg:p-[32px] flex items-start gap-[24px]">
              <div className="w-[32px] flex justify-center pt-1 shrink-0">
                {cardIcons[idx] ?? null}
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-['Manrope',sans-serif] font-bold text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase leading-[20px]">
                  {card.titulo}
                </span>
                <span className="font-['Manrope',sans-serif] text-[#3c5b79] text-[14px] leading-[22.75px]">
                  {card.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.15} className="lg:col-span-5 flex items-center justify-center lg:justify-end">
        <picture>
          <source srcSet={imgDemocraciaArea3} type="image/webp" />
          <img src={imgDemocraciaArea3Svg} alt="Asuntos Públicos" className="w-full max-w-[420px] h-auto block pointer-events-none" />
        </picture>
      </FadeUp>

    </div>
  );
}
