import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import CartComponent from "../cart/cartComponent";

const NavbarComponent = () => {
  const [navIsOpen, setnavIsOpen] = useState(false);
  const [cartIsOpen, setcartIsOpen] = useState(false)

  const handleNavbar = () => {
    setnavIsOpen(!navIsOpen);
  };

  const handleCart = () => { 
    setcartIsOpen(!cartIsOpen)
  };

  return (
    <nav className="absolute z-20 w-full">
      <div class="bg-gray-100 border-b fixed z-10 w-full border-gray-200">
        <div class="px-4 mx-auto lg:w-4/5 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between h-16 lg:h-16">
            {/* nev menus  */}
            <div class="hidden lg:flex lg:items-center lg:space-x-10">
              <Link
                to="/"
                title=""
                class="text-base font-normal	 text-black hover:text-gray-600"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                to={"/allproducts"}
                title=""
                class="text-base font-normal text-black hover:text-gray-600"
              >
                {" "}
                All Products{" "}
              </Link>

              <Link
                to={"/men"}
                title=""
                class="text-base font-normal text-black hover:text-gray-600"
              >
                {" "}
                Men{" "}
              </Link>

              <Link
                to={"/women"}
                title=""
                class="text-base font-normal text-black hover:text-gray-600"
              >
                {" "}
                Women{" "}
              </Link>
            </div>

            {/* site logo */}
            <div class="lg:absolute lg:-translate-x-1/2 lg:inset-y-2 lg:left-1/2">
              <div class="flex-shrink-0">
                <Link to="/" title="" class="flex ">
                  <img class="w-auto h-12" src="/Logo.png" alt="" />
                </Link>
              </div>
            </div>

            {/* PHONE CART ICON  */}
            <button
            onClick={handleCart}
              type="button"
              class="flex items-center justify-center ml-auto  rounded-full w-9 h-9 lg:hidden"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
            </button>

            {/* phone navbar btn  */}
            <button
              type="button"
              onClick={handleNavbar}
              class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* cart and login in  icon */}
            <div class="hidden gap-3 lg:flex lg:items-center lg:space-x-5">
              <Link to="/login" title="" class="flex font-normal items-center ">
                Signin
              </Link>
              <button
                onClick={handleCart}
                title=""
                class="flex items-center justify-center w-10 h-10  rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* cart menu */}
      {cartIsOpen && (
        <CartComponent/>
      )}

      {/* phonw navbar menu  */}
      {navIsOpen && (
        <div class="py-4 w-2/3 absolute right-0 rounded bg-white z-20 ">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Menu
              </p>

              <button
              onClick={handleNavbar}
                type="button"
                class="inline-flex p-2 lg:hidden text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6">
              <div class="flex flex-col space-y-2">
                <Link
                  to={"/"}
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Home{" "}
                </Link>

                <Link
                  to={"/allProducts"}
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  All Products{" "}
                </Link>

                <Link
                  to={"/men"}
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Men{" "}
                </Link>

                <Link
                  to={"/women"}
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Women{" "}
                </Link>
              </div>

              <hr class="my-4 border-gray-200" />

              <div class="flex flex-col space-y-2">
                <Link
                  to={"/signup"}
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign up{" "}
                </Link>

                <Link
                  to={"/login"}
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign in{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
