import React, {Component} from 'react';
import TodosList from './TodosList';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_user: '',
            todo_first: ' ',
            todo_last: ' ',
            todo_profession: ' ',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            values : []

        }
    }

    onChangeTodoProfession(e) {
        this.setState({
            todo_profession: e.target.value
        });
    }

    onChangeTodoLast(e) {
        this.setState({
            todo_last: e.target.value
        });
    }

    onChangeTodoFirst(e) {
        this.setState({
            todo_first: e.target.value
        });
    }

    onChangeTodoUser(e) {
        this.setState({
            todo_user: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {todo_user, todo_first, todo_last, todo_profession, todo_responsible} = this.state
        let list = []
        list.push(todo_user)
        list.push(todo_first)
        list.push(todo_last)
        list.push(todo_profession)
        list.push(todo_responsible)

      

        this.setState({
            todo_user: '',
            todo_first: '',
            todo_last: '',
            todo_profession: '',
            todo_responsible: '',
            todo_priority: '',
            values: list
        })
    }

    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Create Users</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Profession: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={(e) => this.onChangeTodoUser(e)}
                                    />
                        </div>
                        <div className="form-group">
                            <label>First Name: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={(e) => this.onChangeTodoFirst(e)}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Last Name: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_last}
                                    onChange={(e) => this.onChangeTodoLast(e)}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={(e) => this.onChangeTodoProfession(e)}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input  type="password"
                                    className="form-control"
                                    onChange={(e) => this.onChangeTodoResponsible(e)}
                                    />
                        </div>
                       
                        <div className="form-group">
                            <input type="submit" value="Create User" onClick={(e) => this.onSubmit(e)} className="btn btn-primary" />
                            {/* {this.state.values} */}
                        </div>
                    </form>
                </div>
            )
        
        
    }
}