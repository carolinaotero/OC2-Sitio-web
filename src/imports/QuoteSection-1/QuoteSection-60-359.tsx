import svgPaths from "./svg-ewuvyw2w5u";

function DividerContainer() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-[537px]" data-name="Divider container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 537 28.2553">
        <g id="Divider container">
          <g id="Divider 1">
            <line id="Line 1" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" x2="226.117" y1="8.82979" y2="8.82979" />
            <line id="Line 2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" x2="226.117" y1="16.7766" y2="16.7766" />
          </g>
          <path d={svgPaths.p2fded880} fill="var(--fill-0, #FBF9F3)" id="â" />
          <g id="Divider 1_2">
            <line id="Line 1_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" x1="310.883" x2="537" y1="8.82979" y2="8.82979" />
            <line id="Line 2_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" x1="310.883" x2="537" y1="16.7766" y2="16.7766" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[537px]" data-name="Text">
      <div className="flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbf9f3] text-[32px] text-center uppercase w-full">
        <p className="leading-[1.5]">Una verdad sin interés puede ser eclipsada por una falsedad emocionante.</p>
      </div>
    </div>
  );
}

function DividerContainer1() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-[537px]" data-name="Divider container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 537 28.2553">
        <g id="Divider container">
          <g id="Divider 1">
            <line id="Line 1" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" transform="matrix(1 0 0 -1 0 17.6596)" x2="226.117" y1="-1.76596" y2="-1.76596" />
            <line id="Line 2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" transform="matrix(1 0 0 -1 0 10.5958)" x2="226.117" y1="-0.882979" y2="-0.882979" />
          </g>
          <path d={svgPaths.p130ae900} fill="var(--fill-0, #FBF9F3)" id="â" />
          <g id="Divider 1_2">
            <line id="Line 1_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="3.53191" transform="matrix(1 0 0 -1 310.883 17.6596)" x2="226.117" y1="-1.76596" y2="-1.76596" />
            <line id="Line 2_2" stroke="var(--stroke-0, #FBF9F3)" strokeWidth="1.76596" transform="matrix(1 0 0 -1 310.883 10.5957)" x2="226.117" y1="-0.882979" y2="-0.882979" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[28.255px] items-start relative shrink-0" data-name="Quote container">
      <DividerContainer />
      <Text />
      <DividerContainer1 />
    </div>
  );
}

export default function QuoteSection() {
  return (
    <div className="bg-[#5d89b4] content-stretch flex flex-col items-center justify-center px-[10px] py-[160px] relative size-full" data-name="Quote Section">
      <QuoteContainer />
    </div>
  );
}