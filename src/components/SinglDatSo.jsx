import React from "react";
import logo from "../assets/cryptoImages/logo.png";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { colors } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const SinglDatSo = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];
  let data = [
    { p: "Rank", v: 2 },
    { p: "MarketCaps", v: "$ 425,306 M" },
    { p: "CurrentPrices", v: "$ 3,608, 08" },
  ];
  return (
    <div className="px-3 bg-[#111111] h-[600px] relative">
      <Link to="/">
        <Button className="absolute left-3  top-16" color="warning" variant="contained">
          Home
        </Button>
      </Link>
      <div className="flex sm:flex-col flex-wrap  ">
        <div className="w-full gap-x-10 flex ">
          <div className="w-1/3 justify-center flex flex-col bg-[#fff] py-2 px-2 h-screen">
            <img
              src={logo}
              width={120}
              className="self-center pb-4"
              alt="logo"
            />
            <h2 className="pb-2 font-bold text-center text-[46px]">
              Ethererem
            </h2>
            <p className="opacity-55 px-4 text-justify pb-2 text-[16px]">
              Etherem is a smarl contract platform that enables devepers to
              build tokens amd deventralized applications dapps
            </p>
            {data.map((ele, i) => {
              return (
                <h2
                  key={i}
                  className=" text-center px-4 font-bold text-[#000] text-[30px] pb-2"
                >
                  {ele.p} :
                  <span className="opacity-60 font-light text-[35px]">
                    {" "}
                    {ele.v}
                  </span>
                </h2>
              );
            })}
          </div>
          <div className="w-2/3 bg-transparent pt-2 pb-3 px-5 ">
            <LineChart
              className="bg-[#fff] text-[#fff]"
              height={420}
              series={[
                { data: uData, label: "Etherem", area: true, showMark: true },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  display: "block",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglDatSo;
