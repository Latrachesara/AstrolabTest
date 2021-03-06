import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import NotFound from "../Components/NoFound";
import ProductHome from "../Pages/HomePage/ProductHome";
import LoadingComponent from "../Components/LoadingComponent";
import PrivateRoute from "./../Tools/PrivateRoute";
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/productHome" component={ProductHome} />
        <Route path="/loading" component={LoadingComponent} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default Router;