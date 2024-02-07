import WorkText from "./Mini-Components/WorkText";
import WorkContent from "./Mini-Components/WorkContent";
import { useTheme } from "@/content/ThemeContext";

export default function Work() {
  return (
    <div className=" flex flex-col justify-center items-center self-stretch px-20 py-24 gap-4">
      <div className="  flex-col justify-center items-center inline-flex">
        <div className="px-5 py-1 bg-gray-200 rounded-xl justify-center items-center inline-flex">
          <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
            Work
          </div>
        </div>
      </div>
      <div className=" h-7 flex-col justify-center items-center inline-flex">
        <div className="self-stretch text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 self-stretch px-8 py-0">
        <WorkText />
        <WorkContent />
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-12 self-stretch px-8 py-0">
        <WorkContent />
        <WorkText />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 self-stretch px-8 py-0">
        <WorkText />
        <WorkContent />
      </div>
    </div>
  );
}
