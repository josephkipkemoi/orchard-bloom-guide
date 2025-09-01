import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ImageSlider.jsx
import Slider from "react-slick";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
            style={{ height: "380px", display: "block" }}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto rounded-lg shadow-md object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
