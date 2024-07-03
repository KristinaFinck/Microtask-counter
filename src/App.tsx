import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./button/Button";
import {Input} from './input/Input'

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [currentValue, setCurrentValue] = useState<number>(startValue)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [isSetButtonDisabled, setSetButtonDisabled] = useState(true)
    let [errorMessage, setErrorMessage] = useState('')
    let [settingMessage, setSettingMessage] = useState('')
    let [isIncButtonDisabled, setIncButtonDisabled] = useState(true)
let [isResetButtonDisabled, setResetButtonDisabled] = useState(true)

    let error = "incorrect value!"
    let onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputMaxValue = Number(e.currentTarget.value);
        setSettingMessage("enter values and press 'set'");
        if (inputMaxValue >= 0) {
            setSetButtonDisabled(false);
            setMaxValue(inputMaxValue)
            setErrorMessage('');
        } else {
            setSettingMessage('')
            setMaxValue(inputMaxValue)
            setSetButtonDisabled(true);
            setErrorMessage(error);
        }
    };

    let onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputStartValue = Number(e.currentTarget.value)
        setSettingMessage("enter values and press 'set'");
        if (inputStartValue >= 0 && inputStartValue < maxValue) {
            setSetButtonDisabled(false);
            setStartValue(inputStartValue)
            setErrorMessage('');

        } else {
            setSettingMessage('')
            setStartValue(inputStartValue)
            setSetButtonDisabled(true);
            setErrorMessage(error);
        }
    }
    const onClickAddCount = () => {
        if (errorMessage) {
            setIncButtonDisabled(true);
        } else if (currentValue + 1 < maxValue) {
            setCurrentValue(currentValue + 1);
            setIncButtonDisabled(false);
        } else {
            setCurrentValue(currentValue + 1);
            setIncButtonDisabled(true);
        }
    };

    const onClickReset = () => {
        setCurrentValue(startValue)
        setIncButtonDisabled(false)
    if (errorMessage) {
            setResetButtonDisabled(true)
        }
    }
    const onClickSet = () => {
        setSettingMessage('')
        setCurrentValue(startValue)
        setSetButtonDisabled(true)
        setIncButtonDisabled(false)
        setResetButtonDisabled(false)
        if (errorMessage) {
            setSetButtonDisabled(true)
        }
    }
    return (
        <div className="App">
            <div className="Settings">
                <h2> max value</h2>
                <Input
                    type='number'
                    value={maxValue}
                    onChange={onChangeMaxInputHandler}/>
                <h2> start value</h2>
                <Input
                    type='number' value={startValue} onChange={onChangeStartInputHandler}/>
                <Button
                    title={'set'}
                    onClick={onClickSet}
                    disabled={isSetButtonDisabled}/>
            </div>
            <div>
                {settingMessage || errorMessage || <h1>{currentValue}</h1>}

                <Button
                    title={'inc'}
                    onClick={onClickAddCount}
                    disabled={isIncButtonDisabled}/>
                <Button
                    title={'reset'}
                    onClick={onClickReset}
                disabled={isResetButtonDisabled}/>
            </div>
        </div>
    );
}

export default App;
