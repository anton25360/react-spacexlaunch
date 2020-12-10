import "./App.css";
import image from "./assets/img/launch-home.png";
import Navbar from "./Navbar";
import sort from "./assets/icon/sort.png";
import select from "./assets/icon/select.png";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAscending: true,
    };
  }

  render() {
    let switchSort = () => {
      let btn = document.getElementById("btnSort");
      if (this.state.isAscending === true) {
        btn.innerText = "Sort Descending";
        this.setState({ isAscending: false });
      } else if (this.state.isAscending === false) {
        btn.innerText = "Sort Ascending";
        this.setState({ isAscending: true });
      }
    };

    return (
      <div className="App">
        <Navbar />
        <div className="appContainer">
          <img className="appImage" src={image} alt="rocket launch" />
          <div className="appTest">
            <div className="appButtonsContainer">
              <button className="appButton">
                Filter by Year <img alt='select icon' src={select} />
              </button>
              <button className="appButton" onClick={() => switchSort()}>
                <span id="btnSort">Sort Ascending</span>{" "}
                <img alt='sort icon' className="appButtonSortIcon" src={sort} />
              </button>
            </div>
            <div className="appContent">
              <p>hellotherebro</p>
              <p>hellotherebro</p>
              <p>hellotherebro</p>
              <p>hellotherebro</p>
              <p>{this.state.count}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
