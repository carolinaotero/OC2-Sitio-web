import React from 'react';
import { usePageTitle } from "../hooks/usePageTitle";
import svgPaths from "../imports/QuoteSection-1/svg-ewuvyw2w5u";
import { FadeUp } from "../components/ScrollReveal";
import textos from "../content/textos-clientes.json";

import imgTiempoClientes1 from "../imports/HeroSectionPerspectiveSplit-7/tiempo-clientes.webp";
import imgTiempoClientes1Svg from "../imports/HeroSectionPerspectiveSplit-7/tiempo-clientes.svg";

// Sector SVGs
import imgEnergia from "../imports/ClientsSection-2/sectors/energia.svg";
import imgInmobiliario from "../imports/ClientsSection-2/sectors/inmobiliario.svg";
import imgFinanzas from "../imports/ClientsSection-2/sectors/finanzas.svg";
import imgRetail from "../imports/ClientsSection-2/sectors/retail.svg";
import imgSanitarias from "../imports/ClientsSection-2/sectors/sanitarias.svg";
import imgPuertos from "../imports/ClientsSection-2/sectors/puertos-y-remolques.svg";
import imgNavieras from "../imports/ClientsSection-2/sectors/navieras.svg";
import imgAgro from "../imports/ClientsSection-2/sectors/agro.svg";
import imgSalmonicultura from "../imports/ClientsSection-2/sectors/salmonicultura.svg";
import imgForestal from "../imports/ClientsSection-2/sectors/forestal.svg";
import imgGremios from "../imports/ClientsSection-2/sectors/gremios.svg";
import imgConsultoras from "../imports/ClientsSection-2/sectors/consultoras.svg";

// Sector Data Array to map over and keep code DRY
const sectors = [
  { id: "01", title: "Energía",           image: imgEnergia },
  { id: "02", title: "Inmobiliario",      image: imgInmobiliario },
  { id: "03", title: "Finanzas",          image: imgFinanzas },
  { id: "04", title: "Retail",            image: imgRetail },
  { id: "05", title: "Sanitarias",        image: imgSanitarias },
  { id: "06", title: "Puertos y Remolques", image: imgPuertos },
  { id: "07", title: "Navieras",          image: imgNavieras },
  { id: "08", title: "Agro",              image: imgAgro },
  { id: "09", title: "Salmonicultura",    image: imgSalmonicultura },
  { id: "10", title: "Forestal",          image: imgForestal },
  { id: "11", title: "Gremios",           image: imgGremios },
  { id: "12", title: "Consultoras",       image: imgConsultoras },
];

function HeroSection() {
  const h = textos.clientes.hero;
  return (
    <div className="w-full relative px-6 md:px-[48px] pt-40 pb-16 md:pb-[96px] max-w-[1440px] mx-auto flex flex-col xl:flex-row justify-between items-center xl:items-start gap-0" data-name="Hero Section: Perspective Split">
      {/* Left Content */}
      <FadeUp delay={0} className="flex flex-col gap-[32px] items-start w-full xl:flex-1 relative z-10">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
          {h.eyebrow}
        </p>

        <div className="flex flex-col gap-[16px] items-start w-full">
          <h1 className="font-['Newsreader',serif] font-normal text-[#5d89b4] text-[64px] md:text-[96px] tracking-tight md:tracking-[-1.92px] leading-[1] md:leading-[96px] m-0">
            {h.titulo_1}<br />
            <span className="italic text-[#a28c6a]">{h.titulo_2}</span>
          </h1>
          <div className="h-[20px] w-[66px] shrink-0">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
              <path d="M0 0L66 10.0182L0 20V0Z" fill="#DFCAA3" />
            </svg>
          </div>
        </div>

        <div className="max-w-[576px] opacity-80 pt-[0.75px]">
          <p className="font-['Manrope',sans-serif] font-normal text-[#3c5b79] text-[18px] md:text-[20px] leading-[1.6] md:leading-[32.5px] m-0">
            {h.descripcion}
          </p>
        </div>
      </FadeUp>

      {/* Right Image */}
      <FadeUp delay={0.2} y={24} className="w-full xl:w-[478px] shrink-0 mt-8 xl:mt-0 flex items-center justify-center">
        <picture>
          <source srcSet={imgTiempoClientes1} type="image/webp" />
          <img
            alt="Relaciones que trascienden"
            className="w-full h-auto max-h-[560px] object-contain block pointer-events-none"
            src={imgTiempoClientes1Svg}
          />
        </picture>
      </FadeUp>
    </div>
  );
}

