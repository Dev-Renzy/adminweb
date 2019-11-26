import React, {Component} from 'react';


export default class TodosList extends Component {
    render() {
        return (
            <div>
                <h1>List of Users</h1>
                <table width="100%">
                <tr>
                    <th>Profession</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
                </table>
            </div>
        )
    }
}