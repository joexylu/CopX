import React from "react";
import HomepageContainer from "./homepage/homepage_container"
import SignupformContainer from "./sessions/singupform_container";
import LoginformContainer from "./sessions/loginform_container";
import SneakerIndexContainer from "./sneaker_index/sneaker_index_container"
import SneakerShowContainer from "./sneaker_index/sneaker_show_container"
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils"

const App = () => (
  <Switch>
      <AuthRoute exact path="/signup" component={SignupformContainer}/>
      <AuthRoute exact path="/login" component={LoginformContainer}/>
      <Route exact path="/sneakers/:sneakerId" component={SneakerShowContainer} />
      <Route path="/sneakers" component={SneakerIndexContainer}/>
      <Route path="/" component={HomepageContainer}/>
  </Switch>
    
);

export default App;