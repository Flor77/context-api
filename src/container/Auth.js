import React from "react";
import Home from "./Home";
import LoginForm from "./LoginForm";

const Auth = () => {
  const user = "false";
  return <>{user ? <Home /> : <LoginForm />}</>;
};

export default Auth;
