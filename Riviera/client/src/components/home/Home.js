import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <h1 className="headline">Dine in Excellence</h1>
                <p className="subtext">
                    Experience the finest Italian dishes crafted with love and passion.
                </p>
                <button className="reserve-btn">Reserve</button>
            </div>

            <div className="content-boxes">
                <div className="content-box">
                    <img src="/images/example1.jpg" alt="Dish 1" className="box-image" />
                    <p className="box-text">Authentic Italian Pasta</p>
                </div>
                <div className="content-box">
                    <img src="/images/example4.jpg" alt="Dish 2" className="box-image" />
                    <p className="box-text">Wood-Fired Pizza</p>
                </div>
                <div className="content-box">
                    <img src="/images/example3.jpg" alt="Dish 3" className="box-image" />
                    <p className="box-text">Fresh Mediterranean Salad</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
