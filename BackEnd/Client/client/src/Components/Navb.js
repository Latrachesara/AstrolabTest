import React from "react";
import "./../Style/Navb.css";
function Navb() {
  return (
    <div>
      <div className="navb">
        <ul>
          <li>
            <a href="/home">My Wishlist</a>
          </li>
          <li>
            <a href="">My Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navb;
