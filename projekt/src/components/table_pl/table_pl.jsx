import React, { useState, useEffect } from 'react';
import './tabela_pl.css';

import logo from './premierleague.png';
function Table() {
  const [leagueTable, setLeagueTable] = useState([]);

  useEffect(() => {
    fetchLeagueTable();
  }, []);

  const fetchLeagueTable = async () => {
    try {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2023-2024'
      );
      const data = await response.json();
      setLeagueTable(data.table);
    } catch (error) {
      console.error('Problem z pobraniem tabeli:', error);
    }
  };

  return (
    <div className="App">
      <div className="naglowek_liga">
        <h1 className="text-center naglowek2_liga">
          Tabela Premier League 2023-2024
        </h1>

        {<img src={logo} alt="logo ligi" />}
      </div>
      <table className=" mx-auto text-center">
        <thead>
          <tr>
            <th>Pozycja</th>
            <th>Drużyn</th>
            <th>Herb</th>
            <th>Rozegrane</th>
            <th>Wygrane</th>
            <th>Remisy</th>
            <th>Przegrane</th>
            <th>Pkt</th>
          </tr>
        </thead>
        <tbody className="ligi">
          {leagueTable.map((team, index) => (
            <tr key={index}>
              <td className="border-top border-white ">{team.intRank}</td>
              <td className="border-top border-white ">{team.strTeam}</td>
              <td className="border-top border-white ">
                {<img src={team.strTeamBadge} alt="logo druzyny" />}
              </td>
              <td className="border-top border-white ">{team.intPlayed}</td>
              <td className="border-top border-white ">{team.intWin}</td>
              <td className="border-top border-white ">{team.intDraw}</td>
              <td className="border-top border-white ">{team.intLoss}</td>
              <td className="border-top border-white ">{team.intPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="legenda">
        <div className="liga_kolor1"></div>{' '}
        <div>Liga Mistrzów – faza grupowa</div>
        <div className="liga_kolor2"></div>{' '}
        <div>Liga Europy – faza grupowa</div>
        <div className="liga_kolor4"></div> <div>Spadek</div>
      </div>
    </div>
  );
}

export default Table;
