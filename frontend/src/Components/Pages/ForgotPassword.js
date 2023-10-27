import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { islogin, isloginasadmin, isloginasbidder, isloginasseller, updateUserName } from "../../Services/Actions/actions";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
export function ForgotPassword() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    // checkisavailable();
    const data = {"password":password};
    console.log(data);
    console.log(username);
    const res = await axios
      .put(`http://localhost:8080/user/update/${username}`, data,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      .then((res) => {
        console.log(res);
        return "Updated successfully";
      })
      .catch((error) => {
        return error;
      });
    console.log(res);
    navigate("/login");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
            style={{ backgroundColor: "#fff" }}
          >
            <h2 className="text-center m-4">Login User</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  username
                </label>
                <TextField
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your Username"
                  label="username"
                  name="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                />
                <TextField
                  type={"password"}
                  className="form-control"
                  placeholder="Enter your new Password"
                  label="Password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                RESET
              </button>
              <div>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  ← Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}