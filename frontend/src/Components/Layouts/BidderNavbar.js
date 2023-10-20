import React, { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { islogin } from "../../Services/Actions/actions";
import axios from "axios";
import "../../Styles/Navbar.css";
import Auction from "../Pages/Auction";

export const CatagoryContext = createContext(null);

export function BidderNavbar() {
  const { islogined, uname } = useSelector((state) => state);
  const [logdata, setLogdata] = useState(null);
  const [Catagory, setCatagory] = useState('');
  const name = localStorage.getItem("name");
  const img_id = localStorage.getItem("id");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setLogdata(storedData);
    } else {
      axios
        .get(`http://localhost:8080/user/get/${uname}`)
        .then((response) => {
          setLogdata(response.data);
          localStorage.setItem("userProfile", JSON.stringify(response.data));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [uname]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setLogdata(storedData);
    }
  }, []);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData && storedData.name !== null) {
      setLogdata(storedData);
    }
  }, [name]);
  // const type = localStorage.getItem("role");
  const data = JSON.parse(localStorage.getItem("userProfile"));
  console.log(data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const loginhandler = () => {
    if (islogined || logdata) {
      navigate("/");
      localStorage.clear();
      //localStorage.setItem("isloggedin","false");
      dispatch(islogin());
    } else {
      navigate("/login");
    }
  };
  const profilehandler = () => {
    navigate("/myprofile");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{
          backgroundColor: "007BFF",
          top: 0,
          zIndex: 1000,
          boxShadow: "0px 0px 4px 1px",
        }}
      >
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/view-product">
            <h1>mAuction</h1>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/auction">
                  Auction Listing
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CATAGORY
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='/auction/All'>All</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Historic'>Historic</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Weapons'>Weapons</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Art'>Art</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Book'>Book</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Automobile'>Automobile</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Jewellery'>Jewellery</Link></li>
                  <li><Link class="dropdown-item" to='/auction/Other'>Other</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          {logdata && <div className="text-white"><strong>Welcome, {name}</strong></div>}
          {logdata && (
            <img
              src={`http://localhost:8080/user/get/file/${img_id}`}
              className="card-img-top"
              alt="error"
              onClick={profilehandler}
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                marginLeft: "0.2rem",
                cursor: "pointer",
              }}
            />
          )}
          {location.pathname !== "/login" &&
            location.pathname !== "/register" ? (
            <>
              <button
                className="btn btn-outline-light mx-2"
                onClick={loginhandler}
              >
                {islogined || logdata ? "log out" : "login"}
              </button>
            </>
          ) : null}
        </div>
      </nav>
    </>
  );
}