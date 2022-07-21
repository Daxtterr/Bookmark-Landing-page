import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
const Extension = () => {
  return (
    <div className="mb-32 lg:mb-52">
      <h1 className="text-center whitespace-nowrap text-3xl font-medium py-4 lg:p-8">
        Download the extension
      </h1>
      <p className="text-center text-slate-600 ">
        We've got more browsers in the pipeline. <br className="lg:hidden"/> Please do let us know if <br className="hidden lg:block"/>
        you've got a <br className="lg:hidden"/> favourite you'd like us to prioritize .
      </p>
      {/*Extension Cards */}
      <div className="space-y-8 mt-10 flex flex-col lg:space-x-8 lg:flex-row lg-space-y-0 justify-center">
        <div className="w-9/12 mx-auto bg-white drop-shadow-xl rounded-md bg-white lg:w-2/12 pb-4 pt-4 text-center lg:mx-0">
          <img className="mx-auto mb-4" src={chrome} alt="" />
          <p className="font-semibold tracking-wide ">Add to Chrome</p>
          <p className="text-slate-600">Minimum Version 62</p>
          <hr className=" border-dashed mt-8" />
          <button className="bg-blue-600 rounded-md text-sm p-4 text-white mt-6 border hover:text-blue-900 hover:border-blue-900 hover:bg-white">
            Add &amp; Install Extension
          </button>
        </div>
        <div className="w-9/12 mx-auto bg-white drop-shadow-xl rounded-md bg-white lg:w-2/12 pb-4 pt-4 text-center lg:translate-y-10">
          <img className="mx-auto mb-4" src={firefox} alt="" />
          <p className="font-semibold tracking-wide ">Add to Firefox</p>
          <p className="text-slate-600">Minimum Version 55</p>
          <hr className=" border-dashed mt-8" />
          <button className="bg-blue-600 rounded-md p-4 text-white mt-6 text-sm p-4 border hover:text-blue-900 hover:border-blue-900 hover:bg-white">
            Add &amp; Install Extension
          </button>
        </div>
        <div className="w-9/12 mx-auto bg-white drop-shadow-xl rounded-md bg-white lg:w-2/12 pb-4 pt-4 text-center lg:translate-y-24">
          <img className="mx-auto mb-4 text-white" src={opera} alt="" />
          <p className="font-semibold tracking-wide ">Add to Opera</p>
          <p className="text-slate-600">Minimum Version 46</p>
          <hr className=" border-dashed mt-8" />
          <button className="bg-blue-600 rounded-md text-sm p-4 text-white mt-6 border hover:text-blue-900 hover:border-blue-900 hover:bg-white">
            Add &amp; Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extension;
