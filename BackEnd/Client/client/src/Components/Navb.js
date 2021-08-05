import React from "react";
import "./../Style/Navb.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import IconButton from '@material-ui/core/IconButton';
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/Actions/AuthActions";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useHistory } from "react-router-dom";

function Navb() {
  const history = useHistory();
  const dispatch = useDispatch();
  const HundleSubmitLogout = () => {
    dispatch(Logout());
  };
  return (
    <div>
      <div className="navb">
        <ul>
          <li>
            <a href="/">
              <FavoriteBorderIcon style={{ marginTop: "1%" }} />
              My Wishlist
            </a>
          </li>
          <li>
            <a href="/productHome">
              <DescriptionRoundedIcon style={{ marginTop: "1%" }} />
              My Products
            </a>
          </li>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
              
                <li>
                  <AccountCircleIcon
                    variant="contained"
                    {...bindTrigger(popupState)}
                    style={{
                      fontSize: "30px",
                      marginLeft: "2800%",
                      marginTop: "37%",
                      color: "gold",
                    }}
                  />
                </li>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  style={{ width: "275%" }}
                >
                  <Box p={4}>
                    <div>
                      {" "}
                      <Typography>
                        <h3>full name</h3>
                      </Typography>
                      <button
                        onClick={() => {
                          console.log("click");
                          HundleSubmitLogout();
                        }}
                      >
                        <ExitToAppIcon /> LOGOUT
                      </button>
                    </div>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
          <li><IconButton style={{color:"gold",   marginLeft: "1200%",}}>
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton></li>
        </ul>
      </div>
    </div>
  );
}

export default Navb;
