import React from "react";
import "./../../Style/Home.css";
import Wishlist from "../../Components/Wishlist";
import Productlist from "./../../Components/Productlist";
import Navb from "../../Components/Navb";
import './../../Style/Navb.css'
function Home() {
  return (
    <div>
      <Navb />
      <div class="wrapper">
        <div>
          <Wishlist />
        </div>
        <div>
            <p>h</p>
          <Productlist />
        </div>
      </div>
    </div>
  );
}

export default Home;
