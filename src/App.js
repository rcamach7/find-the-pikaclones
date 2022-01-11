import "./App.css";
import { useState } from "react";
import PictureContainer from "./components/PictureContainer";
import Navbar from "./components/Navbar";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameToggle = () => {
    if (gameStarted) {
      setGameStarted(false);
    } else {
      setGameStarted(true);
    }
  };

  return (
    <div className="App">
      <Navbar gameStarted={gameStarted} startGameToggle={startGameToggle} />
      <PictureContainer gameStarted={gameStarted} />
      {gameStarted ? null : <UserForm />}
    </div>
  );
}

const UserForm = () => {
  return (
    <form className="UserForm">
      <div className="form-gameRules">
        <p className="form-title">Game Information</p>
        <ul>
          <li>
            -Find 3 Pokemons: Minun, Pichu, and Plusle (see icons above for
            reference)
          </li>
          <li>-You will be timed as soon as you select start game.</li>
          <li>
            -Check out the records page to see how you did compared to others!
          </li>
        </ul>
      </div>
      <br />
      {/* BEGIN FORM INPUT */}
      <label htmlFor="name">Enter Your Nickname:</label> <br />
      <input type="text" id="name" /> <br />
      <input id="beginGame-btn" type="submit" value="Begin Game" />
    </form>
  );
};

export default App;
