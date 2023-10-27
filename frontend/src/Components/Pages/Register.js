import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import validator from "validator";
import "../../Styles/Navbar.css";
import {
  isloginasbidder,
  isloginasseller,
} from "../../Services/Actions/actions";
import axios from "axios";
export function Register() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [deg, setDesignation] = useState("");
  const [about, setAbout] = useState("");
  const [insta, setInsta] = useState("");
  const [fb, setFb] = useState("");
  const [twitter, setTwitter] = useState("");
  // const [file, setImage] = useState();
  const [file, setFile] = useState(null); // Add file state
  const fileRef = useRef(null); // Reference to the file input element
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const [isError, setIsError] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [usernameError, setUsernameError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [cpassworderror, setCpasswordError] = useState("");

  const userRef = useRef("");
  const mobileRef = useRef("");
  const passwordRef = useRef("");
  const cpasswordRef = useRef("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (usernameError) {
      userRef.current.focus();
      return;
    }

    if (password !== cpassword) {
      cpasswordRef.current.focus();
      setCpasswordError("password does not match");
      return;
    }

    if (errorMsg === "weak password") {
      passwordRef.current.focus();
      return;
    }
    if (isError) {
      mobileRef.current.focus();
      return;
    }
    const name =
      firstName + (`${middleName}` ? ` ${middleName} ` : " ") + lastName;
    console.log(type + "type");
    const data = {
      name: name,
      username: username,
      email: email,
      password: password,
      mobileno: mobileno,
      type: type,
      dob: dob,
      address: address,
      about: about,
      deg: deg,
      file: file,
      fb: fb,
      insta: insta,
      twitter: twitter,
    };
    console.log(data);

    await axios
      .post("http://localhost:8080/user/save", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
    const logdata = await axios
      .get(`http://localhost:8080/user/get/${username}`)
      .then((response) => {
        return response.data;
      });
    console.log(logdata);
    if (type === "seller") {
      localStorage.setItem("role", "seller");
      localStorage.setItem("isloggedin", "true");
      localStorage.setItem("name", name);
      localStorage.setItem("userName", username);
      localStorage.setItem("id", logdata.id);
      dispatch(isloginasseller(["seller", username, password]));
      navigate("/view-product");
    } else {
      localStorage.setItem("role", "bidder");
      localStorage.setItem("isloggedin", "true");
      localStorage.setItem("id", logdata.id);
      localStorage.setItem("name", name);
      localStorage.setItem("userName", username);
      dispatch(isloginasbidder(["bidder", username, password]));
      navigate("/auction");
    }
  };
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMsg(" Strong password");
    } else {
      setErrorMsg("weak password");
    }
  };

  const checkisavailable = async (username) => {
    try {
      if (username.trim() === "") {
        setUsernameError("");
        return;
      }
      const isavailable = await axios.get(
        `http://localhost:8080/user/get/${username}`
      );
      setIsUsernameAvailable(isavailable.data.available);
      if (isavailable.data.userName === username) {
        setUsernameError("Username is already taken.");
      } else {
        setUsernameError("");
      }
    } catch (error) {
      console.error("Error checking username availability:", error);
    }
  };

  const handleCPasswordChange = (e) => {
    if (password !== cpassword) {
      setCpasswordError("Password does not match");
    } else {
      setCpasswordError("");
    }
  };

  return (
    <div className="register">
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div
            className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
            style={{ background: "white" }}
          >
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={submitHandler}>
              {/* firtname middlename and lastname*/}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    {/* <label htmlFor="FirstName" className="form-label">
                    First Name
                  </label> */}
                    <TextField
                      type={"text"}
                      className="form-control"
                      placeholder="First name"
                      name="firstName"
                      label="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    {/* <label htmlFor="MiddleName" className="form-label">
                    Middle Name
                  </label> */}
                    <TextField
                      type={"text"}
                      className="form-control"
                      placeholder="Middle name"
                      name="middleName"
                      label="Middle name"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    {/* <label htmlFor="LastName" className="form-label">
                    Last Name
                  </label> */}
                    <TextField
                      type={"text"}
                      className="form-control"
                      placeholder="Last name"
                      name="lastName"
                      label="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* username and email */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    {/* <label htmlFor="Username" className="form-label">
                    Username
                  </label> */}
                    <TextField
                      type={"text"}
                      className="form-control"
                      placeholder="Choose username"
                      name="username"
                      label="username"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      onKeyUp={(e) => checkisavailable(e.target.value)}
                      required
                      inputRef={userRef}
                    />
                    {!isUsernameAvailable && (
                      <span style={{ color: "red" }}>{usernameError}</span>
                    )}
                  </div>
                  <div className="col">
                    {/* <label htmlFor="Email" className="form-label">
                    E-mail
                  </label> */}
                    <TextField
                      type={"email"}
                      className="form-control"
                      placeholder="Email ID"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* password and confirm password */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    {/* <label htmlFor="Password" className="form-label">
                    Password
                  </label> */}
                    <TextField
                      type={"password"}
                      className="form-control"
                      placeholder="Choose password"
                      name="password"
                      label="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validate(e.target.value);
                      }}
                      required
                      inputRef={passwordRef}
                    />
                    {errorMsg === "" ? null : (
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        {errorMsg}
                      </span>
                    )}
                  </div>
                  <div className="col">
                    {/* <label htmlFor="Password" className="form-label">
                    Password
                  </label> */}
                    <TextField
                      type={"password"}
                      className="form-control"
                      placeholder="Confirm password"
                      name="password"
                      label="Confirm Password"
                      value={cpassword}
                      onChange={(e) => setCPassword(e.target.value)}
                      onKeyUp={(e) => handleCPasswordChange(e.target.value)}
                      required
                      inputRef={cpasswordRef}
                    />

                    {cpassworderror === "" ? null : (
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        {cpassworderror}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* DOB and address */}
              <div className="mb-3">
                <div className="row">
                  <div className="col-md-6">
                    {/* <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label> */}
                    <TextField
                      type={"date"}
                      className="form-control"
                      name="dob"
                      label="Enter DOB"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    {/* <label htmlFor="address" className="form-label">
                    Address
                  </label> */}
                    <TextField
                      type={"textarea"}
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      label="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Mobile number and type */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <TextField
                      type={"number"}
                      error={isError}
                      className="form-control"
                      placeholder="Mobile"
                      name="firstName"
                      value={mobileno}
                      label="Enter Phone Number"
                      onChange={(e) => {
                        setMobileno(e.target.value);
                        if (e.target.value.length > 10) {
                          setIsError(true);
                        }
                        if (e.target.value.length <= 10) {
                          setIsError(false);
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                      }}
                      inputRef={mobileRef}
                    />
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="bidder"
                        checked={type === "bidder"}
                        onChange={(e) => setType(e.target.value)}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Bidder
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="seller"
                        checked={type === "seller"}
                        onChange={(e) => setType(e.target.value)}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Seller
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* setImage */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <input
                      type="file"
                      className="form-control"
                      ref={fileRef}
                      onChange={handleFileChange}
                      accept=".jpg, .jpeg, .png"
                      // required
                    />
                  </div>
                </div>
              </div>
              {/**designation */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <TextField
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your Designation"
                      name="designation"
                      label="Designation"
                      value={deg}
                      onChange={(e) => setDesignation(e.target.value)}
                      required
                      fullWidth
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
                      className="form-control"
                      placeholder="Feel free to write"
                      name="about"
                      label="What about you"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      required
                      fullWidth
                    />
                  </div>
                </div>
              </div>

              {/* facebook */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <TextField
                      type={"url"}
                      className="form-control"
                      placeholder="Instagram ID"
                      name="fb"
                      label="Facebook ID"
                      value={fb}
                      onChange={(e) => setFb(e.target.value)}
                      fullWidth
                    />
                  </div>
                </div>
              </div>

              {/* instagram */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <TextField
                      type={"url"}
                      className="form-control"
                      placeholder="Instagram ID"
                      name="insta"
                      label="Instagram ID"
                      value={insta}
                      onChange={(e) => setInsta(e.target.value)}
                      fullWidth
                    />
                  </div>
                </div>
              </div>

              {/* twitter */}
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <TextField
                      type={"url"}
                      className="form-control"
                      placeholder="Twitter ID"
                      name="twitter"
                      label="Twitter ID"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      fullWidth
                    />
                  </div>
                </div>
              </div>

              {/* Terms and conditions */}
              <div
                className="tacbox"
                style={{
                  display: "block",
                  padding: "1em",
                  margin: "2em",
                  border: "3px solid #ddd",
                  backgroundColor: "#eee",
                  maxWidth: "800px",
                }}
              >
                <input
                  id="checkbox"
                  type="checkbox"
                  style={{
                    height: "1em",
                    width: "1em",
                    verticalAlign: "middle",
                  }}
                  required
                />
                <label for="checkbox">
                  {" "}
                  I agree to these <Link to="#">Terms and Conditions</Link>.
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="btn btn-danger mx-2" to="/">
                Cancel
              </Link>
              <div>
                Already have an account?{" "}
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
