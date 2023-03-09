import { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { useUserContext } from "../context/userContext";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState();
  const { logIn, logOut } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserInfo(data);
    logIn(data.username);
    console.log(data);
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <p>{errors.username?.message}</p>
          <div className="field">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "This is not a valid email",
                },
              })}
            />
          </div>
          <p>{errors.email?.message}</p>
          <div className="field">
            <label>Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters",
                },
              })}
            />
          </div>
          <p>{errors.password?.message}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
