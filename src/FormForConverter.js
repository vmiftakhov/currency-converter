import React, { Component } from 'react';
import './Container.css';
import SelectToValute from './SelectToValute'
import uuid from "uuid";

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            message: "0",
            currentValute: 'RUB',
            fromValute: 'USD',
            fromValuteValue: '66.31',
            fromValuteNominal: '1',
            toValute: 'USD',
            toValuteValue: '66.31',
            toValuteNominal: '1'
        };
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    onChangeToValute(event) {
        this.setState({
            toValute: event.target.value
        });
        let selectToValute = Object.keys(this.props.data.Valute).filter(valuteCode => valuteCode === event.target.value);
        this.setState({
            toValuteValue: this.props.data.Valute[selectToValute].Value,
            toValuteNominal: this.props.data.Valute[selectToValute].Nominal
        });
    }

    onChangeFromValute(event) {
        this.setState({
            fromValute: event.target.value
        });
        let selectFromValute = Object.keys(this.props.data.Valute).filter(valuteCode => valuteCode === event.target.value);
        this.setState({
            fromValuteValue: this.props.data.Valute[selectFromValute].Value,
            fromValuteNominal: this.props.data.Valute[selectFromValute].Nominal
        });
    }

    render() {
        let selectValute;
        if (this.props.data) {
            let valute = this.props.data.Valute;
            selectValute = Object.keys(valute).map((key) => {
                return (
                    <SelectToValute
                        key={uuid.v4()}
                        CharCode={valute[key].CharCode}
                        Nominal={valute[key].Nominal}
                        Name={valute[key].Name}
                        Value={valute[key].Value}
                    />
                );
            });
        }
        let totalSum = (this.state.message * (this.state.fromValuteValue / this.state.fromValuteNominal) * (this.state.toValuteNominal / this.state.toValuteValue)).toFixed(2);
        return (
            <div className="form-wrapper">
                <label htmlFor="selectFromValue">Выберите, из какой валюты вы хотите конвертировать</label>
                <select id="selectFromValue" value={this.state.fromValute} onChange={this.onChangeFromValute.bind(this)}>
                    {selectValute}
                </select> <br />
                <label htmlFor="inputConvertSum">Введите конвертируемую сумму</label>
                <input type="inputConvertSum" value={this.state.message} onChange={this.updateMessage.bind(this)} /> <br />
                <label htmlFor="selectToValue">Выберите, в какую валюту вы хотите конвертировать</label>
                <select id="selectToValue" value={this.state.toValute} onChange={this.onChangeToValute.bind(this)}>
                    {selectValute}
                </select> <br />
                <p className="totalSum">{"Итоговая сумма " + totalSum + " " + this.state.toValute}</p>
            </div>);
    }
}

