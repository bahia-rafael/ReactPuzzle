import React from 'react';
import './RestartButton.css';

//props.value, props.click, props.position

class RestartButton extends React.Component {

    constructor(props) {
        super(props);
        this.text = props.text;
        this.function = props.whenClicked;
    }

    render() {
        return (
            <button className="restartButton" onClick={this.function}>
                { this.text}
            </button>

        );
    }
}

export default RestartButton;
