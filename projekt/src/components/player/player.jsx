import React, { useState } from 'react';
import './player.css';
function Player() {
  const [playerName, setPlayerName] = useState('');
  const [playerInfo, setPlayerInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`
      );
      const data = await response.json();
      if (data.player) {
        setPlayerInfo(data.player[0]); // to jest ten pierwszy co wyskoczy
        setError(null);
      } else {
        setError('Nie ma takiego ziomka');
        setPlayerInfo(null);
      }
    } catch (error) {
      console.error('Problem z odebranniem danych o zawodniku:', error);
      setError('Problem z odebranniem danych o zawodniku:');
    }
  };

  return (
    <div>
      <h1 className="text-center">Znajdz zawodnika/zawodniczke</h1>
      <div className="container-fluid">
        <form onSubmit={handleSubmit} className="d-flex wpisz" role="search">
          <input
            type="text"
            placeholder="Wpisz zawodnika"
            value={playerName}
            onChange={handleInputChange}
            className="form-control me-2 "
          />
          <button type="submit" className="btn btn-outline-primary">
            Szukaj
          </button>
        </form>
      </div>
      {error && <p>{error}</p>}
      {playerInfo && (
        <div class="container mx-auto dane border border-primary dane_zaw">
          <div className="dane_ramka">
            <h2>Informacje o sportowcu</h2>
            {
              <img
                src={playerInfo.strThumb}
                alt="zdjecie zawodnika"
                className="zawodnik_zdj"
              />
            }
          </div>
          <div className="dane_zaw2">
            <p className="info">
              <p>Imie i Nawisko:</p> <b>{playerInfo.strPlayer}</b>
            </p>
            <p className="info">
              <p>Pozycja:</p> <b>{playerInfo.strPosition}</b>
            </p>
            <p className="info">
              <p>Narodowość:</p> <b>{playerInfo.strNationality}</b>
            </p>
            <p className="info">
              <p>Klub:</p> <b>{playerInfo.strTeam}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
