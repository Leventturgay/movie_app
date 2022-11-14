import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, signUpWithGoogle } from "../auth/firebase";
import "./style.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);

    console.log(firstName, lastName);
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
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <button type="submit">SIGN UP</button>
          <button type="button" onClick={handleGoogleProvider}>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
