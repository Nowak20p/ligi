import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/table_pl/table_pl';
import Player from './components/player/player';
import Table_La from './components/table_laliga/table_laliga';
import Glowna from './components/glowna/glowna';
import Stopka from './components/stopka/stopka';
import logo from './img/logo.png';
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li class="nav-link">
              <img src={logo} alt="react logo" class="logo" />
            </li>
            <li class="nav-link">
              <NavLink to="/Glowna">Strona Główna</NavLink>
            </li>
            <li class="nav-link">
              <NavLink to="Table">Tabela Premier League</NavLink>
            </li>
            <li class="nav-link">
              <NavLink to="Table_la">Tabela La Liga</NavLink>
            </li>
            <li class="nav-link">
              <NavLink to="Player">Znajdz zawodnika</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Glowna" element={<Glowna />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/Table_la" element={<Table_La />} />
        </Routes>
      </Router>
      <Stopka></Stopka>
    </div>
  );
}

export default App;

// https://www.thesportsdb.com/free_sports_api
