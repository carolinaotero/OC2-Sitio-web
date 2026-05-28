import imgVector1 from "./97ec7ef8d59a4efe24358e659fb9cd2c6cef3ed0.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">03</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[56px] tracking-[-1.12px] w-full">
        <p className="leading-[1.1]">Prensa</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#3c5b79] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[26px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[22px] w-full">
          <p className="leading-[1.5]">La libertad de prensa no solo es importante para la democracia, es la democracia.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="h-[352px] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-center pb-[32px] pt-[64px] px-[32px] relative size-full">
          <div className="h-[286px] relative shrink-0 w-[296px]">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVector1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
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
        <p className="leading-[1.5]">{`"Si no hablas tú, otro lo hará por ti."`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">el silencio otorga</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[133px] relative row-1 self-start shrink-0" data-name="Container">
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
        <p className="leading-[1.5]">{`"Nunca digas nada que no te gustaría ver publicado."`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">huella imborrable</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[94px] relative row-1 self-start shrink-0" data-name="Container">
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
        <p className="leading-[1.5]">{`"Siempre es un riesgo hablar con la prensa: suelen publicar lo que dices."`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">el riesgo literal</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[94px] relative row-2 self-start shrink-0" data-name="Container">
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
        <p className="leading-[1.5]">{`"Si se va a conocer con el tiempo, mejor que se conozca de inmediato."`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">la importancia del momentum</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[94px] relative row-2 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote3 />
      <Container10 />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[6/span_7] gap-x-[48px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__229px_229px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

export default function Section3Press() {
  return (
    <div className="bg-[#f5efe3] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_538px] px-[48px] py-[64px] relative size-full" data-name="Section 3: Press">
      <Container />
      <Container2 />
    </div>
  );
}