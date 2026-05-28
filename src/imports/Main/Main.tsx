import svgPaths from "./svg-lnn9d2w8ej";
import imgTiempo1 from "./f432be52fb239708a3ecc90fad7bb5a8eac11c6d.png";
import imgCinta1 from "./accadf150a6b799624afcd356a9a38092d6a26d3.png";
import imgEnergia1 from "./bcd13f147db2673888846515f8cb8d5f2d28a944.png";
import imgInmobiliarias1 from "./9d2a34c02dccf2dd2518bd8b1fb10ef14421debc.png";
import imgBanca1 from "./9ff9920ad4b21766e565ee34426005db4815002e.png";
import imgRetail1 from "./0b18cd3e78a3a1f6cbc0333b042b6aa1b015d25c.png";
import imgSanitarias1 from "./7245fb318db65868e40286022062bd0484587d1b.png";
import imgPuertos1 from "./5316042a447cf43897c739a71fb5fc14482f9b93.png";
import imgNavieras1 from "./38f13a27ad5639e913094cead1e01e5a976b5950.png";
import imgAgronomia1 from "./3807a7bc29b7a8021819179f5d58fa0374a3a3ea.png";
import imgSalmoneras1 from "./ed2d5ea811eb69c821561dca312d6a20d3c00e96.png";
import imgForestal1 from "./354aa45a9a3ac01d09c1ec150e2a6b9cb4161cc0.png";
import imgGremios1 from "./c2522e2f7ad665cde0b4ba3cd23d02e27b61f3de.png";
import imgConsultora1 from "./b3d4ae871520c880c4ebad87dd647a4cdfcd22b6.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-2.88px] w-full">
        <p>
          <span className="leading-[96px]">{`Relaciones que `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[96px] text-[#a28c6a]">Trascienden</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] opacity-80 pb-[0.75px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[130px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[20px] w-[568.39px]">
        <p>
          <span className="leading-[32.5px]">{`A lo largo de dos décadas hemos trabajado con líderes de las industrias más diversas. Empresas, gremios e instituciones que entendieron, antes que muchos, que la reputación es un activo estratégico — `}</span>
          <span className="leading-[32.5px] text-[#a28c6a]">y nos eligieron para construirla.</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col gap-[31.25px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="col-[8/span_5] h-[600px] relative rounded-[8px] row-1 self-center shrink-0 w-[478.667px]" data-name="Background">
      <div className="absolute h-[600px] left-[-18.33px] top-[-0.5px] w-[516px]" data-name="tiempo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTiempo1} />
      </div>
    </div>
  );
}

function HeroSectionPerspectiveSplit() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero Section: Perspective Split">
      <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_627px] p-[32px] relative size-full">
        <Container />
        <Background />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-none">Nuestra filosofía</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[48px] w-full">
        <p className="leading-[60px]">El Arte de la Personalización</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[32px] relative" data-name="Container">
      <Container4 />
      <Heading1 />
      <div className="h-[120px] relative shrink-0 w-[339px]" data-name="cinta 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCinta1} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[18px] w-full">
        <p className="leading-[28px] mb-0">Cada cliente es un ecosistema único. No aplicamos fórmulas;</p>
        <p className="leading-[28px]">diseñamos estrategias a medida que responden a la complejidad de los entornos actuales. Nuestro crecimiento es un reflejo de la confianza orgánica de quienes ya han comprobado el valor de nuestra visión estratégica.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px pb-[16px] relative" data-name="Container">
      <Container6 />
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
      <Container5 />
    </div>
  );
}

function SectionBespokePhilosophy() {
  return (
    <div className="bg-[#f5efe3] relative shrink-0 w-full" data-name="Section - Bespoke Philosophy">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[48px] py-[96px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#a28c6a] text-[14px] text-center tracking-[2.1px] uppercase w-[544px]">
        <p className="leading-none">sectores</p>
      </div>
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#5d89b4] text-[0px] tracking-[-1.12px] whitespace-nowrap">
        <p className="font-['Newsreader:Regular',sans-serif] font-normal leading-[1.1] mb-0 text-[56px]">Conocimiento</p>
        <p className="font-['Newsreader:Regular',sans-serif] font-normal leading-[1.1] text-[#a28c6a] text-[56px]">multisectorial.</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <Frame1 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center max-w-[600px] min-w-full not-italic relative shrink-0 text-[#3c5b79] text-[18px] text-center w-[min-content]">
        <p className="leading-[28px]">Cada industria tiene su propio idioma, sus regulaciones, sus actores y sus tensiones. Nuestra experiencia transversal nos permite movernos con soltura en todas.</p>
      </div>
    </div>
  );
}

function CaptionDiv() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">01</p>
      </div>
    </div>
  );
}

