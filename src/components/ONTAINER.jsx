import React, { useState, useEffect } from "react";
import Herosection from "./HeroSection";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Container = () => {
  const [getDatas, setDatas] = useState([]);
  const [filterData, setFiltDatas] = useState(getDatas);
  console.log(getDatas[0]);
  useEffect(() => {
    setFiltDatas(getDatas);
  }, []);
  function setCrypto(inp) {
    let newData = getDatas.filter((ele) => {
      let str = ele.name.toLowerCase();
      return str.includes(inp.toLowerCase());
    });
    if (newData) {
      setFiltDatas(newData);
    } else {
      setFiltDatas(getDatas);
    }
  }
  return (
    <div>
      <Herosection setDatas={setDatas} />
      <SearchBar setCrypto={setCrypto} />
      <Table gotTheDatas={filterData ? filterData : getDatas} />
    </div>
  );
};

export default Container;
