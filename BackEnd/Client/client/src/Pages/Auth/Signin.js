import React, { useState } from "react";
import "./../../Style/SignUp.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Boutton from "../../Components/Boutton";
import SnackBar from "../../Components/SnackBar/SnackBar";
import SnackBarError from "../../Components/SnackBar/SnackBarError";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./../../Redux/Actions/AuthActions";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Signin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state);
  const HundleSubmitLogin = () => {
    dispatch(Login({ email, password }, history));
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
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Avatar
        className="avatarAuth"
        style={{ color: "white", backgroundColor: "#3D3571" }}
      >
        <LockOpenIcon />
      </Avatar>
      <div className="body">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            style={{ width: "80%", margin: "2%" }}
            label="Email"
            placeholder="example@example"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <div>
            <Input
              style={{ width: "180%", margin: "2%" }}
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
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
                HundleSubmitLogin();
              }}
              onClick={() => {
                HundleSubmitLogin();
              }}
            />
            <a className="account" href="/register">
              i already have an account{" "}
            </a>
          </div>
        </form>
      </div>
      {alert.type === "LOGIN" && !alert.error ? (
        <SnackBar open={true} message={alert.msg} />
      ) : (
        <div />
      )}
      {alert.type === "LOGIN" && alert.error === true ? (
        <SnackBarError open={true} message={alert.msg} />
      ) : (
        <div />
      )}
    </div>
  );
}

export default Signin;