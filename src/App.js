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
      />
      <PictureContainer gameStarted={gameStarted} setGameWon={setGameWon} />
      {gameStarted ? null : (
        <UserForm handleFormSubmission={handleFormSubmission} />
      )}
    </div>
  );
}

export default App;
