import svgPaths from "../imports/QuoteSection/svg-flyryzreio";
import { FadeUp } from "./ScrollReveal";
import textos from "../content/textos-home.json";

export function Quote() {
  const q = textos.home.quote;
  return (
    <section className="py-24 md:py-[160px] max-w-[800px] mx-auto px-6 flex justify-center">
      <FadeUp className="flex flex-col gap-[28px] w-full mx-auto">

        {/* Top Divider */}
        <div className="flex items-center gap-[28px]">
          <div className="flex-1">
            <div className="flex flex-col gap-[5.3px]">
              <div className="w-full bg-[#5D89B4] h-[3.53px]" />
              <div className="w-full bg-[#5D89B4] h-[1.76px]" />
            </div>
          </div>
          <svg width="29" height="29" viewBox="254.372 0 28.256 28.256" fill="none" className="shrink-0">
            <path d={svgPaths.p2fded880} fill="#5D89B4" />
          </svg>
          <div className="flex-1">
            <div className="flex flex-col gap-[5.3px]">
              <div className="w-full bg-[#5D89B4] h-[3.53px]" />
              <div className="w-full bg-[#5D89B4] h-[1.76px]" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h3 className="text-[1.5rem] md:text-[2rem] font-['Alata'] font-normal text-[#5d89b4] uppercase leading-[1.5] m-0 tracking-wide">
            {q.texto}
          </h3>
        </div>

        {/* Bottom Divider */}
        <div className="flex items-center gap-[28px]">
          <div className="flex-1">
            <div className="flex flex-col gap-[5.3px]">
              <div className="w-full bg-[#5D89B4] h-[1.76px]" />
              <div className="w-full bg-[#5D89B4] h-[3.53px]" />
            </div>
          </div>
          <svg width="29" height="29" viewBox="254.372 0 28.256 28.256" fill="none" className="shrink-0">
            <path d={svgPaths.p130ae900} fill="#5D89B4" />
          </svg>
          <div className="flex-1">
            <div className="flex flex-col gap-[5.3px]">
              <div className="w-full bg-[#5D89B4] h-[1.76px]" />
              <div className="w-full bg-[#5D89B4] h-[3.53px]" />
            </div>
          </div>
        </div>

      </FadeUp>
    </section>
  );
}
