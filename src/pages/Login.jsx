import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpWithGoogle } from "../auth/firebase";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);

    console.log(email, password);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  return (
    <div className="bady">
      <div className="background" />
      <div className="card">
        <h2>Create Account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">SIGN IN</button>
          <button type="button" onClick={handleGoogleProvider}>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
