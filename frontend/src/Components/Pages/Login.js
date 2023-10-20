import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { isloginasadmin, isloginasbidder, isloginasseller, updateUserName } from "../../Services/Actions/actions";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "../../Styles/Fireworks.css";
import "../../Styles/Navbar.css";

export function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    setUsernameError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); 
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
    const logdata = await axios
      .get(`http://localhost:8080/user/get/${username}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.message;
      });
    if (logdata.userName === username && logdata.password === password) {
      if (logdata.type === "admin") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("isloggedin", true);
        localStorage.setItem("name", logdata.name);
        dispatch(isloginasadmin(["admin", username,password]));
      } else if (logdata.type === "seller") {
        localStorage.setItem("role", "seller");
        localStorage.setItem("isloggedin", "true");
        localStorage.setItem("name", logdata.name);
        localStorage.setItem("id", logdata.id);
        localStorage.setItem("userName",logdata.userName)
        dispatch(isloginasseller(["seller", username,password]));
        navigate("/view-product");
      } else {
        localStorage.setItem("role", "bidder");
        localStorage.setItem("isloggedin", "true");
        localStorage.setItem("name", logdata.name);
        localStorage.setItem("id", logdata.id);
        localStorage.setItem("userName",logdata.userName)
        dispatch(isloginasbidder(["bidder", username,password]));
        navigate("/auction");
      }
      
    } else {
      if (logdata.userName !== username) {
        setUsernameError("Username does not exist"); // Set username error message
        navigate("/login");
      } else if (logdata.password !== password) {
        setPasswordError("Password does not match"); // Set password error message
        navigate("/login", { state: { username } });
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <div className="login">
      <div className="container" style={{marginTop:"100px"}}>
        <div className="row" >
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background:"white"}} >
            <h2 className="text-center m-4">Login User</h2>
            <form onSubmit={submitHandler} >
              <div className="mb-3" >
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <TextField
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  label="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <div className="text-danger">{usernameError}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  password
                </label>
                <TextField
                  type={"password"}
                  className="form-control"
                  placeholder="Enter your Password"
                  label="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <div className="text-danger">{passwordError}</div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="btn btn-danger mx-2" to="/">
                Cancel
              </Link>
              <div>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Don't have an account{" "}
                </Link>
              </div>
              <div>
                <Link to="/forgot" style={{ textDecoration: "none" }}>
                  I forgot my password →{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}