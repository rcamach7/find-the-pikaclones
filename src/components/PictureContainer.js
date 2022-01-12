import gameImage from "../assets/pokemons.jpeg";
import { useState } from "react";
import SelectionBox from "./SelectionBox";

function PictureContainer(props) {
  const [displayInformation, setDisplayInformation] = useState({});
  const [userGuessLocation, setUserGuessLocation] = useState({});
  const [showSelection, setShowSelection] = useState(false);

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
          handleFoundPokemon={props.handleFoundPokemon}
        />
      ) : null}
    </div>
  );
}
export default PictureContainer;
