import "./App.css";
import { useState, useEffect } from "react";
import PictureContainer from "./components/PictureContainer";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import EndGame from "./components/EndGame";
import LeaderBoard from "./components/LeaderBoard";
import WebFooter from "./components/WebFooter";
// Firestore
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./config";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
  // Display LeaderBoard while game hasn't started
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [hideForm, setHideForm] = useState(false);

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

  // Rename to toggle
  const handleShowLeaderBoard = () => {
    if (!hideForm) {
      if (!gameStarted) {
        setHideForm(true);
        setShowLeaderBoard(true);
      } else {
        alert("Check our leader-board after the game - the time is ticking!");
      }
    } else {
      setShowLeaderBoard(false);
      setHideForm(false);
    }
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
        handleShowLeaderBoard={handleShowLeaderBoard}
      />
      <PictureContainer
        gameStarted={gameStarted}
        gameWon={gameWon}
        handleFoundPokemon={handleFoundPokemon}
        foundPichu={foundPichu}
        foundPlusle={foundPlusle}
        foundMinun={foundMinun}
      />
      <WebFooter />
      {gameStarted ? null : (
        <UserForm
          handleFormSubmission={handleFormSubmission}
          hideForm={hideForm}
        />
      )}
      {gameWon ? (
        <EndGame
          setShowLeaderBoard={setShowLeaderBoard}
          gameOver={gameWon}
          userName={userName}
          userTime={userTime}
        />
      ) : null}
      {showLeaderBoard ? <LeaderBoard /> : null}
    </div>
  );
}

library.add(faCheckSquare, faTrophy, faGithub);
export default App;
