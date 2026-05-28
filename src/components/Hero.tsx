import textos from "../content/textos.json";
import { FadeUp } from "./ScrollReveal";
import ilustracion from "../imports/comunicaciones-estrategicas.svg";

export function Hero() {
  const h = textos.home.hero;

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12 lg:gap-0 items-start lg:items-center min-h-[70vh]">

      {/* Left Column - Text */}
      <div className="flex flex-col gap-[47px] flex-1 w-full shrink-0 lg:max-w-[652px]">
        <FadeUp delay={0}>
          <div className="font-sans text-[#a28c6a] text-[18px] tracking-[3.6px] uppercase leading-[28px]">
            {h.eyebrow}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex flex-col font-serif font-normal text-[48px] md:text-[80px] lg:text-[96px] tracking-[-1px] lg:tracking-[-2.4px] leading-[1] md:leading-[91.2px]">
            <p className="text-[#5D89B4] mb-0">{h.titulo_linea1}</p>
            <p className="text-[#5D89B4] mb-0">{h.titulo_linea2}</p>
            <p className="text-[#a28c6a] italic mb-0 mt-2 md:mt-0">{h.titulo_linea3}</p>
            <p className="text-[#a28c6a] italic">{h.titulo_linea4}</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="font-sans text-[#3c5b79] text-[18px] md:text-[20px] leading-[32.5px] max-w-[576px]">
            {h.descripcion}
          </p>
        </FadeUp>
      </div>

      {/* Right Column - Illustration */}
      <FadeUp delay={0.2} y={24} className="w-full lg:w-auto lg:shrink-0 relative lg:ml-auto">
        <img
          src={ilustracion}
          alt="Comunicaciones Estratégicas"
          className="block w-full lg:w-[600px] xl:w-[700px] h-auto"
        />
      </FadeUp>

    </section>
  );
}
