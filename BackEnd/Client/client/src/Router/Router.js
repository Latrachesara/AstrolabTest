import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import Home from "../Pages/HomePage/Home";
import ProductHome from "../Pages/HomePage/ProductHome";
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Signin} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/productHome" component={ProductHome} />
      </Switch>
    </div>
  );
}

export default Router;
