import "./Home.css";
import { MdOpenInNew } from "react-icons/md";

export default function Home() {
  var close = document.getElementsByClassName("closebtn");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function () {
        div.style.display = "none";
      }, 600);
    };
  }
  return (
    <nav>
      <div class="alert">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          &times;
        </span>
        Esta pagina es una practica que he usado para aprender a usar React y
        Axios , asi que es posible que contenga bugs .
      </div>
      <div className="home">
        <div>
          <h1>Crypto KA</h1>
          <h3>Toda la blockchain a un par de clicks</h3>
          <a href="https://khanesska.github.io" target="_blank">
            Saber mas sobre el creador <MdOpenInNew />
          </a>
        </div>{" "}
      </div>
    </nav>
  );
}
