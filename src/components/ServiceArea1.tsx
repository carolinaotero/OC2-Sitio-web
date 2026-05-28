import React from 'react';
import imgComunicar from '../imports/Area1ComunicacionesEstrategicas/comunicaciones-estrategicas.svg';
import textos from '../content/textos.json';

type Item = { titulo: string; desc: string };

export function ServiceArea1() {
  const t = textos.servicios.area1;

  const renderItem = (item: Item, idx: number) => (
    <div key={idx} className="flex gap-[16px] items-start mb-6 last:mb-0">
      <div className="pt-[8px] shrink-0">
        <div className="bg-[#dbbc8b] rounded-full w-[6px] h-[6px]"></div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="font-['Manrope',sans-serif] font-semibold text-[#4a6d90] text-[14px] tracking-[0.7px] uppercase leading-none">
          {item.titulo}
        </span>
        <span className="font-['Manrope',sans-serif] font-normal text-[#3c5b79] text-[13px] leading-[1.4]">
          {item.desc}
        </span>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[48px] w-full" data-name="Area 1: Comunicaciones Estratégicas">

      <div className="lg:col-span-1 relative h-full min-h-[60px] lg:min-h-[100px] flex">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[#bdc8d4] hidden lg:block"></div>
        <div className="font-['Newsreader',serif] italic text-[#bdc8d4] text-[36px] leading-[40px] pt-[16px] w-full text-left">01</div>
      </div>

      <div className="lg:col-span-6 flex flex-col gap-[48px] pt-0 lg:pt-[16px]">
        <h2 className="font-['Newsreader',serif] font-medium text-[#5d89b4] text-4xl md:text-[56px] leading-[1.1] tracking-[-1.12px] m-0">
          {t.titulo}
        </h2>

        <div className="border-l-[2px] border-[#dbbc8b] pl-[24px]">
          <p className="font-['Newsreader',serif] italic text-[#a28c6a] text-xl md:text-[24px] m-0 leading-[1.6] md:leading-[39px]">
            "{t.cita}".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[16px]">
          <div className="flex flex-col">
            {t.items_izq.map((item, idx) => renderItem(item, idx))}
          </div>
          <div className="flex flex-col">
            {t.items_der.map((item, idx) => renderItem(item, idx))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
        <img src={imgComunicar} alt="Comunicaciones Estratégicas" className="w-full max-w-[420px] h-auto block pointer-events-none" />
      </div>

    </div>
  );
}
