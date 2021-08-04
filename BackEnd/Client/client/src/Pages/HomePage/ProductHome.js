import React from "react";
import Navb from "../../Components/Navb";
import "./../../Style/Home.css";
import Products from "../../Components/Products";

function ProductHome() {
  return (
    <div>
      <Navb />
      <div class="wrapper">
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