function CaptionDiv1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Energía</p>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[97px]" data-name="energia 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEnergia1} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-1 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv />
      <CaptionDiv1 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Generadoras, distribuidoras y proyectos de transición energética. Comunicación con comunidades, autoridades y mercados.</p>
      <ImageContainer />
    </div>
  );
}

function CaptionDiv2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">02</p>
      </div>
    </div>
  );
}

function CaptionDiv3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[24px] w-full">
        <p className="leading-[1.25]">Inmobiliario</p>
      </div>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[93px] relative shrink-0 w-[109px]" data-name="Inmobiliarias 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInmobiliarias1} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-1 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv2 />
      <CaptionDiv3 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Desarrolladoras nacionales con foco en posicionamiento de marca y relación con autoridades municipales y vecinos.</p>
      <ImageContainer1 />
    </div>
  );
}

function CaptionDiv4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">03</p>
      </div>
    </div>
  );
}

function CaptionDiv5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[24px] w-full">
        <p className="leading-[1.25]">Finanzas</p>
      </div>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[109px]" data-name="Banca 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBanca1} />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-1 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv4 />
      <CaptionDiv5 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Bancos, family offices y administradoras de fondos. Comunicación corporativa, vocería y gestión de crisis.</p>
      <ImageContainer2 />
    </div>
  );
}

function CaptionDiv6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">04</p>
      </div>
    </div>
  );
}

function CaptionDiv7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[24px] w-full">
        <p className="leading-[1.25]">Retail</p>
      </div>
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[81px]" data-name="Retail 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRetail1} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-1 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv6 />
      <CaptionDiv7 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Cadenas, marcas de consumo masivo y plataformas omnicanal navegando entornos competitivos y regulatorios crecientes.</p>
      <ImageContainer3 />
    </div>
  );
}

function CaptionDiv8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">05</p>
      </div>
    </div>
  );
}

function CaptionDiv9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Sanitarias</p>
      </div>
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[84px]" data-name="Sanitarias 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSanitarias1} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-2 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv8 />
      <CaptionDiv9 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Empresas sanitarias regionales con desafíos de relación comunitaria, regulatoria y de continuidad operacional.</p>
      <ImageContainer4 />
    </div>
  );
}

function CaptionDiv10() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">06</p>
      </div>
    </div>
  );
}

function CaptionDiv11() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">{`Puertos & Remolques`}</p>
      </div>
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[78px]" data-name="Puertos 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPuertos1} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 relative row-2 self-stretch shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[32px] relative size-full">
          <CaptionDiv10 />
          <CaptionDiv11 />
          <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Operadores marítimos y logísticos con públicos diversos: gobiernos, sindicatos, gremios y comunidades.</p>
          <ImageContainer5 />
        </div>
      </div>
    </div>
  );
}

function CaptionDiv12() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">07</p>
      </div>
    </div>
  );
}

function CaptionDiv13() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Navieras</p>
      </div>
    </div>
  );
}

function ImageContainer6() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[160px]" data-name="Navieras 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavieras1} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-3 relative row-2 self-stretch shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[32px] relative size-full">
          <CaptionDiv12 />
          <CaptionDiv13 />
          <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Compañías de transporte marítimo con operaciones internacionales, regulación intensa y relación con autoridades portuarias.</p>
          <ImageContainer6 />
        </div>
      </div>
    </div>
  );
}

function CaptionDiv14() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">08</p>
      </div>
    </div>
  );
}

function CaptionDiv15() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Agro</p>
      </div>
    </div>
  );
}

