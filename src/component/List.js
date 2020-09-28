import React, { Component } from 'react';

export default class List extends Component {
    state = {
        value: ""
    }

    render() {
        return (
            <div className="row">
                <section className="col s6 offset-s3">
                    <form>
                        <ul className="collection">
                            {
                                this.props.todo.map((element) => (
                                    element.isEditing ? (
                                        <li className="collection-item">
                                            <div className="row">
                                                <section className="col s4 offset-s4">
                                                    <form>
                                                        <div className="input-field">
                                                            <input type="text" onChange={(e) => this.setState({ value: e.target.value })} />
                                                            <button className="waves-effect waves-light btn" onClick={() => this.props.edit(element.id)}>cancel</button>
                                                            <button className="waves-effect waves-light btn" onClick={() => this.props.doneEdit(element.id, this.state.value)}>done</button>
                                                        </div>
                                                    </form>
                                                </section>
                                            </div>
                                        </li>
                                    ) : (
                                            <li className="collection-item">
                                                {element.completed ? <s>{element.text}</s> : element.text}
                                                <div className="input-field">
                                                    <button className="waves-effect waves-light btn" onClick={() => this.props.remove(element.id)}>Remove</button>
                                                    <button className="waves-effect waves-light btn" onClick={() => this.props.edit(element.id)}>Edit</button>
                                                    <button className="waves-effect waves-light btn" onClick={() => this.props.completedTodo(element.id)}>complete</button>
                                                </div>
                                            </li>
                                        )
                                ))
                            }
                        </ul>
                    </form>
                </section>
            </div>
        )
    }
}
