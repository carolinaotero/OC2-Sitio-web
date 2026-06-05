import authBg from "../imports/AuthoritySection/0c0908109defe5c11d5af7b03dd4cbb3744bb68e.png";
import manoOkHome from "../imports/AuthoritySection/mano-ok-home.svg";
import { FadeUp } from "./ScrollReveal";
import textos from "../content/textos-home.json";

export function Authority() {
  const a = textos.home.authority;
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#fbf9f3]">
      {/* Background Image */}
      <img
        src={authBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[96px] items-center">

          {/* Left Column */}
          <FadeUp delay={0}>
            <div className="flex flex-col gap-6 items-start">
              {/* Vector Graphic */}
              <div className="w-[200px] md:w-[286px] shrink-0">
                <img src={manoOkHome} className="w-full h-auto block" alt="Authority Icon" />
              </div>

              {/* Heading */}
              <div className="font-serif text-[#5d89b4] text-4xl md:text-[48px] tracking-[-1.2px] leading-tight md:leading-[48px] font-normal mt-4">
                <p className="m-0">{a.titulo_linea1}</p>
                <p className="m-0">{a.titulo_linea2}</p>
              </div>

              {/* Divider */}
              <div className="bg-[#dbbc8b] h-px w-[96px] shrink-0 mt-4" />
            </div>
          </FadeUp>

          {/* Right Column */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-6 md:gap-[31px]">
              <p className="font-sans font-normal text-[#3c5b79] text-xl md:text-[24px] leading-relaxed md:leading-[39px] whitespace-pre-wrap m-0">
                {a.parrafo1}
              </p>
              <p className="font-sans font-normal text-[#3c5b79] text-base md:text-[18px] leading-relaxed md:leading-[29.25px] m-0">
                {a.parrafo2}
              </p>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
