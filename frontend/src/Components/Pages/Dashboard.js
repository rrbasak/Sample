import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Dashboard.css';

const Dashboard = () => {

    const handleClick = () => {
        localStorage.clear();
    }

    return (
        <div className="dashboard">
            <nav className="navbar navbar-light bg-secondary">
                <span className="navbar-brand mb-0 h1">ADMIN</span>
                <span className="navbar-brand mb-0 h1"><strong>mAuction<i class="bi bi-hammer"></i></strong></span>
                <span className="navbar-text">Logged in as: <strong>Admin Name</strong></span>
            </nav>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-2 sidenav">
                        <ul>
                            <li>
                                <i className="bi bi-house-door icon"></i>
                                DASHBOARD
                            </li>
                            <li>
                                <i className="bi bi-box icon"></i>
                                PRODUCTS DETAIL
                            </li>
                            <li>
                                <i className="bi bi-grid icon"></i>
                                CATEGORIES
                            </li>
                            <li>
                                <i className="bi bi-people icon"></i>
                                BIDDER DETAILS
                            </li>
                            <li>
                                <i className="bi bi-people icon"></i>
                                SELLER DETAILS
                            </li>
                            <li>
                                <i className="bi bi-box-arrow-right icon"></i>
                                <a href='/' onClick={handleClick}>LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <div className="dashboard-content">
                            <div className="dashboard-item">
                                <i className="bi bi-arrow-right-circle icon"></i>
                                <h2>TOTAL BIDDERS</h2>
                            </div>
                            <div className="dashboard-item">
                                <i className="bi bi-arrow-right-circle icon"></i>
                                <h2>TOTAL SELLERS</h2>
                            </div>
                            <div className="dashboard-item">
                                <i className="bi bi-arrow-right-circle icon"></i>
                                <h2>TOTAL PRODUCTS IN BID</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;