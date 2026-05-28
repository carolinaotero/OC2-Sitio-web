function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-none">nuestras máximas</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d89b4] text-[96px] text-center tracking-[-4.8px] w-full">
        <p>
          <span className="leading-[96px]">{`Inspiraciones que `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[96px] text-[#a28c6a]">construyen</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

export default function HeroSectionPerspectiveSplit() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Hero Section: Perspective Split">
      <Container />
    </div>
  );
}