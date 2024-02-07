export default function MobileMenu() {
  return (
    <div className="flex w-[375px] h-[667px] flex-col items-start shrink-0 bg-white">
      <div className="flex w-80 h-[667px] flex-col items-start absolute shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] right-0">
        <div
          className="div {
        @apply flex justify-between items-start self-stretch border-b-[color:var(--Gray-Dark-100,#1F2937)] p-4 border-b border-solid;
}
        "
        ></div>
        <div className="flex flex-col items-start gap-4 self-stretch border-b-[color:var(--Gray-Dark-100,#1F2937)] p-4 border-b border-solid">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch p-4"></div>
      </div>
    </div>
  );
}
