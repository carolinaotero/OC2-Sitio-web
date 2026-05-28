import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence } from "motion/react";
import svgPaths from "../imports/SectionTeamPreviewCarruselVisualRepresentation/svg-ilnlk6pmv9";
import equipoData from '../content/equipo.json';
import { FadeUp } from "./ScrollReveal";
import { Member, mapMember, MemberCard, MemberModal } from "./TeamMemberCard";
import textos from "../content/textos.json";

const dividerKeys = ['p19fc8980', 'p3fd9c180', 'p2a824f80', 'p10cf300', 'p23c7c900', 'p33d5ebf0'];
const backgroundPaths = Object.entries(svgPaths).filter(([key]) => !dividerKeys.includes(key));

const bgHTML = backgroundPaths.map(([key, path]) => `<path d="${path}" fill="#5D89B4" />`).join('');
const bgSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMaxYMin slice" viewBox="0 0 679 400"><g>${bgHTML}</g></svg>`;
const bgSrc = `data:image/svg+xml;utf8,${encodeURIComponent(bgSVG)}`;

const socias: Member[] = equipoData.socias.map(mapMember);

export function Team() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const t = textos.home.team_section;

  return (
    <section className="relative w-full bg-[#F5EFE3] overflow-hidden py-24 md:py-[120px] px-6">
      <div className="relative max-w-[1280px] mx-auto z-10 flex flex-col gap-[64px] md:gap-[80px]">
      {/* Background Vector Illustration */}
      <div className="hidden md:block absolute top-0 right-0 w-[60%] max-h-[300px] pointer-events-none opacity-40 z-0">
        <img
          src={bgSrc}
          className="w-full h-auto max-h-[300px] object-contain object-right-top"
          alt=""
        />
      </div>
        {/* Header */}
        <FadeUp delay={0}>
          <div className="flex flex-col gap-4 items-start w-full md:w-[581px]">
            <p className="font-sans font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
              {t.eyebrow}
            </p>

            <h2 className="font-serif font-medium text-[#5D89B4] text-[40px] md:text-[56px] tracking-[-1.12px] leading-[1.1] m-0">
              {t.titulo_1} <br className="hidden md:block"/>
              con <span className="italic text-[#A28C6A]">{t.titulo_2.replace('con ', '')}</span>
            </h2>

            {/* Divider */}
            <div className="my-2">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M0 0L40 6.01093L0 12V0Z" fill="#DFCAA3" />
              </svg>
            </div>

          </div>
        </FadeUp>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-6 justify-center w-full">
          {socias.map((member, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <MemberCard member={member} onClick={setSelectedMember} />
            </FadeUp>
          ))}
        </div>

        {/* Action Button */}
        <FadeUp delay={0.3}>
          <div className="flex justify-center mt-8">
            <Link
              to="/equipo"
              className="bg-[#5D89B4] hover:bg-[#3C5B79] text-white font-sans text-[16px] md:text-[18px] tracking-[0.9px] px-[32px] py-[16px] rounded-[8px] transition-colors duration-300 leading-none whitespace-nowrap"
            >
              {t.cta}
            </Link>
          </div>
        </FadeUp>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
