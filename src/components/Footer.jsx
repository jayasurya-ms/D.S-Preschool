import React from "react";

function Footer() {
  return(
    <footer className="container-fluid p-3" style={{backgroundColor:"#7b1fa2", color:"white"}}>
      <div className="row">
        <div className="col-sm-12 col-md-5 d-flex flex-column justify-content-center p-5">
          <h3>D.S Preschool<sup>®</sup> </h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1801.8470745044322!2d77.59916163869747!3d12.941449430944958!3m2!1i1024!2i768!4f" loading="lazy" title="Bangalore" height={"200px"}></iframe>
        </div>
        <div className="col-sm-12 col-md-3 d-flex flex-column justify-content-center ps-5">
          <h4>Quick Links</h4>
          <p className="d-flex flex-column gap-1" style={{listStyleType:"none"}}>
            <a style={{textDecoration:'none'}} className="text-white" href="#home">Home</a>
            <a style={{textDecoration:'none'}} className="text-white" href="#popular-breeds">Academics</a>
            <a style={{textDecoration:'none'}} className="text-white" href="#gallery">Gallery</a>
            <a style={{textDecoration:'none'}} className="text-white" href="#why-choose-us">About Us</a>
            <a style={{textDecoration:'none'}} className="text-white" href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing" target="new">Contact</a>
          </p>
        </div>
        <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <div>
          <h3>Contact Us</h3>
          <a href="mailto:punithbunygowda8494@gmail.com" className="text-white text-decoration-none">Email:gowda8494@gmail.com</a><br />
          <p>Phone: +91 98765 43210</p>
          <p>Address: Lakkasandra Bangalore, India</p>
          <div style={{ marginTop: "10px" }} className="d-flex gap-3">
            <a href="https://www.facebook.com/share/15uwiiVMoo/" target="new"><i className="fab fa-facebook-f fs-2 text-white"></i></a>
            <a href="#" target="new"><i className="fab fa-twitter fs-2 text-white"></i></a>
            <a href="https://www.instagram.com/xx__darker__xx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="new"><i className="fab fa-instagram fs-2 text-white"></i></a>
          </div>
        </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-12 col-md-12 d-flex justify-content-center m-1 pt-4">
          <p className="m-0">Copyright &copy; {new Date().getFullYear()} All rights reserved /p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
