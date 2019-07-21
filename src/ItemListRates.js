import React, { Component } from 'react';
import './Container.css';

export default class ItemListRates extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        
        console.log(this.props.Previous);
        // if (this.props.Value > this.props.Previous) {
        //     ("+ " + Math.abs(difference));
        // } else {
        //     ("+ " + Math.abs(difference))
        // } 
        let difference = Math.abs(this.props.Value - this.props.Previous).toFixed(2);
        let valueExchangeRates = (this.props.Value / this.props.Nominal).toFixed(2);
        let differenceExchangeRates = (this.props.Value > this.props.Previous) ?
            ( " (+" + difference + ") ▲" ) :
            ( " (-" + difference + ") ▼" );

        // console.log(this.props);
        // let tableRates = this.state.data.Valute.map([...props]) => {console.log(props)});
        return (
            <tr>
                <td>{this.props.CharCode}</td>
                {/* <td>{this.props.ID}</td> */}
                <td>{this.props.Name}</td>
                <td>{this.props.NumCode}</td>
                {/* <td>{this.props.Previous}</td> */}
                <td class="valueExchangeRates">{valueExchangeRates} <span>{differenceExchangeRates}</span></td>
            </tr>
        );
    }
}