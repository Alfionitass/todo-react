import React, {Component} from 'react'

export default class Input extends Component {
    state = {
        value: ""
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <section className="col s4 offset-s4">
                        <form>
                            <div className="input-field">
                                <input placeholder="Input Todo" type="text" onChange={ (e) => this.setState({ value : e.target.value }) } />
                                <button className="waves-effect waves-light btn" onClick={() => this.props.add(this.state.value)}>Add</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        )
    }  
}
