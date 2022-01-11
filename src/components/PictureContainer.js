import gameImage from "../assets/pokemons.jpeg";
import { useState } from "react";
import SelectionBox from "./SelectionBox";

function PictureContainer(props) {
  // Will send exact coordinates of where the user clicked, so we position our selection box.
  const [displayInformation, setDisplayInformation] = useState({});
  // Will send the location of where the user clicked (in percentage form) to analyze if user found pokemon.
  const [userGuessLocation, setUserGuessLocation] = useState({});
  // Basic toggle on showing selection menu or not.
  const [showSelection, setShowSelection] = useState(false);

  const handleSelectionHide = () => {
    setShowSelection(false);
  };

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

    // Debugging
    // printRelativeClickPercentage(
    //   e.nativeEvent.offsetX,
    //   e.nativeEvent.offsetY,
    //   e.target.clientWidth,
    //   e.target.clientHeight
    // );
    // console.log(`ClientX: ${e.clientX} | ClientY: ${e.clientY}`);
  };

  const printRelativeClickPercentage = (xClick, yClick, xLength, yLength) => {
    console.log(
      "Clicked " +
        (xClick / xLength) * 100 +
        "% of the X-Axis " +
        xClick +
        "px offsetX"
    );
    console.log(
      "Clicked " +
        (yClick / yLength) * 100 +
        "% on the Y-Axis " +
        yClick +
        "px offsetY"
    );
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
          handleSelectionHide={handleSelectionHide}
        />
      ) : null}
    </div>
  );
}
export default PictureContainer;
