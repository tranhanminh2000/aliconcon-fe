import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (auth.isLoggedIn) {
    navigate(-1);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email   : ${email} and password: ${password}`);
  };

  const handleGoogleLogin = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const redirectUri = "api/v1/auth/login/google/";

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = {
      response_type: "code",
      client_id:
        "923627670185-oufsl083olulinug878489bv6dlato4j.apps.googleusercontent.com",
      redirect_uri: `http://localhost:8000/${redirectUri}`,
      prompt: "select_account",
      access_type: "offline",
      scope,
    };

    const urlParams = new URLSearchParams(params).toString();
    window.location = `${googleAuthUrl}?${urlParams}`;
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
