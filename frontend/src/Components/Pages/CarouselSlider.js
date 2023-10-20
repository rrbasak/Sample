import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/CarouselSlider.css';
export const CarouselSlider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-text">
                <p><i>Welcome to <strong>mAuction </strong></i></p>
            </div>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide first-slide"></div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide second-slide"></div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide third-slide"></div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide fourth-slide"></div>
                    </div>
                </div>
             </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}