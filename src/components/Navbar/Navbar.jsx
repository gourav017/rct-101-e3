import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogin=()=>{
    if(isAuth){
      logout();
    }
    else{
      navigate("/")
    }
  }
  
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">login</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handlelogin} >{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
