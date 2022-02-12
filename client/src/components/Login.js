import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState("");

  const loginCall = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      setmsg(response.data.sqlMessage);
      if (response.data.sqlMessage === "Verified") {
        navigate("/home");
      }
    });
  };

  return (
    <div className="login">
      <NavBar />

      <h1>Login</h1>

      <form className="form" onSubmit={loginCall}>
        <label>Username</label>
        <input
          type="email"
          name="e-mail"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <button type="submit" className="submit">
          Sign In
        </button>
      </form>

      <span className={msg === "Verified" ? "allowed" : "notallowed"}>
        {msg}
      </span>
    </div>
  );
}
