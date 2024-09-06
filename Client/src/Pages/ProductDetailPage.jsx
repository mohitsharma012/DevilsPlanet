import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../Components/Navbar/NavbarComponent";
import ProductShowcase from "../Components/ProductShowcaseComponent/ProductShowcase";
import Footer from "../Components/Footer/FooterComponent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [Product, setProduct] = useState({});
  const { productId } = useParams();
  const [isLogin, setisLogin] = useState(false);

  // Function to handle the size option change
  const handleOptionChange = (event) => {
    setSelectedSize(event.target.value);
  };
  // Function to fetch the product details by id
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/product/products/${productId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Function to check if the user is logged in
  const checkLoginStatus = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/user/is-logged-in",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setisLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Function to add the product to the cart
  const handleAddToCart = async (event) => {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    try {
      // If user is not logged in, show alert and stop execution
      if (!isLogin) {
        toast("Please login to add product to cart");
        return;
      }

      // Add product to cart
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/cart/add-to-cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            productId: Product._id,
            size: selectedSize,
            qty: 1,
          }),
        }
      );

      // Check for successful response
      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const data = await response.json();
      // Handle success response (e.g., show a success toast)
      toast("Product added to cart");
    } catch (error) {
      // Log error and show error message
      console.error("Error adding to cart:", error);
      toast("Error adding product to cart");
    }
  };

  // Fetch product details and check login status on component mount
  useEffect(() => {
    checkLoginStatus();
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer theme="dark" />
      <div className="bg-white pt-20 w-full">
        <div className="pt-6 flex flex-col mx-3  md:w-3/4  md:mx-auto gap-5 md:flex-row">
          {/* Image gallery */}
          <div className="mx-auto w-2/3 md:w-1/2 lg:w-1/3  ">
            <div className=" rounded-lg ">
              <img alt="img" src={Product.image} className="h-full  w-full " />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto w-full  md:w-1/2 md:mt-10">
            <h1 className="font-base font-mono font-medium tracking-tight text-gray-900 text-xl sm:text-2xl">
              {Product.name}
            </h1>

            {/* Options */}
            <div className="mt-4 flex flex-col gap-3 lg:row-span-3 ">
              {/* Reviews */}
              <div className="mt-0">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key="3.5"
                        aria-hidden="true"
                        className={classNames(
                          3.5 > rating ? "text-gray-900" : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all 512 reviews
                  </a>
                </div>
              </div>

              <p className="text-xl mt-3 font-normal font-sans">
                Rs. {Product.price}
              </p>

              <form className="mt-1" onSubmit={handleAddToCart}>
                {/* Sizes */}
                <div className="mt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-sm font-medium text-gray-900">
                      Size:
                    </h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="grid grid-cols-4 gap-4 lg:grid-cols-8">
                    {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                      <label
                        key={size}
                        className={`group relative flex cursor-pointer items-center justify-center rounded-full border px-0 py-3 md:px-5 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none sm:flex-1 ${
                          selectedSize === size
                            ? "bg-blue-500 text-white"
                            : "bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size-choice"
                          value={size}
                          className="sr-only"
                          checked={selectedSize === size}
                          onChange={handleOptionChange}
                        />
                        <span>{size}</span>
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="font-sans font-base font-medium text-gray-600 my-3">
                  Description
                </h3>

                <div className="space-y-6">
                  <p className="text-sm font-sans text-gray-500">
                    {Product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductShowcase showcaseName="Bestsellers" />

      <Footer />
    </>
  );
}
