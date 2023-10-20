import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Navbar } from "../Layouts/Navbar";
import { Error } from "../Pages/Error";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Login } from "../Pages/Login";
import { AdminLogin } from "../Pages/AdminLogin";
import { Register } from "../Pages/Register";
import { ViewProduct } from "../Pages/ViewProduct";
import { MyProfile } from "../Pages/MyProfile";
import { EditProfile } from "../Pages/EditProfile";
import { AddBid } from "../Pages/AddBid";
import { MeetWinners } from "../Pages/MeetWinners";
import { ProductInfo } from "../Pages/ProductInfo";
import { UpdateProduct } from "../Pages/UpdateProduct";
import { ForgotPassword } from "../Pages/ForgotPassword";

import "../../Styles/Footer.css";
import Auction from "../Pages/Auction";
import Bidding from "../Pages/Bidding";
import Dashboard from "../Pages/Dashboard";
import { Details } from "../Pages/Details";
import { Footer } from "../Layouts/Footer";

export default function Index() {
  return (
    <div>
      <Router>
        {/* {data === null && <Navbar />} */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view-product" element={<ViewProduct />} />
          <Route path="/add-product" element={<AddBid />} />
          <Route path="/meetwinners" element={<MeetWinners />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path='/auction' Component={Auction} />
          <Route path='/auction/:category' Component={Auction} />
          <Route path='/bidding/:id' Component={Bidding} />
          <Route path='/details/:id' Component={Details} />
          <Route path='/admin/dashboard' Component={Dashboard} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

