import React from 'react'
import './../Style/Wishlist.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Elementwish from "./../Components/Elementwish"
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid blue',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width:'30%',
  },
}));

  
function Whishlist() {
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
               <button  className="btn" onClick={handleOpen}><AddIcon style={{color:"#3C327B", paddingRight:"5%"}}/>wishList</button> 
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
            <center><h2 id="transition-modal-title">Add WishList</h2></center>
            <TextField id="outlined-basic" variant="outlined" label="wishlist name" style={{margin:"15%"}} />
            <div className="btns"> <Button variant="contained" color="primary" disableElevation onClick={handleClose}>
      Cancel
    </Button> <Button variant="contained" color="primary" disableElevation >
      Done
    </Button></div>
          </div>
        </Fade>
      </Modal></center>
      <div>
            <ul>
  <li><a href="#home"><Elementwish /></a></li>
  <li><a href="#news"><Elementwish /></a></li>

</ul></div>
            
        </div>
    )
}

export default Whishlist
