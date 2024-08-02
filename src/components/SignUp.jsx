import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup({ user, setUser }) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      }).then((r) => {
          r.json().then((user) => setUser(user));
          navigate("/");
      });
    }
  
    return (
      <>
      <div className="h-full w-full flex max-md:flex-col	mb-10">
  
        <div className="w-2/4 max-md:w-full flex justify-center items-center">
          <form className="px-[6vw] signup-form w-full" onSubmit={handleSubmit}>
        
              <p className="text-2xl mb-2">Register your acoount</p>
              <p className=" mb-2">Fill in the fields below and submit to register your account</p>

            <div>
            <label htmlFor="Email">Email</label>
              <input
                placeholder="johndoe@info.com"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  

  
            <div>
              <label htmlFor="password">Password</label>
              <input
                placeholder="Your password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
  
            <div>
              <label htmlFor="password_confirmation">Confirm password</label>
              <input
                placeholder="confirm password"
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
              />
            </div>
  
            <button className="w-full bg-[red] p-3 rounded-md text-white" type="submit">
              Signup
            </button>
            <p className="text-center mt-8">
              Already have an account? <NavLink to="/login" className="text-[blue]">Login</NavLink>
            </p>
          </form>
        </div>
      </div>
      </>
    );
  }
  
  export default Signup;