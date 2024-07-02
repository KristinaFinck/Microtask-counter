import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./button/Button";
import {Input} from './input/Input'

function App() {
    let [startValue, setStartValue] = useState(0)
    let [currentValue, setCurrentValue] = useState<number>(startValue)
    let [maxValue, setMaxValue] = useState<number | string>("0")
    let [isButtonDisabled, setIsButtonDisabled] = useState(true)
    let [errorMessage, setErrorMessage] = useState('')

    let onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value.trim();
        setMaxValue(inputValue); // сохраняем введенное значение как строку

        const newValueInTheInput = Number(inputValue);
        if (Number.isInteger(newValueInTheInput) && newValueInTheInput >= 0) {
            setIsButtonDisabled(false);
            setErrorMessage('');
        } else {
            setIsButtonDisabled(true);
            setErrorMessage("Enter a positive integer");
        }
    };

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
        if (maxValue > startValue) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
            setErrorMessage("set correct value")
        }
    }
    return (
        <div className="App">
            <div className="Settings">
                <h2> max value</h2>
                <Input value={maxValue} onChange={onChangeMaxInputHandler}/>
                <h2> start value</h2>
                <Input value={startValue} onChange={onChangeStartInputHandler}/>
                <Button title={'set'} onClick={onClickSet} disabled={isButtonDisabled}/>
            </div>
            <div>
                {errorMessage || <h1>{currentValue}</h1>}

                <Button title={'inc'} onClick={onClickAddCount} disabled={currentValue === maxValue}/>
                <Button title={'reset'} onClick={onClickReset}/>
            </div>
        </div>
    );
}

export default App;
