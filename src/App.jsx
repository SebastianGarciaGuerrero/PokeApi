import "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokeResultado from "./views/Pokeresultado";
import Error from "./views/Error";
import Contexto from "./context/Contexto";

function App() {
  const [data, setData] = useState([]);

  const pokeApi = "https://pokeapi.co/api/v2";

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setData(data.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData(`${pokeApi}/pokemon?limit=10000`);
  }, []);

  return (
    <>
      <Contexto.Provider value={{ data }}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:name" element={<PokeResultado />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </>
  );
}

export default App;
