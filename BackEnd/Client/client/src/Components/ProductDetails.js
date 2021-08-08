import React from "react";
import "./../Style/ProductDetails.css";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";
import { FilledInput, TextField, Typography } from "@material-ui/core";
import ProductUpdate from "./ProductUpdate";
import { useDispatch } from "react-redux";
import { DeleteProduct } from "../Redux/Actions/ProductActions";
import Alert from '@material-ui/lab/Alert';
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
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
   } },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function ProductDetails() {
  const PATH = process.env.REACT_APP_IMAGES_PATH;
  const Product = useSelector((state) => state.Product);
  const Wishlist = useSelector((state) => state.Wishlist);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const GetWishListName = (id) => {
    return Wishlist.Wishlist.map((wishlist) => {
      return wishlist._id === id ? wishlist.name : "";
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [status, setStatus] = React.useState("");

  const handleChange2 = (event) => {
    setStatus(event.target.value);
  };
  const dispatch = useDispatch();
  const HandleDelete = () => {
    dispatch(DeleteProduct(Product.SelectedOne._id));
  };
  return (
    <div>
      {Product.SelectedOne && (
        <div className="wrapperProduct">
          <div className="images">
            <img
              src={
                Product.SelectedOne.image
                  ? `${PATH}${Product.SelectedOne.image}`
                  : "/product.png"
              }
            />
            <div className="select">
              <TextField
                id="outlined-basic"
                variant="outlined"
                disabled
                value={Product.SelectedOne.status}
              ></TextField>

              <TextField
                id="filled-disabled"
                variant="outlined"
                disabled
                value={GetWishListName(Product.SelectedOne.wishlist)}
              ></TextField>
            </div>
          </div>
          <div>
            <div className="iconBtn">
              <ProductUpdate />
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
                    <h2 id="transition-modal-title">Delete Product</h2>
                    <center>
                      <InfoIcon fontSize="large" style={{ color: "gray" }} />
                      <h3 style={{ color: "gray" }}>
                        Are u sure to delete this Product ?
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
                          HandleDelete();
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Fade>
              </Modal>
            </div>
            <h1>{Product.SelectedOne.name}</h1>
            <p>{Product.SelectedOne.description}</p>
            <h3>Price :</h3>{" "}
            <p>
              {" "}
              {Product.SelectedOne.Price} {Product.SelectedOne.currency}{" "}
            </p>
          </div>
        </div>
      )}
      {!Product.SelectedOne && <div style={{margin:"10%"}}><Alert severity="warning">Your Product List is empty</Alert></div>}
    </div>
  );
}

export default ProductDetails;