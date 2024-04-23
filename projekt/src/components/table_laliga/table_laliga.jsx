import React, { useState, useEffect } from 'react';
import './table_laliga.css';
import logo from './laliga.png';
function Table_La() {
  const [leagueTable, setLeagueTable] = useState([]);

  useEffect(() => {
    fetchLeagueTable();
  }, []);

  const fetchLeagueTable = async () => {
    try {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4335&s=2023-2024'
      );
      const data = await response.json();
      setLeagueTable(data.table);
    } catch (error) {
      console.error('Problem z pobraniem tabeli:', error);
    }
  };

  return (
    <div className="App">
      <div className="naglowek_laliga">
        <h1 className="text-center naglowek2_liga naglowek2_laliga">
          Tabela La Liga 2023-2024
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
        <tbody>
          {leagueTable.map((team, index) => (
            <tr key={index}>
              <td className="border-top border-white">{team.intRank}</td>
              <td className="border-top border-white">{team.strTeam}</td>
              <td className="border-top border-white">
                {<img src={team.strTeamBadge} alt="logo druzyny" />}
              </td>
              <td className="border-top border-white">{team.intPlayed}</td>
              <td className="border-top border-white">{team.intWin}</td>
              <td className="border-top border-white">{team.intDraw}</td>
              <td className="border-top border-white">{team.intLoss}</td>
              <td className="border-top border-white">{team.intPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="legenda">
        <div className="liga_kolor1"></div>{' '}
        <div>Liga Mistrzów – faza grupowa</div>
        <div className="liga_kolor2"></div>{' '}
        <div>Liga Europy – faza grupowa</div>
        <div className="liga_kolor3"></div>{' '}
        <div>Liga Konferencji Europy – eliminacje</div>
        <div className="liga_kolor4"></div> <div>Spadek</div>
      </div>
    </div>
  );
}

export default Table_La;
// https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4335&s=2023-2024
