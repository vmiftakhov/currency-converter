import React, { Component } from 'react';
import './Container.css';
import FormForConverter from './FormForConverter'
import ExchangeRates from './ExchangeRates'
import { Switch, Route, Link } from 'react-router-dom'

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(data => {
                Object.assign(data.Valute, {
                    "RUB": {
                        ID: "R01585F",
                        Name: "Рубль",
                        CharCode: "RUB",
                        Nominal: 1,
                        NumCode: "643",
                        Previous: 1.0000,
                        Value: 1.0000,
                    }
                })
                return data;
            })
            .then(data => this.setState({ data }))
    }


    render() {
        // let totalSum = (this.state.message * 66.96).toFixed(2);
        // console.log(this.state.data);
        return (
            <div className="wrapper">
                <div>
                    <div>
                        <Link to='/form-for-converter'>Конвертер валют</Link>
                        <Link to='/exchange-rates'>Курс валют</Link>
                    </div>
                    <Switch>
                        <Route exact path='/' component={FormForConverter} />
                        <Route exact path='/form-for-converter' component={() => <FormForConverter data={this.state.data} />} />
                        <Route path='/exchange-rates' component={() => <ExchangeRates data={this.state.data} />} />
                    </Switch>
                    {/* <FormForConverter /> */}
                    {/* <ExchangeRates /> */}
                </div>
            </div>);
    }
}

