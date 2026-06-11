import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pokedex from "./Pokedex";
import Search from "./Search";
import Pokemon from "./Pokemon"; // Imported Pokemon
import "./App.css";

const NavigationBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/pokedex">Pokédex</Link>
    <Link to="/search">Search</Link>
  </nav>
);

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pokemon" element={<Pokemon />} /> {/* Added Pokemon Route */}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;