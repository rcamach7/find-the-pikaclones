import "./App.css";
import PictureContainer from "./components/PictureContainer";

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

export default App;
