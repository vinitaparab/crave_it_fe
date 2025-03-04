import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topFeedData } from "../topFoodBar";
import CarouselItem from "./CarouselItem";



 const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  };
  return (
    <div>
      <Slider {...settings}>
        {topFeedData.map((item)=><CarouselItem
      image={item.image} title={item.title}/>)}
      </Slider>
    </div>
  );
};
export default MultiItemCarousel;
