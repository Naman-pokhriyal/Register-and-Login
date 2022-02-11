import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Register() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [teach, setteach] = useState(false);
  const [msg, setmsg] = useState("");

  const registerCall = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      name: name,
      email: email,
      password: password,
      teacher: teach,
    }).then((response) => {
      setmsg(response.data.sqlMessage);
      if (response.data.sqlMessage === "") {
        navigate("/home");
      }
    });
  };

  return (
    <div className="register">
      <NavBar />
      <h1>Register</h1>
      <form className="form" onSubmit={registerCall}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <label>Username</label>
        <input
          type="email"
          name="user"
          id="usermail"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="r-password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <div>
          <label>Are you a teacher</label>
          <input
            type="checkbox"
            name="check"
            id="teacher"
            // onClick={() => {
            //   setteach(true);
            // }}
            onClick={(e) => {
              if (e.target.checked) {
                setteach(true);
                return;
              }
              setteach(false);
            }}
          />
        </div>
        <button type="submit" className="submit">
          Sign Up
        </button>
      </form>
      <span
        className={
          msg === "Verified" || msg === "Registration Successful"
            ? "allowed"
            : "notallowed"
        }
      >
        {msg}
      </span>
    </div>
  );
}
