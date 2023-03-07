import React from "react";
import { useUserContext } from "../context/userContext";

const Home = () => {
  const { user, logOut } = useUserContext();
  return (
    <div className="ui container center">
      <div className="home-profile">
        <div className="ui message success">
          <h3>You are logged in as , {user.name}</h3>
          {!user.isGuestUser && (
            <button onClick={logOut} className="ui button blue">
              LogOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
