import { useTheme } from "@/content/ThemeContext";

export default function Footer() {
  return (
    <div className=" px-8 flex-col justify-center items-center gap-16 text-center  ">
      <div className="justify-center items-center gap-2 inline-flex">
        <div>
          <span>2023 | </span>
          <span>Designed</span>
          <span> and </span>
          <span>coded</span>
          <span> with </span>
          <span>❤</span>
        </div>
      </div>
    </div>
  );
}
