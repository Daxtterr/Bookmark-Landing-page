import tab1 from "../images/illustration-features-tab-1.svg";

const Features = () => {
  const move = () => {
    const slider = document.getElementById("slider");
    slider.classList.remove("-translate-x-56");
    slider.classList.remove("translate-x-64");
    slider.classList.add("translate-x-6");
  };

  const movee = () => {
    const slider = document.getElementById("slider");
    slider.classList.remove("-translate-x-56");
    slider.classList.toggle("translate-x-6");
    slider.classList.add("translate-x-64");
  };

  const mov = () => {
    const slider = document.getElementById("slider");
    slider.classList.remove("translate-x-6");
    slider.classList.remove("translate-x-64");
    slider.classList.add("-translate-x-56");
  };
  return (
    <div className="w-11/12 mx-auto mb-24 mb-56">
      <h1 className="text-center text-3xl font-medium pt-8 pb-4 md:p-8">
        Features
      </h1>
      <p className="text-center text-slate-600 ">
        Our aim is to make it quick and easy for you{" "}
        <br className="lg:hidden" />
        to access your&nbsp;
        <br className="hidden lg:block" />
        favourite websites. Your <br className="lg:hidden" />
        bookmarks sync between your devices <br className="hidden lg:block" />
        so <br className="lg:hidden" /> you can access them on the go.
      </p>

      <div className=" flex justify-center space-y-4 items-center mt-14 flex-col lg:space-x-24 lg:flex-row lg:space-y-0">
        <p className="font-medium cursor-pointer text-slate-600" onClick={mov}>
          Simple Bookmarking
        </p>
        <hr className="lg:hidden w-9/12" />
        <p
          className="font-medium text-slate-600 hover:text-red-400 cursor-pointer"
          onClick={move}
        >
          Speedy Searching
        </p>
        <hr className="lg:hidden w-9/12" />
        <p
          className="font-medium text-slate-600 hover:text-red-400 cursor-pointer "
          onClick={movee}
        >
          Easy Sharing
        </p>
        <hr className="lg:hidden w-9/12" />
      </div>
      <hr className="mx-auto mt-4 w-6/12 mb-2 hidden lg:block" />
      <hr
        id="slider"
        className="mx-auto w-48 border-2 border-red-500 -translate-y-3 -translate-x-56 hidden lg:block"
      />

      <div className="mx-auto relative mt-10 flex flex-col items-center justify-between lg:flex-row">
        <div className="">
          <div className=" bg-blue-700 h-56 w-96 top-12 absolute  -left-20 -z-10 rounded-r-full md:w-8/12 md:h-80 lg:h-4/5 md:top-20 lg:top-40 lg:w-6/12"></div>
          <img className="lg:ml-24" src={tab1} alt="" />
        </div>
        <div className="space-y-6 mt-24 lg:mt-0 lg:mr-24">
          <h1 className="text-3xl font-medium text-center lg:text-left">
            Bookmark in one click
          </h1>
          <p className="text-slate-600 text-center lg:text-left">
            Organize your bookmarks however you like.{" "}
            <br className="lg:hidden" />
            Our <br className="hidden lg:block" />
            simple drag-and-drop interface gives
            <br className="lg:hidden" /> you complete{" "}
            <br className="hidden lg:block" />
            control over how you manage your favourite sites.
          </p>
          <button className="hidden text-white bg-blue-700 rounded-lg px-4 py-2 mt-10 lg:block">
            <main>More info</main>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
