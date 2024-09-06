import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import CartComponent from "../cart/cartComponent";


const NavbarComponent = () => {
  const [navIsOpen, setnavIsOpen] = useState(false);
  const [cartIsOpen, setcartIsOpen] = useState(false);
  const [isUserIconClicked, setisUserIconClicked] = useState(false);

  const [isLogin, setIsLogin] = useState(false); 

  const checkLoginStatus = async () => {
    try {
      // Check login status
      const Url = import.meta.env.VITE_BACKEND_URL + "/user/is-logged-in";
      const response = await fetch(Url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("token"),
        },
      });

      // Ensure response.ok before parsing JSON
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
        
      if (result.success) {
        setIsLogin(true);
      }
    } catch (error) {
      console.error('There was an error!', error);     
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);


  const handUserIconClicked = () => {
    setisUserIconClicked(!isUserIconClicked);
  };

  const handleNavbar = () => {
    setnavIsOpen(!navIsOpen);
  };

  const handleCart = () => {
    setcartIsOpen(!cartIsOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <nav className="absolute z-20 w-full">
      <div className="bg-gray-100 border-b fixed z-10 w-full border-gray-200">
        <div className="px-4 mx-auto lg:w-3/4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-16">
            {/* nev menus  */}
            <div className="hidden lg:flex lg:items-center lg:space-x-9">
              <Link
                to="/"
                title=""
                className="text-sm text-gray-900 hover:text-gray-500"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                to={"/allproducts"}
                title=""
                className="text-sm text-gray-900 hover:text-gray-500"
              >
                {" "}
                All Products{" "}
              </Link>

              <Link
                to={"/men"}
                title=""
                className="text-sm text-gray-900 hover:text-gray-500"
              >
                {" "}
                Men{" "}
              </Link>

              <Link
                to={"/women"}
                title=""
                className="text-sm text-gray-900 hover:text-gray-500"
              >
                {" "}
                Women{" "}
              </Link>
            </div>

            {/* site logo */}
            <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-2 lg:left-1/2">
              <div className="flex-shrink-0">
                <Link to="/" title="" className="flex ">
                  <img className="w-auto h-12" src="/Logo.png" alt="" />
                </Link>
              </div>
            </div>

            {/* PHONE CART ICON  */}
            <button
              onClick={handleCart}
              type="button"
              className="flex items-center justify-center ml-auto  rounded-full w-9 h-9 lg:hidden"
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

            {/* phone navbar btn*/}
            <button
              type="button"
              onClick={handleNavbar}
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* phone navbar menu  */}
            {navIsOpen && (
              <div className="py-4 w-2/3 absolute -right-6 top-0 rounded bg-white z-20 ">
                <div className=" mx-auto ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm px-5 font-semibold tracking-widest text-gray-400 uppercase">
                      Menu
                    </p>

                    <button
                      onClick={handleNavbar}
                      type="button"
                      className="inline-flex p-2 mr-6 lg:hidden text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flex flex-col ">
                    <Link
                      to={"/"}
                      title=""
                      className=" px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                    >
                      {" "}
                      Home{" "}
                    </Link>

                    <Link
                      to={"/allProducts"}
                      title=""
                      className=" px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                    >
                      {" "}
                      All Products{" "}
                    </Link>

                    <Link
                      to={"/men"}
                      title=""
                      className=" px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                    >
                      {" "}
                      Men{" "}
                    </Link>

                    <Link
                      to={"/women"}
                      title=""
                      className=" px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                    >
                      {" "}
                      Women{" "}
                    </Link>

                    <hr className="my-4 border-gray-200" />

                    {isLogin ? (
                      <button
                      onClick={handleLogout}
                      className=" px-5 py-3 w-full text-base font-medium text-left text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                    >Log Out
                    </button>
                    ) : (
                      <div className="flex flex-col">
                        <Link
                          to={"/signup"}
                          title=""
                          className=" px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                        >
                          {" "}
                          Sign up{" "}
                        </Link>

                        <Link
                          to={"/login"}
                          title=""
                          className=" px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:text-black"
                        >
                          {" "}
                          Sign in{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* cart and login in  icon */}
            <div className="hidden gap-1 lg:flex lg:items-center lg:space-x-5">
              {/* Cart btn and menu  */}
              <div>
                <button
                  onClick={handleCart}
                  title=""
                  className="flex items-center justify-center w-10 h-10  rounded-full"
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
                {/* cart menu */}
                {cartIsOpen && <CartComponent />}
              </div>

              {/* signup btn or user icon */}
              {isLogin ? (
                // user icon after login
                <div className="relative ml-3">
                  <div>
                    <button
                      onClick={handUserIconClicked}
                      className="relative flex rounded-full  text-sm  "
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* user menu after user icon clicked */}
                  {isUserIconClicked && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      {/* <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a> */}
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-200"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
                
              ) : (
                // Sign up link

                <Link
                  to="/login"
                  title=""
                  className=" mx-auto font-medium text-sm  px-7 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
                  >
                  Signin  
                </Link>

                
              )}
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
