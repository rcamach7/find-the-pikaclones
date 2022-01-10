import "./App.css";
import gameImage from "./pokemons.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PictureContainer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <p>
        Navbar to include icons of characters, start button, and records button.
      </p>
    </nav>
  );
}

function PictureContainer() {
  return (
    <div className="PictureContainer">
      <img className="pictureContainer-image" src={gameImage} alt="" />
    </div>
  );
}

export default App;
