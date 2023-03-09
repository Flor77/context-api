import React from "react";
import Home from "./Home";
import LoginForm from "./LoginForm";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const { user } = useUserContext();
  return <div>{user.isGuestUser ? <LoginForm /> : <Home />}</div>;
};

export default Auth;
