import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit()}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input {...register("email", { required: "Email is required" })} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
