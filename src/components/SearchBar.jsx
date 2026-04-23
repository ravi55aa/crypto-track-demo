import React from "react";

const SearchBar = (props) => {
  let { setCrypto } = props;
  return (
    <div className="py-1 px-16 mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full mx-auto">
          <h2 className="capitalize text-center font-thin pb-2 lg:text-[34px] md:text-[28px] text-[18px]    text-[#fff]">
            Crypto prices by market cap
          </h2>
          <input
            type="text"
            placeholder="Search Your Crypto..."
            onChange={(e) => {setCrypto(e.target.value)}}
            className="opacity-80 w-full text-start font-thin outline-none lg:text-[27px] text-14px border-y-2 border-x-2 text-[#fff] bg-transparent border-[#fff] rounded-lg px-4 py-1 font-serif "
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
