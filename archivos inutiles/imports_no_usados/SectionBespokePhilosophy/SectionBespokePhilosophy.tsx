function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[48px] text-white w-full">
        <p className="leading-[60px]">Más de 20 años de experiencia</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[32px] relative" data-name="Container">
      <Heading />
      <div className="h-0 relative shrink-0 w-[117px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 1">
            <line id="Line 16" stroke="var(--stroke-0, #DFCAA3)" x2="117" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-white w-full">
        <p className="leading-[1.5]">{`Somos una de las Consultoras de Comunicaciones Estratégicas más respetadas del país. Generamos relaciones de confianza fundadas en el conocimiento, confidencialidad y trabajo bien hecho. `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] justify-center relative shrink-0 text-[#fbf9f3] text-[18px] w-full">
        <p className="leading-[1.6] whitespace-pre-wrap">{`Conocemos los contextos políticos, sociales y económicos. Entendemos la lógica de las empresas y gremios, de los medios  y de los diversos actores. `}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px pb-[16px] relative" data-name="Container">
      <Container3 />
      <div className="h-[10px] relative shrink-0 w-[32px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10">
          <path d="M0 0L32 5.00911L0 10V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[96px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function SectionBespokePhilosophy() {
  return (
    <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[48px] py-[96px] relative size-full" data-name="Section - Bespoke Philosophy">
      <Container />
    </div>
  );
}