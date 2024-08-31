import React from "react";
import Navbar from "../Components/Navbar/NavbarComponent";
import IndexMain from "../Components/Index/indexMainComponent";
import IndexBestSellerComponents from "../Components/Index/IndexBestSellerComponents";
import Footer from "../Components/Footer/FooterComponent";

const indexPage = () => {
  return (
    <>
      <Navbar />
      <IndexMain />
      <IndexBestSellerComponents/>
      <Footer/>
  </>
  );
};

export default indexPage;
