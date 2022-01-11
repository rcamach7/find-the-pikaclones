import pichu from "../assets/pichu.png";
import plusle from "../assets/plusle.png";
import minun from "../assets/minun.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <Icon imageSrc={pichu} />
      <Icon imageSrc={plusle} />
      <Icon imageSrc={minun} />

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

export default Navbar;
