import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../UI/loader/Loader";

import { setCookie } from "../../cookies/cookies";
import { API } from "../../service/api";

import "./LoginPage.css";

const initialLoginFormField = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [loginFormField, setLoginFormField] = useState(initialLoginFormField);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const handleChange = (field) => (e) =>
    setLoginFormField({ ...loginFormField, [field]: e.target.value });

  const handleLogin = (response) => {
    setCookie("ACCESSTOKEN", response.data.accesstoken);
    setCookie("EMAIL", response.data.email);
    setCookie("USERNAME", response.data.username);
    // Clear the fields
    setLoginFormField(initialLoginFormField);
    setError("");
    // navigate to main page
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await API.userLogin(loginFormField);
      console.log("Login response:", response);
      if (response?.isSuccess) {
        handleLogin(response);
      } else {
        console.log("Something went wrong!!");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setError("⚠️ Invalid credentials");
      }
      if (error.response.status === 404) {
        setError("❌ Email does not exist");
      }
      console.log("Login Error:", error);
    }
    setloading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              autoFocus
              value={loginFormField.email}
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
              value={loginFormField.password}
              onChange={handleChange("password")}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">{loading ? <Loader /> : "Login"}</button>
          <div
            style={{
              display: "flex",
              gap: 15,
              justifyContent: "space-between",
            }}
          >
            <a href="/#">Forgot password?</a>
            <a href="/signup">Create account</a>
          </div>
        </form>
        <div className="social-login">
          <p>Or login with:</p>
          <div className="social-buttons">
            <button className="google-login">
              <i className="fa-brands fa-google fa-xl"></i>Login with Google
            </button>
            <button className="facebook-login">
              <i className="fa-brands fa-facebook fa-xl"></i>Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
