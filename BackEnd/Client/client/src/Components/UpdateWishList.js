import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { updateWishList } from "./../Redux/Actions/WishlistActions";
import SnackBar from "./SnackBar/SnackBar";
import SnackBarError from "./SnackBar/SnackBarError";
import "./../Style/Wishlist.css";

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
function UpdateWishList() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { Wishlist, alert } = useSelector((state) => state);
  const [UnchgangedName, setUnchange] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setId(Wishlist.SelectedWishList);
    let name = "";
    Wishlist.Wishlist.filter((wishlist) => {
      return wishlist._id === Wishlist.SelectedWishList
        ? ((name = wishlist.name), setUnchange(wishlist.name))
        : "";
    });
    setName(name);
  }, [Wishlist.Wishlist, Wishlist.SelectedWishList]);
  const HandleChange = () => {
    dispatch(updateWishList(name, id));
  };
  return (
    <div>
      <center>
        <IconButton onClick={handleOpen}>
          <EditIcon fontSize="large" style={{ color: "green" }} />
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
              <center>
                <h2 id="transition-modal-title">Update WishList</h2>
              </center>
              <div>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="wishlist name"
                  style={{ margin: "15%" }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
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
                  variant="contained"
                  color="primary"
                  disableElevation
                  disabled={name === UnchgangedName || name === ""}
                  onClick={() => {
                    HandleChange();
                  }}
                >
                  updated
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
        {alert.type === "UPDATE_WISHLIST" && !alert.error ? (
          <SnackBar open={true} message={alert.msg} />
        ) : (
          <div />
        )}
        {alert.type === "UPDATE_WISHLIST" && alert.error === true ? (
          <SnackBarError open={true} message={alert.msg} />
        ) : (
          <div />
        )}
      </center>
    </div>
  );
}

export default UpdateWishList;