import gameImage from "../assets/pokemons.jpeg";
import { useState } from "react";
import SelectionBox from "./SelectionBox";

function PictureContainer(props) {
  const [displayInformation, setDisplayInformation] = useState({});
  const [userGuessLocation, setUserGuessLocation] = useState({});
  const [showSelection, setShowSelection] = useState(false);
  const [pokemonsFound, setPokemonsFound] = useState({
    pichu: false,
    plusle: false,
    minun: false,
  });

  const handleClick = (e) => {
    // First check to see if game started
    if (!props.gameStarted) {
      console.log("Game Not Started");
      return;
    }

    setDisplayInformation({
      position: "absolute",
      left: e.nativeEvent.offsetX,
      top: e.nativeEvent.offsetY,
    });
    setUserGuessLocation({
      xPercentage: (e.nativeEvent.offsetX / e.target.clientWidth) * 100,
      yPercentage: (e.nativeEvent.offsetY / e.target.clientHeight) * 100,
    });
    setShowSelection(true);
  };

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
      props.setGameWon(true);
      console.log("winner winner chicken dinner");
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

  return (
    <div className="PictureContainer">
      <img
        className="pictureContainer-image"
        src={gameImage}
        onClick={handleClick}
        alt=""
      />
      {showSelection ? (
        <SelectionBox
          displayInformation={displayInformation}
          userGuessLocation={userGuessLocation}
          setShowSelection={setShowSelection}
          handleFoundPokemon={handleFoundPokemon}
        />
      ) : null}
    </div>
  );
}
export default PictureContainer;
