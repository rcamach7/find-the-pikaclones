import { useEffect, useState } from "react";
import pichu from "../assets/pichu.png";
import plusle from "../assets/plusle.png";
import minun from "../assets/minun.png";
import pokeball from "../assets/pokeball.png";

export default function Navbar(props) {
  return (
    <nav className="Navbar">
      <Icon imageSrc={props.foundPichu ? pokeball : pichu} />
      <Icon imageSrc={props.foundPlusle ? pokeball : plusle} />
      <Icon imageSrc={props.foundMinun ? pokeball : minun} />

      <Timer
        gameStarted={props.gameStarted}
        gameWon={props.gameWon}
        setUserTime={props.setUserTime}
      />
      <button
        onClick={() => props.handleShowLeaderBoard()}
        className="navbar-hallOfFame"
      >
        Hall Of Fame
      </button>
    </nav>
  );
}

function Icon(props) {
  return (
    <div className="navbar-icon">
      <img className="navbar-icon-picture" src={props.imageSrc} alt="" />
    </div>
  );
}

function Timer(props) {
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (props.gameStarted) {
      setStartTime(Date.now());
    }
  }, [props.gameStarted]);

  useEffect(() => {
    if (props.gameWon) {
      const finalTime = Math.floor((startTime - Date.now()) / 1000) * -1;
      props.setUserTime(finalTime);
    }
  }, [props, props.gameWon, startTime]);

  return <div className="Timer"></div>;
}
