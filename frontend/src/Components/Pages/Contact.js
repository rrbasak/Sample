/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Contact.css";
import "../../Styles/Fireworks.css";

export function Contact() {
  return (
    <section className="vh-100 ">
      <div className="container py-5 h-100" style={{ marginTop: "100px" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-md-9 col-lg-7 col-xl-5 ">
            <div
              className="card shadow"
              style={{ "border-radius": "15px", width: "650px" }}
            >
              <div className="card-body p-4" style={{ width: "10px" }}>
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{
                        height: "180px",
                        width: "180px",
                        "border-radius": "50%",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Rajdeep Basak</h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      Full stack Developer
                    </p>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ "background-color": "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">rajdeepbasak2000@gmail.com</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Mobile No</p>
                        <p className="mb-0">6289756043</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <div class="social-app flex" id="social">
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-google-plus social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.facebook.com/rajdeep.basak.988"
                            target="_blank"
                          >
                            <span class="fa fa-facebook-f social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link
                            to="https://www.instagram.com/rajdeep7863/"
                            target="_blank"
                          >
                            <span class="fa fa-instagram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.linkedin.com/in/rajdeep-basak-954206216/"
                            target="_blank"
                          >
                            <span class="fa fa-linkedin social"></span>
                          </Link>
                        </span>
                        <span>
                          <Link to="">
                            <span class="fa fa-whatsapp social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-telegram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link to="https://github.com/rrbasak" target="_blank">
                            <span class="fa fa-github social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fab fa-discord social"></span>
                          </Link>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div
              className="card shadow"
              style={{ "border-radius": "15px", width: "650px" }}
            >
              <div className="card-body p-4" style={{ width: "10px" }}>
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{
                        height: "180px",
                        width: "180px",
                        "border-radius": "50%",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Bibek Saha</h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      Full stack Developer
                    </p>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ "background-color": "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">bs6294999@gmail.com</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Mobile No</p>
                        <p className="mb-0">9147186196</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <div class="social-app flex" id="social">
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-google-plus social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.facebook.com/rajdeep.basak.988"
                            target="_blank"
                          >
                            <span class="fa fa-facebook-f social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link
                            to="https://www.instagram.com/rajdeep7863/"
                            target="_blank"
                          >
                            <span class="fa fa-instagram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.linkedin.com/in/rajdeep-basak-954206216/"
                            target="_blank"
                          >
                            <span class="fa fa-linkedin social"></span>
                          </Link>
                        </span>
                        <span>
                          <Link to="">
                            <span class="fa fa-whatsapp social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-telegram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://github.com/newclash"
                            target="_blank"
                          >
                            <span class="fa fa-github social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fab fa-discord social"></span>
                          </Link>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div
              className="card shadow"
              style={{ "border-radius": "15px", width: "650px" }}
            >
              <div className="card-body p-4" style={{ width: "10px" }}>
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{
                        height: "180px",
                        width: "180px",
                        "border-radius": "50%",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Akash Dutta</h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      Front-End Developer
                    </p>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ "background-color": "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">akash.dutta@mjunction.in</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Mobile No</p>
                        <p className="mb-0">6291310112</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <div class="social-app flex" id="social">
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-google-plus social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.facebook.com/rajdeep.basak.988"
                            target="_blank"
                          >
                            <span class="fa fa-facebook-f social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link
                            to="https://www.instagram.com/rajdeep7863/"
                            target="_blank"
                          >
                            <span class="fa fa-instagram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.linkedin.com/in/rajdeep-basak-954206216/"
                            target="_blank"
                          >
                            <span class="fa fa-linkedin social"></span>
                          </Link>
                        </span>
                        <span>
                          <Link to="">
                            <span class="fa fa-whatsapp social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-telegram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link to="https://github.com/Akashdt" target="_blank">
                            <span class="fa fa-github social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fab fa-discord social"></span>
                          </Link>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div
              className="card shadow"
              style={{ "border-radius": "15px", width: "650px" }}
            >
              <div className="card-body p-4" style={{ width: "10px" }}>
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{
                        height: "180px",
                        width: "180px",
                        "border-radius": "50%",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Smarat Podder</h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      Full Developer
                    </p>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ "background-color": "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">samrat.podder@mjunction.in</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Mobile No</p>
                        <p className="mb-0">7003861702</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <div class="social-app flex" id="social">
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-google-plus social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.facebook.com/rajdeep.basak.988"
                            target="_blank"
                          >
                            <span class="fa fa-facebook-f social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link
                            to="https://www.instagram.com/rajdeep7863/"
                            target="_blank"
                          >
                            <span class="fa fa-instagram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.linkedin.com/in/rajdeep-basak-954206216/"
                            target="_blank"
                          >
                            <span class="fa fa-linkedin social"></span>
                          </Link>
                        </span>
                        <span>
                          <Link to="">
                            <span class="fa fa-whatsapp social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-telegram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link to="https://github.com/samratpodder" target="_blank">
                            <span class="fa fa-github social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fab fa-discord social"></span>
                          </Link>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div
              className="card shadow"
              style={{ "border-radius": "15px", width: "650px" }}
            >
              <div className="card-body p-4" style={{ width: "10px" }}>
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{
                        height: "180px",
                        width: "180px",
                        "border-radius": "50%",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Indraneel Brahma</h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      Full stack Developer
                    </p>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ "background-color": "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">indraneel.brahma@mjunction.in</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Mobile No</p>
                        <p className="mb-0">6289756043</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <div class="social-app flex" id="social">
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-google-plus social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.facebook.com/rajdeep.basak.988"
                            target="_blank"
                          >
                            <span class="fa fa-facebook-f social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link
                            to="https://www.instagram.com/rajdeep7863/"
                            target="_blank"
                          >
                            <span class="fa fa-instagram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link
                            to="https://www.linkedin.com/in/rajdeep-basak-954206216/"
                            target="_blank"
                          >
                            <span class="fa fa-linkedin social"></span>
                          </Link>
                        </span>
                        <span>
                          <Link to="">
                            <span class="fa fa-whatsapp social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fa fa-telegram social"></span>
                          </Link>
                        </span> */}
                        <span>
                          <Link to="https://github.com/xrekson" target="_blank">
                            <span class="fa fa-github social"></span>
                          </Link>
                        </span>
                        {/* <span>
                          <Link to="">
                            <span class="fab fa-discord social"></span>
                          </Link>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="mb-3">
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
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</div>; */
}
