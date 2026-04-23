import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./slider2.css";
import logo from "../assets/cryptoImages/logo.png";

let CenterMode = (props) => {
  let { cryptos } = props;
  let [slicks, setSlicks] = useState(4);
  //sets no.of slicks on
  //basis of window sizw
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 500) {
      setSlicks(1);
    } else if (e.target.innerWidth < 910) {
      setSlicks(2);
    } else if (e.target.innerWidth < 1110) {
      setSlicks(3);
    } else {
      setSlicks(4);
    }
  });
  //slick-slide setting
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slicks,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cryptos.map((ele, i) => {
          return (
            <div key={i} className="h-full relative pr-3  leading-loose">
              {/* image into box  */}
              <div className="h-1/2 w-full pb-2 px-2 flex justify-center overflow-hidden">
                <img src={ele.image} width={80} alt="image" />
              </div>
              {/* text into box  */}
              <h4
                className="pt-2 opacity-80 text-[#46114a] capitalize text-base flex text-20px 
                sm:text-[25px] md:text-[30px] tracking-wide font-bold justify-around"
              >
                {ele.symbol}
                <span
                  className="text-[#12a76d] font-semibold 
                  text-15px sm:text-[20px] md:text-[25px] text-center opacity-85"
                >
                  {String(ele.high_24h).length > 5
                    ? String(ele.high_24h).substring(0,5) + "%" + " .."
                    : ele.high_24h}
                </span>
              </h4>
              <h2
                className="font-semibold 
                text-6px sm:text-[20px] pt-2 tracking-tight font-serif text-[#d5ecfb] md:text-[25px] text-center opacity-85"
              >
                {ele.ath}
              </h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CenterMode;
