import React, { Component } from 'react';
import './css/Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="Hello">
                <div className="container">
                    <div className="message">
                        {this.props.message}
                    </div>
                </div>
            </div>
        );
    }
}

export default Hello;