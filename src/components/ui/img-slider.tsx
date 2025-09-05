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
    <div className="w-full max-w-6xl mx-auto py-12 bg-green-700 p-10 shadow-lg" style={{ borderTopLeftRadius: "132px", borderBottomRightRadius: "132px" }}>
      <h1 style={{ color: "white" }} className="p-6 text-4xl font-bold">Gallery</h1>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-6">
            <img
              style={{ height: "auto", maxWidth:"420px", display: "block" }}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto rounded-lg mx-auto shadow-md object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
