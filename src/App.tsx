import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./button/Button";
import {Input} from './input/Input'
import {isDisabled} from "@testing-library/user-event/dist/utils";

function App() {
    let [startValue, setStartValue] = useState(0)
    let [currentValue, setCurrentValue] = useState(startValue)
    let [maxValue, setMaxValue] = useState(0)

    let onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value));
    }
    let onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value));
    }
    const onClickAddCount = () => {
        setCurrentValue(currentValue + 1);
        }

    const onClickReset = () => {
        setCurrentValue(startValue)
    }
    const onClickSet = () => {
        setCurrentValue(startValue)
    }
    return (
        <div className="App">
            <div className="Settings">
                <h2> max value</h2>
                <Input value={maxValue} onChange={onChangeMaxInputHandler}/>
                <h2> start value</h2>
                <Input value={startValue} onChange={onChangeStartInputHandler}/>
                <Button title={'set'} onClick={onClickSet}/>
            </div>
            <h1>{currentValue}</h1>
            <Button title={'inc'} onClick={onClickAddCount} disabled={currentValue === maxValue}/>
            <Button title={'reset'} onClick={onClickReset}/>
        </div>
    );
}

export default App;
