import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../UI/loader/Loader";

import { API } from "../../service/api.js";

import "./signup.css";

const formStateInitialValues = {
  email: "",
  username: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const [formState, setFormstate] = useState(formStateInitialValues);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormstate({ ...formState, [field]: e.target.value });
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await API.userSignup(formState);
      console.log("res", response);
      if (response?.isSuccess) {
        setFormstate(formStateInitialValues);
        setError("");
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 409)
        setError("⚠️ " + error.response.data.msg);
      else setError("❌ Something went wrong! Please try again later");
    }
    setloading(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              // autoFocus
              required
              name="username"
              value={formState.username}
              onChange={handleChange("username")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <i className="fa-regular fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </button>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={formState.password}
              onChange={handleChange("password")}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="signup-btn">
            {loading ? <Loader /> : "Sign Up"}
          </button>
          <div
            style={{
              textAlign: 'center'
            }}
          >
            <a href="/login">Go back to Login</a>
          </div>
        </form>
        <div className="social-login">
          <p>Or signup using:</p>
          
          <div className="social-buttons">
            <button className="google-login">
              <i className="fa-brands fa-google fa-xl"></i>Signup with Google
            </button>
            <button className="facebook-login">
              <i className="fa-brands fa-facebook fa-xl"></i>Signup with
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
