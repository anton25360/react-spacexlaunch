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
      dataArray: [],
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

    let getData = () => {
      fetch("https://api.spacexdata.com/v4/launches")
        .then((response) => response.json())
        .then((data) => {
          displayData(data);
        });
    };

    let displayData = (data) => {
      let size = data.length;
      let item = data[0]["name"]; //FalconSat
      console.log(item);
      let tempArray = this.state.dataArray
      tempArray.push(item)
      this.setState({ dataArray: tempArray });
    };

    return (
      <div className="App">
        <Navbar />
        <div className="appContainer">
          <img className="appImage" src={image} alt="rocket launch" />
          <div className="appTest">
            <div className="appButtonsContainer">
              <button className="appButton" onClick={getData}>
                Filter by Year <img alt="select icon" src={select} />
              </button>
              <button className="appButton" onClick={switchSort}>
                <span id="btnSort">Sort Ascending</span>{" "}
                <img alt="sort icon" className="appButtonSortIcon" src={sort} />
              </button>
            </div>
            <div className="appContent">
              {this.state.dataArray.map((item) => (
                // <Item key={index} item={item} />
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
