import React from 'react';
import '../../Styles/Footer.css';
import {
  MDBIcon
} from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <footer className="footer-container" style={{marginTop: "40px"}}>
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon
              fab
              class="fa fa-facebook"
              style={{ color: "#3b5998", fontSize: "36px" }}
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i
              class="fa fa-twitter"
              style={{ color: "blue", fontSize: "36px" }}
            ></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon
              fab
              class="fa fa-instagram"
              style={{ color: "rgb(251,12,172)", fontSize: "36px" }}
            />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 <strong>mAuction.</strong> All rights reserved.</p>
          <p>Sector V , Salt Lake, Godrej Waterside, Kolkata , India</p>
          <p>Email: mAuction@mjunciton.com</p>
          <p>Phone: +91 456-7890-765</p>
        </div>
      </div>
    </footer>
  );
};