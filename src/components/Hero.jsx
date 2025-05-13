import React from 'react'
import { motion } from "framer-motion";
import '../style/Hero.css'

// Import images from the 'src/assets' folder
import hero2 from '../assets/hero2.png';
import hero6 from '../assets/hero6.png';
import hero3 from '../assets/hero3.png';
import hero5 from '../assets/hero5.png';
import hero7 from '../assets/hero7.png';
import hero4 from '../assets/hero4.png';

function Hero() {
    return (
        <div id="home">
            <div className="spacer w-100 sky"></div>
            <div className="scene">
                <section className="container-fluid p-0 mt-5">
                    <div className="h-100 w-100 p-0 m-0 row">
                        <div className="col-md-5 col-sm-12 p-5 d-flex justify-content-center align-item-center">
                            <motion.div animate={{ y: [-10, 20, -10] }} transition={{ duration: 4, repeat: Infinity }} className="h-100 w-100 mt-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={hero2} className="d-block w-100 heroimg" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={hero6} className="d-block w-100 heroimg" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={hero3} className="d-block w-100 heroimg" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={hero5} className="d-block w-100 heroimg" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={hero7} className="d-block w-100 heroimg" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={hero4} className="d-block w-100 heroimg" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 text-lg-start text-center p-4">
                            <div className="p-4" style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)", borderRadius: "12px", width: "100%", backgroundColor: "white" }}>
                                <h1 className="mb-4 text-primary fw-bold">
                                    Welcome to <br />
                                    <span className="text-dark">D.S Preschool and Daycare</span>
                                </h1>
                                <p className="text-secondary mb-4 text-dark" style={{ fontSize: "1.2rem" }}>
                                    D.S Educational Trust Preschool and Daycare provides a foundation for learning both socially and academically
                                </p>
                                <ul
                                    className="list-unstyled text-secondary text-dark"
                                    style={{ fontSize: "1rem", lineHeight: "1.8" }}
                                >
                                    <li className="mb-2">
                                        D.S Preschool and Daycare, located in BTM, Bengaluru, offers a friendly and supportive environment where children can thrive through play and exploration. The preschool's curriculum is designed to promote holistic development, focusing on cognitive, emotional, and social growth.
                                    </li>
                                    <li className="mb-2">
                                        Enroll your child in this play school for a wonderful start to their learning journey.
                                    </li>
                                </ul>
                                <div className="d-flex gap-2 mt-4 justify-content-lg-start justify-content-center">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing"
                                        className="btn btn-lg px-4 shadow-sm"
                                    >
                                        Reach us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sky"></div>
                <div className="sun"></div>
                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>
                <div className="cloud cloud3"></div>
                <div className="cloud cloud4"></div>
                <div className="hill"></div>
            </div>
        </div>
    )
}

export default Hero;