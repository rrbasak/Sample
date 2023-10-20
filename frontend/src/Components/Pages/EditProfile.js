import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// import { islogin, updateUserName } from "../../Services/Actions/actions";
import axios from "axios";
export function EditProfile() {
  const location = useLocation();
  const [name, setName] = useState(location.state.name);
  const [userName, setUserName] = useState(location.state.userName);
  const [dob, setDob] = useState(location.state.dob);
  const [email, setEmail] = useState(location.state.email);
  const [phno, setMobileno] = useState(location.state.phno);
  const [address, setAddress] = useState(location.state.address);
  const [type, setType] = useState(location.state.type);
  const [desx, setDeg] = useState(location.state.desx);
  const [about, setAbout] = useState(location.state.about);
  const [isError, setIsError] = useState(false);
  const id=localStorage.getItem('id');
  // const [type, setType] = useState(location.state.type);
  let navigate = useNavigate();
  // const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { "name":name, "userName":userName, "email":email, "phno":phno, "dob":dob, "address":address, "desx":desx ,"about":about,"type":type};
    console.log(data);
    const res = await axios
      .put(`http://localhost:8080/user/update/${userName}`, data,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      .then((res) => {
        // dispatch(updateUserName(name));
        console.log(res);
        return "Updated successfully";
      })
      .catch((error) => {
        return error;
      });
    console.log(res);
    //dispatch(islogin());userProfile
    localStorage.removeItem("userProfile");
    localStorage.setItem("userProfile", JSON.stringify(data));
    localStorage.removeItem("name");
    localStorage.setItem("name",name)
    navigate("/myprofile");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"  style={{backgroundColor: "#fff"}}>
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={submitHandler}>
            {/* name*/}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* username and email */}
            <div className="mb-3">
              <div className="row">
                {/* <div className="col">
                  <TextField
                    type={"text"}
                    className="form-control"
                    placeholder="Choose username"
                    name="username"
                    label="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div> */}
                <div className="col">
                  <TextField
                    type={"email"}
                    className="form-control"
                    placeholder="Email ID"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* DOB and address */}
            <div className="mb-3">
              <div className="row">
                {/* <div className="col-md-6">
                  <TextField
                    type={"date"}
                    className="form-control"
                    name="dob"
                    label="Enter DOB"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div> */}
                {/* className="col-md-6" */}
                <div className="col">
                  <TextField
                    type={"text"}
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Mobile number */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"text"}
                    error={isError}
                    className="form-control"
                    placeholder="Mobile"
                    name="mobileno"
                    value={phno}
                    label="Enter Phone Number"
                    onChange={(e) => {
                      setMobileno(e.target.value);
                      if (e.target.value.length > 10) {
                        setIsError(true);
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
            {/* about */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"text"}
                    error={isError}
                    className="form-control"
                    placeholder="Feel free ..."
                    name="about"
                    value={about}
                    label="About"
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* designation */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"text"}
                    error={isError}
                    className="form-control"
                    placeholder="Designation"
                    name="deg"
                    value={desx}
                    label="Enter Recent Designation"
                    onChange={(e) => {
                      setDeg(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              edit
            </button>
            <Link className="btn btn-danger mx-2" to="/myprofile">
              cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}