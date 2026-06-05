import { Link } from "react-router";
import svgPaths from "../imports/ServicesSection/svg-loy93fl2rf";
import { FadeUp } from "./ScrollReveal";
import textos from "../content/textos-home.json";

export function Services() {
  const serviceIcons = [
    { iconPath: svgPaths.p2ad1b060, iconViewBox: "0 0 32 32", href: "/servicios#comunicaciones-estrategicas" },
    { iconPath: svgPaths.p9da9700,  iconViewBox: "0 0 32 32", href: "/servicios#gestion-de-crisis" },
    { iconPath: svgPaths.p33a9d100, iconViewBox: "0 0 32 33", href: "/servicios#asuntos-publicos" },
    { iconPath: svgPaths.pce07230,  iconViewBox: "0 0 32 26", href: "/servicios#talleres" },
  ];
  const services = textos.home.services.items.map((item, i) => ({
    ...item,
    ...serviceIcons[i],
  }));

  return (
    <section className="relative w-full bg-[#5D89B4] overflow-hidden py-24 md:py-[120px] px-6">
      {/* Background Key Illustration */}
      <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
        <svg
          className="absolute top-0 left-[-50px] w-[88%] h-auto max-h-[340px] -rotate-180 -scale-x-100"
          fill="none"
          viewBox="0 0 1063.55 424.734"
        >
          <g>
            <path d={svgPaths.pce92640} fill="#4A6D90" />
            <path d={svgPaths.p299dcf00} fill="#4A6D90" />
            <path d={svgPaths.p118b4300} fill="#4A6D90" />
            <path d={svgPaths.p17539d00} fill="#4A6D90" />
            <path d={svgPaths.pa8c6300} fill="#4A6D90" />
            <path d={svgPaths.p27c3ff80} fill="#4A6D90" />
            <path d={svgPaths.p35f8b280} fill="#4A6D90" />
            <path d={svgPaths.p35f3dc80} fill="#4A6D90" />
            <path d={svgPaths.pe8d0100} fill="#4A6D90" />
            <path d={svgPaths.p1fd65980} fill="#4A6D90" />
            <path d={svgPaths.p99cd900} fill="#4A6D90" />
            <path d={svgPaths.p2d807671} fill="#4A6D90" />
            <path d={svgPaths.p44cba00} fill="#4A6D90" />
            <path d={svgPaths.p773800} fill="#4A6D90" />
            <path d={svgPaths.p3a527500} fill="#4A6D90" />
            <path d={svgPaths.p30ac8d00} fill="#4A6D90" />
            <path d={svgPaths.p786cff0} fill="#4A6D90" />
            <path d={svgPaths.p11205bf0} fill="#4A6D90" />
            <path d={svgPaths.p1746d80} fill="#4A6D90" />
            <path d={svgPaths.p7500ac0} fill="#4A6D90" />
            <path d={svgPaths.p38f57880} fill="#4A6D90" />
            <path d={svgPaths.p18681a00} fill="#4A6D90" />
            <path d={svgPaths.p24e24900} fill="#4A6D90" />
            <path d={svgPaths.p17e8f100} fill="#4A6D90" />
            <path d={svgPaths.p2f6e74f0} fill="#4A6D90" />
            <path d={svgPaths.p197b5800} fill="#4A6D90" />
            <path d={svgPaths.pa602a00} fill="#4A6D90" />
            <path d={svgPaths.p3629ae00} fill="#4A6D90" />
            <path d={svgPaths.p2ae5f200} fill="#4A6D90" />
            <path d={svgPaths.p3bc43180} fill="#4A6D90" />
            <path d={svgPaths.pa450212} fill="#4A6D90" />
            <path d={svgPaths.p248c17f0} fill="#4A6D90" />
            <path d={svgPaths.p20ead800} fill="#4A6D90" />
          </g>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header - constrained */}
        <FadeUp className="max-w-[1280px] mx-auto flex flex-col gap-4 items-start w-full mb-[54px]">
          <p className="font-sans font-semibold text-[#F1EBDF] text-[14px] tracking-[0.7px] uppercase m-0 leading-none">
            Lo que hacemos
          </p>
          <h2 className="font-serif font-normal text-[#F1EBDF] text-[32px] md:text-[40px] tracking-[-0.8px] leading-[1.2] m-0">
            Construimos y protegemos <span className="italic text-[#DFCAA3]">tu reputación.</span>
          </h2>
          <div className="h-[12px] w-[40px] shrink-0">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 12">
              <path d="M0 0L40 6.01093L0 12V0Z" fill="#DFCAA3" />
            </svg>
          </div>
        </FadeUp>

        {/* Cards Container - full width */}
        <div className="max-w-[1280px] mx-auto flex flex-col gap-0 -space-y-px">
          {services.map((service, index) => (
            <FadeUp key={index} delay={index * 0.08}>
            <Link
              to={service.href}
              className="group relative grid grid-cols-1 md:grid-cols-[32px_1fr_auto] lg:grid-cols-[32px_1.2fr_1.5fr_auto] gap-6 lg:gap-[84px] items-start lg:items-center px-6 py-8 md:px-[48px] md:py-[32px] min-h-[128px] rounded-[16px] bg-transparent hover:bg-[#F5EFE3]/80 text-[#F5EFE3] hover:text-[#5D89B4] transition-colors duration-300 cursor-pointer no-underline"
            >
              {/* Border element */}
              <div className="absolute inset-0 border border-[#F5EFE3] group-hover:border-[#5D89B4] rounded-[16px] pointer-events-none transition-colors duration-300" />

              {/* Number */}
              <div className="w-[32px] flex justify-start items-start z-10 shrink-0 mt-1 lg:mt-0 opacity-50 md:row-start-1 md:col-start-1">
                <span className="font-serif font-medium text-2xl lg:text-[28px] leading-[1.2]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-medium text-2xl md:text-[28px] leading-[1.2] m-0 z-10 md:row-start-1 md:col-start-2">
                {service.title}
              </h3>

              {/* Description — row 2 on tablet, row 1 col 3 on desktop */}
              <p className="font-sans text-lg md:text-[20px] leading-[1.6] m-0 z-10 md:row-start-2 md:col-start-2 md:col-span-2 lg:row-start-1 lg:col-start-3 lg:col-span-1">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center justify-start lg:justify-end z-10 md:row-start-1 md:col-start-3 lg:col-start-4">
                <svg viewBox="0 0 10.6667 10.6667" className="w-[16px] h-[16px] fill-current shrink-0">
                  <path d={svgPaths.p1fe21fc0} />
                </svg>
              </div>
            </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
