import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "../Pages/Auth/Signup";
import Signin from "../Pages/Auth/Signin";
function SafeRouter() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/login"]} component={Signin} />
        <Route exact path="/register" component={Signup} />
      </Switch>
    </div>
  );
}

export default SafeRouter;
