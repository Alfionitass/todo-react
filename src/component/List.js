import React, {Component} from 'react'

export default class List extends Component {
    state = {
        value: ""
    }

    render() {
        return (
            <ul>
                {
                    this.props.todo.map((element) => (
                        element.isEditing ? (
                            <li>
                                <input type="text" onChange={(e) => this.setState({value : e.target.value})}  />
                                <button onClick={() => this.props.edit(element.id)}>cancel</button>
                                <button onClick={() => this.props.doneEdit(element.id, this.state.value)}>done</button>
                            </li>
                        ) : (
                            <li>
                                {element.text}
                                <button onClick={() => this.props.remove(element.id)}>Remove</button>
                                <button onClick={() => this.props.edit(element.id)}>Edit</button>
                                {element.completed ? (
                                    <button onClick={() => this.props.completedTodo(element.id)}>not complete</button>
                                ) : (
                                    <button onClick={() => this.props.completedTodo(element.id)}>complete</button>
                                )}
                            </li>
                        )
                    ))
                }
            </ul>
        )
    }
}
