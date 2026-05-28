import { useEffect } from "react";
import { useLocation } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { ServicesHero } from "../components/ServicesHero";
import { ServiceArea1 } from "../components/ServiceArea1";
import { ServiceArea2 } from "../components/ServiceArea2";
import { ServiceArea3 } from "../components/ServiceArea3";
import { ServiceArea4 } from "../components/ServiceArea4";
import svgPaths from "../imports/QuoteSection-1/svg-ewuvyw2w5u";
import { FadeUp } from "../components/ScrollReveal";

function ServiciosQuoteSection() {
  const color = "#5D89B4";
  return (
    <div className="bg-[#ECDFC8] flex flex-col items-center justify-center px-[20px] py-[120px] w-full">
      <FadeUp>
        <div className="flex flex-col gap-[28px] items-center w-full max-w-[537px]">
          {/* Divider top */}
          <div className="h-[28px] relative w-full">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 537 28.2553">
              <line stroke={color} strokeWidth="3.53191" x2="226.117" y1="8.82979" y2="8.82979" />
              <line stroke={color} strokeWidth="1.76596" x2="226.117" y1="16.7766" y2="16.7766" />
              <path d={svgPaths.p2fded880} fill={color} />
              <line stroke={color} strokeWidth="3.53191" x1="310.883" x2="537" y1="8.82979" y2="8.82979" />
              <line stroke={color} strokeWidth="1.76596" x1="310.883" x2="537" y1="16.7766" y2="16.7766" />
            </svg>
          </div>
          {/* Text */}
          <p className="font-['Alata',sans-serif] text-[24px] sm:text-[32px] leading-[1.5] text-center uppercase w-full m-0" style={{ color }}>
            La reputación no es lo que dices, es lo que otros dicen de ti.
          </p>
          {/* Divider bottom */}
          <div className="h-[28px] relative w-full">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 537 28.2553">
              <line stroke={color} strokeWidth="3.53191" transform="matrix(1 0 0 -1 0 17.6596)" x2="226.117" y1="-1.76596" y2="-1.76596" />
              <line stroke={color} strokeWidth="1.76596" transform="matrix(1 0 0 -1 0 10.5958)" x2="226.117" y1="-0.882979" y2="-0.882979" />
              <path d={svgPaths.p130ae900} fill={color} />
              <line stroke={color} strokeWidth="3.53191" transform="matrix(1 0 0 -1 310.883 17.6596)" x2="226.117" y1="-1.76596" y2="-1.76596" />
              <line stroke={color} strokeWidth="1.76596" transform="matrix(1 0 0 -1 310.883 10.5957)" x2="226.117" y1="-0.882979" y2="-0.882979" />
            </svg>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

export function Servicios() {
  const { hash } = useLocation();

  usePageTitle('Servicios | OC2 Consultoría en Comunicaciones');

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Offset to clear the fixed header (top-[16px] + header height ~56px + breathing room)
      const HEADER_OFFSET = 96;
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }, 80);
    }
  }, [hash]);

  return (
    <div className="bg-[#FBF9F3]">
      {/* Intro Section */}
      <ServicesHero />

      {/* Services Container */}
      <div className="py-32 max-w-[1440px] mx-auto px-6 md:px-[48px] w-full flex flex-col gap-24">
        <div id="comunicaciones-estrategicas"><ServiceArea1 /></div>
        <div id="gestion-de-crisis"><ServiceArea2 /></div>
        <div id="asuntos-publicos"><ServiceArea3 /></div>
        <div id="talleres"><ServiceArea4 /></div>
      </div>

      {/* Quote Section */}
      <ServiciosQuoteSection />
    </div>
  );
}
