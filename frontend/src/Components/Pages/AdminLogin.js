import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { islogin, isloginasadmin } from "../../Services/Actions/actions";
import TextField from "@material-ui/core/TextField";
import "../../Styles/Fireworks.css";
import "../../Styles/Navbar.css";
export function AdminLogin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      dispatch(isloginasadmin("admin"));
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    } else {
      if (username !== "admin") {
        setUsernameError("User does not exists.");
        console.log(username);
        navigate("/adminlogin");
      } else if (password !== "admin") {
        setPasswordError("Password does not exists.");
        navigate("/adminlogin");
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    setUsernameError(""); // Clear username error when the username field changes
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear password error when the password field changes
  };

  return (
    <div className="admin">
      <div className="container" style={{marginTop:"100px"}}>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background:"white"}}>
            <h2 className="text-center m-4">Admin User</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

