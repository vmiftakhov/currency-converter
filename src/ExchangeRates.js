import React, { Component } from 'react';
import ItemListRates from './ItemListRates';
import uuid from 'uuid';



export default class ExchangeRates extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
    }
    
    render() {
        let tableRates;
        if (this.props.data) {
            // console.log(this.props.data.Valute);
            let valute = this.props.data.Valute;
            tableRates = Object.keys(valute).map((key) => {
                return (
                    <ItemListRates
                        key={uuid.v4()}
                        CharCode={valute[key].CharCode}
                        Nominal={valute[key].Nominal}
                        // ID={valute[key].ID}
                        Name={valute[key].Name}
                        NumCode={valute[key].NumCode}
                        Previous={valute[key].Previous}
                        Value={valute[key].Value}
                    />
                );
            });
            // console.log(tableRates)
        }

        // let tableRates = this.state.data.Valute.map([...props]) => {console.log(props)});
        return (
            <div>
                <table>
                    <thead>
                        <tr><th>Букв.код</th><th>Валюта</th><th>Цифр. код</th><th>Курс</th></tr>
                    </thead>
                    <tbody>
                        {tableRates}
                    </tbody>
                </table>
            </div>
        );
    }
}