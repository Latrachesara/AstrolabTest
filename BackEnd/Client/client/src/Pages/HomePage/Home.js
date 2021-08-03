import React from "react";
import "./../../Style/Home.css";
import Wishlist from "../../Components/Wishlist";
import Productlist from "./../../Components/Productlist";
import Navb from "../../Components/Navb";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./../../Style/Navb.css";
function Home() {
  return (
    <div>
      <Navb />
      <div class="wrapper">
        <div>
          <Wishlist />
        </div>
        <div>
          <div class="wrapper1">
            <div>
              <h2>Wishlist 1</h2>
            </div>
            <div className="buttons">
                <center>
                <button style={{color:"green"}}><EditIcon />   Edit</button>
                <button style={{color:"red"}}><DeleteOutlineIcon />   delete</button></center>
          </div></div>

          <Productlist />
        </div>
      </div>
    </div>
  );
}

export default Home;
