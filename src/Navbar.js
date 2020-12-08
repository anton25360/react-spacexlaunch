import "./Navbar.css";
import logo from "./assets/spacex-logo.png";

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src={logo} />
    </div>
  );
}

export default Navbar;
