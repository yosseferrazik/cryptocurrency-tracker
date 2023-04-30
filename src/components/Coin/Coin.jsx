import "./Coin.css";
import {
  BsCoin,
  BsFillCapslockFill,
  BsPercent,
  BsLink45Deg
} from "react-icons/bs";

export default function Coin({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap
}) {
  return (
    <div className="coin">
      <div className="content">
        <h2>
          <img src={image} className="img" alt="" />
          &nbsp;&nbsp;&nbsp;&nbsp; {name} ({symbol})
        </h2>
        <hr />
        <div className="price">
          <h3>
            <BsCoin /> Precio &nbsp;{" "}
          </h3>
          <p>{price} €</p>
        </div>
        <hr />
        <h3>
          <BsFillCapslockFill /> Volumen
        </h3>
        <p>{volume} €</p>
        <hr />
        <h3>
          <BsPercent /> De cambio
        </h3>
        <p className={`${priceChange < 0 ? "red" : "green"}`}>
          {priceChange} %
        </p>
        <br />
        <a
          href={
            "https://www.coingecko.com/en/coins/" +
            name.toLowerCase().replace(/ /g, "-")
          }
          target="_blank"
          className="know"
          rel="noreferrer"
        >
          <BsLink45Deg /> Saber mas
        </a>
      </div>
    </div>
  );
}
