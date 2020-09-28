import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <h6 className="brand-logo center">Krystal's Todo List</h6>
                </div>
            </nav>
        )
    }
}