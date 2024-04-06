import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// import logo from "../assets/3-Lanze.png";
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  const { user } = useAuthContext();
  console.log("Auth context ", useAuthContext());
  return (
    <header>
      <div className="container">
        <Link className="logo" to="/">
          <h1>3-Lanze </h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span className="bca">{user.blockChainAddress}</span>
              {/* leave some space */}
              <span> </span>
              <span className="email-bca">{user.email}</span>
              <button className="btn-log" onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;