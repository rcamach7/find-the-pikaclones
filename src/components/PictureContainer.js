import gameImage from "./pokemons.jpeg";
import { useState } from "react";

function PictureContainer() {
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

const SelectionBox = (props) => {
  // Represents position (in percentage) of pokemon located within our image.
  const [pichu] = useState({ xPercentage: 89, yPercentage: 54 });
  const [plusle] = useState({ xPercentage: 27.5, yPercentage: 83 });
  const [minun] = useState({ xPercentage: 61, yPercentage: 80 });

  // +- 2% of accuracy allowed
  const analyzeSelection = (selection) => {
    const guess = props.userGuessLocation;
    if (selection === "pichu") {
      if (
        guess.xPercentage >= pichu.xPercentage - 2 &&
        guess.xPercentage <= pichu.xPercentage + 2 &&
        guess.yPercentage >= pichu.yPercentage - 2 &&
        guess.yPercentage <= pichu.yPercentage + 2
      ) {
        console.log("Found Pichu!");
      }
    } else if (selection === "plusle") {
      if (
        guess.xPercentage >= plusle.xPercentage - 2 &&
        guess.xPercentage <= plusle.xPercentage + 2 &&
        guess.yPercentage >= plusle.yPercentage - 2 &&
        guess.yPercentage <= plusle.yPercentage + 2
      ) {
        console.log("Found Plusle!");
      }
    } else {
      if (
        guess.xPercentage >= minun.xPercentage - 2 &&
        guess.xPercentage <= minun.xPercentage + 2 &&
        guess.yPercentage >= minun.yPercentage - 2 &&
        guess.yPercentage <= minun.yPercentage + 2
      ) {
        console.log("Found Minun!");
      }
    }

    // After Every Selection, we now want to hide our selection form.
    props.handleSelectionHide();
  };

  return (
    <div id="pokemon-selector" style={props.displayInformation}>
      <p className="selector-item" onClick={() => analyzeSelection("pichu")}>
        Pichu
      </p>
      <p className="selector-item" onClick={() => analyzeSelection("plusle")}>
        Plusle
      </p>
      <p className="selector-item" onClick={() => analyzeSelection("minun")}>
        Minun
      </p>
    </div>
  );
};
export default PictureContainer;
