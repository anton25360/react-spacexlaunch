import "./App.css";
import image from "./assets/img/launch-home.png";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="appContainer">
        <img className="appImage" src={image} alt="rocket launch" />
        <div className="appTest">
          <div className="appButtonsContainer">
            <button className="appButton">Filter by Year</button>
            <button className="appButton">Sort Ascending</button>
          </div>
          <div className="appContent">
            <p>hellotherebro</p>
            <p>hellotherebro</p>
            <p>hellotherebro</p>
            <p>hellotherebro</p>
            <p>hellotherebro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
