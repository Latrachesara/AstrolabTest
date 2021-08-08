import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = useSelector((state) => state.Auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.isLoggedIn === true ? (
          <Component {...props} />
        ) : Auth.isLoggedIn === false ? (
          <Redirect to="/login" />
        ) : Auth.isLoggedIn === undefined ? (
          <div />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;