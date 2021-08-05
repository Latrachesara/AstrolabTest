import React from "react";
import "./../Style/ProductDetails.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
  const classes = useStyles();
  const [wishlist, setWishlist] = React.useState("");

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
      <div className="iconBtn"><IconButton >
        <EditIcon fontSize="large" style={{color:"green"}}/>
      </IconButton>
          <IconButton >
        <DeleteIcon fontSize="large" style={{color:"red"}}/>
      </IconButton>
      
          </div>
        <h1>Product 1 </h1>
        <p>desciption desciption desciption desciption </p>
        <h3>Price :</h3> <p>300$</p>
    
      </div>
    </div>
  );
}

export default ProductDetails;
