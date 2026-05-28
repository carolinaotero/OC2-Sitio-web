import imgImage10 from "./6c504bd57cdf23d383ee0d74847ac3af45cfa524.png";

function Background() {
  return (
    <div className="bg-[#bdc8d4] content-stretch flex flex-col h-[458px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="h-[458px] relative shrink-0 w-[400px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c5b79] text-[28px] w-full">
        <p className="leading-[1.2]">Fernanda Otero</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a28c6a] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-none">SOCIA DIRECTORA</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

export default function MemberCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Member Card">
      <Background />
      <Container />
    </div>
  );
}