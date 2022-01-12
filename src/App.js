import "./App.css";
import { useState, useEffect } from "react";
import PictureContainer from "./components/PictureContainer";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";

// Check why winner winner chicken dinner is not printing even though we have won the game.

function App() {
  const [userName, setUserName] = useState("");
  const [userTime, setUserTime] = useState(-1);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  // Game State
  const [foundPichu, setFoundPichu] = useState(false);
  const [foundPlusle, setFoundPlusle] = useState(false);
  const [foundMinun, setFoundMinun] = useState(false);

  const handleFoundPokemon = (pokemonName) => {
    if (pokemonName === "pichu") {
      setFoundPichu(true);
    } else if (pokemonName === "plusle") {
      setFoundPlusle(true);
    } else if (pokemonName === "minun") {
      setFoundMinun(true);
    }
  };

  // Set end game once all pokemon have been found
  useEffect(() => {
    if (foundPichu && foundMinun && foundPlusle) {
      setGameWon(true);
    }
  }, [foundMinun, foundPichu, foundPlusle]);

  const handleFormSubmission = (username) => {
    setUserName(username);
    setGameStarted(true);
  };

  return (
    <div className="App">
      <Navbar
        gameStarted={gameStarted}
        gameWon={gameWon}
        setUserTime={setUserTime}
        foundPichu={foundPichu}
        foundPlusle={foundPlusle}
        foundMinun={foundMinun}
      />
      <PictureContainer
        gameStarted={gameStarted}
        handleFoundPokemon={handleFoundPokemon}
      />
      {gameStarted ? null : (
        <UserForm handleFormSubmission={handleFormSubmission} />
      )}
      {/* Game Status */}
      <button
        onClick={() =>
          console.log(
            `Pichu: ${foundPichu}, Plusle: ${foundPlusle}, Minun: ${foundMinun}, Game Won: ${gameWon} UserTime: ${userTime}, UserName: ${userName}`
          )
        }
      >
        Game State
      </button>
    </div>
  );
}

export default App;
