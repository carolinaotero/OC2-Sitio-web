import svgPaths from "../imports/Quote-2/svg-ngxwb19akp";
import { FadeUp } from "./ScrollReveal";
import textos from "../content/textos-home.json";

const dividerKeys = ['p20a59200', 'p22545f00'];

function Divider({ flipped = false }: { flipped?: boolean }) {
  const dividerHTML = dividerKeys.map(key => `<path d="${svgPaths[key as keyof typeof svgPaths]}" fill="#5D89B4" />`).join('');
  const dividerSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 43 32"><g>${dividerHTML}</g></svg>`;
  const dividerSrc = `data:image/svg+xml;utf8,${encodeURIComponent(dividerSVG)}`;

  return (
    <div className={`flex w-full items-center gap-[8px] ${flipped ? 'scale-x-[-1] scale-y-[-1]' : ''}`}>
      <div className="flex-1 h-[2px] bg-[#5D89B4]"></div>
      <div className="h-[32px] w-[43px] shrink-0">
        <img src={dividerSrc} className="w-full h-full block" alt="Divider" />
      </div>
      <div className="flex-1 h-[2px] bg-[#5D89B4]"></div>
    </div>
  );
}

export function Quote2() {
  const q = textos.home.quote2;
  return (
    <section className="py-24 md:py-32 w-full bg-[#FBF9F3] flex justify-center px-6">
      <FadeUp className="flex flex-col items-center justify-center gap-[16px] max-w-[533px] w-full">
        <Divider />
        <h3 className="font-serif font-normal text-[#5D89B4] text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.02em] text-center m-0 w-full">
          {q.texto}
        </h3>
        <Divider flipped />
      </FadeUp>
    </section>
  );
}
