import React, { Component } from 'react'
import "./Item.css";


export default class Item extends Component {
    render() {
        return (
            <div className='itemContainer'>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
        </div>
        )
    }
}