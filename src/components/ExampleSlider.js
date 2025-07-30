 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ExampleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="slider-container" style={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        <div><img src="./assets/images/slider1.jpg" alt="Slide 1" /></div>
        <div><img src="/assets/images/slider2.jpg" alt="Slide 2" /></div>
        <div><img src="/assets/images/slider3.jpg" alt="Slide 3" /></div>
      </Slider>
    </div>
  );
};

export default ExampleSlider;
