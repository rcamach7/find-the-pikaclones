import gameImage from "./pokemons.jpeg";
import { useState } from "react";

function PictureContainer() {
  // Represents position (in percentage) of pokemon located within our image.
  const [pichu] = useState([89, 54]);
  const [plusle] = useState([27.5, 83]);
  const [minun] = useState([61, 80]);
  const [selectionBox, setSelectionBox] = useState(null);

  const handleClick = (e) => {
    // Debugging
    printRelativeClickPercentage(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
      e.target.clientWidth,
      e.target.clientHeight
    );
    console.log(`ClientX: ${e.clientX} | ClientY: ${e.clientY}`);
    console.log(e);

    generateSelectionBox(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const generateSelectionBox = (x, y) => {
    const position = {
      display: "block",
      position: "absolute",
      left: x,
      top: y,
    };
    setSelectionBox(<div id="pokemon-selector" style={position}></div>);
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
      {selectionBox}
    </div>
  );
}

// TODO:
// * Wherever user clicks, generate a small div!

export default PictureContainer;
