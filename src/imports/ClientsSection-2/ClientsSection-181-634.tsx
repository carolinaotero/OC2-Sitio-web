import imgManosSocios1 from "./c82da191af539fd1fd4efc2d0ca9086938e89e1a.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase whitespace-nowrap">
        <p className="leading-none">NUESTROS CLIENTES: NUESTROS SOCIOS</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[699px]" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[0px] text-center tracking-[-1.12px] w-full">
        <p className="text-[56px]">
          <span className="leading-[1.1]">{`Presentes en cada momento. `}</span>
          <span className="font-['Newsreader:Medium_Italic',sans-serif] font-medium italic leading-[1.1] text-[#a28c6a] tracking-[-1.12px]">Comprometidos en cada decisión.</span>
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c5b79] text-[22px] text-center w-full">
        <p className="leading-[1.5]">Trabajamos con empresas y gremios relevantes, líderes en sus respectivos sectores que, año a año, renuevan su confianza en nosotros.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[896px] relative shrink-0 w-[896px]" data-name="Container">
      <Container1 />
      <Heading />
      <div className="h-[141px] relative shrink-0 w-[282px]" data-name="Manos socios 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManosSocios1} />
      </div>
      <Container2 />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[48px] py-[96px] relative size-full" data-name="Clients Section">
      <Container />
      <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[0.9px] whitespace-nowrap">
          <p className="leading-none">Conoce a nuestros clientes</p>
        </div>
      </div>
    </div>
  );
}