import React, {Component} from 'react'
import Input from './Input'
import List from './List'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <Input 
                    add={this.props.add}
                />
                <List 
                    todo={this.props.todo}
                    remove={this.props.remove} 
                    edit={this.props.edit}
                    doneEdit={this.props.doneEdit}
                    completedTodo={this.props.completedTodo}
                />
            </div>
        )
    }    
}
