import svgPaths from "./svg-578x2g15jo";

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

export default function QuoteContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[48px] py-[96px] relative size-full" data-name="Quote Container">
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