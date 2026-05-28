import svgPaths from "./svg-oplnnn25r4";

function Blockquote() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Blockquote">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[24px] w-full">
        <p className="leading-[1.5]">{`"No hay que decir todo lo que se piensa, pero siempre hay que pensar todo lo que se dice."`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">la integridad del discurso</p>
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
        <p className="leading-[1.5]">{`"Decir lo mismo una y otra vez es aburrido, pero funciona."`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">repetición estratégica</p>
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
        <p className="leading-[1.5]">{`"Las audiencias olvidan los hechos, pero recuerdan actitudes e historias."`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">el impacto de la narrativa</p>
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
        <p className="leading-[1.5]">{`"Miradas, sonrisas, silencios, también hablan."`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[18px] tracking-[0.9px] uppercase w-full">
        <p className="leading-[1.6]">comunicación no verbal</p>
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
        <p className="leading-[20px]">02</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[56px] text-right tracking-[-1.12px] whitespace-nowrap">
        <p className="leading-[1.1]">Comunicar</p>
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
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[22px] text-right whitespace-nowrap">
            <p className="leading-[1.5]">En caso de duda, cuenta la verdad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-center relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div className="h-[307px] relative shrink-0 w-[296px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 307">
          <g id="Vector">
            <path d={svgPaths.p13d3d8c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p278cf900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3321a500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d59bb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d8adc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bdca380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3327cb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4919000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25fe6540} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21e98900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34680280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p264af780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc486c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18ecfc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p162cf600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25af69c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3933bf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p59b9500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ea3ad72} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d153800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p235dee00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fb1ef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24c7a100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e420100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c18b080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa60c300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b773b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12ce3d30} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17abdc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14ae3200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5a2d400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d613872} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31407f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2960fb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21aad300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2aa6dc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d43c500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p402e8f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p540d170} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d1e9700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36ae340} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p350d0180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d2e1170} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b442f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26961180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16ed0300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19594a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3261a280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e290000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ccac200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbc6ea72} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d32f500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf2bf300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ad2fc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bc03a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3690ef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32064980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p210c75f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14612600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29ab4b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a272200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc30ad00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2092ee00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9469300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p340ce870} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cea2a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3db943b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f313200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26b34f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39ad5800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d8eac00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a741980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p86a0280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35814700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3578c600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5f2b980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e269780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b3d2000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39d00900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcd8db80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2942fe80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15ef2180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d6f3700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31475980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcd0900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3450b6c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21716de0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b809ff0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2479ed00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p179ed700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14995700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p324dc8f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35ea2700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2aa7be80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p759a1c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p230d8000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18c59100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20ab1780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a04b700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p386df580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p115e7800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f372d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30857000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30cc300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30977f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c197700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ca38b70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf98ca00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f75e500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1395000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b7a0700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p58bb400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ebf3700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26448300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb850500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f417100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ade2f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ea90600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3df42300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27c57900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ebf8f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24ce0440} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16688900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe3c0200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pad40800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36d5e900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31038fc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3439aab1} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2661f000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p108a6300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c24b090} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d1ee600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15906380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p306dc300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10d62c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9730480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30673380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.paff3880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p298cf240} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b9aaf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa2a7a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1315a9f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3584d170} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe3faa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d00c000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29e54680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19756c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18433c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16d07e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19b4e300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc682500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23b83c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd59bc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34d27180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27a63b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e8d3b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10ef3f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p246bfa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d847600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37d2900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p187e5e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fb9c9f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34374d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p296b7480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a4c900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17476600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d9a33c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13505000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2337d500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb579300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13a2c700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p375aec00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p88e9d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13a71f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd844000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28b3a900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f1b1d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1db6d400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1da0600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25c43a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p272d3f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31a35c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbb76400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35e76e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d121280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e82f600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15a41e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10be2c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb9f7280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd9f7dc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25480600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f1a1300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bcb3600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3abbd280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39decdf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28766000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22290af0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3df44c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2005bb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16ed0e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b534d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37772500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a936380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c0f600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37ad5080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p292f4270} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fae8b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p243ae380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p212f7dc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d617440} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd548800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23077400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2434a180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5f7cd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p49b2f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3be28400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f8cb470} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1acb82b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bf2d000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d5a3600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13f75e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27434f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a202840} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cc75f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e55e000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p236b4c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10e0ad00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ef5200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c800300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p347df600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd243400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37fd4780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1af71500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p156f5900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4463c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d644780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d22c280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23f07480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37d27d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p609a000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6e6c800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26718700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32d8580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3defa100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p513e180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30c1b900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pff2ca72} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6470600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a89d800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6c31980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18133800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20146540} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c42f000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b4195c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p257d8a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31c61f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p241d8e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f97000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3590aff2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34df3d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9379500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe651900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21142300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b20cb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p317d9b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29893900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p443cb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p841a780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30453b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f695400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fae400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14fbc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38e32a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23aacff0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30344340} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cb67e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p77b1f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ee50100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38f4300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1338bb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7890a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d143180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bab4c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32ec6200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p372bd180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25b6e280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a769480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p293f0800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35114530} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bb74500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a4c3e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2539200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p284d9370} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13027300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22c3a000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b04be40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6a7bdf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25590c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23ec3b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p240c6100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25cb2d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36fd43f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30111f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39b2780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p103fb580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38e501d0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16b65580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c28fc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f83b600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p281e5ec0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f2bcb31} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f066300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe83d100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fd25900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18052780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f5c700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d321f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a08e080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2724e280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p103f880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bbdd100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14ed8c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1013d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p110e8f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18f23300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f17ef70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5ea1b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f6cb400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2aee4c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34547300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c833e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1389e100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e325380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21811580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d6e2d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31dab200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17320f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p285c0300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a66dc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c633700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6504f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38ed7500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p46c1300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17796300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p358aa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb752e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb0ee000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p84ccc80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37056200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p354d9600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30f0f580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31d66c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36030700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f7cfc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a32f800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd8b6940} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a777b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f0b6100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf271000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e0894c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24bd6f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13038100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1121f300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbf3f840} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31c52880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10f94600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8f5a300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a63f200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b9bfe80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p292c7400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bba54b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cf8e600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16a81df2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31b64a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6221e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2173d900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fc00d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3eab100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13b3b900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22870780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29a42100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p291af080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pac01b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f2ec500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3694fc40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19692f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cdcb300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23ab7900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3724a800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e433d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8ca1dc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d2b7d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9ba1700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cb1a400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2255d900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3dbd4220} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf34fc20} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12112400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37734480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc27e440} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37ca6f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10d15b40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1620cc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29593c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7587900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p191ff200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ecee530} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7a59380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cb67df0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37dbb500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c104700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p151ec200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p183235c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3dd98b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3eda9500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd766470} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c935f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p276bbe80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p370def00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31685400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9869a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20235800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p110a7580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c330d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd69c480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a820f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p384cc500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35257a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ca6d680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37f91240} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7b10d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fe33ac0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f92f700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6eed000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6b5fa80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p148f0b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2415800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p49ab212} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39fa3800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28980900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p395de800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p211fe880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35a8c980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d0d7700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e326b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3866480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b458400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a8c5500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p338f1100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32a5b31} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12f4f700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd4d1f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c7993f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38663d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.padde800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p98fb600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p171cd200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p186f8680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2aff7700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p263eca80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p153cf4c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb8cfd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26f6080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22825500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p185afbc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bd0b480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p214cc700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33b65900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33d23d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3152ed00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b581430} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4a25700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15b61600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d15d0f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c22e280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d2700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1297bd50} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14eb4e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5ff6100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f225500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22633e40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10efc800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20b28c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22d69a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p395b7f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37e83470} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c541f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pdc93200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b9e7500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbf2d280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4140c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p71dd880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2009a500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1687cb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37172280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34169100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a3a4900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30fd4c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd1e2332} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ce43a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17663000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b1d1100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cc10b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16174580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25114280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33afd200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cc42700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p98d0d40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p714ec20} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15b6d800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12a61200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p615af00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e58ee00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f4f1900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e7d4d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcadda70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p183ee700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c1fc600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p80fb880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10f20300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23646b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25eaa100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24ca5500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc8b0380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24bce200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2924b200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bb2f9c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p620f800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb4dde00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16496700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p160582a0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f9a9e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.peb4d580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fff0900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2bdc6080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2eb8ff80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c660280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b73cd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28e2cb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2aaf9a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ae7aa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d4ffd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3068e900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ebd5100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28a31000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p114be670} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27544d90} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe224580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2599a1f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f951880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32c30d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36529900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3afb5e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p267f5770} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p120d0f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26585100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e2f6d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e25f2f2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c9a2100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a257400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pda9f200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12617800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a9bc880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36dc3180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d84f100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1aa45080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1809e100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p86de600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p193cf7f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p210edb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7af4c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c721100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33215d70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p246ccf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25b6c500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1019a300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc800d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcf6d900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6398340} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1459a6f2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28b80800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p54b3880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27e7ac70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19d4dc80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31385f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf48e500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6ada00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11980c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37b04980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1447bd40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e4f1e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pffcbf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p262f4880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e80ff00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p304b0c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p382d3980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p169dd300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p171be700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24869c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e567e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c6b4500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1adcc200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2406b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17691c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2af5b170} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ae1200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33d87800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1de48a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c102180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e5b800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ffb0680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f736900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bf26920} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe44ab80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b938500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a40d4c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p242d3e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a20da00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c2f0b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a7b9f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ef3b380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18e8ae40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19580e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15f63180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4dcc400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc00d500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16129780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22034080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19a1c980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a5d3b70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1478a770} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9817d40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e110000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2943aa80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p163bef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf7cfc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29dc9800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23585300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e9ddd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ec19600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f327900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb76d7c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p506a580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a202700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e8faa40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ce41f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a972580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c8f3840} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d758600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a46ff00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe711880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3dec5600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p212dd600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c330000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p91b0800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18ded700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2728db00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fafecf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fa6aa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p619cd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a60ec00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19c86f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a39a980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b3bd1c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pee0cc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p340cf640} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21f21900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p132b5600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25de4900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4152e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31bbef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a615500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa40d600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16957980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d3fdd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p316a9a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fd19b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p275ad480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27896c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5661400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1541df80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33131d40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31831f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25e2dd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p234dea00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ee3a9c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pca11e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4031900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p282efe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3822d480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29b17680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p85f400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20f3f400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fc35740} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p115c9700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29d8d100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2393ff40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37704f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23bac900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ee58d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b50a900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a98c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26815700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a774100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c2b3600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p239eb180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p390be880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p205a4d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28526200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p201c8700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe4ccb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p296f8800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3636ab80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13987100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27d17ff0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pae5e500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d04a270} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31e2f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d1930c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37b3d800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p142eeb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pddf6580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p329c700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p283a0280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6c03880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p158faa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pba2e0c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d01f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fee8600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5d73ef2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19a5d380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38309300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19b08680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3247f300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d6f1700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17a34f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29d4c1d0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c59a400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fb12180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19d9bbc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ae89d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28137380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfcb4f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2193eec0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30750f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d27fac0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c97df00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33ced100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p193f1380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p558ec00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25664cc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pdc2f900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b042200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14677e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ea9bc80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ba1dd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28bf49c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17794a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18b9be80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1adf7e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24683a40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1417a600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14609e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38a92a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cc14000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd54cb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p208e7080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18720b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2da41380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p297f8680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35fad200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23b67180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25163080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11affdf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27c3ba00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cca3cc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b5cc700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4a72d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25157000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3800fd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d42fcc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfa6bb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35d4e080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7152000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ad46a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33f7dd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10cabf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35846080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2759f000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p246ed000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5825c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17746600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33cd9900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c304340} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a4c8900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2656f970} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8c10a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.padd8900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20131480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p165a6280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ee256f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2808b480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b57d480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21080900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16ea6d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p306bd071} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29acebf2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1536ae80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe8e4500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f1ff080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p325b9280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21abdd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c4ec400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3eabe880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf304c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p828000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29c8700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fc55c71} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p286e4600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33fc9800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1dd14100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3843e3f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35c0a880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p282d7280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ccc7e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7bb1e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d460600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f1ee900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e2f0500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2647f380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1388e200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f521100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d31eb80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3310aa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a06ac00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26e27d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c546480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p203ba900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf4a5780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16976c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p115848f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd215180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ff7ae80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd1306c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15620a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p205a06f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13c8b1c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9a84870} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2043fa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2eb8d900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p242ab800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ebca200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cc76100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e9db300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3381600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18b5c300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd408780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa8ee80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c5c5cc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcf28580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35aacc80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a59d3f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbdeff00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p138fb800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b56eb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a0ed500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfd3d200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32df9c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3630f540} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29d77600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf38fc80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27587680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14fde880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cd94200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6d19a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ed15600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d88f880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d7c4872} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18bc8780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ecf0700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf7aeec0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30e9c320} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31d366c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25142800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d788d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p253c9a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd3e3d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d805100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p59ca800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p306d0900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26434400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf4d500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf0fb900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12a4e400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p66d2c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2520b500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fe19600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f6dd300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f1300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcdc8a90} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18112580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p303b4800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pefcb000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13ca000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c699030} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p293e5000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15777a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e012e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p265d2000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5716a60} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f6f1f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f1b6080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1be3300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a416280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7ac9100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7b61b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p229fd500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f8d5b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb5cd5fe} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20ff1600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34600e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b2b2c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36551f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p863d970} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cc39a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d8f180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12660f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3de80a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1284e440} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c6e2af0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c6c1800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c6d2f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1139cd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35502880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p281c240} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd0c2380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37a47e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3faf3200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d75ccf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11c07d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p312ebe70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cac9500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1dc91400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9d3dd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cd12b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe8c6800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p58c7880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4ca43f2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d4c7c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e20bd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38959000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p154d5300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c54ff00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3db03180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32081d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p358cd780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ecb7640} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ad0f900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14c472f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13bca880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21b642a0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fd6300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1aa7f570} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a005800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8028cf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8eec780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10efb8f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22c53300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pef8b100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b688300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e5c0a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8386a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d227000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d016200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37727a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f60e400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa48c900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23e5d200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb809ef0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf90d480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13bd6a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13fe2e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p195c8c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p314f2b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b133680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ae9a480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a32ab00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1110a1c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18a31200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d35f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p344011f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd51a500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ef38400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2de65100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9488900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32b8ac00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d8ad400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p392ab100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c1bac80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p221af200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e24a100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b61d400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c8bbf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14587e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28156e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d487180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p120db080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34355a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14ef2b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a585d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7525b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f012280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p64a6800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c9f1500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc07db00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4107f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d434ef1} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3617c000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b6fca80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10265800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10d3f300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f8d2880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2eef9300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9cbf180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23965070} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e94500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28e36500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2297fb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e51c480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p82d1bf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37f586f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p184c4f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8849200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19e8c400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cd4c400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p171fbe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30cc8c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3620ea00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22500070} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p290a3400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15671b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f12d680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17eeb780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4623500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p57d4380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p346b4f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18f9ef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26c25a70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23bec700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p616c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10264a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19994300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5d2a1c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35c4a500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f789480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19104a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30c1e400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1420a7f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pdc1d730} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27932580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1963b300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c3b2a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f36e400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fe2e300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2726c300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20c8fe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f959480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pabe2d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ac0d400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1338b100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d4bec00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17637000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e9be200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1093f100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p309a3b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28660d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd42eb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e5e0c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c221300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1afdbd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3780d800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bd36700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10ecce00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e1c78f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1dc5aa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a11dd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d708300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f5b7500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pad88500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39387c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a11d500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a87f200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfb3f8b1} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p118a13c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cb6e080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25b9da00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11d88f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e43a100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fef1a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ae70f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23a59000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b4ef080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p351f9a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfbb0300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26d32970} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3460fe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p176eb900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f586900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p131a100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19e5e380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p383a7600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a99f100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b7800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3de737c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20afd332} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9994d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24cb0480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17fb9b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a5d9a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p882a3c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9977c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38bba400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb672d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c828880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ea28300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17f84600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa755280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31d16080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24431200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cbdbbc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13c0db00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25673500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p83d55f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbcb4a40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p185f4a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc728180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bbe78f2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3deb6600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cffed80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2315e480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13ef4a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p217e5480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c76fa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e51d440} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17dd8180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb9e2300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f826480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p135cf080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21eb0c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22128ef0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b412f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3535f300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31ea4300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b666000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26d7fa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3459000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e5deb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p48417b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2204300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p64a7e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cdd6b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30114500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36d43140} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p174e1b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9ec4400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3071d800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d68c680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfada700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19307b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p128c9080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28675880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.peea4800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d6dd180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d5c1870} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8c75eb0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c8a500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bee2700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p100091c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3affc700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7707c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24a54600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e36a000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5bc4080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37bd40c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p277f7900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p173b9e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fa0f000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18a57400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d7c3400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2091ef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2322ce00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p263b1980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p291d1300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6d1bc20} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a036c70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2559b680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32e70600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26f94700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30b66280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12061400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p221d3b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p256d5480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c13f100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24a31180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4461280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c4f780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd008100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1341dbd0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4906fc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16df4700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fa605c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3af6b600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a7b8600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1761d100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28c89580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1150f600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16728500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcfcc280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d09ec80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9e0ff00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9500c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a73a000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b7e6a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36e55480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10ea8880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b2d9300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf554280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5010780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6255f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p162b740} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf865200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fec0080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p280a6100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39e49b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19191500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29146880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f6212f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p139d1880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d08b740} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e93300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f9a4500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a917300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fb78ec0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p306e5800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a3d6b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ee7f300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p187b5180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17fdb500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3acb9a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe65900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10023880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3670f200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p280b4c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23cb5800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3091fa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2882bcc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p164f6c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31d94e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f67ad00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30126200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p226dcf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cccf9c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23ad3f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a742d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f95cf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc68c980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p363b7c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2400b400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37aa5300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c4ab300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe5b6200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p317f1e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f57a500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3685ec00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb354800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc02f780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33abe0f2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3eab640} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe5c9d70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37366f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e076f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27e5d380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e08d700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27733180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d5b4ef0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p327cb540} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bd33f70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2df6d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b477d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ad1d500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p211c5100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p28b55480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4864300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p254a0ff0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c82f600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fc56900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cdd0680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2adfb900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38bd5b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b90fe80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22d5fa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9d99c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38fb0c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22b54171} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb9c400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15519972} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pde08000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26b38c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3d2d000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9af9e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15fb300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10b0e800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p748b900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14929e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22fa1880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12553400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9939800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9fb7b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19140880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb0d0a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa0c9f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fab9800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6c60380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c8c2600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2eff8d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a9f0100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31045180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe215ac0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f131280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33b7e700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cb87ec0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24e7bc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14cd6c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd558b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26a24e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7085980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2233c200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17436600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cd85a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2de37d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3338d1c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21a6300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p306e5a40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b8d5480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a2cc100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39018b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37714f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3dd1fd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37dde6c8} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p248adb40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd0d5800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34cbc800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e55da00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9916c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p204b7900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12a47800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26637640} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f97cd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1423ee00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3cf18c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bd02780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39b9680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ca41f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p304cac00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3852d700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6a51e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bd3cf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36c65c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p51df300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p70fd100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1827e080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2395f7b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8526c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15a45380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p117dd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a42ddc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p961d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p261b4f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27a28700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p36d8480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1afa9ca0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3f5f5a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13f0ac80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p218bcf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3b2e86f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4e11240} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p361d8c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e37b600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p76cbe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15d59dc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8713080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p264df400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a9f4d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26d88500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ef74e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p102e4700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1be8c180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25fc2800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5dd8d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p72c4500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pab15400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc242e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p52c3d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p158c7900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26325f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8e006c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b42c700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8801b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e92d880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3ce05800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26270e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p145b3a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf693980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1df77a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19f5b100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p359a1b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4db0f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15783800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b330480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1a7b5280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29e4d780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27cfed00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb6d9300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1942af80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa112c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33b77900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fb9e000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9f95b7a} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23ae1480} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.paacde00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e3d3900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p117c0e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1fd68080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p239f3070} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p267b9d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p102ea070} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c772080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a8bb400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3731b900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3029e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1568b780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b2fc370} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1461a600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8d9c180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p94d8d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d9b9180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2db7e600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27a4af00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11372380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22f3b4f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2d9b5000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3abacf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p363dd100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e894000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p263b8200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11bbd940} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10c3b400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c685d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2ca98700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3db32c70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfa2f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8a00400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17536f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23444a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ec0ab00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p189b5f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20ab6600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc4d3f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23a66700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3de38af0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25f81400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p251aa600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe3f0340} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35f794c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8aa63f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1dc93a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37887f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bfe9700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2debe100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11ead700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e00b200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a580000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p21fab700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3463df80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19bedd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p9f73f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf240600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf7ac380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d003880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25760d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22fbea00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33d4fa00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bf0c700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbdf0600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbfc3880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39c86b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c91b400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p65002f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3428c400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30c6bf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31b53bc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30eeb70} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p218eb560} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p145ac800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14a31c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe909600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a608900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p13eef00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1637f680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p357937f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p30068d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc0df780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3de165c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a14db00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pd730300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p14099400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5b48b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p541c180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p243ece80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3eb00500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39ecd000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa013f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3894ce80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34c65a80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4244900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b071000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a934b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8308cf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a830900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22431000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a7304f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p24bc9200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33428e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38df0d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pfc8e000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p398cf600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2b3a3740} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2302b700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ca78680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11738a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22522bf0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35bc7d40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1bc99300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e1ef580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf29b700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb1cda00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p38328880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p324abf80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1ea91c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2036fe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2976c000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bcaa400} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p194d8000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2a1b4500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1707fd80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pae48600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39477500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p32e64600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p141a9b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p581d680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p157e2500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p18976f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c166080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p137ca180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a77f780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3e0330f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23594580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e1b0800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a912200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pcc37f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bde8140} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1013a5f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p117b6280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1aa51100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p57cbd00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11f63d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc18c980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c313800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p823ff1} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pab0de80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1b81800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16bcd300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p39f8a840} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c88e040} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p22f6e900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pdf79200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pa899300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p273a8970} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3063e180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3dcfecc0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p15be1e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb2555f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3dd2e3f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2eda780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f80000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34209500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p208843c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1c6f4800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3295bf00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p668ac00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2cac8f00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f81b800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3a6e9300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p169ce600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33f6ea80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2e157a00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p4ae2800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10c9d670} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1406a700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6dde280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p26e7b180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pea66680} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27348200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e683100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p16326900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c938800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p209fcc00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pabad80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27dbe4f2} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1f9f7e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf140f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c064200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2236fe00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p19171f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pb7d9600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20335c00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2c3aa300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25d28d30} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p681140} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p344bbb40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3fa0c780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p17da6300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p25ad5600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12b05100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p166e6b80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3826f900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10e76940} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3bf2280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c0a5b00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p31b8c800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p5e7a0f0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d839880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p165bd300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p84fc080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p381f9f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20dbb580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p11090d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pe486e00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p37b4c980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p35e7b380} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p53a25b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pbdfc600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p34dd1100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3c847440} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p146a3080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc0b0700} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f40cc80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1305d280} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e761100} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p12ba9d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29d87600} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p8e98200} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1943d0c0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p91ce580} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1cda9980} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pc245c80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23d31500} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e703800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p23079300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7d4c000} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2fd71fa0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33da900} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p20b59d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p6cbb7b0} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p7ade880} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2f6f8080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2035180} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29c3bb00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10f36780} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p33ba7d40} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p10592080} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.pf4a9d00} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p836f800} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1d6a9f80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1e222370} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p1621a300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p3414c930} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p29695e80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p27004d80} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p2aa3a300} fill="var(--fill-0, #3C5B79)" />
            <path d={svgPaths.p210f400} fill="var(--fill-0, #3C5B79)" />
          </g>
        </svg>
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
      <BackgroundBorder />
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