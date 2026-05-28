import svgPaths from "./svg-kr731khkje";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.8px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[56px] tracking-[-1.12px] whitespace-nowrap">
        <p className="leading-[1.1]">El discurso</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#a28c6a] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[26px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[22px] w-full">
          <p className="leading-[1.5]">Ningún discurso es completamente malo si es lo bastante corto.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div className="h-[266px] relative shrink-0 w-[320px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 266">
          <g id="Vector">
            <path d={svgPaths.p34fbaf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a8aa5c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ee4f100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p189eafc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bdbfa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26a16800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7835a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p202d4580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32e00480} fill="var(--fill-0, #3C5B79)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[24px] items-start relative row-1 self-start shrink-0 w-[394.667px]" data-name="Container">
      <Container1 />
      <Heading />
      <VerticalBorder />
      <BackgroundBorder />
    </div>
  );
}

function Blockquote() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">{`"Un discurso de diez minutos toma un par de semanas; el de una hora, una semana, y el de dos horas siempre se puede improvisar."`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">la paradoja de la preparación</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[3.5px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote />
      <Container4 />
    </div>
  );
}

function Blockquote1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">{`"Lamento un discurso tan largo. No tuve tiempo de hacerlo más corto."`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">el tiempo es oro</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[81.5px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote1 />
      <Container6 />
    </div>
  );
}

function Blockquote2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">{`"Me he pasado toda la noche preparando la improvisación de mañana."`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">la espontaniedad calculada</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[42.5px] relative row-2 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote2 />
      <Container8 />
    </div>
  );
}

function Blockquote3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">{`"La habilidad de simplificar significa eliminar lo innecesario para que lo necesario pueda hablar."`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">la economía del lenguaje</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[3.5px] relative row-2 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote3 />
      <Container10 />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[6/span_7] gap-x-[48px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__216.50px_177.50px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

export default function Section1TheSpeech() {
  return (
    <div className="gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_474px] relative size-full" data-name="Section 1: The Speech">
      <Container />
      <Container2 />
    </div>
  );
}