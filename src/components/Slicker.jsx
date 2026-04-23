import { useState, useEffect } from "react";
import CenterMode from "./Slider2";
const Slicker = (props) => {
  let { setDatas } = props;
  let [cryptos, setCrypotos] = useState([]);
  let [currency, setCurerncy] = useState(["usd"]);

  let fetchData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ZVshy37fG6NUkbCuoUdrBVfu",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.join(
        ""
      )}`,
      options
    )
      .then((response) => response.json())
      .then((response1) => {
        setDatas(response1);
        setCrypotos(response1);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, currency);

  //image
  //SYMBOL //24h ^%
  //$ATH

  return (
    <div>
      <CenterMode cryptos={cryptos} />
    </div>
  );
};
export default Slicker;
