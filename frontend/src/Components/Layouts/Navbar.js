import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import "../../Styles/Navbar.css";
import { AdminNavbar } from "./AdminNavbar";
import { SellerNavbar } from "./SellerNavbar";
import { BidderNavbar } from "./BidderNavbar";
import { DefaultNavbar } from "./DefaultNavbar";

export function Navbar() {
  // eslint-disable-next-line no-use-before-define
  const [data, setData] = useState(null);

  useEffect(()=>{
    setData(localStorage.getItem("role"));
  }, [])
  
  useEffect(() => {
    setData(localStorage.getItem("role"));
  });


  const { role } = useSelector((state) => state);
  // const role = localStorage.getItem("role");
  // const data = localStorage.getItem("userProfile");
  console.log(data + "HI");

  const renderNavbar = () => {
    if (role === "admin" || data === "admin") {
      return <AdminNavbar />;
    } else if (role === "seller" || data === "seller") {
      return <SellerNavbar />;
    } else if (role === "bidder" || data === "bidder") {
      return <BidderNavbar />;
    } 
  };

  return (
    <>
      <div>{role || data ? renderNavbar() : <DefaultNavbar />}</div>
    </>
  );
}
