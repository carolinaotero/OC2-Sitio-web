export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bdc8d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bdc8d4] text-[16px] text-center tracking-[0.8px] whitespace-nowrap">
        <p className="leading-none">Hablemos</p>
      </div>
    </div>
  );
}