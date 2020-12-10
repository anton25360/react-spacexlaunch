import "./Navbar.css";
import logo from "./assets/spacex-logo.png";
import reload from "./assets/icon/refresh.png";

function reloadData() {
    alert('reloading...')
}

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLogoContainer">
        <img alt='logo' className="navbarLogoImage" src={logo} />
        <p className="navbarLogoText">LAUNCHES</p>
      </div>
      <div className="navbarReload" onClick={()=>reloadData()}>
        Reload Data <img alt='reload' className="navbarReloadIcon" src={reload} />
      </div>
    </div>
  );
}

export default Navbar;
