import "./App.css";
import image from "./assets/img/launch-home.png";
import Navbar from "./Navbar";

let isAscending =  true

function switchSort() {
  let btn = document.getElementById('btnSort')

  if (isAscending == true) {
    btn.innerText = 'Sort Descending'
    isAscending =false
  } else if (isAscending == false) {
    btn.innerText = 'Sort Ascending'
    isAscending =true
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
            <button className="appButton">Filter by Year</button>
            <button className="appButton" onClick={()=>switchSort()} id='btnSort'>Sort Ascending</button>
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
