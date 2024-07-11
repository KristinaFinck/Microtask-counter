import React, {ChangeEvent, useState} from 'react';
import {Button} from "./button/Button";
import {Input} from './input/Input';

import {ThemeProvider} from 'styled-components';
import {
    GlobalStyle,
    Container,
    StyledInput, Values
} from './styles/Styles';
import {theme} from "./styles/theme";

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
        // Disable inc and reset buttons while setting new values
        setIncButtonDisabled(true);
        setResetButtonDisabled(true);
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
        // Disable inc and reset buttons while setting new values
        setIncButtonDisabled(true);
        setResetButtonDisabled(true);
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
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {/*Wrap container*/}
            <Container
                flexDirection='row'
                gap='20px'
                justifyContent='space-between'
                maxWidth='1200px'
                width="100%"
                padding="20px"
            >
                {/*Left external container */}
                <Container
                    flexDirection = 'column'
                    width='100%'
                    padding="20px"
                >
                    {/*Internal container */}
                    <Container
                        width = '100%'
                        flexDirection = 'column'
                    >
                        {/*Internal Settings container */}
                        <Container

                            width = '100%'
                            justifyContent='space-evenly'
                            alignItems='center'
                            padding='10px'
                        >
                            <Values> max value</Values>
                            <StyledInput
                                type='number'
                                value={maxValue}
                                onChange={onChangeMaxInputHandler}/>
                        </Container>
                        <Container
                            width = '100%'
                            justifyContent='space-evenly'
                            alignItems='center'
                            padding='10px'>
                            <Values> start value</Values>
                            <StyledInput
                                type='number'
                                value={startValue}
                                onChange={onChangeStartInputHandler}/>
                        </Container>
                    </Container>
                    {/*Set button container*/}
                    <Container
width = '100%'
justifyContent = 'center'
alignItems = 'center'
                    >
                        <Button
                            title={'set'}
                            onClick={onClickSet}
                            disabled={isSetButtonDisabled}/>
                    </Container>
                </Container>
                {/* Right external container*/}
                <Container
                    flexDirection = 'column'
                    width='100%'
                    padding="20px"
                >
                    {/*Tableau container*/}
                    <Container
                    justifyContent= 'center'
                    alignItems = 'center'
                    fontSize = ' 1em'
                    >
                        {settingMessage || errorMessage
                            ||
                            <span>{currentValue}</span>}
                    </Container>

                    <Container
                        justifyContent= 'space-evenly'
                        alignItems = 'center'
                        width = '100%'


                    >
                        <Button
                            title={'inc'}
                            onClick={onClickAddCount}
                            disabled={isIncButtonDisabled}/>

                        <Button
                            title={'reset'}
                            onClick={onClickReset}
                            disabled={isResetButtonDisabled}/>
                    </Container>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default App;
