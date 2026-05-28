function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-none">NUESTROS SERVICIOS</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-1.92px] w-[min-content]">
        <p className="leading-[96px] mb-0 tracking-[-0.32px]">Te ayudamos</p>
        <p className="mb-0">
          <span className="leading-[96px] tracking-[-0.32px]">a</span>
          <span className="leading-[96px]">{` `}</span>
          <span className="font-['Newsreader:Regular',sans-serif] font-normal leading-[96px] text-[#5d89b4] tracking-[-0.32px]">construir</span>
        </p>
        <p className="font-['Newsreader:Italic',sans-serif] italic text-[#a28c6a] tracking-[-0.32px]">
          <span className="leading-[96px]">{`tu `}</span>
          <span className="leading-[96px]">reputación</span>
        </p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[66px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
          <path d="M0 0L66 10.0182L0 20V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[896px] min-w-px relative" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[0px] w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0 text-[22px]">La reputación no es lo que dices de ti mismo, sino el valor y la confianza que otros reconocen en tu organización.</p>
        <p className="leading-[29.25px] mb-0 text-[22px]">​</p>
        <p className="leading-[29.25px] text-[18px]">{`Es el activo más potente para generar confianza, abrir puertas  y  asegurar sostenibilidad en el largo plazo. En OC2 nos aseguramos de que ese activo trabaje para ti. `}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f5efe3] content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[48px] pt-[47.375px] px-[48px] relative rounded-[8px] shrink-0 w-[520px]" data-name="Background">
      <div className="absolute bg-[#ecdfc8] right-[-64.2px] rounded-[12px] size-[128px] top-[-64px]" data-name="Overlay" />
      <Container2 />
    </div>
  );
}

export default function HeroSectionPerspectiveSplit() {
  return (
    <div className="content-stretch flex gap-[48px] items-end pb-[96px] pt-[160px] px-[48px] relative size-full" data-name="Hero Section: Perspective Split">
      <Container />
      <Background />
    </div>
  );
}