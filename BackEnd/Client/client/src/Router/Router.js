import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Signin} />
        <Route exact path="/register" component={Signup} />
      </Switch>
    </div>
  );
}

export default Router;
