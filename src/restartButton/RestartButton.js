import React from 'react';
import './RestartButton.css';

//props.value, props.click, props.position


export default props => {
    let text = props.text;
    let funcao = props.whenClicked;

    return (
            <button className="restartButton" onClick={ funcao }>
                { text}
            </button>

    )
}

