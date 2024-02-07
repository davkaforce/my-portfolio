import { useTheme } from "@/content/ThemeContext";

export default function Experience() {
  const { theme } = useTheme();
  return (
    <div
      className={` ${
        theme == "dark" ? "" : " bg-gray-50 "
      }   flex flex-col justify-center items-center self-stretch px-20 py-24`}
    >
      <div className="flex flex-col justify-center items-center gap-4 self-stretch px-8 py-0">
        <div className="flex flex-col justify-center items-center self-stretch">
          <svg
            width="116"
            height="28"
            viewBox="0 0 116 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="115" height="28" rx="12" fill="#E5E7EB" />
            <path
              d="M21.6186 19V8.81818H28.0021V10.1406H23.1548V13.2429H27.669V14.5604H23.1548V17.6776H28.0618V19H21.6186ZM31.1081 11.3636L32.7935 14.3366L34.4938 11.3636H36.1195L33.7381 15.1818L36.1394 19H34.5137L32.7935 16.1463L31.0783 19H29.4476L31.824 15.1818L29.4775 11.3636H31.1081ZM37.6458 21.8636V11.3636H39.0975V12.6016H39.2218C39.3079 12.4425 39.4322 12.2585 39.5946 12.0497C39.757 11.8409 39.9824 11.6586 40.2708 11.5028C40.5591 11.3438 40.9403 11.2642 41.4142 11.2642C42.0307 11.2642 42.5809 11.42 43.0648 11.7315C43.5487 12.0431 43.9282 12.4922 44.2033 13.0788C44.4817 13.6655 44.6209 14.3714 44.6209 15.1967C44.6209 16.022 44.4834 16.7296 44.2083 17.3196C43.9332 17.9062 43.5553 18.3587 43.0748 18.6768C42.5942 18.9917 42.0456 19.1491 41.4292 19.1491C40.9651 19.1491 40.5856 19.0713 40.2907 18.9155C39.999 18.7597 39.7703 18.5774 39.6046 18.3686C39.4389 18.1598 39.3113 17.9742 39.2218 17.8118H39.1323V21.8636H37.6458ZM39.1025 15.1818C39.1025 15.7187 39.1803 16.1894 39.3361 16.5938C39.4919 16.9981 39.7173 17.3146 40.0123 17.5433C40.3072 17.7687 40.6685 17.8814 41.0961 17.8814C41.5402 17.8814 41.9114 17.7637 42.2097 17.5284C42.508 17.2898 42.7334 16.9666 42.8858 16.5589C43.0416 16.1513 43.1195 15.6922 43.1195 15.1818C43.1195 14.678 43.0433 14.2256 42.8908 13.8246C42.7417 13.4235 42.5163 13.107 42.2147 12.875C41.9164 12.643 41.5435 12.527 41.0961 12.527C40.6652 12.527 40.3006 12.638 40.0023 12.8601C39.7073 13.0821 39.4836 13.392 39.3311 13.7898C39.1787 14.1875 39.1025 14.6515 39.1025 15.1818ZM49.5776 19.1541C48.8252 19.1541 48.1773 18.9934 47.6337 18.6719C47.0935 18.3471 46.6758 17.8913 46.3809 17.3047C46.0892 16.7147 45.9434 16.0237 45.9434 15.2315C45.9434 14.4493 46.0892 13.7599 46.3809 13.1634C46.6758 12.5668 47.0868 12.1011 47.6138 11.7663C48.1441 11.4316 48.7639 11.2642 49.4732 11.2642C49.9041 11.2642 50.3217 11.3355 50.726 11.478C51.1304 11.6205 51.4933 11.8442 51.8148 12.1491C52.1363 12.4541 52.3899 12.8501 52.5755 13.3374C52.7611 13.8213 52.8539 14.4096 52.8539 15.1023V15.6293H46.7836V14.5156H51.3972C51.3972 14.1245 51.3176 13.7782 51.1586 13.4766C50.9995 13.1716 50.7757 12.9313 50.4874 12.7557C50.2024 12.58 49.8676 12.4922 49.4831 12.4922C49.0655 12.4922 48.7009 12.5949 48.3894 12.8004C48.0811 13.0026 47.8425 13.2678 47.6735 13.5959C47.5078 13.9207 47.4249 14.2737 47.4249 14.6548V15.5249C47.4249 16.0353 47.5144 16.4695 47.6934 16.8274C47.8757 17.1854 48.1292 17.4588 48.454 17.6477C48.7788 17.8333 49.1583 17.9261 49.5925 17.9261C49.8742 17.9261 50.1311 17.8864 50.3631 17.8068C50.5951 17.724 50.7956 17.6013 50.9647 17.4389C51.1337 17.2765 51.263 17.076 51.3525 16.8374L52.7594 17.0909C52.6467 17.5052 52.4445 17.8681 52.1529 18.1797C51.8645 18.4879 51.5016 18.7282 51.0641 18.9006C50.6299 19.0696 50.1344 19.1541 49.5776 19.1541ZM54.5032 19V11.3636H55.94V12.5767H56.0195C56.1587 12.1657 56.404 11.8426 56.7553 11.6072C57.11 11.3686 57.511 11.2493 57.9585 11.2493C58.0513 11.2493 58.1606 11.2526 58.2866 11.2592C58.4158 11.2659 58.5169 11.2741 58.5898 11.2841V12.706C58.5302 12.6894 58.4241 12.6712 58.2717 12.6513C58.1192 12.6281 57.9667 12.6165 57.8143 12.6165C57.463 12.6165 57.1497 12.6911 56.8746 12.8402C56.6029 12.986 56.3874 13.1899 56.2283 13.4517C56.0692 13.7102 55.9897 14.0052 55.9897 14.3366V19H54.5032ZM59.8762 19V11.3636H61.3627V19H59.8762ZM60.627 10.1854C60.3684 10.1854 60.1464 10.0992 59.9608 9.92685C59.7785 9.75118 59.6873 9.54238 59.6873 9.30043C59.6873 9.05516 59.7785 8.84635 59.9608 8.67401C60.1464 8.49834 60.3684 8.41051 60.627 8.41051C60.8855 8.41051 61.1059 8.49834 61.2882 8.67401C61.4738 8.84635 61.5666 9.05516 61.5666 9.30043C61.5666 9.54238 61.4738 9.75118 61.2882 9.92685C61.1059 10.0992 60.8855 10.1854 60.627 10.1854ZM66.6538 19.1541C65.9014 19.1541 65.2534 18.9934 64.7099 18.6719C64.1696 18.3471 63.752 17.8913 63.457 17.3047C63.1654 16.7147 63.0195 16.0237 63.0195 15.2315C63.0195 14.4493 63.1654 13.7599 63.457 13.1634C63.752 12.5668 64.163 12.1011 64.69 11.7663C65.2203 11.4316 65.8401 11.2642 66.5494 11.2642C66.9802 11.2642 67.3978 11.3355 67.8022 11.478C68.2066 11.6205 68.5695 11.8442 68.891 12.1491C69.2125 12.4541 69.466 12.8501 69.6516 13.3374C69.8372 13.8213 69.93 14.4096 69.93 15.1023V15.6293H63.8597V14.5156H68.4734C68.4734 14.1245 68.3938 13.7782 68.2347 13.4766C68.0756 13.1716 67.8519 12.9313 67.5636 12.7557C67.2785 12.58 66.9438 12.4922 66.5593 12.4922C66.1417 12.4922 65.7771 12.5949 65.4656 12.8004C65.1573 13.0026 64.9187 13.2678 64.7496 13.5959C64.5839 13.9207 64.5011 14.2737 64.5011 14.6548V15.5249C64.5011 16.0353 64.5906 16.4695 64.7695 16.8274C64.9518 17.1854 65.2054 17.4588 65.5302 17.6477C65.855 17.8333 66.2345 17.9261 66.6687 17.9261C66.9504 17.9261 67.2073 17.8864 67.4393 17.8068C67.6713 17.724 67.8718 17.6013 68.0408 17.4389C68.2099 17.2765 68.3391 17.076 68.4286 16.8374L69.8356 17.0909C69.7229 17.5052 69.5207 17.8681 69.229 18.1797C68.9407 18.4879 68.5778 18.7282 68.1403 18.9006C67.7061 19.0696 67.2106 19.1541 66.6538 19.1541ZM73.0659 14.4659V19H71.5794V11.3636H73.0062V12.6065H73.1007C73.2763 12.2022 73.5514 11.8774 73.926 11.6321C74.3038 11.3868 74.7794 11.2642 75.3528 11.2642C75.8732 11.2642 76.3289 11.3736 76.72 11.5923C77.1111 11.8078 77.4144 12.1293 77.6298 12.5568C77.8452 12.9844 77.9529 13.513 77.9529 14.1428V19H76.4664V14.3217C76.4664 13.7682 76.3223 13.3357 76.0339 13.0241C75.7456 12.7093 75.3495 12.5518 74.8457 12.5518C74.501 12.5518 74.1944 12.6264 73.926 12.7756C73.6608 12.9247 73.4503 13.1435 73.2946 13.4318C73.1421 13.7169 73.0659 14.0616 73.0659 14.4659ZM83.1632 19.1541C82.4241 19.1541 81.7877 18.9867 81.2541 18.652C80.7238 18.3139 80.3161 17.8482 80.0311 17.255C79.746 16.6617 79.6035 15.9822 79.6035 15.2166C79.6035 14.4411 79.7493 13.7566 80.041 13.1634C80.3327 12.5668 80.7437 12.1011 81.274 11.7663C81.8043 11.4316 82.429 11.2642 83.1483 11.2642C83.7283 11.2642 84.2453 11.3719 84.6994 11.5874C85.1535 11.7995 85.5197 12.0978 85.7981 12.4822C86.0798 12.8667 86.2472 13.3158 86.3002 13.8295H84.8535C84.774 13.4716 84.5917 13.1634 84.3066 12.9048C84.0249 12.6463 83.6471 12.517 83.1731 12.517C82.7588 12.517 82.3959 12.6264 82.0843 12.8452C81.7761 13.0606 81.5358 13.3688 81.3635 13.7699C81.1911 14.1676 81.1049 14.6383 81.1049 15.1818C81.1049 15.7386 81.1895 16.2192 81.3585 16.6236C81.5275 17.0279 81.7662 17.3411 82.0744 17.5632C82.3859 17.7853 82.7522 17.8963 83.1731 17.8963C83.4548 17.8963 83.71 17.8449 83.9387 17.7422C84.1708 17.6361 84.3646 17.4853 84.5204 17.2898C84.6795 17.0942 84.7905 16.8589 84.8535 16.5838H86.3002C86.2472 17.0777 86.0865 17.5185 85.818 17.9062C85.5495 18.294 85.1899 18.599 84.7392 18.821C84.2917 19.0431 83.7664 19.1541 83.1632 19.1541ZM91.1811 19.1541C90.4287 19.1541 89.7808 18.9934 89.2372 18.6719C88.697 18.3471 88.2794 17.8913 87.9844 17.3047C87.6927 16.7147 87.5469 16.0237 87.5469 15.2315C87.5469 14.4493 87.6927 13.7599 87.9844 13.1634C88.2794 12.5668 88.6903 12.1011 89.2173 11.7663C89.7476 11.4316 90.3674 11.2642 91.0767 11.2642C91.5076 11.2642 91.9252 11.3355 92.3295 11.478C92.7339 11.6205 93.0968 11.8442 93.4183 12.1491C93.7398 12.4541 93.9934 12.8501 94.179 13.3374C94.3646 13.8213 94.4574 14.4096 94.4574 15.1023V15.6293H88.3871V14.5156H93.0007C93.0007 14.1245 92.9212 13.7782 92.7621 13.4766C92.603 13.1716 92.3793 12.9313 92.0909 12.7557C91.8059 12.58 91.4711 12.4922 91.0866 12.4922C90.669 12.4922 90.3045 12.5949 89.9929 12.8004C89.6847 13.0026 89.446 13.2678 89.277 13.5959C89.1113 13.9207 89.0284 14.2737 89.0284 14.6548V15.5249C89.0284 16.0353 89.1179 16.4695 89.2969 16.8274C89.4792 17.1854 89.7327 17.4588 90.0575 17.6477C90.3823 17.8333 90.7618 17.9261 91.196 17.9261C91.4777 17.9261 91.7346 17.8864 91.9666 17.8068C92.1986 17.724 92.3991 17.6013 92.5682 17.4389C92.7372 17.2765 92.8665 17.076 92.956 16.8374L94.3629 17.0909C94.2502 17.5052 94.0481 17.8681 93.7564 18.1797C93.468 18.4879 93.1051 18.7282 92.6676 18.9006C92.2334 19.0696 91.7379 19.1541 91.1811 19.1541Z"
              fill="#4B5563"
            />
          </svg>
        </div>
        <div className="self-stretch h-7 flex-col justify-center items-center flex">
          <div className="self-stretch text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className=" h-72 p-8 bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-[102px] h-7 relative">
                <div className="w-[102px] h-7 left-0 top-0 absolute">
                  <div className="w-[101.03px] h-7 left-[0.48px] top-0 absolute">
                    <img src="logo-upwork.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
                Sr. Frontend Developer
              </div>
              <div className="self-stretch h-[180px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>Sed quis justo ac magna.</li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="text-gray-700 text-base font-normal font-['Inter'] leading-normal">
                Nov 2021 - Present
              </div>
            </div>
          </div>
        </div>
        <div className=" h-72 p-8 bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-[102px] h-7 relative">
                <div className="w-[102px] h-7 left-0 top-0 absolute">
                  <div className="w-[101.03px] h-7 left-[0.48px] top-0 absolute">
                    <img src="logo-upwork.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
                Sr. Frontend Developer
              </div>
              <div className="self-stretch h-[180px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>Sed quis justo ac magna.</li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="text-gray-700 text-base font-normal font-['Inter'] leading-normal">
                Nov 2021 - Present
              </div>
            </div>
          </div>
        </div>
        <div className=" h-72 p-8 bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-[102px] h-7 relative">
                <div className="w-[102px] h-7 left-0 top-0 absolute">
                  <div className="w-[101.03px] h-7 left-[0.48px] top-0 absolute">
                    <img src="logo-upwork.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
                Sr. Frontend Developer
              </div>
              <div className="self-stretch h-[180px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>Sed quis justo ac magna.</li>
                </div>
                <div className="self-stretch text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="text-gray-700 text-base font-normal font-['Inter'] leading-normal">
                Nov 2021 - Present
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
