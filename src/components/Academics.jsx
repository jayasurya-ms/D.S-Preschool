import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Academics.css";

// ✅ Import images directly (Vite handles these properly)
import acalogo from "../assets/acalogo.png";
import academics1 from "../assets/academics1.png";
import academics2 from "../assets/academics2.jpg";
import academics3 from "../assets/academics3.png";
import academics6 from "../assets/academics6.avif";

function Academics() {
  const academics = [
    { id: 1, image: academics2, name: "Play group", description: "A fun, nurturing space where children begin their social and emotional journey through music, movement, sensory play, and exploration - building early communication skills and confidence." },
    { id: 2, image: academics1, name: "Nursery", description: "Fostering curiosity and independence through language development, motor skills, and early concepts like colors, shapes, and numbers - helping children engage with the world around them." },
    { id: 3, image: academics3, name: "LKG", description: "Foundational literacy and numeracy are taught through storytelling, hands-on activities, and group interaction - building basic reading, writing, and math skills creatively." },
    { id: 4, image: academics6, name: "UKG", description: "Prepares children for formal schooling with a focus on reading, writing, problem-solving, and social readiness - promoting critical thinking, discipline, and self-expression." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="Academics" style={{ textAlign: "center", padding: "0 50px", backgroundColor: "#f3e5f5" }}>
      <div className="spacer w-100"></div>
      <div className="p-0">
        <img src={acalogo} className="title" alt="academic" />
      </div>

      <div className="p-0 m-0 w-100 h-100">
        <Slider {...settings} className="div-a">
          {academics.map((academic) => (
            <div key={academic.id} className="div-ai">
              <div className="card">
                <img
                  loading="lazy"
                  src={academic.image}
                  alt={academic.name}
                  style={imageStyle}
                />
                <h3 style={titleStyle}>{academic.name}</h3>
                <p style={descriptionStyle}>{academic.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="h-100 w-100 p-0 pb-5 m-0 mt-5 d-flex justify-content-center">
        <div className="daycare">
          <div className="daycare-section d-flex flex-column flex-lg-row align-items-center justify-content-between shadow-sm">
            <div className="col-lg-7">
              <h1 className="daycare-heading mb-3">Daycare Facility</h1>
              <p className="daycare-text">
                Our daycare facilities provide a child-friendly environment with a stimulating curriculum that includes
                various interest-focused activities for different age groups.
              </p>
              <ul className="daycare-list mt-3">
                <li>Trained and competent staff</li>
                <li>Our 12-month academic year allows for admissions into the daycare at any point during the year.</li>
              </ul>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0 text-center">
              <img
                src="https://via.placeholder.com/350x250"
                alt="Daycare Room"
                className="scalloped-image img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const imageStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "10px",
  backgroundPosition: "center",
  backgroundSize: "auto",
};

const titleStyle = {
  margin: "10px 0",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#7b1fa2",
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#555",
  height: "140px",
  textOverflow: "ellipsis",
  display: "-webkit-box",
};

export default Academics;
