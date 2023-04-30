import "./Coinform.css";

export default function Coinform({ setSearch }) {
  const sendChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Pon el nombre de tu moneda ~(^-^)~ "
        className="coin-input"
        onChange={sendChange}
      />
    </form>
  );
}
