import React from 'react';
import { useNavigate } from "react-router";
import { Button } from "./Button";
import manosSocios from "../imports/ClientsSection-2/manos-socios.svg";
import { FadeUp } from "./ScrollReveal";
import textos from "../content/textos.json";

export function Clients() {
  const navigate = useNavigate();
  const c = textos.home.clients_section;

  return (
    <div className="w-full relative flex flex-col items-center justify-center bg-[#FBF9F3] px-6 md:px-[48px] py-16 md:py-[96px] gap-[32px]" data-name="Clients Section">
      <FadeUp delay={0} className="flex flex-col items-center justify-center max-w-[896px] w-full gap-[16px]">

        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p className="font-['Manrope',sans-serif] font-semibold text-[#a28c6a] text-[12px] md:text-[14px] tracking-[2.1px] uppercase leading-none m-0 text-center md:whitespace-nowrap">
            {c.eyebrow}
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center w-full max-w-[700px] mt-2">
          <h2 className="font-['Newsreader',serif] font-medium text-[40px] md:text-[56px] leading-[1.1] text-center m-0 tracking-tight md:tracking-[-1.12px]">
            <span className="text-[#5d89b4]">{c.titulo_1}</span>
            <span className="text-[#a28c6a] italic">{c.titulo_2}</span>
          </h2>
        </div>

        {/* Paragraph */}
        <div className="flex flex-col items-center w-full max-w-[672px]">
          <p className="font-['Manrope',sans-serif] font-normal text-[#3c5b79] text-[18px] md:text-[22px] leading-[1.5] text-center m-0">
            {c.descripcion}
          </p>
        </div>
      </FadeUp>

      {/* Image */}
      <FadeUp delay={0.1}>
        <img
          alt="Manos entrelazadas"
          className="w-[282px] h-auto block pointer-events-none"
          src={manosSocios}
        />
      </FadeUp>

      {/* Button */}
      <FadeUp delay={0.2}>
        <Button
          variant="primary"
          onClick={() => navigate('/clientes')}
          className="px-[32px] py-[16px] text-[18px] tracking-[0.9px]"
        >
          {c.cta}
        </Button>
      </FadeUp>
    </div>
  );
}
