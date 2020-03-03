import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupformContainer from "./sessions/singupform_container";
import LoginformContainer from "./sessions/loginform_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <GreetingContainer />
    <Route path="/signup" component={SignupformContainer}/>
    <Route path="/login" component={LoginformContainer}/>
  </div>
);

export default App;