function Divider() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative w-full" data-name="Divider">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[10px] relative w-[32px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10">
              <path d="M0 0L32 5.00911L0 10V0Z" fill="var(--fill-0, #DFCAA3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0" data-name="Quote div">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dfcaa3] text-[36px] text-center w-[533px]">
        <p className="leading-[normal]">Al final del día, apuestas por la gente, no por las estrategias</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default function Quote() {
  return (
    <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center py-[98px] relative size-full" data-name="Quote">
      <QuoteDiv />
    </div>
  );
}