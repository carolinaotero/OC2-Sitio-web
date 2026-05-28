import svgPaths from "./svg-knpt0413ln";

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5efe3] text-[28px] w-full">
        <p className="leading-[1.2]">Comunicaciones Estratégicas</p>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[84px] items-start min-w-px relative" data-name="Headline">
      <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[32px]" data-name="Icon">
        <div className="relative shrink-0 size-[32px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2ad1b060} fill="var(--fill-0, #F5EFE3)" id="Icon" />
          </svg>
        </div>
      </div>
      <Heading />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[436px]" data-name="Text">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f5efe3] text-[20px] w-full">
        <p className="leading-[1.6]">La comunicación construye reputación: o la construyes o te la construyen.</p>
      </div>
    </div>
  );
}

export default function ServicesCard() {
  return (
    <div className="content-stretch flex gap-[84px] items-center px-[48px] py-[32px] relative rounded-[16px] size-full" data-name="Services Card">
      <div aria-hidden="true" className="absolute border border-[#f5efe3] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
      <Headline />
      <Text />
      <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[152px]" data-name="Button">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f5efe3] text-[16px] text-center tracking-[0.8px] whitespace-nowrap">
          <p className="leading-none">Hablemos</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow_forward">
          <div className="absolute inset-[16.67%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
              <path d={svgPaths.p1fe21fc0} fill="var(--fill-0, #F5EFE3)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}