function SectionBocaABoca() {
  const b = textos.clientes.boca_a_boca;
  return (
    <div className="w-full bg-[#f5efe3] flex flex-col items-center justify-center px-6 md:px-[48px] py-16 md:py-[96px] relative" data-name="Section - Boca a Boca">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-center justify-center max-w-[1280px] w-full">
        {/* Left */}
        <FadeUp delay={0} className="flex flex-col gap-[24px] items-start flex-1 w-full lg:pb-[32px]">
          <p className="font-['Manrope',sans-serif] font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
            {b.eyebrow}
          </p>
          <h2 className="font-['Newsreader',serif] font-normal text-[#5d89b4] text-[40px] md:text-[48px] leading-[1.2] md:leading-[60px] m-0">
            {b.titulo_1}<br />
            <span className="italic text-[#a28c6a]">{b.titulo_2}</span>
          </h2>
          <div className="h-[12px] w-[38px] shrink-0 mt-2">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 12">
              <path d="M0 0L38 6.01093L0 12V0Z" fill="#DFCAA3" />
            </svg>
          </div>
        </FadeUp>

        {/* Right */}
        <FadeUp delay={0.2} className="flex flex-col items-start flex-1 w-full lg:pr-[16px]">
          <p className="font-['Manrope',sans-serif] font-normal text-[#3c5b79] text-[16px] md:text-[18px] leading-[1.5] md:leading-[28px] m-0">
            {b.descripcion}
          </p>
        </FadeUp>
      </div>
    </div>
  );
}

function SectorsGridSection() {
  const s = textos.clientes.sectores;
  return (
    <div className="w-full bg-[#fbf9f3]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col gap-16 items-center max-w-[1280px] mx-auto">

          {/* Header */}
          <FadeUp className="flex flex-col items-center gap-8 w-full max-w-[900px] text-center">
            <h2 className="font-serif font-normal text-[#5d89b4] text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] leading-tight md:leading-[1.1] tracking-tight">
              {s.titulo_1} <span className="italic text-[#a28c6a]">{s.titulo_2}</span>
            </h2>
          </FadeUp>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full relative pt-[1px] pl-[1px]">
            {sectors.map((sector, sectorIndex) => {
              return (
                <FadeUp
                  key={sector.id}
                  delay={sectorIndex * 0.05}
                  className="group relative box-border overflow-hidden border border-[#dfcaa3] bg-transparent hover:bg-[#F5EFE3] hover:z-10 transition-colors duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] -mt-[1px] -ml-[1px]"
                >
                  <div className="flex flex-col h-full items-center justify-center p-4 sm:p-10 lg:p-12 transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[0.98]">
                    <div className="flex flex-col w-full gap-2 items-center text-center">
                      <h3 className="font-serif font-medium text-[#5d89b4] text-[14px] sm:text-[20px] lg:text-[24px] leading-tight mb-4">
                        {sector.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-center w-full h-[80px] sm:h-[120px]">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain pointer-events-none"
                      />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}

function DividerContainer() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-full max-w-[537px]" data-name="Divider container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 537 28.2553">
        <g id="Divider container">
          <g id="Divider 1">
            <line id="Line 1" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" x2="226.117" y1="8.82979" y2="8.82979" />
            <line id="Line 2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" x2="226.117" y1="16.7766" y2="16.7766" />
          </g>
          <path d={svgPaths.p2fded880} fill="var(--fill-0, #FBF9F3)" id="â" />
          <g id="Divider 1_2">
            <line id="Line 1_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" x1="310.883" x2="537" y1="8.82979" y2="8.82979" />
            <line id="Line 2_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" x1="310.883" x2="537" y1="16.7766" y2="16.7766" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuoteText() {
  const q = textos.clientes.quote;
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[537px]" data-name="Text">
      <div className="flex flex-col font-['Alata',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbf9f3] text-[24px] sm:text-[32px] text-center uppercase w-full">
        <p className="leading-[1.5]">{q.texto}</p>
      </div>
    </div>
  );
}

function DividerContainer1() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-full max-w-[537px]" data-name="Divider container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 537 28.2553">
        <g id="Divider container">
          <g id="Divider 1">
            <line id="Line 1" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" transform="matrix(1 0 0 -1 0 17.6596)" x2="226.117" y1="-1.76596" y2="-1.76596" />
            <line id="Line 2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" transform="matrix(1 0 0 -1 0 10.5958)" x2="226.117" y1="-0.882979" y2="-0.882979" />
          </g>
          <path d={svgPaths.p130ae900} fill="var(--fill-0, #FBF9F3)" id="â" />
          <g id="Divider 1_2">
            <line id="Line 1_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" transform="matrix(1 0 0 -1 310.883 17.6596)" x2="226.117" y1="-1.76596" y2="-1.76596" />
            <line id="Line 2_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" transform="matrix(1 0 0 -1 310.883 10.5957)" x2="226.117" y1="-0.882979" y2="-0.882979" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[28.255px] items-center relative shrink-0 w-full" data-name="Quote container">
      <DividerContainer />
      <QuoteText />
      <DividerContainer1 />
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[20px] py-[160px] relative w-full" data-name="Quote Section">
      <FadeUp>
        <QuoteContainer />
      </FadeUp>
    </div>
  );
}

export function Clientes() {
  usePageTitle('Clientes | OC2 Consultoría en Comunicaciones');
  return (
    <div className="min-h-screen bg-[#FBF9F3] flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Boca a Boca Section */}
      <SectionBocaABoca />

      {/* 3. Sectors Grid Section */}
      <SectorsGridSection />

      {/* 4. Quote Section */}
      <QuoteSection />
    </div>
  );
}
