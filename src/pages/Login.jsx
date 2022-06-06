import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

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
    <div>
      <input data-cy="login-email" placeholder="email" />
      <input data-cy="login-password" placeholder="password" />
      <button data-cy="login-submit" onClick={handlelogin}>login</button>
    </div>
  );
};

export default Login;
