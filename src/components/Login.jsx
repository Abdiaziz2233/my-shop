import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Login({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
        r.json().then((user) => {setUser(user)});
        navigate("/");
    });
  }

  return (
    <>
      <div class="container">
        <div class="form-container">
          <form onSubmit={handleSubmit} class="signup-form">
            <p class="welcome-text">Welcome</p>
            <p class="login-text">Login to continue</p>

            <div>
              <label htmlFor="Email">Email</label>
              <input
                placeholder="johndoe@info.com"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                placeholder="Your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <button class="submit-button" type="submit">Login</button>
            <p class="signup-text">Don't have an account? <NavLink to="/signup" class="signup-link">Signup</NavLink></p>
          </form>
        </div>
      </div>


    </>
  );
}

export default Login;