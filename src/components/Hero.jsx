import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import { useTheme } from "@/content/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <div
      id="Hero"
      className={` ${
        theme == "dark" ? "" : " bg-gray-50 "
      } flex flex-col-reverse sm:flex-row gap-12 px-8 justify-start items-start self-stretch grow shrink`}
    >
      <div class=" grow shrink self-stretch flex-col justify-center items-start gap-12 inline-flex text-wrap flex-wrap">
        <div class="self-stretch flex-col justify-center items-start gap-2 flex">
          <div class="text-gray-900 text-6xl font-bold font-['Inter'] leading-[72px]">
            Hi, I’m Itachi Uchiha ✇
          </div>
          <div class=" text-gray-600 text-base font-normal font-['Inter'] leading-normal">
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
          <div>
            {" "}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 28V24C21.1392 22.7473 20.78 21.4901 20 20.5C23 20.5 26 18.5 26 15C26.08 13.75 25.73 12.52 25 11.5C25.28 10.35 25.28 9.15 25 8C25 8 24 8 22 9.5C19.36 9 16.64 9 14 9.5C12 8 11 8 11 8C10.7 9.15 10.7 10.35 11 11.5C10.2719 12.5159 9.91851 13.7528 10 15C10 18.5 13 20.5 16 20.5C15.61 20.99 15.32 21.55 15.15 22.15C14.98 22.75 14.93 23.38 15 24V28"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 24C10.49 26 10 22 8 22"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 10C28 10 27.3 12.1 26 13.4C27.6 23.4 16.6 30.7 8 25C10.2 25.1 12.4 24.4 14 23C9 21.5 6.5 15.6 9 11C11.2 13.6 14.6 15.1 18 15C17.1 10.8 22 8.4 25 11.2C26.1 11.2 28 10 28 10Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 11.5C11 10.5717 11.3687 9.6815 12.0251 9.02513C12.6815 8.36875 13.5717 8 14.5 8H18V15H14.5C13.5717 15 12.6815 14.6313 12.0251 13.9749C11.3687 13.3185 11 12.4283 11 11.5Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 8H21.5C21.9596 8 22.4148 8.09053 22.8394 8.26642C23.264 8.44231 23.6499 8.70012 23.9749 9.02513C24.2999 9.35013 24.5577 9.73597 24.7336 10.1606C24.9095 10.5852 25 11.0404 25 11.5C25 11.9596 24.9095 12.4148 24.7336 12.8394C24.5577 13.264 24.2999 13.6499 23.9749 13.9749C23.6499 14.2999 23.264 14.5577 22.8394 14.7336C22.4148 14.9095 21.9596 15 21.5 15H18V8Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 18.5C18 18.0404 18.0905 17.5852 18.2664 17.1606C18.4423 16.736 18.7001 16.3501 19.0251 16.0251C19.3501 15.7001 19.736 15.4423 20.1606 15.2664C20.5852 15.0905 21.0404 15 21.5 15C21.9596 15 22.4148 15.0905 22.8394 15.2664C23.264 15.4423 23.6499 15.7001 23.9749 16.0251C24.2999 16.3501 24.5577 16.736 24.7336 17.1606C24.9095 17.5852 25 18.0404 25 18.5C25 18.9596 24.9095 19.4148 24.7336 19.8394C24.5577 20.264 24.2999 20.6499 23.9749 20.9749C23.6499 21.2999 23.264 21.5577 22.8394 21.7336C22.4148 21.9095 21.9596 22 21.5 22C21.0404 22 20.5852 21.9095 20.1606 21.7336C19.736 21.5577 19.3501 21.2999 19.0251 20.9749C18.7001 20.6499 18.4423 20.264 18.2664 19.8394C18.0905 19.4148 18 18.9596 18 18.5Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 25.5C11 24.5717 11.3687 23.6815 12.0251 23.0251C12.6815 22.3687 13.5717 22 14.5 22H18V25.5C18 26.4283 17.6313 27.3185 16.9749 27.9749C16.3185 28.6313 15.4283 29 14.5 29C13.5717 29 12.6815 28.6313 12.0251 27.9749C11.3687 27.3185 11 26.4283 11 25.5Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 18.5C11 17.5717 11.3687 16.6815 12.0251 16.0251C12.6815 15.3687 13.5717 15 14.5 15H18V22H14.5C13.5717 22 12.6815 21.6313 12.0251 20.9749C11.3687 20.3185 11 19.4283 11 18.5Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="grow shrink basis-0 self-stretch flex-col justify-center flex">
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
