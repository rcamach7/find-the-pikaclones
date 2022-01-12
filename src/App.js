import "./App.css";
import { useState } from "react";
import PictureContainer from "./components/PictureContainer";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";

function App() {
  const [userName, setUserName] = useState("");
  const [userTime, setUserTime] = useState(-1);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [pokemonsFound, setPokemonsFound] = useState({
    pichu: false,
    plusle: false,
    minun: false,
  });

  const handleFoundPokemon = (pokemonName) => {
    const foundCopy = pokemonsFound;
    if (pokemonName === "pichu") {
      foundCopy.pichu = true;
    } else if (pokemonName === "plusle") {
      foundCopy.plusle = true;
    } else {
      foundCopy.minun = true;
    }
    // Update state
    setPokemonsFound(foundCopy);

    // Report win if finished.
    if (checkIfWon(foundCopy)) {
      setGameWon(true);
    }
  };

  const checkIfWon = (foundPokemon) => {
    let found = true;
    for (const key in foundPokemon) {
      if (foundPokemon[key] === false) {
        found = false;
      }
    }
    return found;
  };

  const handleFormSubmission = (username) => {
    setUserName(username);
    setGameStarted(true);
  };

  return (
    <div className="App">
      <Navbar
        pokemonsFound={pokemonsFound}
        gameStarted={gameStarted}
        gameWon={gameWon}
        setUserTime={setUserTime}
      />
      <PictureContainer
        gameStarted={gameStarted}
        handleFoundPokemon={handleFoundPokemon}
      />
      {gameStarted ? null : (
        <UserForm handleFormSubmission={handleFormSubmission} />
      )}
      <button onClick={() => console.log(pokemonsFound)}>yeehae</button>
    </div>
  );
}

export default App;
