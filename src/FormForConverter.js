import React, { Component } from 'react';
import './Container.css';

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            message: ""
        };
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    render() {
        let totalSum = (this.state.message * 66.96).toFixed(2);
        return (
            <div class="form-wrapper">
                <label for="convertingSum">Введите конвертируемую сумму, руб.</label> <br />
                <input id="convertingSum" type="text" value={this.state.message} onChange={this.updateMessage.bind(this)} />
                <p className="totalSum">{"Итоговая сумма " + totalSum + " $"}</p>
            </div>);
    }
}

