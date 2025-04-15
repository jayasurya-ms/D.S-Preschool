import "../style/Gallery.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Import all images
import gallogo from "../assets/gallogo.png";
import gal2 from "../assets/gal2.png";
import gal3 from "../assets/gal3.png";
import gal21 from "../assets/gal21.jpg";
import gal4 from "../assets/gal4.png";
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import gal13 from "../assets/gal13.jpg";
import gal10 from "../assets/gal10.jpg";
import gal11 from "../assets/gal11.jpg";
import gal20 from "../assets/gal20.jpg";
import gal8 from "../assets/gal8.jpg";
import gal14 from "../assets/gal14.jpg";
import gal15 from "../assets/gal15.jpg";
import gal16 from "../assets/gal16.jpg";
import gal17 from "../assets/gal17.jpg";
import gal18 from "../assets/gal18.jpg";
import gal19 from "../assets/gal19.jpg";
import gal12 from "../assets/gal12.jpg";
import gal5 from "../assets/gal5.png";
import gal22 from "../assets/gal22.jpg";
import gal23 from "../assets/gal23.jpg";

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  const handleGalleryClick = () => {
    setIsVisible(true);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.6, ease: "easeOut" }, // 0.07 instead of 0.7 to avoid long delays
    }),
  };

  // ✅ Use an array of imported images
  const galleryImages = [
    gal2, gal3, gal21, gal4, gal6, gal7, gal13, gal10, gal11, gal20,
    gal8, gal14, gal15, gal16, gal17, gal18, gal19, gal12, gal5, gal22, gal23,
  ];

  return (
    <section
      id="Gallery"
      className="w-100 d-flex flex-column align-items-center p-0"
      onClick={handleGalleryClick}
    >
      <div className="spacer w-100 "></div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <img src={gallogo} alt="Gallery Logo" className="Gallery w-50" />
      </div>
      <div className="container p-0 gallery-cant mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {galleryImages.map((image, index) => (
            <div className="col" key={index}>
              <motion.div
                className="gallery-card"
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "visible"}
                custom={index}
              >
                <img
                  loading="lazy"
                  src={image}
                  className="card-img-top gallery-img"
                  alt={`Gallery Item ${index + 1}`}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
