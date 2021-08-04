import React, { useState } from "react";
import "./../../Style/SignUp.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import Avatar from "@material-ui/core/Avatar";
import Boutton from "../../Components/Boutton";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./../../Redux/Actions/AuthActions";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SnackBar from "../../Components/SnackBar/SnackBar";
import SnackBarError from "../../Components/SnackBar/SnackBarError";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
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
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Avatar
        className="avatarAuth"
        style={{ color: "white", backgroundColor: "#3D3571" }}
      >
        <EnhancedEncryptionIcon />
      </Avatar>
      <div className="body">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="First Name"
            name="firstName"
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            name="lastName"
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            style={{ width: "80%", margin: "2%" }}
            label="Email"
            placeholder="example@example"
            name="email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <div></div>
          <div>
            <Input
              style={{ width: "180%", margin: "2%" }}
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
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
            />
          </div>
          <div>
            <Boutton
              Send={() => {
                HandleSubmit();
              }}
              onClick={() => {
                HandleSubmit();
              }}
            />
            <a className="account" href="/login">
              i already have an account
            </a>
          </div>
        </form>
      </div>
      {alert.type === "REGISTER" && !alert.error ? (
        <SnackBar open={true} message={alert.msg} />
      ) : (
        <div />
      )}
      {alert.type === "REGISTER" && alert.error === true ? (
        <SnackBarError open={true} message={alert.msg} />
      ) : (
        <div />
      )}
    </div>
  );
}

export default Signup;