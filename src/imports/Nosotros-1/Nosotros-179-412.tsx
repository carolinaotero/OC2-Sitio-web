import svgPaths from "./svg-4mdnwotgja";
import imgNosotrosEstrategia1 from "./0db6019e476f94c7c3ff8334db85ec42d647ad4f.png";

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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-1.92px] whitespace-nowrap">
        <p className="leading-[96px] mb-0 tracking-[-0.32px]">Pasión</p>
        <p className="leading-[96px] mb-0 tracking-[-0.32px]">Proactividad</p>
        <p className="font-['Newsreader:Italic',sans-serif] italic leading-[96px] text-[#a28c6a] tracking-[-0.32px]">Criterio</p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[66px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
          <path d="M0 0L66 10.0182L0 20V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col h-[382px] items-start relative shrink-0" data-name="Image">
      <div className="h-[396px] relative shrink-0 w-[580px]" data-name="Nosotros estrategia 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNosotrosEstrategia1} />
      </div>
    </div>
  );
}

function HeroSectionPerspectiveSplit() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero Section: Perspective Split">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between pb-[96px] pt-[160px] px-[48px] relative size-full">
          <Container />
          <Image />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white w-full">
        <p>
          <span className="leading-[60px]">{`Apasionados de lo que hacemos desde hace `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[60px] text-[#dfcaa3]">más de veinte años.</span>
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[32px] relative shrink-0 w-[628px]" data-name="Container">
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[720px]">
      <div className="aspect-[103/101] relative self-stretch shrink-0" data-name="N">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.614 132">
          <path d={svgPaths.p374d6f80} fill="var(--fill-0, #DFCAA3)" id="N" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[22px] text-white">
        <p className="leading-[1.5]">os ponemos la camiseta del cliente. Los conocemos en profundidad. Su identidad la hacemos propia, de modo de proponerles respuestas, mensajes y acciones consistentes con quienes son.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[720px]" data-name="Container">
      <Frame />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[22px] text-white w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">No somos intermediarios entre sus públicos, sino que consejeros en los efectos comunicacionales y políticos de su toma de decisiones. Discrepamos si es necesario, aunque siempre el cliente tiene la última palabra.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="mb-0">
          <span className="leading-[1.5]">L</span>
          <span className="font-['Manrope:Regular',sans-serif] leading-[1.5] not-italic">{`a asesoría no la segmentamos en áreas. Todos nuestros servicios los damos de modo conjunto, porque fortalecer y cautelar la reputación no es fraccionable. `}</span>
        </p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="mb-0">
          <span className="font-['Manrope:Regular',sans-serif] leading-[1.5] not-italic">Entendemos la lógica de todas las plataformas, autoridades, públicos. El común denominador para ser exitosos en todas ellas es el</span>
          <span className="leading-[1.5]">{` criterio.`}</span>
          <span className="font-['Manrope:Regular',sans-serif] leading-[1.5] not-italic">{` Y el criterio lo da el conocimiento, la información y la experiencia. `}</span>
        </p>
        <p className="leading-[1.5]">​</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[171px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 56">
        <g id="Container">
          <g id="Logo">
            <path d={svgPaths.p107a8d80} fill="var(--fill-0, #DFCAA3)" />
            <path d={svgPaths.p3f239a00} fill="var(--fill-0, #DFCAA3)" />
            <path d={svgPaths.p26ffc000} fill="var(--fill-0, #DFCAA3)" />
            <path d={svgPaths.p7ccc480} fill="var(--fill-0, #DFCAA3)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container6 />
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

function Container7() {
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

function Container8() {
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

function Divider() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 2">
            <line id="Line 5" stroke="var(--stroke-0, #A28C6A)" strokeWidth="2" x2="237" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="h-[32px] relative shrink-0 w-[43px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 32">
          <g id="Vector">
            <path d={svgPaths.p13b45d80} fill="var(--fill-0, #A28C6A)" />
            <path d={svgPaths.p23447200} fill="var(--fill-0, #A28C6A)" />
          </g>
        </svg>
      </div>
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 2">
            <line id="Line 5" stroke="var(--stroke-0, #A28C6A)" strokeWidth="2" x2="237" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative w-full" data-name="Divider">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 2">
            <line id="Line 5" stroke="var(--stroke-0, #A28C6A)" strokeWidth="2" x2="237" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="h-[32px] relative shrink-0 w-[43px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 32">
          <g id="Vector">
            <path d={svgPaths.p20a59200} fill="var(--fill-0, #A28C6A)" />
            <path d={svgPaths.p22545f00} fill="var(--fill-0, #A28C6A)" />
          </g>
        </svg>
      </div>
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 2">
            <line id="Line 5" stroke="var(--stroke-0, #A28C6A)" strokeWidth="2" x2="237" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function QuoteDiv1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Quote div">
      <Divider />
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a28c6a] text-[40px] text-center tracking-[-0.8px] w-[533px]">
        <p className="leading-[1.2]">La tecnología acelera procesos y cambia formatos, pero no reemplaza el criterio</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Divider1 />
        </div>
      </div>
    </div>
  );
}

function QuoteDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0" data-name="Quote div">
      <QuoteDiv1 />
    </div>
  );
}

function Quote() {
  return (
    <div className="bg-[#fbf9f3] content-stretch flex flex-col items-center justify-center py-[98px] relative shrink-0 w-[1280px]" data-name="Quote">
      <QuoteDiv />
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

function Container14() {
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

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.59px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container17() {
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

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] w-[88.05px]">
        <p className="leading-[19.5px]">+562 2384 9780</p>
      </div>
    </div>
  );
}

function Container19() {
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

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] w-[64.78px]">
        <p className="leading-[19.5px]">info@oc2.cl</p>
      </div>
    </div>
  );
}

function Container21() {
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

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[12px] w-[237.11px]">
        <p className="leading-[19.5px]">Nueva Costanera 3300, Oficina 33, Vitacura</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start relative shrink-0 w-[254.572px]" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
      <Container12 />
      <Container15 />
    </div>
  );
}

function Container23() {
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
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_179_266)" id="SVG">
          <path d={svgPaths.pc18d500} fill="var(--fill-0, #3C5B79)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_179_266">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
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
      <Container25 />
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

function Container26() {
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
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-end relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <div className="flex flex-row items-end self-stretch">
        <Container22 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container27() {
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
      <Container27 />
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

function Container9() {
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
      <Container9 />
    </div>
  );
}

export default function Nosotros() {
  return (
    <div className="bg-[#fbf9f3] content-stretch flex flex-col items-start relative size-full" data-name="Nosotros">
      <HeroSectionPerspectiveSplit />
      <SectionBespokePhilosophy />
      <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-white content-stretch flex items-center justify-between left-1/2 px-[24px] py-[16px] rounded-[8px] top-[16px] w-[1248px]" data-name="Top NavBar">
        <Container7 />
        <Container8 />
        <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] whitespace-nowrap">
            <p className="leading-none">Hablemos</p>
          </div>
        </div>
      </div>
      <Quote />
      <Footer />
    </div>
  );
}