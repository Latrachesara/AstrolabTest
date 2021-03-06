import React, { useState, useEffect } from "react";
import "./../Style/Products.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Elementwish from "./../Components/Elementwish";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { GettAllWishList } from "./../Redux/Actions/WishlistActions";
import {
  CreateProduct,
  GetProductById,
  getAllProduct,
  DeleteProduct
} from "../Redux/Actions/ProductActions";
import SnackBar from "./SnackBar/SnackBar";
import SnackBarError from "./SnackBar/SnackBarError";
import ProductUpdate from "./ProductUpdate";
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

function Products() {
  const handleChange1 = (event) => {
    setWishlist(event.target.value);
  };

  const Disabled = () => {
    return (
      currency === "" ||
      wishlist === "" ||
      status === "" ||
      description === "" ||
      name === "" ||
      Price === ""
    );
  };
  const [currency, setCurrency] = useState("");
  const [wishlist, setWishlist] = useState("");
  const [status, setStatus] = useState("");
  const [description, setdescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const { Product } = useSelector((state) => state);
  const Wishlist = useSelector((state) => state.Wishlist);
  const alert = useSelector((state) => state.alert);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GettAllWishList());
  }, [dispatch]);
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const handleClose = () => {
    setOpen(false);
  };
  const [image, setImage] = useState(null);
  const HandleCreation = () => {
    var formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("currency", currency);
    formData.append("wishlist", wishlist);
    formData.append("status", status);
    formData.append("description", description);
    formData.append("Price", Price);
    dispatch(CreateProduct(formData));
    setWishlist("");
    setStatus("");
    setCurrency("");
    setPrice();
    setdescription("");
    setName("");
  };

  return (
    <div className="box">
      <center>
        <button className="btn" onClick={handleOpen}>
          <AddIcon style={{ color: "#3C327B", paddingRight: "5%" }} />
          Add Product
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
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <center>
                <h2 id="transition-modal-title">Add Product</h2>
              </center>
              <form>
                <div>
                  <div className="foto">
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </div>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Name"
                    style={{ paddingRight: "1%" }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Price"
                    style={{ paddingRight: "1%" }}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={Price}
                  />
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Currency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => {
                        setCurrency(e.target.value);
                      }}
                      value={currency}
                      label="Currency"
                    >
                      <MenuItem value="TND">TND</MenuItem>
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="EURO">EURO</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={2}
                    placeholder="Description"
                    variant="outlined"
                    style={{ width: "95%", marginTop: "2%" }}
                    onChange={(e) => {
                      setdescription(e.target.value);
                    }}
                    value={description}
                  />
                </div>
                <div className="selects">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                      label="Status"
                      style={{ marginRight: "30%" }}
                    >
                      <MenuItem value="TO BUY">To Buy</MenuItem>
                      <MenuItem value="Bought">Bought</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Wishlist
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined1"
                      onChange={(e) => {
                        setWishlist(e.target.value);
                      }}
                      label="Wishlist"
                    >
                      {Wishlist?.Wishlist?.map((Wishlist) => {
                        return (
                          <MenuItem value={Wishlist._id}>
                            {Wishlist.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </form>
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
                  onClick={() => {
                    HandleCreation();
                  }}
                  variant="contained"
                  color="primary"
                  disableElevation
                  disabled={Disabled()}
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
          {Product.Products.map((Product) => {
            return (
              <li>
                <div
                  onClick={() => {
                    dispatch(GetProductById(Product._id));
                  }}
                >
                  <Elementwish name={Product.name} id={Product._id} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {alert.type === "CREATE_PRODUCT" && !alert.error ? (
        <SnackBar open={true} message={alert.msg} />
      ) : (
        <div />
      )}
      {alert.type === "CREATE_PRODUCT" && alert.error === true ? (
        <SnackBarError open={true} message={alert.msg} />
      ) : (
        <div />
      )}
    </div>
  );
}

export default Products;