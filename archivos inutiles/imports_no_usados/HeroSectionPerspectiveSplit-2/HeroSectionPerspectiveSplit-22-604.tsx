function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-none">NUESTROS SERVICIOS</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-4.8px] w-full">
        <p className="leading-[96px] mb-0">Te ayudamos a</p>
        <p>
          <span className="font-['Newsreader:Regular',sans-serif] leading-[96px] text-[#5d89b4]">{`construir `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] italic leading-[96px] text-[#a28c6a]">{`tu `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] italic leading-[96px] text-[#a28c6a]">reputación</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[896px] relative row-1 self-end shrink-0" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">La reputación no es lo que dices de ti</p>
        <p className="leading-[29.25px] mb-0">mismo, es el valor que el mercado te</p>
        <p className="leading-[29.25px] mb-0">otorga. Es el activo más potente para</p>
        <p className="leading-[29.25px] mb-0">abrir puertas, generar confianza y</p>
        <p className="leading-[29.25px] mb-0">asegurar la sostenibilidad de tu negocio</p>
        <p className="leading-[29.25px] mb-0">en el largo plazo. En OC2, nos</p>
        <p className="leading-[29.25px] mb-0">aseguramos de que ese activo trabaje</p>
        <p className="leading-[29.25px]">para ti.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f5efe3] col-2 justify-self-stretch relative rounded-[8px] row-1 self-end shrink-0" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[47.375px] px-[48px] relative size-full">
          <div className="absolute bg-[#ecdfc8] right-[-64px] rounded-[12px] size-[128px] top-[-64px]" data-name="Overlay" />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default function HeroSectionPerspectiveSplit() {
  return (
    <div className="gap-x-[96px] gap-y-[96px] grid grid-cols-[__minmax(0,1.50fr)_minmax(0,1fr)] grid-rows-[_382px] relative size-full" data-name="Hero Section: Perspective Split">
      <Container />
      <Background />
    </div>
  );
}