import React from "react";
import "./../Style/NavWishlist.css";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
function NavWishlist() {
  return (
    <div className="navWishlist">
      <ul>
        <li>
          <a href="#">
            <PlaylistAddIcon /> To Buy
          </a>
        </li>
        <li>
          <a href="#">
            <PlaylistAddCheckIcon /> Bought
          </a>
        </li>
        <div className="icons">
          <AppsIcon />
          <ReorderIcon />
        </div>
      </ul>
    </div>
  );
}

export default NavWishlist;