import React from "react";
import { useUserContext } from "../context/userContext";

const Home = () => {
  const { user } = useUserContext();
  return (
    <div className="ui container center">
      <div className="home-profile">
        <div className="ui message success">
          <h3>You are now logged as , {user.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
