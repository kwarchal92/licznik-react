import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel'
import Step from './Step'

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            inputValue: 1,

        };
    }

    setNumber = (e) => {
        this.setState({ inputValue: e.target.value })
    }


    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            let number = Number(this.state.inputValue)

            if (action === 'add') {
                currentCounterValue += this.setNumber;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else if (action === 'reset') {
                currentCounterValue = 0;
            } else {
                currentCounterValue += number;
            }

            return (
                {
                    counterValue: currentCounterValue
                }
            );
        });

    }


    render() {

        return (
            <div className="counter">
    
                    Licznik : 
                    <Display displayValue={this.state.counterValue} />

                    <ButtonsPanel buttonMethod={this.changeValue} inputStep={this.state.inputValue} />

                    Krok:
                    <Step inputStep={this.state.inputValue} changeImputValue={this.setNumber} addStepMethod={this.changeValue} />

            </div>
        )
    }
}


export default Counter;