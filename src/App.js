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
      // let size = data.length; //160

      let name = data[0]["name"]; //FalconSat
      let date = formatDate(data[0]["date_utc"]); //24 March 2006
      let number = data[0]["flight_number"]; //1
      let rocketID = data[0]["rocket"]; //1165415311

      getRocketName(rocketID).then((response) => {

        let tempObject = {
          name: name,
          date: date,
          number: number,
          rocket: response,
        };
        let dataArrayCopy = this.state.dataArray;
        dataArrayCopy.push(tempObject);
        this.setState({ dataArray: dataArrayCopy });
      });
    };

    let formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    let getRocketName = (id) => {
      return fetch("https://api.spacexdata.com/v4/rockets/" + id)
        .then((response) => response.json())
        .then((responseData) => {
          return responseData["name"];
        });
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
              {this.state.dataArray.map(function (data, idx) {
                return (
                  <li key={idx}>
                    {data.name} {data.date} {data.number} {data.rocket}{" "}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
