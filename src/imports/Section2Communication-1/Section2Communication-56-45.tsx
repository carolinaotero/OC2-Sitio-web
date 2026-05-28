import imgVector21 from "./12190dcd7ab554c9b6efba660d5725fd5f8258d8.png";

function Blockquote() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">“Si tuviera que decidir si debemos tener un gobierno sin periódicos o periódicos sin gobierno, no dudaría en preferir lo segundo.”</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">Thomas Jefferson</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[42.5px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote />
      <Container2 />
    </div>
  );
}

function Blockquote1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">“No estoy de acuerdo con lo que dices, pero defenderé con mi vida tu derecho a expresarlo.”</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">Voltaire</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[81.5px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote1 />
      <Container4 />
    </div>
  );
}

function Blockquote2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">“La libertad de prensa no solo es importante para la democracia, es la democracia.”</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">Walter Cronkite</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[42.5px] relative row-2 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote2 />
      <Container6 />
    </div>
  );
}

function Blockquote3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">“Sin publicidad no puede haber apoyo público, y sin apoyo público, todas las naciones decaen.”</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">{`Benjamin Disraeli `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[42.5px] relative row-2 self-start shrink-0" data-name="Container">
      <div className="bg-[#dfcaa3] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Blockquote3 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1/span_7] gap-x-[48px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__216.50px_177.50px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] text-right tracking-[2.8px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">04</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[56px] text-right tracking-[-1.12px] w-full">
        <p className="leading-[1.1]">{`Democracia & Periodismo`}</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#a28c6a] border-r-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[26px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[22px] text-right w-full">
            <p className="leading-[1.5]">El derecho a ser escuchado no incluye el derecho a ser tomado en serio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-center justify-center relative rounded-[4px] w-full" data-name="Background+Border">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[253px] relative w-[266px]" data-name="Vector2 1">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVector21} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start relative row-1 self-start shrink-0 w-[394.667px]" data-name="Container">
      <Container10 />
      <Heading />
      <VerticalBorder />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

export default function Section2Communication() {
  return (
    <div className="gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_474px] px-[48px] py-[64px] relative size-full" data-name="Section 2: Communication">
      <Container />
      <Container9 />
    </div>
  );
}