import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Academics.css";

function Academics() {
  const academics = [
    { id: 1, image: "src/assets/academics2.jpg", name: "Play group", description: "Discovery and exploration, language development, new-age skills, and shaping scientific mindset." },
    { id: 2, image: "src/assets/academics1.png", name: "Nursery", description: "Enhancing interaction, cultivating creativity and improving imagination through art and music." },
    { id: 3, image: "src/assets/academics3.png", name: "LKG", description: "Age-appropriate learning and educational tools suited for individual pace." },
    { id: 4, image: "src/assets/academics6.avif", name: "UKG", description: "Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school." }
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section
      id="Academics"
      style={{ textAlign: "center", padding: "0 50px", backgroundColor: "#f3e5f5" }}
    >
      <div className=" spacer w-100 "></div>
      <div className="p-0">
        <img src="src/assets/acalogo.png" className="title" alt="academic" />
      </div>

      <div className=" p-0 m-0 w-100 h-100">
        {/* <h1 >Academics</h1> */}
        <Slider {...settings} className="div-a">
          {academics.map((academic) => (
            <div key={academic.id} className="div-ai">
              <div className="card">
                <img loading="lazy"
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
        <div class="daycare">
          <div class="daycare-section d-flex flex-column flex-lg-row align-items-center justify-content-between shadow-sm">

            <div class="col-lg-7">
              <h1 class="daycare-heading mb-3">Daycare Facility</h1>
              <p className="daycare-text">
                Our daycare facilities provide a child-friendly environment with a stimulating curriculum that includes
                various interest-focused activities for different age groups.
              </p>
              <ul class="daycare-list mt-3">
                <li>Trained and competent staff</li>
                <li>Open door policy for parents</li>
                <li>Headed by a visionary leadership team</li>
                <li>Our 12-month academic year allows for admissions into the daycare at any point during the year.</li>
              </ul>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0 text-center">
              <img src="https://via.placeholder.com/350x250" alt="Daycare Room" class="scalloped-image img-fluid"/>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}

const imageStyle = {
  width: "100%",
  height: "200px", // Fixed height for images
  // objectFit: "contain",
  borderRadius: "10px",
  backgroundPosition: 'center',
  backgroundSize: 'auto'
};

const titleStyle = {
  margin: "10px 0",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#7b1fa2"
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#555",
  height: "80px", // Fixed height for descriptions
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3, // Limit to 3 lines
  WebkitBoxOrient: "vertical",
};

export default Academics;