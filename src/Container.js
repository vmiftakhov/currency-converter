import React, { Component } from 'react';
import './Container.css';
import FormForConverter from './FormForConverter'
import ExchangeRates from './ExchangeRates'
import { Switch, Route, Link } from 'react-router-dom'

export default class Container extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let totalSum = (this.state.message * 66.96).toFixed(2);
        return (
            <div className="wrapper">
                <div>
                    <div>
                        <Link to='/form-for-converter'>Конвертер валют</Link>
                        <Link to='/exchange-rates'>Курс валют</Link>
                    </div>
                    <Switch>
                        <Route exact path='/' component={FormForConverter} />
                        <Route exact path='/form-for-converter' component={FormForConverter} />
                        <Route path='/exchange-rates' component={ExchangeRates} />
                    </Switch>
                    {/* <FormForConverter /> */}
                    {/* <ExchangeRates /> */}
                </div>
            </div>);
    }
}

