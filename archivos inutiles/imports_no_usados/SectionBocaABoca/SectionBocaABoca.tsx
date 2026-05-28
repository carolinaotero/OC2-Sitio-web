function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-none">Boca a boca</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[48px] w-full">
        <p>
          <span className="leading-[60px]">{`Nuestros clientes nos `}</span>
          <span className="[word-break:break-word] font-['Newsreader:Italic',sans-serif] font-normal italic leading-[60px] text-[#a28c6a]">recomiendan</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[32px] relative" data-name="Container">
      <Container2 />
      <Heading />
      <div className="h-[12px] relative shrink-0 w-[38px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 12">
          <path d="M0 0L38 6.01093L0 12V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[18px] w-full">
        <p className="leading-[28px]">Una de nuestras mayores satisfacciones es que nuestro crecimiento se ha dado por la recomendación de nuestros clientes. Clientes nos traen clientes. Nos gusta trabajar con personas que confían en nosotros y que nosotros admiramos.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

export default function SectionBocaABoca() {
  return (
    <div className="bg-[#f5efe3] content-stretch flex flex-col items-center justify-center px-[48px] py-[96px] relative size-full" data-name="Section - Boca a Boca">
      <Container />
    </div>
  );
}