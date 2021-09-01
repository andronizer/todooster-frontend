import React from "react";
import Dashboard from "../dashboard/dashboard";
import Signup from "../signup/signup";
import LoginForm from "../loginForm";
import { Redirect, Route } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <div>
      <Route exact path={"/login"} render={() => <LoginForm />} />
      <Route path={"/main"} render={() => <Dashboard />} />
      <Route path={"/signup"} render={() => <Signup />} />
      <Redirect to={"/main"} from={"/"} />
    </div>
  );
};

export default App;
