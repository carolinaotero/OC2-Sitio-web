import svgPaths from "./svg-90xrfr98tx";

function Container() {
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

function Container1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">nosotros</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">servicios</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">clientes</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">equipo</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0" data-name="Link">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-none">blog</p>
        </div>
      </div>
    </div>
  );
}

export default function TopNavBar() {
  return (
    <div className="backdrop-blur-[12px] content-stretch flex items-center justify-between p-[32px] relative rounded-[8px] size-full" data-name="Top NavBar">
      <Container />
      <Container1 />
      <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] whitespace-nowrap">
          <p className="leading-none">Hablemos</p>
        </div>
      </div>
    </div>
  );
}