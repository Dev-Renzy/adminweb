import React, {Component} from 'react';

export default class TodosList extends Component {
    render() {
        return (
            <div>
                <h1>List of Users</h1>
                {this.props.values}
            </div>
        )
    }
}