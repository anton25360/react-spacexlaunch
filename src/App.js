import "./App.css";
import image from "./assets/img/launch-home.png";
import Navbar from "./Navbar";import sort from "./assets/icon/sort.png";
import select from "./assets/icon/select.png";

let isAscending = true;

function switchSort() {
  let btn = document.getElementById("btnSort");

  if (isAscending == true) {
    btn.innerText = "Sort Descending";
    isAscending = false;
  } else if (isAscending == false) {
    btn.innerText = "Sort Ascending";
    isAscending = true;
  }
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="appContainer">
        <img className="appImage" src={image} alt="rocket launch" />
        <div className="appTest">
          <div className="appButtonsContainer">
            <button className="appButton">
              Filter by Year <img src={select} />
            </button>
            <button
              className="appButton"
              onClick={() => switchSort()}
              id="btnSort"
            >
              Sort Ascending <img className="appButtonSortIcon" src={sort} />
            </button>
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
