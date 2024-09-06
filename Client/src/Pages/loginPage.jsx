import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Components/Navbar/NavbarComponent";
import Footer from "../Components/Footer/FooterComponent";

const loginPage = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  // Function to handle the input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Url = import.meta.env.VITE_BACKEND_URL + "/user/login";
      const response = await fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      toast(result.message);

      //store token in local storage
      localStorage.setItem("token", result.token);

      // redirect to Index
      if (result.success) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer theme="dark" />
      <section class="py-10 pt-28 bg-gray-50 w-full flex sm:py-16 lg:py-24 min-h-[90vh]">
        <div class="px-4 m-auto align-middle w-full md:w-2/3  sm:px-6 vertical-center lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-xl font-bold leading-tight text-black ">
              Sign in to your account
            </h2>
          </div>

          <div class="relative max-w-md mx-auto mt-4">
            <div class="overflow-hidden ">
              <div class="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit} method="POST">
                  <div class="space-y-5">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>

                      <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="Enter email to get started"
                          class="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between">
                        <label class="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                      </div>
                      <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          id=""
                          placeholder="Enter your password"
                          class="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-1 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Log in
                      </button>
                    </div>

                    <div class="text-center">
                      <p class="text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <Link
                          to={"/signup"}
                          title=""
                          class="font-medium text-red-600 transition-all duration-200 hover:text-red-500 hover:underline"
                        >
                          Create a free account
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default loginPage;
