import React from "react";
import Navbar from "../Components/Navbar/NavbarComponent";
import IndexMain from "../Components/Index/indexMainComponent";
import Footer from "../Components/Footer/FooterComponent";
import ProductShowcase from "../Components/ProductShowcaseComponent/ProductShowcase";

const indexPage = () => {
  return (
    <>
      <Navbar />
      <IndexMain />
      <ProductShowcase showcaseName="Bestsellers" />

      <Footer/>
  </>
  );
};

export default indexPage;
