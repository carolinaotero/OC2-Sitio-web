import svgPaths from "./svg-f70jtj3nhd";
import imgReputacion1 from "./e1b88c0a4f063e054359d1a7e974392e89bc870f.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-none">Somos</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-4.8px] w-full">
        <p>
          <span className="font-['Newsreader:Regular',sans-serif] leading-[96px] text-[#5d89b4]">{`Socios en la gestión de `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] italic leading-[96px] text-[#a28c6a]">{`tu `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] italic leading-[96px] text-[#a28c6a]">reputación</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[896px] relative row-1 self-end shrink-0" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function HeroSectionPerspectiveSplit() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero Section: Perspective Split">
      <div className="gap-x-[96px] gap-y-[96px] grid grid-cols-[__minmax(0,1.50fr)_minmax(0,1fr)] grid-rows-[_382px] px-[48px] py-[98px] relative size-full">
        <Container />
        <div className="col-2 h-[296px] justify-self-end relative row-1 self-end shrink-0 w-[565px]" data-name="Reputación 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgReputacion1} />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[48px] text-white w-full">
        <p className="leading-[60px]">Más de 20 años de experiencia</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[32px] relative" data-name="Container">
      <Heading1 />
      <div className="h-0 relative shrink-0 w-[117px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 1">
            <line id="Line 16" stroke="var(--stroke-0, #DFCAA3)" x2="117" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-white w-full">
        <p className="leading-[1.5]">{`Somos una de las Consultoras de Comunicaciones Estratégicas más respetadas del país. Generamos relaciones de confianza fundadas en el conocimiento, confidencialidad y trabajo bien hecho. `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] justify-center relative shrink-0 text-[#fbf9f3] text-[18px] w-full">
        <p className="leading-[1.6] whitespace-pre-wrap">{`Conocemos los contextos políticos, sociales y económicos. Entendemos la lógica de las empresas y gremios, de los medios  y de los diversos actores. `}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px pb-[16px] relative" data-name="Container">
      <Container5 />
      <div className="h-[10px] relative shrink-0 w-[32px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10">
          <path d="M0 0L32 5.00911L0 10V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[96px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function SectionBespokePhilosophy() {
  return (
    <div className="bg-[#5d89b4] relative shrink-0 w-full" data-name="Section - Bespoke Philosophy">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[48px] py-[96px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[110.205px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.205 36">
        <g id="Container">
          <g id="Logo">
            <path d={svgPaths.p3b048900} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.pa023cc0} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p39a9c300} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p3e1d3e80} fill="var(--fill-0, #5D89B4)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">nosotros</p>
        </div>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 1">
              <line id="Line 11" stroke="var(--stroke-0, #5D89B4)" strokeLinecap="round" x1="0.5" x2="85.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">servicios</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">clientes</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">equipo</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">Máximas</p>
        </div>
      </div>
    </div>
  );
}

function QuoteDiv() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[700px] relative shrink-0" data-name="Quote div">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[0px] text-center w-[700px]">
        <p className="leading-[normal] mb-0 text-[40px]">Somos imbatibles en el manejo de crisis, porque para nosotros,</p>
        <p className="font-['Newsreader:Italic',sans-serif] italic leading-[normal] text-[#a28c6a] text-[40px]">toda crisis es una oportunidad.</p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[28.252px] relative w-[372px]" data-name="Divider 3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 28.2523">
        <g id="Divider 3">
          <path d={svgPaths.p12bbb870} fill="var(--fill-0, #5D89B4)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p21674400} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p4480780} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.pffbb500} fill="var(--fill-0, #5D89B4)" />
          </g>
          <path d={svgPaths.p253a1b80} fill="var(--fill-0, #5D89B4)" id="Vector_3" />
          <g id="Vector_4">
            <path d={svgPaths.p596d280} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p6a95e80} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p3ed6a600} fill="var(--fill-0, #5D89B4)" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p1cae7200} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p1eef7400} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p3bb95080} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p1950f380} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p24081200} fill="var(--fill-0, #5D89B4)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[48px] py-[96px] relative shrink-0 w-[1280px]">
      <QuoteDiv />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Divider />
        </div>
      </div>
      <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[0.9px] whitespace-nowrap">
          <p className="leading-none">Conversemos</p>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start pb-[48px] relative shrink-0 w-full" data-name="Margin">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 24">
        <g id="Container">
          <g id="Logo">
            <path d={svgPaths.p3d6feec0} fill="var(--fill-0, #4F82AD)" />
            <path d={svgPaths.p758d200} fill="var(--fill-0, #4F82AD)" />
            <path d={svgPaths.p101f0a80} fill="var(--fill-0, #4F82AD)" />
            <path d={svgPaths.p1a2fdc00} fill="var(--fill-0, #4F82AD)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.59px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Container">
          <path d={svgPaths.p3c8609c0} fill="var(--fill-0, #3C5B79)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] w-[88.05px]">
        <p className="leading-[19.5px]">+562 2384 9780</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33334">
        <g id="Container">
          <path d={svgPaths.p3155b200} fill="var(--fill-0, #3C5B79)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] w-[64.78px]">
        <p className="leading-[19.5px]">info@oc2.cl</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[12.013px] relative shrink-0 w-[9.462px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.46155 12.0128">
        <g id="Container">
          <path d={svgPaths.p3f5537c0} fill="var(--fill-0, #3C5B79)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] w-[237.11px]">
        <p className="leading-[19.5px]">Nueva Costanera 3300, Oficina 33, Vitacura</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start relative shrink-0 w-[254.572px]" data-name="Container">
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">nosotros</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">servicios</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">clientes</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">equipo</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">máximas</p>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-none">Trabaja con nosotros</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_101_612)" id="SVG">
          <path d={svgPaths.pc18d500} fill="var(--fill-0, #3C5B79)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_101_612">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] tracking-[2.4px] uppercase w-[69.39px]">
        <p className="leading-[19.5px]">LINKEDIN</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Svg />
      <Container24 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p16521280} fill="var(--fill-0, #3C5B79)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] tracking-[2.4px] uppercase w-[9.69px]">
        <p className="leading-[19.5px]">X</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Svg1 />
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-end relative shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <div className="flex flex-row items-end self-stretch">
        <Container21 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d89b4] text-[10px] w-[211.45px]">
          <p className="leading-[16.25px]">© 2026 OC2. Otero Studio</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#a28c6a] border-solid border-t inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Container8() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[48px] relative size-full">
        <Margin />
        <Margin1 />
        <Margin2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f5efe3] content-stretch flex flex-col h-[380px] items-start relative shrink-0 w-[1280px]" data-name="Footer">
      <Container8 />
    </div>
  );
}

export default function Servicios() {
  return (
    <div className="bg-[#fbf9f3] content-stretch flex flex-col items-start relative size-full" data-name="Servicios">
      <HeroSectionPerspectiveSplit />
      <SectionBespokePhilosophy />
      <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-white content-stretch flex items-center justify-between left-1/2 px-[24px] py-[16px] rounded-[8px] top-[16px] w-[1248px]" data-name="Top NavBar">
        <Container6 />
        <Container7 />
        <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] whitespace-nowrap">
            <p className="leading-none">Hablemos</p>
          </div>
        </div>
      </div>
      <Frame />
      <Footer />
    </div>
  );
}