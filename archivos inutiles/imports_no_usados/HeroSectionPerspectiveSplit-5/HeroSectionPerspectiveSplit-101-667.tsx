import imgReputacion1 from "./e1b88c0a4f063e054359d1a7e974392e89bc870f.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-none">Somos</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[96px] tracking-[-4.8px] w-full">
        <p>
          <span className="font-['Newsreader:Regular',sans-serif] leading-[96px] text-[#5d89b4]">{`Socios en la gestión de `}</span>
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

export default function HeroSectionPerspectiveSplit() {
  return (
    <div className="gap-x-[96px] gap-y-[96px] grid grid-cols-[__minmax(0,1.50fr)_minmax(0,1fr)] grid-rows-[_382px] px-[48px] py-[98px] relative size-full" data-name="Hero Section: Perspective Split">
      <Container />
      <div className="col-2 h-[296px] justify-self-end relative row-1 self-end shrink-0 w-[565px]" data-name="Reputación 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgReputacion1} />
      </div>
    </div>
  );
}