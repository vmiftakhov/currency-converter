import React, { Component } from 'react';

export default class SelectToValute extends Component {
    constructor (props){
        super(props);
    }
    render () {
        return (
            <option value={this.props.CharCode}>{this.props.Name} ({this.props.CharCode})</option>
        )
    }
}