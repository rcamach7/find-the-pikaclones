import { useEffect, useState } from "react";
import pichu from "../assets/pichu.png";
import plusle from "../assets/plusle.png";
import minun from "../assets/minun.png";
import pokeball from "../assets/pokeball.png";

function Navbar(props) {
  const [pichuIcon, setPichuIcon] = useState(pichu);

  useEffect(() => {
    console.log(props.pokemonsFound);
  }, [props.pokemonsFound]);

  return (
    <nav className="Navbar">
      <Icon imageSrc={pichuIcon} />
      <Icon imageSrc={plusle} />
      <Icon imageSrc={minun} />

      <Timer
        gameStarted={props.gameStarted}
        gameWon={props.gameWon}
        setUserTime={props.setUserTime}
      />
      <button className="navbar-hallOfFame">Hall Of Fame</button>
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
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    if (props.gameStarted) {
      setStartTime(Date.now());
    }
  }, [props.gameStarted]);

  useEffect(() => {
    if (props.gameWon) {
      setEndTime(Date.now());
      props.setUserTime(Math.floor((startTime - endTime) / 1000));
    }
  }, [endTime, props, props.gameWon, startTime]);

  return <div className="Timer"></div>;
}

export default Navbar;
