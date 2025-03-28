import './Gallery.css'
import React, { useState } from "react";
import { motion } from "framer-motion";

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
      transition: { delay: i * 0.7, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="Gallery"
      className="w-100 d-flex flex-column align-items-center p-0"
      onClick={handleGalleryClick}
    >
      <div className="spacer" w-100></div>
      <div className="spacer w-100"></div>
      <div className="d-flex justify-content-center align-items-center">
        <img src="src/assets/gallerylogo3.gif" alt="Gallery Logo" className='Gallery mt-4'/>
      </div>
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            "hero3.jpg",
            "hero1.jpg",
            "gal2.jpg",
            "gal4.jpg",
            "gal7.jpg",
            "gal6.jpg",
            "gal1.jpg",
            "gal8.jpg",
            "gal3.jpg",
          ].map((image, index) => (
            <div className="col" key={index}>
              <motion.div
                className="card mb-4"
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "visible"}
                custom={index}
              >
                <img
                  src={`src/assets/${image}`}
                  className="card-img-top rounded-3"
                  alt="Gallery Item"
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
