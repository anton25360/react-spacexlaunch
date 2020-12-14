import "./App.css";
import image from "./assets/img/launch-home.png";
import Item from "./Item";
import sort from "./assets/icon/sort.png";
import select from "./assets/icon/select.png";
import React from "react";

import "./Navbar.css";
import logo from "./assets/spacex-logo.png";
import reload from "./assets/icon/refresh.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAscending: true,
      dataArray: [],
      yearsArray: [],
      dataArrayPermanent: [],
    };
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData = () => {
    fetch("https://api.spacexdata.com/v4/launches")
      .then((response) => response.json())
      .then((data) => {
        let dataArrayLocal = [];

        data.forEach((element) => {
          let name = element["name"]; //FalconSat
          let date = this.formatDate(element["date_utc"]); //24 March 2006
          let number = element["flight_number"]; //1
          this.populateYearsArray(element["date_utc"]);

          this.getRocketName(element["rocket"]).then((response) => {
            let tempObject = {
              name: name,
              date: date,
              number: number,
              rocket: response,
            };
            dataArrayLocal.push(tempObject);

            const dataArrayLocalSorted = dataArrayLocal.sort(
              (a, b) => a.number - b.number
            );

            this.setState({ dataArray: dataArrayLocalSorted });
            this.setState({ dataArrayPermanent: dataArrayLocalSorted });
          });
        });
      });
  };

  populateYearsArray = (date) => {
    let yearsArrayCopy = this.state.yearsArray;
    let year = date.substring(0, 4); //2001

    //if array contains the year, skip
    if (yearsArrayCopy.includes(year)) {
      //do nothing
    } else {
      yearsArrayCopy.push(year);
    }
    this.setState({ yearsArray: yearsArrayCopy });
  };

  formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  getRocketName = (id) => {
    return fetch("https://api.spacexdata.com/v4/rockets/" + id)
      .then((response) => response.json())
      .then((responseData) => {
        return responseData["name"];
      });
  };

  switchSort = () => {
    let btn = document.getElementById("btnSort"); //btn id
    if (this.state.isAscending === true) {
      //if isAscending is true
      btn.innerText = "Sort Descending";
      this.setState({ isAscending: false });
      this.reverseArray();
    } else if (this.state.isAscending === false) {
      btn.innerText = "Sort Ascending";
      this.setState({ isAscending: true });
      this.reverseArray();
    }
  };

  reverseArray = () => {
    let tempArray = this.state.dataArray;
    tempArray.reverse();
    this.setState({ dataArray: tempArray });
  };

  reloadData = () => {
    this.setState({ dataArray: [] });
    this.getApiData();
  };

  filterByYear = (year) => {
    let dataArrayCopy = this.state.dataArrayPermanent;
    let dataArrayFiltered = [];

    dataArrayCopy.forEach((element) => {
      if (element.date.includes(year)) {
        dataArrayFiltered.push(element);
      }
    });

    this.setState({ dataArray: dataArrayFiltered });
  };

  render() {
    return (
      <div className="App">
        <div className="navbarContainer">
          <div className="navbarLogoContainer">
            <img alt="logo" className="navbarLogoImage" src={logo} />
            <p className="navbarLogoText">LAUNCHES</p>
          </div>
          <div className="navbarReload" onClick={this.reloadData}>
            Reload Data{" "}
            <img alt="reload" className="navbarReloadIcon" src={reload} />
          </div>
        </div>

        <div className="appContainer">
          <img className="appImage" src={image} alt="rocket launch" />
          <div className="appTest">
            <div className="appButtonsContainer">
              <div className="dropdown">
                <button className="appButton">
                  Filter by Year <img alt="select icon" src={select} />
                </button>

                <div className="dropdownContent">
                  {this.state.yearsArray.map((data, id) => {
                    return (
                      <p
                        key={id}
                        className="dropdownItem"
                        onClick={() => this.filterByYear(data)}
                      >
                        {data}
                      </p>
                    );
                  })}

                  <p className="dropdownItem" onClick={() => this.reloadData()}>
                    Show All
                  </p>
                </div>
              </div>

              <button className="appButton" onClick={this.switchSort}>
                <span id="btnSort">Sort Ascending</span>{" "}
                <img alt="sort icon" className="appButtonSortIcon" src={sort} />
              </button>
            </div>
            <div className="appContent">
              {this.state.dataArray.map(function (data, idx) {
                return (
                  <Item
                    key={data.number}
                    number={data.number}
                    name={data.name}
                    date={data.date}
                    rocket={data.rocket}
                  />
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
