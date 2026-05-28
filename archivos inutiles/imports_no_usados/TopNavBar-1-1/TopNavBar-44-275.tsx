import svgPaths from "./svg-zau7y0xrfk";

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

export default function TopNavBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] py-[24px] relative rounded-[8px] size-full" data-name="Top NavBar">
      <Container />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[40px]" data-name="Hamburguer Button">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1.5px_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
              <path d="M1.5 1.5H41.5" id="Line 7" stroke="var(--stroke-0, #5D89B4)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1.5px_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
              <path d="M1.5 1.5H41.5" id="Line 7" stroke="var(--stroke-0, #5D89B4)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}