import React, { useEffect, useState } from "react";
import "./../../Style/Home.css";
import Wishlist from "../../Components/Wishlist";
import Productlist from "./../../Components/Productlist";
import Navb from "../../Components/Navb";
import { makeStyles } from "@material-ui/core/styles";
import NavWishlist from "../../Components/NavWishlist";
import InfoIcon from "@material-ui/icons/Info";
import "./../../Style/Navb.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteWishList,
  GettAllWishList
} from "./../../Redux/Actions/WishlistActions";
import SnackBar from "../../Components/SnackBar/SnackBar";
import SnackBarError from "../../Components/SnackBar/SnackBarError";
import UpdateWishList from "../../Components/UpdateWishList";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid blue",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width: "50%"
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GettAllWishList());
  }, [dispatch]);
  const wishList = useSelector((state) => state.Wishlist);
  const alert = useSelector((state) => state.alert);
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    console.log(wishList);
  }, [wishList]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ReturnWishListName = (id) => {
    let Name = "";
    wishList.Wishlist.filter((wishlist) => {
      return wishlist._id === id ? (Name = wishlist.name) : "";
    });
    return Name;
  };
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
              <h2>{ReturnWishListName(wishList.SelectedWishList)}</h2>
            </div>
            <div className="buttons">
              <center>
                <div className="iconBtn">
                  <UpdateWishList />
                  <IconButton onClick={handleOpen}>
                    <DeleteIcon fontSize="large" style={{ color: "red" }} />
                  </IconButton>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <h2 id="transition-modal-title">Delete Wishlist</h2>
                        <center>
                          <InfoIcon
                            fontSize="large"
                            style={{ color: "gray" }}
                          />
                          <h3 style={{ color: "gray" }}>
                            Are u sure to delete this Wishlist ?
                          </h3>
                        </center>
                        <div className="btns">
                          {" "}
                          <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={handleClose}
                          >
                            Cancel
                          </Button>{" "}
                          <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => {
                              dispatch(
                                DeleteWishList(wishList.SelectedWishList)
                              );
                              handleClose();
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </Fade>
                  </Modal>
                </div>
              </center>
            </div>
          </div>
          <div className="navWishlist">
            <ul>
              <li
                onClick={() => {
                  setStatusFilter("TO BUY");
                }}
              >
                <a>
                  <PlaylistAddIcon /> To Buy
                </a>
              </li>
              <li
                onClick={() => {
                  setStatusFilter("Bought");
                }}
              >
                <a>
                  <PlaylistAddCheckIcon /> Bought
                </a>
              </li>
              <div className="icons">
                <AppsIcon />
                <ReorderIcon />
              </div>
            </ul>
          </div>
          <Productlist filterStatus={statusFilter} />
        </div>
      </div>
      {alert.type === "DELETED_WISHLIST" && !alert.error ? (
        <SnackBar open={true} message={alert.msg} />
      ) : (
        <div />
      )}
      {alert.type === "DELETED_WISHLIST" && alert.error === true ? (
        <SnackBarError open={true} message={alert.msg} />
      ) : (
        <div />
      )}
    </div>
  );
}
export default Home;