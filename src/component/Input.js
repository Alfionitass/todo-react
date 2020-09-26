import React, {Component} from 'react'

export default class Input extends Component {
    state = {
        value: ""
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ (e) => this.setState({ value : e.target.value }) } />
                <button type="button" onClick={() => this.props.add(this.state.value)}>Add</button>
            </div>
        )
    }  
}
