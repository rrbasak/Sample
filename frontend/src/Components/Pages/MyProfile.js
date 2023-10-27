import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ViewProduct } from "../Pages/ViewProduct";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Auction from "./Auction";
export function MyProfile() {
  const img_id = localStorage.getItem("id");
  const type = localStorage.getItem("type");
  console.log(type + "type");
  const { islogined, uname, name } = useSelector((state) => state);
  const [logdata, setLogdata] = useState(null);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setLogdata(storedData);
    } else {
      axios
        .get(`http://localhost:8080/get/${uname}`)
        .then((response) => {
          setLogdata(response.data);
          localStorage.setItem("userProfile", JSON.stringify(response.data));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [uname]);
  console.log(name);
  //  useEffect(() => {
  //    const storedData = JSON.parse(localStorage.getItem("userProfile"));
  //    if (storedData) {
  //      setLogdata(storedData);
  //    } else {
  //      axios
  //        .get(`http://localhost:8080/get/${uname}`)
  //        .then((response) => {
  //          setLogdata(response.data);
  //          localStorage.setItem("userProfile", JSON.stringify(response.data));
  //        })
  //        .catch((err) => {
  //          console.error(err);
  //        });
  //    }
  //  }, [name]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setLogdata(storedData);
    }
  }, []);
  console.log(islogined);
  // console.log(role);
  console.log(uname);
  console.log(logdata);
  if (logdata) {
    console.log(logdata.type);
  }
  return (
    <>
      {logdata && (
        <section style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                  <MDBBreadcrumbItem>
                    {logdata && logdata.type === "seller" ? (
                      <Link to="/view-product" element={<ViewProduct />}>
                        Home
                      </Link>
                    ) : (
                      <Link to="/auction" element={<Auction />}>
                        Home
                      </Link>
                    )}
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={
                        img_id
                          ? `http://localhost:8080/user/get/file/${img_id}`
                          : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      }
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px", height: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">{logdata.desx}</p>
                    <p className="text-muted mb-1">{logdata.about}</p>
                    <p className="text-muted mb-4">{logdata.address}</p>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="globe fa-lg text-warning" />
                        <MDBCardText>https://mdbootstrap.com</MDBCardText>
                      </MDBListGroupItem> */}
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="fa-brands fa-github"
                          style={{ color: "#333333" }}
                        />
                        <MDBCardText>mdbootstrap</MDBCardText>
                      </MDBListGroupItem> */}
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          class="fa fa-facebook"
                          style={{ color: "#3B5998", fontSize: "36px" }}
                        />
                        <MDBCardText>
                          <Link
                            to={logdata.fb}
                            style={{ textDecoration: "none" }}
                            target="_blank"
                          >
                            Facebook
                          </Link>
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i
                          class="fa fa-twitter"
                          style={{ color: "blue", fontSize: "36px" }}
                        ></i>
                        <MDBCardText>
                          {" "}
                          <Link
                            to={logdata.twitter}
                            style={{ textDecoration: "none" }}
                            target="_blank"
                          >
                            Twitter
                          </Link>{" "}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          class="fa fa-instagram"
                          style={{ color: "rgb(251,12,172)", fontSize: "36px" }}
                        />
                        <MDBCardText>
                          <Link
                            to={logdata.insta}
                            style={{ textDecoration: "none" }}
                            target="_blank"
                          >
                            Instagram
                          </Link>
                        </MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Full Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.name}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    ) : null}
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>User Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.userName}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    ) : null}
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>DOB</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.dob}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    ) : null}
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.email}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    ) : null}
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Mobile</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.phno}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    ) : null}
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Address</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.address}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    ) : null}
                    {logdata ? (
                      <>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>User Type</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {logdata.type}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                      </>
                    ) : null}
                  </MDBCardBody>
                </MDBCard>
                <Link
                  className="btn btn-primary mx-2"
                  to="/editprofile"
                  state={logdata}
                >
                  edit profile
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </>
  );
}
