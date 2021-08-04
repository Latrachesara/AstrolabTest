import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import NotFound from "../Components/NoFound"
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default Router;
