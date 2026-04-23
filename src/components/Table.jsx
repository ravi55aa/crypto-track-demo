import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
const Table = (props) => {
  let { gotTheDatas } = props;

  return (
    <div className="pb-20 pt-3 bg-black px-16 mx-auto  overflow-hidden ">
      <div className="flex flex-wrap">
        <div className={`w-full h-[620px] overflow-y-scroll`}>
          {/* sets the caption */}
          <table className="w-full  border-collapse  table-auto">
            <thead className="table-fixed bg-transparent">
              <tr className="w-full  bg-yellow-500 text-[#fff">
                <th
                  className="ps-10 font-bold sm:text-[22px] text-[16px] md:text-[26px] 
                    border-x-4 py-0 w-2/5 text-start"
                >
                  Coin
                </th>
                <th
                   className="ps-10 font-bold sm:text-[22px] text-[16px] md:text-[26px] 
                  only-of-type:border-x-4 py-0 w-1/5 text-start"
                >
                  Price
                </th>
                <th
                  className="ps-10 font-bold sm:text-[22px] text-[16px] md:text-[26px] 
                    border-x-4 py-0 w-1/5 text-start"
                >
                  24 Change
                </th>
                <th
                  className="ps-10 font-bold sm:text-[22px] text-[16px] md:text-[26px] 
                    border-x-4 py-0 w-1/5 text-start"
                >
                  Market Cap
                </th>
              </tr>
            </thead>

            <tbody>
              {gotTheDatas.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td
                      className="border-x-2 border-b-2 text-base 
                      text-[21px] sm:text-[13] font-serif bg-black opacity-85 text-[#fff] ps-12 py-2 border-yellow-400"
                    >
                      <div className="flex gap-4">
                        <Link key={i} to="/soloData">
                          <img
                            src={ele.image}
                            className="rounded-full "
                            width={60}
                            alt="logo"
                          />
                        </Link>
                        <div>
                          <span className="text-[18px] opacity-80">
                            {ele.name}
                          </span>
                          <span className="block text-[14px] opacity-40">
                            {ele.symbol}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      className="border-x-2 text-[18px]  border-b-2 text-base 
                      sm:text-[12] font-serif bg-black opacity-85 text-[#fff] ps-12 py-2 border-yellow-400"
                    >
                      {ele.ath}
                    </td>
                    <td
                      className="border-x-2 text-[18px]  border-b-2 text-base 
                      sm:text-[12] font-serif bg-black opacity-85 text-[#2cb214] ps-12 py-2 border-yellow-400"
                    >
                      {ele.price_change_percentage_24h.length > 4
                        ? ele.price_change_percentage_24h
                        : String(ele.price_change_percentage_24h).substring(
                            0,
                            4
                          ) + "%.."}
                    </td>
                    <td
                      className="border-x-2 text-[18px]  border-b-2 text-base 
                      sm:text-[12] font-serif bg-black opacity-85 text-[#fff] ps-12 py-2 border-yellow-400"
                    >
                      {ele.market_cap.length > 8
                        ? ele.market_cap
                        : String(ele.market_cap).substring(0, 9) + ".."}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
