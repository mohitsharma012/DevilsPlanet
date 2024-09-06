import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductShowcase = ({showcaseName}) => {

  const [showcasesItems, setshowcasesItems] = useState([]);

  // Function to fetch the showcases
  const fetchShowcases = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/product/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const data = await response.json();
  
      // Filter the items based on showcaseName
      const listOfShowcaseItems = data.filter((item) => item.showcases.includes(showcaseName));
  
      // Set the filtered items to state
      setshowcasesItems(listOfShowcaseItems);
  
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    fetchShowcases();
  }, []); 


  return (
    <section class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          {showcaseName}
        </h2>

        <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {/* Products */}
          {showcasesItems.map((item) => (         
            <Link to= {`/product/${item._id}`} class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item.image}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {item.name}
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">Rs. {item.price}</p>
              </div>
            </Link>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
