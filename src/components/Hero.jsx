import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="container-fluid p-0 m-0 row" id="home">
      <div className="col-md-5 col-sm-12 p-5 d-flex justify-content-center align-item-center">
        {/* <img src="src/Assets/heropic.jpg" alt="picture" className="h-100 w-75 img" style={{ borderRadius: "10%" }} /> */}
        <motion.div animate={{ y: [-10, 20, -10] }} transition={{ duration: 4, repeat: Infinity }} className="h-100 w-100 mt-5">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
             </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="src\assets\hero2.png " className="d-block w-100 heroimg" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="src\assets\hero6.png" className="d-block w-100 heroimg" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="src\assets\hero3.png " className="d-block w-100 heroimg" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="src\assets\hero5.png " className="d-block w-100 heroimg" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="src\assets\hero7.png " className="d-block w-100 heroimg" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="src\assets\hero4.png " className="d-block w-100 heroimg" alt="..."/>
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
      <div
        className="col-lg-7 col-md-6 col-sm-12 text-lg-start text-center p-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h1 className="mb-4 text-primary fw-bold">
          Welcome to <br />
          <span className="text-dark">D.S Preschool</span>
        </h1>
        <p className="text-secondary mb-4" style={{ fontSize: "1.2rem" }}>
          Join our loving community .
        </p>
        <ul
          className="list-unstyled text-secondary"
          style={{ fontSize: "1rem", lineHeight: "1.8" }}
        >
          <li className="mb-2">
            <i className="bi bi-check-circle text-success me-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum iste nesciunt expedita facilis quod dolorum inventore libero, placeat maxime modi odio veritatis ipsum quae necessitatibus. Sed, aliquid? Est, perferendis.
          </li>
          <li className="mb-2">
            <i className="bi bi-check-circle text-success me-2"></i> A dog is
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minus nam id perferendis autem! Illum vel esse accusantium eaque odit perferendis est provident reiciendis quod quia error, ipsam aliquid voluptatum?
          </li>
          <li className="mb-2">
            <i className="bi bi-check-circle text-success me-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi corrupti quibusdam animi ea inventore dolores, tenetur temporibus a labore reiciendis illo quia voluptates vero unde maiores alias dolor quos.
          </li>
          <li>
            <i className="bi bi-check-circle text-success me-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione saepe reiciendis id maxime mollitia et, molestias blanditiis quas ad odio sit facilis doloremque beatae corrupti sunt debitis quidem quibusdam.
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
    </section>
  )
}

const buttonStyle = { padding: "8px 16px", backgroundColor: "#8e44ad", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

export default Hero;
