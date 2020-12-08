import "./Navbar.css";
import logo from "./assets/spacex-logo.png";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLogoContainer">
        <img className="navbarLogoImage" src={logo} />
        <p className="navbarLogoText">LAUNCHES</p>
      </div>
    </div>
  );
}

export default Navbar;
