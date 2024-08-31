import React, { useState, useEffect } from "react";

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem("token");

    // If token is not present, redirect to the login page
    if (!token) {
      window.location.href = "/login";
      return;
    }

    // Retrieve data using token
    fetch(import.meta.env.VITE_BACKEND_URL + "/dashboard/get-data", {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.userData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // If user data is not loaded yet, show a loading message
  if (!user) {
    return <h1>Loading...</h1>;
  }

  // Logout function
  const logoutHandle = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          

          <h2 class="mt-8 text-3xl font-bold leading-tight text-black lg:mt-28 sm:text-4xl lg:text-5xl">
            Hi {user.name},
          </h2>
          <p class="max-w-xl mx-auto mt-6 text-xl text-gray-600 ">
            Welcome to the Dashboard 
          </p>

          <a
            onClick={logoutHandle}
            title=""
            class="inline-flex items-center justify-center px-7 py-3 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md  hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            <svg
              class="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            LogOut
          </a>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
