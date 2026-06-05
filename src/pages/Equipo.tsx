import React, { useState } from 'react';
import { usePageTitle } from "../hooks/usePageTitle";
import { AnimatePresence } from 'motion/react';
import { FadeUp } from "../components/ScrollReveal";
import { Member, mapMember, MemberCard, MemberModal } from "../components/TeamMemberCard";
import imgHero from "../imports/Equipo/socias-hero.svg";
import imgOficina from "../imports/Equipo/equipo-oficina.jpg";
import equipoData from '../content/equipo.json';
import textos from '../content/textos-equipo.json';

const socias: Member[] = equipoData.socias.map(mapMember);
const equipo: Member[] = equipoData.equipo.map(mapMember);

function Hero() {
  const h = textos.equipo.hero;
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between relative w-full max-w-[1440px] mx-auto px-6 md:px-[48px] pb-12 gap-12 lg:gap-0">
      {/* Left column */}
      <FadeUp delay={0} className="flex flex-col gap-[32px] w-full lg:flex-1 min-w-0 z-10">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none">
          {h.eyebrow}
        </p>

        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="font-['Newsreader',serif] font-normal text-[#5d89b4] text-5xl md:text-7xl lg:text-[96px] tracking-[-0.02em] leading-[0.96]">
            <span className="block">{h.titulo_linea1}</span>
            <span className="block">
              {h.titulo_linea2.split(' ')[0]}{' '}
              <span className="italic text-[#a28c6a]">{h.titulo_linea2.split(' ').slice(1).join(' ')}</span>
            </span>
            <span className="block italic text-[#a28c6a]">{h.titulo_linea3}</span>
          </div>
          <div className="h-[20px] w-[66px] shrink-0 mt-0">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
              <path d="M0 0L66 10.0182L0 20V0Z" fill="#DFCAA3" />
            </svg>
          </div>
        </div>

      </FadeUp>

      {/* Right column: SVG illustration */}
      <FadeUp delay={0.2} y={24} className="relative mt-12 lg:mt-0 w-full lg:w-auto lg:shrink flex justify-center lg:justify-end">
        <img
          alt="Equipo OC2"
          className="w-full max-w-[480px] lg:max-w-none lg:w-auto lg:h-auto lg:max-h-[232px] block pointer-events-none"
          src={imgHero}
        />
      </FadeUp>
    </div>
  );
}

function IntroSection() {
  const i = textos.equipo.intro;
  return (
    <div className="w-full bg-[#F5EFE3] flex flex-col items-center justify-center px-6 md:px-[48px] py-16 md:py-[96px]">
      <div className="flex flex-col items-center gap-10 w-full max-w-[720px] text-center">
        <FadeUp>
          <p className="font-['Newsreader',serif] font-normal text-[#5d89b4] text-[28px] leading-[1.2]">
            {i.parrafo1}
          </p>
        </FadeUp>

        <div className="h-[6px] relative w-full px-4">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1184 6">
            <path d="M0 3L5 5.88675V0.113249L0 3ZM1184 3L1179 0.113249V5.88675L1184 3ZM4.5 3V3.5H1179.5V3V2.5H4.5V3Z" fill="#DFCAA3" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#DFCAA3]" />
        </div>

        <FadeUp delay={0.1}>
          <p className="font-['Manrope',sans-serif] font-normal text-[#3c5b79] text-[18px] md:text-[22px] leading-[1.5]">
            {i.parrafo2}
          </p>
        </FadeUp>
      </div>
    </div>
  );
}

function Headline({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full max-w-[1184px] mx-auto mb-[32px]" data-name="Headline">
      <p className="font-['Newsreader',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#5d89b4] text-[40px] tracking-[-0.8px] whitespace-nowrap">{title}</p>
      <div className="h-[10px] relative shrink-0 w-[32px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10">
          <path d="M0 0L32 5.00911L0 10V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function PartnersContainer({ members, onClick }: { members: Member[], onClick: (m: Member) => void }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-[26px] w-full max-w-[1184px] mx-auto" data-name="Partners container">
      {members.map((m, i) => (
        <FadeUp key={i} delay={i * 0.1}>
          <MemberCard member={m} onClick={onClick} />
        </FadeUp>
      ))}
    </div>
  );
}

function Quote() {
  const q = textos.equipo.quote;
  return (
    <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center py-[48px] md:py-[98px] relative w-full" data-name="Quote">
      <FadeUp>
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Quote div">
          <div className="flex flex-col font-['Newsreader',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dfcaa3] text-[28px] md:text-[36px] text-center w-[533px] max-w-[90vw]">
            <p className="leading-[normal]">{q.texto}</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none flex items-center justify-center">
              <div className="h-[10px] relative w-[32px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10">
                  <path d="M0 0L32 5.00911L0 10V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

export function Equipo() {
  usePageTitle('Equipo | OC2 Consultoría en Comunicaciones');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <div className="pt-40 min-h-screen bg-[#FBF9F3] flex flex-col w-full overflow-hidden">
      <Hero />

      <IntroSection />

      <div className="w-full flex flex-col gap-[40px] items-center px-6 py-[96px] relative">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1184px] mx-auto">
          <Headline title={textos.equipo.socias_titulo} />
          <PartnersContainer members={socias} onClick={setSelectedMember} />
        </div>

        <div className="h-[6px] relative w-full max-w-[1184px] mx-auto">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1184 6">
            <path d="M0 3L5 5.88675V0.113249L0 3ZM1184 3L1179 0.113249V5.88675L1184 3ZM4.5 3V3.5H1179.5V3V2.5H4.5V3Z" fill="#DFCAA3" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#DFCAA3]" />
        </div>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1184px] mx-auto">
          <Headline title={textos.equipo.equipo_titulo} />
          <PartnersContainer members={equipo} onClick={setSelectedMember} />
        </div>
      </div>

      {/* Office photo - full width */}
      <div className="w-full">
        <img
          src={imgOficina}
          alt="Oficina OC2"
          className="w-full h-auto block"
        />
      </div>

      <Quote />

      <AnimatePresence>
        {selectedMember && (
          <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}