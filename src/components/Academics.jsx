import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Academics.css";

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
      <div className="h-100 w-100 p-0 m-0 mt-5 bg-dark">
        hii
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