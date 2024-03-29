export default function About() {
  return (
    <div className="flex text-wrap p-96 justify-between items-start  px-20 py-24">
      <div className="flex flex-col justify-center items-center gap-12">
        <svg
          width="106"
          height="28"
          viewBox="0 0 106 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="105" height="28" rx="12" fill="#E5E7EB" />
          <path
            d="M22.4787 19H20.848L24.5121 8.81818H26.2869L29.951 19H28.3203L25.4418 10.6676H25.3622L22.4787 19ZM22.7521 15.0128H28.0419V16.3054H22.7521V15.0128ZM31.4213 19V8.81818H32.9078V12.6016H32.9973C33.0835 12.4425 33.2078 12.2585 33.3702 12.0497C33.5326 11.8409 33.758 11.6586 34.0463 11.5028C34.3347 11.3438 34.7159 11.2642 35.1898 11.2642C35.8063 11.2642 36.3565 11.42 36.8404 11.7315C37.3243 12.0431 37.7038 12.4922 37.9789 13.0788C38.2573 13.6655 38.3965 14.3714 38.3965 15.1967C38.3965 16.022 38.2589 16.7296 37.9838 17.3196C37.7087 17.9062 37.3309 18.3587 36.8503 18.6768C36.3697 18.9917 35.8212 19.1491 35.2047 19.1491C34.7407 19.1491 34.3612 19.0713 34.0662 18.9155C33.7746 18.7597 33.5459 18.5774 33.3801 18.3686C33.2144 18.1598 33.0868 17.9742 32.9973 17.8118H32.873V19H31.4213ZM32.878 15.1818C32.878 15.7187 32.9559 16.1894 33.1117 16.5938C33.2675 16.9981 33.4928 17.3146 33.7878 17.5433C34.0828 17.7687 34.4441 17.8814 34.8716 17.8814C35.3158 17.8814 35.687 17.7637 35.9853 17.5284C36.2836 17.2898 36.5089 16.9666 36.6614 16.5589C36.8172 16.1513 36.8951 15.6922 36.8951 15.1818C36.8951 14.678 36.8188 14.2256 36.6664 13.8246C36.5172 13.4235 36.2918 13.107 35.9902 12.875C35.6919 12.643 35.3191 12.527 34.8716 12.527C34.4408 12.527 34.0762 12.638 33.7779 12.8601C33.4829 13.0821 33.2592 13.392 33.1067 13.7898C32.9542 14.1875 32.878 14.6515 32.878 15.1818ZM43.2823 19.1541C42.5664 19.1541 41.9416 18.9901 41.408 18.6619C40.8744 18.3338 40.4601 17.8748 40.1651 17.2848C39.8701 16.6948 39.7227 16.0054 39.7227 15.2166C39.7227 14.4245 39.8701 13.7318 40.1651 13.1385C40.4601 12.5452 40.8744 12.0845 41.408 11.7564C41.9416 11.4283 42.5664 11.2642 43.2823 11.2642C43.9982 11.2642 44.623 11.4283 45.1566 11.7564C45.6902 12.0845 46.1045 12.5452 46.3995 13.1385C46.6945 13.7318 46.842 14.4245 46.842 15.2166C46.842 16.0054 46.6945 16.6948 46.3995 17.2848C46.1045 17.8748 45.6902 18.3338 45.1566 18.6619C44.623 18.9901 43.9982 19.1541 43.2823 19.1541ZM43.2873 17.9062C43.7513 17.9062 44.1358 17.7836 44.4407 17.5384C44.7456 17.2931 44.971 16.9666 45.1168 16.5589C45.266 16.1513 45.3406 15.7022 45.3406 15.2116C45.3406 14.7244 45.266 14.277 45.1168 13.8693C44.971 13.4583 44.7456 13.1286 44.4407 12.88C44.1358 12.6314 43.7513 12.5071 43.2873 12.5071C42.82 12.5071 42.4322 12.6314 42.1239 12.88C41.819 13.1286 41.592 13.4583 41.4428 13.8693C41.297 14.277 41.2241 14.7244 41.2241 15.2116C41.2241 15.7022 41.297 16.1513 41.4428 16.5589C41.592 16.9666 41.819 17.2931 42.1239 17.5384C42.4322 17.7836 42.82 17.9062 43.2873 17.9062ZM53.3386 15.8331V11.3636H54.8301V19H53.3684V17.6776H53.2889C53.1132 18.0852 52.8315 18.425 52.4437 18.6967C52.0592 18.9652 51.5803 19.0994 51.0069 19.0994C50.5164 19.0994 50.0822 18.9917 49.7044 18.7763C49.3298 18.5575 49.0349 18.2344 48.8194 17.8068C48.6073 17.3793 48.5012 16.8506 48.5012 16.2209V11.3636H49.9877V16.0419C49.9877 16.5623 50.1319 16.9766 50.4203 17.2848C50.7086 17.593 51.0832 17.7472 51.5439 17.7472C51.8223 17.7472 52.099 17.6776 52.3741 17.5384C52.6525 17.3991 52.8829 17.1887 53.0652 16.907C53.2508 16.6252 53.3419 16.2673 53.3386 15.8331ZM60.392 11.3636V12.5568H56.2209V11.3636H60.392ZM57.3395 9.53409H58.826V16.7578C58.826 17.0462 58.8691 17.2633 58.9553 17.4091C59.0414 17.5516 59.1525 17.6494 59.2884 17.7024C59.4276 17.7521 59.5784 17.777 59.7408 17.777C59.8601 17.777 59.9645 17.7687 60.054 17.7521C60.1435 17.7356 60.2131 17.7223 60.2628 17.7124L60.5312 18.9403C60.4451 18.9735 60.3224 19.0066 60.1634 19.0398C60.0043 19.0762 59.8054 19.0961 59.5668 19.0994C59.1757 19.1061 58.8111 19.0365 58.473 18.8906C58.1349 18.7448 57.8615 18.5194 57.6527 18.2145C57.4439 17.9096 57.3395 17.5268 57.3395 17.0661V9.53409ZM65.7415 19V11.3636H67.1683V12.6065H67.2628C67.4219 12.1856 67.6821 11.8575 68.0433 11.6222C68.4046 11.3835 68.8371 11.2642 69.3409 11.2642C69.8513 11.2642 70.2789 11.3835 70.6236 11.6222C70.9716 11.8608 71.2285 12.1889 71.3942 12.6065H71.4737C71.656 12.1989 71.946 11.8741 72.3438 11.6321C72.7415 11.3868 73.2154 11.2642 73.7656 11.2642C74.4583 11.2642 75.0234 11.4813 75.4609 11.9155C75.9018 12.3497 76.1222 13.0043 76.1222 13.8793V19H74.6357V14.0185C74.6357 13.5014 74.4948 13.1269 74.2131 12.8949C73.9313 12.6629 73.5949 12.5469 73.2038 12.5469C72.7199 12.5469 72.3438 12.696 72.0753 12.9943C71.8068 13.2893 71.6726 13.6688 71.6726 14.1328V19H70.1911V13.924C70.1911 13.5097 70.0618 13.1766 69.8033 12.9247C69.5447 12.6728 69.2083 12.5469 68.794 12.5469C68.5123 12.5469 68.2521 12.6214 68.0135 12.7706C67.7782 12.9164 67.5876 13.1203 67.4418 13.3821C67.2992 13.6439 67.228 13.9472 67.228 14.2919V19H65.7415ZM81.4057 19.1541C80.6533 19.1541 80.0054 18.9934 79.4618 18.6719C78.9216 18.3471 78.504 17.8913 78.209 17.3047C77.9173 16.7147 77.7715 16.0237 77.7715 15.2315C77.7715 14.4493 77.9173 13.7599 78.209 13.1634C78.504 12.5668 78.915 12.1011 79.4419 11.7663C79.9722 11.4316 80.592 11.2642 81.3013 11.2642C81.7322 11.2642 82.1498 11.3355 82.5542 11.478C82.9585 11.6205 83.3214 11.8442 83.6429 12.1491C83.9644 12.4541 84.218 12.8501 84.4036 13.3374C84.5892 13.8213 84.682 14.4096 84.682 15.1023V15.6293H78.6117V14.5156H83.2253C83.2253 14.1245 83.1458 13.7782 82.9867 13.4766C82.8276 13.1716 82.6039 12.9313 82.3155 12.7557C82.0305 12.58 81.6957 12.4922 81.3113 12.4922C80.8936 12.4922 80.5291 12.5949 80.2175 12.8004C79.9093 13.0026 79.6706 13.2678 79.5016 13.5959C79.3359 13.9207 79.253 14.2737 79.253 14.6548V15.5249C79.253 16.0353 79.3425 16.4695 79.5215 16.8274C79.7038 17.1854 79.9573 17.4588 80.2821 17.6477C80.6069 17.8333 80.9864 17.9261 81.4206 17.9261C81.7024 17.9261 81.9592 17.8864 82.1912 17.8068C82.4232 17.724 82.6238 17.6013 82.7928 17.4389C82.9618 17.2765 83.0911 17.076 83.1806 16.8374L84.5875 17.0909C84.4748 17.5052 84.2727 17.8681 83.981 18.1797C83.6926 18.4879 83.3297 18.7282 82.8922 18.9006C82.458 19.0696 81.9625 19.1541 81.4057 19.1541Z"
            fill="#4B5563"
          />
        </svg>
        <div className="flex flex-col sm:flex-row items-start gap-12  ">
          <div className=" flex-col justify-start items-start inline-flex">
            <div className="w-[440px] h-[520px] relative">
              <div className="h-[480px] left-0 top-[40px] absolute border-8 border-gray-50" />
              <img
                className="w-[400px] h-[480px] left-[40px] top-0 absolute border-8 border-gray-50"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e51d70b0-71fc-470d-a081-0a21eb1dcdc6/df3lfle-bcb59deb-8571-43c0-89ac-76332f371002.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1MWQ3MGIwLTcxZmMtNDcwZC1hMDgxLTBhMjFlYjFkY2RjNlwvZGYzbGZsZS1iY2I1OWRlYi04NTcxLTQzYzAtODlhYy03NjMzMmYzNzEwMDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ilRxJn2EO_NKPgaLQz2pXedfh36Q1lw9vhxY6CWKR_Y"
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-6 ">
            {/* <span>Curious about me? Here you have it:</span> */}
            <span className=" text-[color:var(--Gray-600,#4B5563)] not-italic font-normal text-wrap ">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </span>

            <span className=" text-[color:var(--Gray-600,#4B5563)]  not-italic font-normal ">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </span>
            <span className=" text-[color:var(--Gray-600,#4B5563)] text-base not-italic font-normal ">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </span>
            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Finally, some quick bits about me.
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className=" basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className=" text-gray-600 text-base font-normal font-['Inter'] ">
                  B.E. in Computer Engineering
                </div>
                <div className=" text-gray-600 text-base font-normal font-['Inter'] ">
                  Full time freelancer
                </div>
              </div>
              <div className="basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className=" text-gray-600 text-base font-normal font-['Inter'] ">
                  Avid learner
                </div>
                <div className=" text-gray-600 text-base font-normal font-['Inter'] ">
                  Aspiring indie hacker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
