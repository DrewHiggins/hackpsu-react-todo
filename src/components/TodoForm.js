import React, {Component} from 'react';

export class TodoForm extends Component {
    constructor() {
        super();
        this.state = { newTodoName: "" }
    }

    handleInputChange = (e) => {
        let newValue = e.target.value;
        this.setState({ newTodoName: newValue });
    }

    handleAddClick = () => {
        this.props.addTodo(this.state.newTodoName);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.newTodoName} 
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddClick}>Add Todo</button>
            </div>
        );
    }
}