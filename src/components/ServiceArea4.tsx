import React from 'react';
import imgDiscursoArea4 from '../imports/Area4TalleresDeComunicacionEfectiva/talleres-de-comunicacion-efectiva.svg';
import textos from '../content/textos-servicios.json';
import { FadeUp } from "./ScrollReveal";

export function ServiceArea4() {
  const t = textos.servicios.area4;

  const renderBullet = (text: string, idx: number) => (
    <div key={idx} className="flex gap-[16px] items-center mb-[24px] last:mb-0">
      <div className="shrink-0">
        <div className="bg-[#bdbb82] rounded-full w-[6px] h-[6px]"></div>
      </div>
      <div className="font-['Manrope',sans-serif] font-bold text-[#3c5b79] text-[13px] uppercase leading-[1.4]">
        {text}
      </div>
    </div>
  );

  const renderTaller = (taller: { nombre: string; items: string[] }, idx: number) => (
    <div key={idx} className="flex flex-col gap-[24px]">
      <h4 className="font-['Newsreader',serif] font-normal text-[#5d89b4] text-[20px] leading-[28px] m-0">
        {taller.nombre}
      </h4>
      <div className="flex flex-col">
        {taller.items.map(renderBullet)}
      </div>
    </div>
  );

  const col1 = t.talleres.slice(0, Math.ceil(t.talleres.length / 2));
  const col2 = t.talleres.slice(Math.ceil(t.talleres.length / 2));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[48px] w-full" data-name="Area 4: Talleres de comunicación efectiva">

      <div className="lg:col-span-1 relative h-full min-h-[60px] lg:min-h-[100px] flex">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[#bdc8d4] hidden lg:block"></div>
        <div className="font-['Newsreader',serif] italic text-[#bdc8d4] text-[36px] leading-[40px] pt-[16px] w-full text-left">04</div>
      </div>

      <FadeUp delay={0} className="lg:col-span-5 flex items-center justify-center lg:justify-start order-last lg:order-none">
        <img src={imgDiscursoArea4} alt="Talleres de comunicación efectiva" className="w-full max-w-[420px] h-auto block pointer-events-none" />
      </FadeUp>

      <FadeUp delay={0.15} className="lg:col-span-6 flex flex-col gap-[48px] pt-0 lg:pt-[16px] pl-0 lg:pl-[48px]">
        <h2 className="font-['Newsreader',serif] font-medium text-[#5d89b4] text-4xl md:text-[56px] leading-[1.1] tracking-[-1.12px] m-0">
          {t.titulo}
        </h2>

        <div className="border-l-[2px] border-[#dbbc8b] pl-[24px]">
          <p className="font-['Newsreader',serif] italic text-[#a28c6a] text-xl md:text-[24px] m-0 leading-[1.6] md:leading-[39px]">
            "{t.cita}".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[48px] mt-4">
          <div className="flex flex-col gap-[48px]">
            {col1.map(renderTaller)}
          </div>
          <div className="flex flex-col gap-[48px]">
            {col2.map(renderTaller)}
          </div>
        </div>
      </FadeUp>

    </div>
  );
}
