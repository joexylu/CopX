import React from "react";
import HomepageContainer from "./homepage/homepage_container"
import SignupformContainer from "./sessions/singupform_container";
import LoginformContainer from "./sessions/loginform_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils"

const App = () => (
  <div>
    <Switch>
        <AuthRoute exact path="/signup" component={SignupformContainer}/>
        <AuthRoute exact path="/login" component={LoginformContainer}/>
        <Route path="/" component={HomepageContainer}/>
    </Switch>
    
  </div>
);

export default App;