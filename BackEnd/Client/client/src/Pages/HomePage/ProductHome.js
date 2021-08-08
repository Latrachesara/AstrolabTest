import React from "react";
import Navb from "../../Components/Navb";
import "./../../Style/Home.css";
import Products from "../../Components/Products";
import ProductDetails from "../../Components/ProductDetails";

function ProductHome() {
  return (
    <div>
      <Navb />
      <div class="wrapper">
        <div>
          <Products />
        </div>
        <div>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}
export default ProductHome;
