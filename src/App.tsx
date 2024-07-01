import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./button/Button";
import {Input} from './input/Input'

function App() {
    let startValue = 2;

    let [currentValue, setCurrentValue] = useState(startValue)
    let [maxInputValue, setMaxInputValue] = useState(0)

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(Number(e.currentTarget.value));
    }

    const onClickAddCount = () => {
        setCurrentValue(currentValue + 1);
    }
    const onClickReset = () => {
        setCurrentValue(startValue);
    }

    return (
        <div className="App">
            <div className= "Settings" >
                <h2> max value</h2>
                <Input  value = {maxInputValue} onChange = {onChangeInputHandler} />
                <h2> start value</h2>
                <Input  value = {startValue} onChange = {()=>{}} />
                <Button title={'set'} onClick={()=> {}} />
            </div>
            <h1>{currentValue}</h1>
            <Button title= {'inc'} onClick={onClickAddCount}/>
            <Button title= {'reset'} onClick={onClickReset}/>
        </div>
    );
}

export default App;
