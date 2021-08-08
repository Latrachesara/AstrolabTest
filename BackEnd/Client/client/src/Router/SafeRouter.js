import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "../Pages/Auth/Signup";
import Signin from "../Pages/Auth/Signin";
import NotFound from "../Components/NoFound";

function SafeRouter() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/login"]} component={Signin} />
        <Route exact path="/register" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default SafeRouter;