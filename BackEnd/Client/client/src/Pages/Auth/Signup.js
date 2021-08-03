import React, { useState } from "react";
import './../../Style/SignUp.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Boutton from '../../Components/Boutton';
import { useDispatch, useSelector } from "react-redux";
import { register } from "./../../Redux/Actions/AuthActions";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Signup() {
  const inistialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
   
  };
  const [data, setData] = useState(inistialData);
  const HandleChange = (value, name) => {
    setData({ ...data, [name]: value });
  };

  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state);
  const HandleSubmit = () => {
    dispatch(register(data));
  };
    const classes = useStyles();
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    return (
      <div>
         <Avatar className="avatarAuth" style={{color:"white", backgroundColor:"#3D3571"}} >
        <EnhancedEncryptionIcon/>
      </Avatar>
        <div  className="body">
            <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First Name" onChange={(e) => {HandleChange(e.target.value, e.target.name)}} />
      <TextField id="standard-basic" label="Last Name" onChange={(e) => {HandleChange(e.target.value, e.target.name)}}/>
      <TextField id="standard-basic" style={{width:"80%", margin:"2%"}} label="Email" placeholder="example@example" onChange={(e) => {HandleChange(e.target.value, e.target.name)}}/>
      <div><Input style={{width:"180%", margin:"2%"}}
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(e) => {HandleChange(e.target.value, e.target.name)}}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  placeholder="Password"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          /></div>
           <div><Input style={{width:"180%", margin:"2%"}}
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  placeholder="Password"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          /></div>
          <div>
            <Boutton    onClick={() => {
                      HandleSubmit();
                    }}/>
            <a className="account" href="/login">i already have an account</a>
          </div>
   
    </form>
         
        </div></div>
    )
}

export default Signup
