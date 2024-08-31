import React from "react";
import { Link } from "react-router-dom";


const indexMainComponent = () => {
  return (
    <>
      <div>
        <div className="bg-[url(/IndexBackground.jpg)] h-[100vh]   bg-cover  bg-top bg-no-repeat"></div>
        <div className="flex flex-col mt-[-70vh]  ">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-3xl mx-auto text-center">
              <h2 class="text-5xl mb-5 font-bold leading-tight text-white md:text-7xl lg:leading-tight">
                Mid-Season Sale
              </h2>
              <Link
                to={"/allProducts"}
                class=" mx-auto mt-16 text-lg  px-7 py-2 rounded bg-red-500 hover:bg-red-700 text-white"
              >
                Shop Collection
              </Link>
            </div>

            <div class="grid m-auto grid-cols-2 gap-6 mt-20 md:w-3/5 md:mt-32 lg:gap-x-12">
              <Link to={"/women"} className=" relative shadow-2xl ">
                <img
                  class=" rounded-lg h-full w-full hover:brightness-50"
                  src="/indexWomenBanner.jpg"
                  alt=""
                />
                <div className="absolute bottom-3 left-5 flex flex-col gap-0">
                  <p className="text-white font-sans font-normal">
                    Shop the Collection
                  </p>
                  <h1 className="text-white font-semibold font-sans">
                    Women's
                  </h1>
                </div>
              </Link>
              <Link to={"/men"} className=" relative shadow-2xl">
                <img
                  class=" rounded-lg h-full w-full hover:brightness-50"
                  src="/indexMenBanner.jpg"
                  alt=""
                />
                <div className="absolute bottom-3 left-5 flex flex-col gap-0">
                  <p className="text-white font-sans font-normal">
                    Shop the Collection
                  </p>
                  <h1 className="text-white font-semibold font-sans">Men's</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default indexMainComponent;
