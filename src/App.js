import "./App.css";
import { useState } from "react";
import PictureContainer from "./components/PictureContainer";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";

function App() {
  const [userName, setUserName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleFormSubmission = (username) => {
    setUserName(username);
    setGameStarted(true);
  };

  return (
    <div className="App">
      <Navbar gameStarted={gameStarted} />
      <PictureContainer gameStarted={gameStarted} />
      {gameStarted ? null : (
        <UserForm handleFormSubmission={handleFormSubmission} />
      )}
    </div>
  );
}

export default App;
