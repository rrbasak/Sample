import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { islogin } from "../../Services/Actions/actions";
import "../../Styles/Navbar.css";

export function DefaultNavbar() {
  //const isloggedin = localStorage.getItem("isloggedin");
  // const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { islogined} = useSelector((state) => state);
  const [isFocused, setIsFocused] = useState(false);
  console.log(islogined);
  //console.log(isloggedin);
  const { name } = location.state || {};
  console.log(name);
  

  const loginhandler = () => {
    if (islogined) {
      navigate("/");
      localStorage.clear();
      dispatch(islogin());
    } else {
      navigate("/login");
    }
  };

  const handleSearch = () => {
    
    // console.log("Search Query:", searchQuery);
  };

  return (
    <>
      <nav 
       className="navbar navbar-expand-lg navbar-dark transparent-navbar"
        // style={{
        //   backgroundColor: "red",
        //   top: 0,
        //   zIndex: 1000,
        //   boxShadow: "0px 0px 4px 1px",
        // }}
      >
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="#">
            <h1>mAuction</h1>
          </Link>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={{color:"white"}}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color:"white"}}>
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color:"white"}}>
                  Contact Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/adminlogin" style={{color:"white"}}>
                  Admin Login
                </Link>
              </li>

              {/* Search bar */}
              {/* <div className={`d-flex ${isFocused ? "blur-background" : ""}`}>
                <input
                  type="text"
                  className="form-control me-2 walmart-search-input"
                  placeholder="Search for products..."
                  value={searchQuery}
                  style={{ width: "500px" }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <button
                  className="btn btn-outline-light walmart-search-button"
                  onClick={handleSearch}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div> */}
            </ul>
          </div>

          {location.pathname !== "/login" &&
          location.pathname !== "/register" ? (
            <>
              <button
                className="btn"
                onClick={loginhandler}
              >
                {islogined ? "log out" : "LOGIN"}
              </button>
            </>
          ) : null}
        </div>
      </nav>
    </>
  );
}
