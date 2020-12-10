import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  render() {
    return (
      <div className="itemContainer">
        <p className="itemNumber itemElement">#{this.props.number}</p>
        <p className="itemName itemElement">{this.props.name}</p>

        <div className="itemRight">
          <p className="itemDate itemElement">{this.props.date}</p>
          <p className="itemRocket itemElement">{this.props.rocket}</p>
        </div>
      </div>
    );
  }
}
