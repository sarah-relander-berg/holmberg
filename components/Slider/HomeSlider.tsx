import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import ImgHome1 from "../../assets/home01.jpg";
import ImgHome2 from "../../assets/home02.jpg";
import ImgHome3 from "../../assets/home03.jpg";
import ImgHome4 from "../../assets/home04.jpg";
import ImgHome5 from "../../assets/home05.jpg";

function HomeSlider() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  const baseUrl = 'https://react-slick.neostack.com/img/react-slick';
  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        <div>
        <Image
			src={ImgHome1}
			alt="home1"
			className="w-full bg-gray-50 object-cover md:h-dvh aspect-square md:aspect-none md:max-h-dvh"
		/> 
        </div>
        <div>
        <Image
			src={ImgHome3}
			alt="home3"
			className="w-full bg-gray-50 object-cover md:h-dvh max-h-[calc(100dvh-5rem)] aspect-square md:aspect-none md:max-h-dvh"
		/> 
        </div>
        <div>
        <Image
			src={ImgHome4}
			alt="home4"
			className="w-full bg-gray-50 object-cover md:h-dvh max-h-[calc(100dvh-5rem)] aspect-square md:aspect-none md:max-h-dvh"
		/> 
        </div>
        <div>
        <Image
			src={ImgHome5}
			alt="home5"
			className="w-full bg-gray-50 object-cover md:h-dvh max-h-[calc(100dvh-5rem)] aspect-square md:aspect-none md:max-h-dvh"
		/> 
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;