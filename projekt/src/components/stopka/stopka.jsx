import './stopka.css';
import logo from './logo.png';

function Stopka() {
  return (
    <>
      <div className="stopka">
        <img src={logo} alt="react logo" class="logo" />
        <a href="mailto:k.nowak.p20@gmail.com">Zapraszam do kontaktu</a>
      </div>
      <div className="stopka border-top border-white stopka2">
        Autor: <b> Kacper Nowak</b>
      </div>
    </>
  );
}
export default Stopka;
