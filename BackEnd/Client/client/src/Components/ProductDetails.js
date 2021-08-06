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
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid blue",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width: "50%",
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ProductDetails() {
  const [wishlist, setWishlist] = React.useState("");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange1 = (event) => {
    setWishlist(event.target.value);
  };

  const [status, setStatus] = React.useState("");

  const handleChange2 = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="wrapperProduct">
      <div className="images">
        <img src="/product.png" />
        <div className="select">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={status}
              onChange={handleChange2}
              label="Status"
              style={{ marginRight: "30%" }}
            >
              <MenuItem value={10}>To Buy</MenuItem>
              <MenuItem value={20}>Bought</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Wishlist
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined1"
              value={wishlist}
              onChange={handleChange1}
              label="Wishlist"
            >
              <MenuItem value={10}>wishlist 1</MenuItem>
              <MenuItem value={20}>wishlist 2</MenuItem>
              <MenuItem value={30}>wishlist 3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <div className="iconBtn">
          <IconButton>
            <EditIcon fontSize="large" style={{ color: "green" }} />
          </IconButton>
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
              timeout: 500,
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
                  <Button variant="contained" color="primary" disableElevation>
                    Delete
                  </Button>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
        <h1>Product 1 </h1>
        <p>desciption desciption desciption desciption </p>
        <h3>Price :</h3> <p>300$</p>
      </div>
    </div>
  );
}

export default ProductDetails;
