import "./Navbar.css";
import logo from "./assets/spacex-logo.png";
import reload from "./assets/icon/refresh.png";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLogoContainer">
        <img className="navbarLogoImage" src={logo} />
        <p className="navbarLogoText">LAUNCHES</p>
      </div>
      <div className="navbarReload">
        Reload Data <img className="navbarReloadIcon" src={reload} />
      </div>
    </div>
  );
}

export default Navbar;