function ImageContainer7() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[98px] relative shrink-0 w-[33px]" data-name="Agronomía 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAgronomia1} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-2 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv14 />
      <CaptionDiv15 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Cadenas, marcas de consumo masivo y plataformas omnicanal navegando entornos competitivos y regulatorios crecientes.</p>
      <ImageContainer7 />
    </div>
  );
}

function CaptionDiv16() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">09</p>
      </div>
    </div>
  );
}

function CaptionDiv17() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Salmonicultura</p>
      </div>
    </div>
  );
}

function ImageContainer8() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[85px] relative shrink-0 w-[180px]" data-name="Salmoneras 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSalmoneras1} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-1 relative row-3 self-stretch shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[32px] relative size-full">
          <CaptionDiv16 />
          <CaptionDiv17 />
          <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Productoras de salmón con presencia en regiones, asuntos públicos y comunicación de sostenibilidad.</p>
          <ImageContainer8 />
        </div>
      </div>
    </div>
  );
}

function CaptionDiv18() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">10</p>
      </div>
    </div>
  );
}

function CaptionDiv19() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Forestal</p>
      </div>
    </div>
  );
}

function ImageContainer9() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[104px]" data-name="Forestal 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgForestal1} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-2 relative row-3 self-stretch shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[32px] relative size-full">
          <CaptionDiv18 />
          <CaptionDiv19 />
          <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Empresas forestales y de celulosa con desafíos territoriales, ambientales y de relación con comunidades rurales.</p>
          <ImageContainer9 />
        </div>
      </div>
    </div>
  );
}

function CaptionDiv20() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">11</p>
      </div>
    </div>
  );
}

function CaptionDiv21() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Gremios</p>
      </div>
    </div>
  );
}

function ImageContainer10() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[175px]" data-name="Gremios 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGremios1} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-3 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv20 />
      <CaptionDiv21 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Asociaciones gremiales que representan a sectores estratégicos frente al Congreso, el Ejecutivo y la opinión pública.</p>
      <ImageContainer10 />
    </div>
  );
}

function CaptionDiv22() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#a28c6a] text-[13px]">
        <p className="leading-[1.4]">12</p>
      </div>
    </div>
  );
}

function CaptionDiv23() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Caption div">
      <div className="flex flex-[1_0_0] flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#5d89b4] text-[24px]">
        <p className="leading-[1.25]">Consultoras</p>
      </div>
    </div>
  );
}

function ImageContainer11() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[120px] relative shrink-0 w-[90px]" data-name="consultora 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConsultora1} />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] h-[328px] items-center p-[32px] relative row-3 shrink-0 w-[295.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfcaa3] border-solid inset-[-0.5px] pointer-events-none" />
      <CaptionDiv22 />
      <CaptionDiv23 />
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] leading-[1.4] min-h-px not-italic relative text-[#3c5b79] text-[13px] w-full">Firmas profesionales que requieren posicionamiento experto, vocería técnica y construcción de marca de pensamiento.</p>
      <ImageContainer11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[1181px]">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function SectionSectorExpertiseArchitecturalGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] px-[48px] py-[96px] relative shrink-0 w-[1280px]" data-name="Section - Sector Expertise: Architectural Grid">
      <Paragraph />
      <Frame />
    </div>
  );
}

function DividerContainer() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-[537px]" data-name="Divider container">
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

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[537px]" data-name="Text">
      <div className="flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbf9f3] text-[32px] text-center uppercase w-full">
        <p className="leading-[1.5]">Una verdad sin interés puede ser eclipsada por una falsedad emocionante.</p>
      </div>
    </div>
  );
}

function DividerContainer1() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-[537px]" data-name="Divider container">
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
    <div className="content-stretch flex flex-col gap-[28.255px] items-start relative shrink-0" data-name="Quote container">
      <DividerContainer />
      <Text />
      <DividerContainer1 />
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[10px] py-[160px] relative shrink-0 w-[1280px]" data-name="Quote Section">
      <QuoteContainer />
    </div>
  );
}

export default function Main() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Main">
      <HeroSectionPerspectiveSplit />
      <SectionBespokePhilosophy />
      <SectionSectorExpertiseArchitecturalGrid />
      <QuoteSection />
    </div>
  );
}