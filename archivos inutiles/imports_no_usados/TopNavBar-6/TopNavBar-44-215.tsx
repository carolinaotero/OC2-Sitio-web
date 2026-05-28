import svgPaths from "./svg-26n2bkkksn";

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 24">
        <g id="Container">
          <g id="Logo">
            <path d={svgPaths.p3d6feec0} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p758d200} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p101f0a80} fill="var(--fill-0, #5D89B4)" />
            <path d={svgPaths.p1a2fdc00} fill="var(--fill-0, #5D89B4)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TopContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top container">
      <Container />
      <div className="relative shrink-0 size-[30px]" data-name="Hamburguer Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.569px] left-[calc(50%+0.14px)] top-[calc(50%+0.28px)] w-[28.284px]" data-name="Vector">
          <div className="absolute inset-[-5.25%_-5.3%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2843 31.5685">
              <path d={svgPaths.p12394f98} id="Vector" stroke="var(--stroke-0, #5D89B4)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavTopAppBar() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_5px_rgba(66,71,78,0.4)] h-[72px] relative rounded-[8px] shrink-0 w-full" data-name="Nav - TopAppBar">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[16px] py-[24px] relative size-full">
          <TopContainer />
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0" data-name="Links">
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
          <p className="leading-none">Máximas</p>
        </div>
      </div>
    </div>
  );
}

function NavTopAppBar1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_5px_rgba(66,71,78,0.4)] relative rounded-[8px] shrink-0 w-full" data-name="Nav - TopAppBar">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
        <Links />
        <div className="bg-[#5d89b4] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
              <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] whitespace-nowrap">
                <p className="leading-none">Contacto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopNavBar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Top NavBar">
      <NavTopAppBar />
      <NavTopAppBar1 />
    </div>
  );
}