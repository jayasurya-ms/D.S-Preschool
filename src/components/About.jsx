import React from "react";
import "../style/About.css";

// ✅ Import images the correct way
import aboutUsImage from "../assets/aboutus.png";
import logoImage from "../assets/logo.jpg";

function About() {
  return (
    <section id="About" style={{ backgroundColor: "#f3e5f5" }}>
      <div className="spacer w-100"></div>
      <div className="p-4">
        <div className="w-100 d-flex justify-content-center p-3">
          <img src={aboutUsImage} alt="Why Choose Us" className="Title" />
        </div>
        <div className="row m-0">
          <div className="col-md-4 p-3 d-flex justify-content-center align-items-center">
            <img src={logoImage} alt="about img" className="rounded-circle about-img shadow-lg" />
          </div>
          <div className="col-md-8 p-3 shadow-lg rounded-3">
            <h1 className="p-2 about-head">Why Choose Us?</h1>
            <h2 className="about-heading">
              D.S Educational Trust Preschool and Daycare is one of the finest schools in BTM layout.
            </h2>

            <p>
              School management takes extra efforts for the care and safety of kids and staffs.
            </p>
            <p>
              Children are taught practical things and they have exercise activities as part of their everyday schedule,
              to stay fit. Caretakers, staff, and management put in a lot of effort to build a strong foundation for the kids.
            </p>
            <a
              href="https://forms.gle/2nNudGuLeSpWeQ1Y9" target="new"
              className="btn btn-lg px-4 shadow-sm"
              style={buttonStyle}
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#8e44ad",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default About;
