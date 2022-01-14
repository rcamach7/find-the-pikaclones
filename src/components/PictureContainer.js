import gameImage from "../assets/pokemons.jpeg";
import { useState, useRef, useEffect } from "react";
import SelectionBox from "./SelectionBox";

function PictureContainer(props) {
  const img = useRef(null);
  const [displayInformation, setDisplayInformation] = useState({});
  const [userGuessLocation, setUserGuessLocation] = useState({});
  const [showSelection, setShowSelection] = useState(false);

  useEffect(() => {
    if (!props.gameStarted || props.gameWon) {
      img.current.style.cssText = "filter: blur(5px);";
    } else {
      img.current.style.cssText = "filter: ;";
    }
  }, [props.gameStarted, props.gameWon]);

  const handleClick = (e) => {
    // First check to see if game started or is over
    if (!props.gameStarted) {
      console.log("Game Not Started");
      return;
    } else if (props.gameWon) {
      console.log("Game Over");
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
        ref={img}
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
          foundPichu={props.foundPichu}
          foundPlusle={props.foundPlusle}
          foundMinun={props.foundMinun}
        />
      ) : null}
    </div>
  );
}
export default PictureContainer;
