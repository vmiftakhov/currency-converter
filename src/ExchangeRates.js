import React, { Component } from 'react';
import ItemListRates from './ItemListRates'



export default class ExchangeRates extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }
    render() {
        let tableRates;
        if (this.state.data) {
            console.log(this.state.data.Valute);
            let valute = this.state.data.Valute;
            tableRates = Object.keys(valute).map((key) => {
                return (
                    <ItemListRates
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
            console.log(tableRates)
        }

        // let tableRates = this.state.data.Valute.map([...props]) => {console.log(props)});
        return (
            <div>
                <table>
                    <thead>
                        <tr><th>Букв.код</th><th>Валюта</th><th>Цифр. код</th><th>Курс Валют</th></tr>
                    </thead>
                    <tbody>
                        {tableRates}
                    </tbody>
                </table>
            </div>
        );
    }
}