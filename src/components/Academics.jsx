import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Academics.css";

function Academics() {
  const academics = [
    { id: 1, link:"https://en.wikipedia.org/wiki/Labrador_Retriever" ,image: "src/assets/breeds/Labrador.jpg", name: "Toddler", description:"" },
    { id: 2, link:"https://en.wikipedia.org/wiki/Dobermann" ,image: "src/assets/breeds/doberman.jpg", name: "Play group", description:"" },
    { id: 3, link:"https://en.wikipedia.org/wiki/Shih_Tzu" ,image: "src/assets/breeds/shih-tzu3.webp", name: "Nursery", description:"" },
    { id: 4, link:"https://en.wikipedia.org/wiki/German_Shepherd" ,image: "src/assets/breeds/German-shepherd.jpg", name: "LKG", description:"" },
    { id: 5, link:"https://en.wikipedia.org/wiki/Pug" ,image: "src/assets/breeds/PUG.jpg", name: "UKG", description:"" },
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
      id="popular-breeds"
      style={{ textAlign: "center", padding: "50px", backgroundColor: "#f3e5f5"}}
    >
      <h2 >Academics</h2>
      <Slider {...settings} style={{ padding: "20px 0" }}>
        {academics.map((academic) => (
          <div key={academic.id} style={{ padding: "10px", textAlign: "center" }}>
            <div
              style={cardStyle}
              className="card">
              <img
                src={academic.image}
                alt={academic.name}
                style={imageStyle}
              />
              <h3 style={titleStyle}>{academic.name}</h3>
              <p style={descriptionStyle}>{academic.description}</p>
              <a style={buttonStyle} className="btn btnp" href={academic.link} target="new">
                Know More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

const cardStyle = {
  width: "80%",
  height: "350px", // Fixed height for cards
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin:'10%' 
};

const imageStyle = {
  width: "100%",
  height: "150px", // Fixed height for images
  // objectFit: "contain",
  borderRadius: "10px",
  backgroundPosition:'center',
  backgroundSize:'auto'
};

const titleStyle = {
  margin: "10px 0",
  fontSize: "18px",
  fontWeight: "bold",
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#555",
  height: "60px", // Fixed height for descriptions
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3, // Limit to 3 lines
  WebkitBoxOrient: "vertical",
};

const buttonStyle = {
  // marginTop: "auto",
  padding: "10px 20px",
  backgroundColor: "#6200ea",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
};

export default Academics;
