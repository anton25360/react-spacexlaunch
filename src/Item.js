import React, { Component } from 'react'
import "./Item.css";


export default class Item extends Component {
    render() {
        return (
            <div className='itemContainer'>
            <p className='itemNumber'>{this.props.number}</p>
            <p className='itemName'>{this.props.name}</p>
            <p className='itemDate'>{this.props.date}</p>
            <p className='itemRocket'>{this.props.rocket}</p>
        </div>
        )
    }
}