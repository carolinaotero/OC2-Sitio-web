import imgTiempoClientes1 from "./efa9ad21d161ebfd2827a54c08ae2baad2db4fa0.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-1.92px] w-[min-content]">
        <p className="tracking-[-0.32px]">
          <span className="leading-[96px]">{`Relaciones que `}</span>
          <span className="[word-break:break-word] font-['Newsreader:Italic',sans-serif] font-normal italic leading-[96px] text-[#a28c6a]">tra</span>
          <span className="[word-break:break-word] font-['Newsreader:Italic',sans-serif] font-normal italic leading-[96px] text-[#a28c6a]">scienden</span>
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] opacity-80 pb-[0.75px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[20px] w-[568.39px]">
        <p className="leading-[32.5px]">{`Nuestro compromiso y conocimiento de nuestros clientes y de sus entornos hace que la mayoría permanezca con nosotros para siempre. Nuestras relaciones con ellos son profundas y duraderas, varias se remontan a nuestros inicios. `}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase w-[min-content]">somos verdaderos socios</p>
      <Heading />
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[600px] relative rounded-[8px] shrink-0 w-[478.667px]" data-name="Background">
      <div className="absolute h-[600px] left-[-12.33px] top-0 w-[504px]" data-name="Tiempo clientes 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTiempoClientes1} />
      </div>
    </div>
  );
}

export default function HeroSectionPerspectiveSplit() {
  return (
    <div className="content-stretch flex items-start pb-[96px] pt-[160px] px-[48px] relative size-full" data-name="Hero Section: Perspective Split">
      <Container />
      <Background />
    </div>
  );
}