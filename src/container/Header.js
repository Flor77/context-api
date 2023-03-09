import { useUserContext } from "../context/userContext";

const Header = () => {
  const { user, logOut } = useUserContext();
  return (
    <div className="ui fixed menu">
      <div className="ui center">
        <h2>ReactContextApi</h2>
        <div className="profile">
          <h3>Welcome, {user.name}</h3>
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

export default Header;
