import React from "react";
import "./../Style/Products.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Elementwish from "./../Components/Elementwish";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

function Products() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <center>
                <h2 id="transition-modal-title">Add Product</h2>
              </center>
              <form>
             <div><TextField
                id="outlined-basic"
                variant="outlined"
                label="Name"
                
              /><TextField
              id="outlined-basic"
              variant="outlined"
              label="Price"
             
            />
             <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Currency"
        >
         
          <MenuItem value={10}>TND</MenuItem>
          <MenuItem value={20}>USD</MenuItem>
          <MenuItem value={30}>EURO</MenuItem>
        </Select>
      </FormControl></div> 
      <TextareaAutosize style={{borderColor:"lightgray", marginTop:"2%"}} aria-label="minimum height" minRows={4}  placeholder="Description" />
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
                <Button variant="contained" color="primary" disableElevation>
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
            <a href="#home">
              <Elementwish />
            </a>
          </li>
          <li>
            <a href="#news">
              <Elementwish />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
