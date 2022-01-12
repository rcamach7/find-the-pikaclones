import { useState } from "react";

const SelectionBox = (props) => {
  // Represents position (in percentage) of pokemon located within our image.
  const [pichu] = useState({
    xPercentage: 89,
    yPercentage: 54,
  });
  const [plusle] = useState({
    xPercentage: 27.5,
    yPercentage: 83,
  });
  const [minun] = useState({
    xPercentage: 61,
    yPercentage: 80,
  });

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
        props.handleFoundPokemon("pichu");
      }
    } else if (selection === "plusle") {
      if (
        guess.xPercentage >= plusle.xPercentage - 2 &&
        guess.xPercentage <= plusle.xPercentage + 2 &&
        guess.yPercentage >= plusle.yPercentage - 2 &&
        guess.yPercentage <= plusle.yPercentage + 2
      ) {
        console.log("Found Plusle!");
        props.handleFoundPokemon("plusle");
      }
    } else {
      if (
        guess.xPercentage >= minun.xPercentage - 2 &&
        guess.xPercentage <= minun.xPercentage + 2 &&
        guess.yPercentage >= minun.yPercentage - 2 &&
        guess.yPercentage <= minun.yPercentage + 2
      ) {
        console.log("Found Minun!");
        props.handleFoundPokemon("minun");
      }
    }

    // After Every Selection, we now want to hide our selection form.
    props.setShowSelection(false);
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

export default SelectionBox;
