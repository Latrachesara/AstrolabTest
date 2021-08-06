import React, { useEffect, useState } from "react";
import "./../Style/Wishlist.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Elementwish from "./../Components/Elementwish";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  GettAllWishList,
  CreateWishlist,
} from "./../Redux/Actions/WishlistActions";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid gray",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width: "30%",
  },
}));

function Whishlist() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const Wishlist = useSelector((state) => state.Wishlist);
  useEffect(() => {
    dispatch(GettAllWishList());
  }, [dispatch]);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const CreateOneList = () => {
    dispatch(CreateWishlist({ name }));
    setName("");
  };
  return (
    <div className="box">
      <center>
        <button className="btn" onClick={handleOpen}>
          <AddIcon style={{ color: "gray", paddingRight: "5%" }} />
          Add wishList
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <center>
                <h2 id="transition-modal-title">Add WishList</h2>
              </center>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="wishlist name"
                style={{ margin: "15%" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
                  type="button"
                  disabled={name === ""}
                  onClick={() => {
                  
                    CreateOneList();
                  }}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Done
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </center>
      <div>
        <ul>
          <li>
            {Wishlist?.Wishlist?.map((Wishlist) => {
              return <Elementwish name={Wishlist.name} id={Wishlist._id} />;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Whishlist;