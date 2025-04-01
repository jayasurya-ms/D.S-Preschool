import React from "react";
import '../style/Footer.css'

function Footer() {
  return (
    <footer className="d-flex flex-column justify-content-end w-100">
      <div className="w-100 d-flex align-items-end footer-design">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      <div className="row m-0">
        <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center footer p-4">
          <h3>D.S Preschool and Daycare<sup>®</sup> </h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.93101695287!2d77.60141817484035!3d12.91215518739778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15033bf4a257%3A0xfe40fbe6cbfd721a!2sD.S%20PRESCHOOL%20AND%20DAYCARE%20B.T.M%20Layout%20Bangalore.560076!5e0!3m2!1sen!2sin!4v1743241243056!5m2!1sen!2sin" loading="lazy" title="D.S Preschool" height={"80%"} width={"90%"}></iframe>
        </div>
        <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center footer m-0 ">
          <h4>Quick Links</h4>
          <div className="d-flex gap-5 m-2">
            <div>
              <p className="d-flex flex-column gap-2 quick-link" style={{ listStyleType: "none" }}>
                <a href="#home">Home</a>
                <a href="#popular-breeds">Academics</a>
                <a href="#gallery">Gallery</a>
              </p>
            </div>
            <div>
              <p className="d-flex flex-column gap-2 quick-link" style={{ listStyleType: "none" }}>
                <a href="#why-choose-us">About Us</a>
                <a href="#Faq">FAQ's</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing" target="new">Contact</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center footer m-0">
          <div className="contact">
            <h3>Contact Us Through</h3>
            <p><a href="mailto:punithbunygowda8494@gmail.com" className="text-white text-decoration-none"><b>Email:</b> gowda8494@gmail.com</a></p>
            <p><b>Phone:</b> +91 98765 43210</p>
            <p><b>Address:</b> Lakkasandra Bangalore, India</p>
          </div>
        </div>
      </div>
      <div className="m-0">
        <div className="row d-flex justify-content-center footer pt-4 pb-4 ">
          <p className="col-md-6 col-sm-12 m-0 mylink ">Copyright &copy; {new Date().getFullYear()} reserved </p><a className="mylink col-md-6 col-sm-12" href="https://wa.me/+919916446595?text=Hii,%20Can%20i%20get%20more%20info%20about%20Development"> Developed by Jayasurya M</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
