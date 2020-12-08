import "./App.css";
import image from "./assets/img/launch-home.png";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="appContainer">
        <img className="appImage" src={image} />
        <div className='appTest'></div>
      </div>
    </div>
  );
}

export default App;
