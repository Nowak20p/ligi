import './glowna.css';
import yamal from './yamal.jpg';

function Glowna() {
  return (
    <div>
      <div className="opis1 rounded">
        <h3>Witaj!</h3>
        <p>
          Witaj na mojej stronie, poświęconej piłce nożnej! Wspaniale że tu
          trafiłeś. Ta strona powstała z myślą o wszystkich miłośnikach sportu,
          zwłaszcza tych, którzy kochają piłke. Niezależnie od tego, czy
          interesujesz się wynikami największych lig, czy po prostu czerpiesz
          radość z oglądania piłki nożnej, jesteś tu mile widziany :)
        </p>
      </div>

      <div className="kontener">
        <div className="tlo1 rounded"></div>
        <img src={yamal} alt="lamine yamal" className="yamal rounded" />
      </div>
      <div className="opis1 rounded">
        <h3>Co tu znajdziesz?</h3>
        <p>
          Na mojej stronie znajdziesz najnowsze informacje zarówno o Premier
          League, jak i La Liga. Bez względu na to, czy interesuje Cię
          rywalizacja w hiszpańskiej czy angielskiej lidze, zapewniam Cię, że
          będziesz miał dostęp do aktualnych tabel ligowych, które pozwolą Ci
          śledzić pozycje Twoich ulubionych drużyn. Ponadto, dzięki wyszukiwarce
          zawodników, będziesz mógł zgłębić szczegóły dotyczące konkretnych
          graczy. Wszystko to po to, abyś mógł cieszyć się pełnym spektrum
          informacji o futbolu na najwyższym poziomie!
        </p>
      </div>
    </div>
  );
}
export default Glowna;
