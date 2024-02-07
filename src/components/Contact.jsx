import { useTheme } from "@/content/ThemeContext";
import React, { useState } from "react";
import Copy from "copy-to-clipboard";
import CopyIcon from "./Icons/Copy";

export default function Contact() {
  // const handleClick = () => {
  //   Copy("Copy test again", {
  //     debug: true,
  //     message: `Press to copy`,
  //   });
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const email = "reachsagarshah@gmail.com";
  const phone = "+91 8980500565";

  const handleClick = (copyText, setCopied) => {
    const textToCopy = copyText;
    Copy(textToCopy);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  // const { theme } = useTheme();
  return (
    <div
      id="contact"
      className={`flex flex-col justify-center items-center self-stretch p-10`}
    >
      <div className="  flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[368px] px-8 flex-col justify-center items-center gap-12 flex">
          <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-7 flex-col justify-center items-center flex">
              <div className="px-5 py-1 rounded-xl justify-center items-center inline-flex">
                <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
                  Get in touch
                </div>
              </div>
            </div>
            <div className="self-stretch h-14 flex-col justify-center items-center flex">
              <div className="self-stretch text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-4 flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative" />
              <div className="text-center text-gray-900 text-4xl font-semibold font-['Inter'] leading-10">
                reachsagarshah@gmail.com
              </div>
              <button
                onClick={() => {
                  handleClick(email, setCopiedMail);
                }}
              >
                <CopyIcon />
              </button>
              {/* {hasCopied && <p>Copied to clipboard</p>} */}
              <div className="p-1.5 rounded-lg justify-center items-center flex">
                <div className="w-8 h-8 relative" />
              </div>
            </div>
            {copiedMail && (
              <div className="animate-pulse">Text copied to clipboard!</div>
            )}
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative" />
              <div className="text-center text-gray-900 text-4xl font-semibold font-['Inter'] leading-10">
                +91 8980500565
              </div>
              <button
                onClick={() => {
                  handleClick(phone, setCopiedNumber);
                }}
              >
                <CopyIcon />
              </button>

              <div className="p-1.5 rounded-lg justify-center items-center flex">
                <div className="w-8 h-8 relative" />
              </div>
            </div>
            {copiedNumber && (
              <div className={copiedNumber ? "animate-pulse" : ""}>
                Text copied to clipboard!
              </div>
            )}
          </div>
          <div className="self-stretch rounded-xl justify-center items-center gap-16 inline-flex">
            <div className="flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                You may also find me on these platforms!
              </div>
              <div className="self-stretch h-9 flex-col justify-center items-center gap-4 flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="p-1.5 rounded-lg justify-center items-center flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div className="p-1.5 rounded-lg justify-center items-center flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div className="p-1.5 rounded-lg justify-center items-center flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
