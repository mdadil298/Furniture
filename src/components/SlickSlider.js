import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "./SlickSlider.css"; // optional custom styles

const SlickSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const images = [
    "/assets/images/slider1.jpg",
    "/assets/images/slider2.jpg",
    "/assets/images/slider3.jpg",
    "/assets/images/slider4.jpg"
  ];

  return (
    <div className="slick-wrapper">
      {/* Main Slider (slider-for) */}
      <Slider
        asNavFor={nav2}
        ref={slider1}
        arrows={false}
        fade={true}
        className="slider-for"
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} className="main-img" />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider (slider-nav) */}
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slider-nav"
        centerMode={true}
        arrows={true}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Thumb ${index}`} className="thumb-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;

