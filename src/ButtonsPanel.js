import React from 'react';
import './ButtonsPanel.css'
import Step from './Step'

function ButtonsPanel(props) {

    return (
        <div className="buttons-panel">
            <button onClick={()=> {props.buttonMethod('add X');}}>Add {props.inputStep} </button>
            <button onClick={()=> {props.buttonMethod('reinit');}}>ReInit</button>
            <button onClick={()=> {props.buttonMethod('reset');}}>Reset</button>
            
        </div>
    );
}

export default ButtonsPanel;