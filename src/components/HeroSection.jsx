import React from "react";
import { HEROSECTION } from "../Constants";
import Slicker from "./Slicker";
const HeroSection = (props) => {
  let {  setDatas } = props;
  return (
    <div className={`imageHOlder px-4  md:px-8 lg:px-10 pb-5 lg:pb-10 md:pb-8`}>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex align-center flex-col justify-center pb-14">
            <h2
              className=" text-[41px] text-[#feee5dfe] tracking-wide sm:text-[55px] first-letter:capitalize 
                            font-extrabold opacity-90 text-center px-1 pb-2 md:pb-3"
            >
              {HEROSECTION.TITLE}
            </h2>
            <p className="text-center sm:text-24px text-[12px] text-[#e4e4e4] font-thin tracking-wider opacity-60">
              {HEROSECTION.PARA}
            </p>
          </div>
          <div className=" text-center sm:w-3/4 md:px-3 px-5 lg:px-0 md:pt-1 text-[40px] mx-auto h-fit ">
            <Slicker setDatas={setDatas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
