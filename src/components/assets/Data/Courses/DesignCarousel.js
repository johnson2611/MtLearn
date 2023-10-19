import { DesignData } from "./DesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel() {
  const sliderSettings = {
    // fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="content">
      <h3 className="course-title">Design</h3>
      <Slider {...sliderSettings}>
        {DesignData.map((card, index) => (
          <div key={index} className="courset">
            <img
              alt={card.title}
              src={card.img}
              style={{ width: "300px", height: "200px" }}
            />
            <p className="coursetTitle">{card.title}</p>
            <h2 className="coursetDes">{card.description}</h2>
            <h5 className="coursetPrice">{card.price}</h5>
            <h5 className="courseRating">{card.rating}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}
