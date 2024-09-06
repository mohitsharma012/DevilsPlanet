import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Navbar from "../Components/Navbar/NavbarComponent";
import Footer from "../Components/Footer/FooterComponent";


const SignUp = () => {
  // State for storing form data
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Updates state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    try {
      const Url = import.meta.env.VITE_BACKEND_URL + "/user/register";
      const response = await fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Sends form data as JSON
      });
      const result = await response.json();
      toast(result.message); 
      
      //store token in local storage
      localStorage.setItem("token", result.token);

      if (result.success) {
        setTimeout(() => {
          window.location.href = "/"; // s
        }, 1000);
      }
    } catch (error) {
      console.log("error", error); // Logs error if request fails
    }
  };

  return (
    <>
    <Navbar/>
      <ToastContainer theme="dark" />
    <section class="py-10 bg-gray-50 w-full sm:py-16 pt-28 lg:py-24 flex  min-h-[90vh]">
      <div class="px-4 mx-auto  md:w-2/3 sm:px-6 lg:px-8 vertical-align align-center">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl ">
            Create free account
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            You can create a free Celebration account in 2 minutes
          </p>
        </div>

        <div class="relative max-w-md mx-auto mt-4 ">
          <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
              <form method="POST">
                <div class="space-y-5">
                  <div>
                  <label  class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>

                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      

                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        class="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                  <label  class="block text-sm font-medium leading-6 text-gray-900">Email</label>

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
                  <label  class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="password"
                        name="password"
                        id=""
                        onChange={handleChange}
                        placeholder="Enter your password"
                        class="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                 

                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      class="inline-flex items-center justify-center w-full px-4 py-1 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Create account
                    </button>
                  </div>

                  <div class="text-center">
                    <p class="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link
                        to={"/login"}
                        title=""
                        class="font-medium text-red-600 transition-all duration-200 hover:text-red-500 hover:underline"
                        >
                        Login here
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
    <Footer/>
    </>
  );
};

export default SignUp;
