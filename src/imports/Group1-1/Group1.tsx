import img093A51Fd11F14B838A40A77D6116018B1102A2 from "./389f6252d57554cae1773868d49cbf5654a1dc44.png";
import { img093A51Fd11F14B838A40A77D6116018B1102A1 } from "./svg-miz58";

function MaskGroup() {
  return (
    <div className="absolute contents left-[7px] top-[7px]" data-name="Mask group">
      <div className="absolute h-[383px] left-[-134px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[140.643px_6.643px] mask-size-[381.667px_381.667px] top-0 w-[680px]" style={{ maskImage: `url('${img093A51Fd11F14B838A40A77D6116018B1102A1}')` }} data-name="093A51FD-11F1-4B83-8A40-A77D6116018B_1_102_a 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img093A51Fd11F14B838A40A77D6116018B1102A2} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <MaskGroup />
      <div className="absolute left-0 size-[395px] top-0">
        <div className="absolute inset-[-0.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 401 401">
            <circle cx="200.5" cy="200.5" id="Ellipse 2" r="199" stroke="var(--stroke-0, #5D89B4)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[5px] size-[384.127px] top-[5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384.127 384.127">
          <circle cx="192.063" cy="192.063" id="Ellipse 3" r="186.063" stroke="var(--stroke-0, #5D89B4)" strokeWidth="12" />
        </svg>
      </div>
    </div>
  );
}