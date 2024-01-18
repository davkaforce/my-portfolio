import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";

export default function Hero() {
  return (
    <div class="w-[1440px] h-[552px] px-8 justify-start items-start gap-12 inline-flex">
      <div class="self-stretch flex-col justify-center items-start gap-12 inline-flex">
        <div class="self-stretch h-[152px] flex-col justify-center items-start gap-2 flex">
          <div class="text-gray-900 text-6xl font-bold font-['Inter'] leading-[72px]">
            Hi, I’m Itachi Uchiha ✇
          </div>
          <div class="w-[768px] text-gray-600 text-base font-normal font-['Inter'] leading-normal">
            I'm a member of the Uchiha Clan from the village of Konohagakure and
            the elder brother of Sasuke Uchiha. I grew up as the child prodigy
            of the Uchiha clan, establishing milestones for not only Sasuke, but
            also for future Uchiha to live up to.
          </div>
        </div>
        <div class="self-stretch h-14 flex-col justify-center items-start gap-2 flex">
          <div class="self-stretch justify-start items-center gap-2 inline-flex">
            <div class="w-6 h-6 relative"></div>
            <div class="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Konoha, Leaf
            </div>
          </div>
          <div class="justify-start items-center gap-2 inline-flex">
            <div class="w-6 h-6 flex-col justify-center items-center inline-flex">
              <div class="w-2 h-2 relative bg-emerald-500 rounded-[20px]"></div>
            </div>
            <div class="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Available for assasination
            </div>
          </div>
        </div>
        <div className="w-[116px] h-9 justify-start items-center gap-1 inline-flex">
          <Icon1 />
          <Icon2 />
          <Icon3 />
        </div>
      </div>
      <div class="grow shrink basis-0 self-stretch flex-col justify-center items-end inline-flex">
        <div class="w-80 h-[360px] relative">
          <div class="w-[280px] h-80 left-[40px] top-[40px] absolute bg-gray-200 border-8 border-white"></div>
          <img
            class="w-[280px] h-80 left-0 top-0 absolute border-8 border-white"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9ed4816-c11c-48b1-9f8e-00c3a5ade0a8/deuq7al-f21e5b56-f04a-4f18-b7fb-71fa315b808f.png/v1/fill/w_1027,h_778/itachi_uchiha_render_png_1_by_karmicraze_deuq7al-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY5IiwicGF0aCI6IlwvZlwvZjllZDQ4MTYtYzExYy00OGIxLTlmOGUtMDBjM2E1YWRlMGE4XC9kZXVxN2FsLWYyMWU1YjU2LWYwNGEtNGYxOC1iN2ZiLTcxZmEzMTViODA4Zi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sIA_j78hlB9tO6JJy_uBBN4VUKEFQmsIh599S2UHw1E"
          />
        </div>
      </div>
    </div>
  );
}
