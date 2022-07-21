const FAQ = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium p-4 lg:p-8">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-slate-600 ">
        Here are some of our FAQS. if you have any <br className="lg:hidden"/> other questions <br className="hidden lg:block"/>
        you'd like answered please <br className="lg:hidden"/> feel free to email us.
      </p>
      <div className="w-11/12 lg:w-6/12 mx-auto mt-10">
        {/*FAQS */}
        <div className="group relative overflow-hidden ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0  z-10 cursor-pointer"
          />
          <div className="lg:border-t-2 h-12 w-full pl-5 flex items-center ">
            <h1 className="group-hover:text-red-500">What is Bookmark</h1>
          </div>
          {/*Arrow Icon*/}
          <div className="absolute top-5 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke="blue"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
          {/*Content*/}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 mb-2 lg:mb-0">
            <div className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        {/* Request New Browser*/}
        <div className="group relative overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0  z-10 cursor-pointer"
          />
          <div className="border-t-2 h-12 w-full pl-5 flex items-center">
            <h1 className="group-hover:text-red-400">How can i request a new browser</h1>
          </div>
          {/*Arrow Icon*/}
          <div className="absolute top-5 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke="blue"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
          {/*Content*/}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 mb-2 lg:mb-0">
            <div className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/*Mobile App */}
        <div className="group relative overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0  z-10 cursor-pointer"
          />
          <div className="border-t-2 h-12 w-full pl-5 flex items-center">
            <h1 className="group-hover:text-red-400">Is there a mobile app</h1>
          </div>
          {/*Arrow Icon*/}
          <div className="absolute top-5 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke="blue"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
          {/*Content*/}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 mb-2 lg:mb-0">
            <div className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/*Chromium browsers */}
        <div className="group relative overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0  z-10 cursor-pointer"
          />
          <div className="border-t-2 h-12 w-full pl-5 flex items-center">
            <h1 className="group-hover:text-red-400">What about other Chromium browsers</h1>
          </div>
          {/*Arrow Icon*/}
          <div className="absolute top-5 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" >
              <path
                fill="none"
                stroke="blue"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
          {/*Content*/}
          <div className="border-b-2 bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 mb-2 lg:mb-0">
            <div className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="grid place-content-center mb-32">
          <button className=" text-white bg-blue-700 rounded-md px-4 py-2 mt-10">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
