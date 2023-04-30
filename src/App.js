import Home from "./components/Home/Home";
import Coinform from "./components/CoinForm/Coinform";
import Coin from "./components/Coin/Coin";
import axios from "axios";
import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch1] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const setSearch = (search) => {
    setSearch1(search);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">
      <Home />
      <Coinform setSearch={setSearch} />
      <div className="coin-container">
        {filteredCoins.map((coin) => {
          return (
            <>
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
