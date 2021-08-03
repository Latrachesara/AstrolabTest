import React from "react";
import "./../Style/Navb.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
function Navb() {
  return (
    <div>
      <div className="navb">
        <ul>
          <li>
            <a href="/home"><FavoriteBorderIcon style={{marginTop:"1%"}}/>My Wishlist</a>
          </li>
          <li>
            <a href="/productHome"><DescriptionRoundedIcon style={{marginTop:"1%"}}/>My Products</a>
          </li>
          <li>
      <AccountCircleIcon style={{fontSize:"30px", marginLeft:"3000%", marginTop:"37%", color:"#3C327B" }}/>
          </li>
        </ul>
      </div></div>
  );
}

export default Navb;
