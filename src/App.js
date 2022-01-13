import "./App.css";
import { useState, useEffect } from "react";
import PictureContainer from "./components/PictureContainer";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import EndGame from "./components/EndGame";
// Firestore
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./config";

function App() {
  // User information
  const [userName, setUserName] = useState("");
  const [userTime, setUserTime] = useState(-1);
  // Game State
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  // Pokemon State
  const [foundPichu, setFoundPichu] = useState(false);
  const [foundPlusle, setFoundPlusle] = useState(false);
  const [foundMinun, setFoundMinun] = useState(false);

  useEffect(() => {
    const firebaseAppConfig = getFirebaseConfig();
    initializeApp(firebaseAppConfig);
  }, []);

  const handleFoundPokemon = (pokemonName) => {
    if (pokemonName === "pichu") {
      setFoundPichu(true);
    } else if (pokemonName === "plusle") {
      setFoundPlusle(true);
    } else if (pokemonName === "minun") {
      setFoundMinun(true);
    }
  };

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
        gameWon={gameWon}
        handleFoundPokemon={handleFoundPokemon}
      />
      {gameStarted ? null : (
        <UserForm handleFormSubmission={handleFormSubmission} />
      )}
      {gameWon ? <EndGame userName={userName} userTime={userTime} /> : null}
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
