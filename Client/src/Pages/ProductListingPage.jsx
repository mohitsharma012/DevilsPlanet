import React, { useState, useEffect } from "react";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import Footer from "../Components/Footer/FooterComponent";
import { Link } from "react-router-dom";

const DifferentProductsPage = (props) => {
  const { PageHeading, category } = props;
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let link = `/product/category/${category}`;
        if (category === "ALL") {
          link = `/product/products`;
        }
        console.log(import.meta.env.VITE_BACKEND_URL + link);
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + link, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <NavbarComponent />

      <div class="bg-white min-h-[90vh]">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            {PageHeading}
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/product/${product._id}`} class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={product.image} alt="Image" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p class="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DifferentProductsPage;
