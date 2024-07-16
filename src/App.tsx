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
    let [isIncButtonDisabled, setIncButtonDisabled] = useState(false)
    let [isResetButtonDisabled, setResetButtonDisabled] = useState(false)

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
                justifyContent='space-between'
                maxWidth='1200px'
                minHeight='100%'
                width='80%'
                border='none'


            >
                {/*Left external container */}
                <Container
                    flexDirection='column'
                    width='100%'
                    flex="1"
                    padding = '30px'
                >
                    {/*Left Internal container */}
                    <Container

                        width='100%'
                        flexDirection='column'
                    >
                        {/*Internal Settings container maxValue */}
                        <Container
                            width='100%'

                            border='none'
                        >
                            <Values> max value</Values>
                            <StyledInput
                                type='number'
                                value={maxValue}
                                onChange={onChangeMaxInputHandler}/>
                        </Container>
                        {/*Internal settings start Value container*/}
                        <Container
                            width='100%'
                            border='none'
                        >
                            <Values> start value</Values>
                            <StyledInput
                                type='number'
                                value={startValue}
                                onChange={onChangeStartInputHandler}/>
                        </Container>
                    </Container>
                    {/*Set button container*/}
                    <Container
                        flex='1'

                        width='100%'
                    >
                        <Button

                            onClick={onClickSet}
                            disabled={isSetButtonDisabled}
                            backgroundColor='secondary'
                            color='primary'
                            width='100px'
                            height='50px'
                            justifyContent='center'
                            alignItems='center'

                            fontSize='1em'
                        >set</Button>
                    </Container>
                </Container>
                {/* Right external container*/}
                <Container
                    flex='1'
                    flexDirection='column'
                    width='100%'
                    padding = '30px'
                    alignSelf='stretch'
                >

                    {/*Tableau container*/}
                    <Container
                        flex='2'
                        fontSize=' 4em'
                        width='100%'

                    >
                        {settingMessage || errorMessage
                            ||
                            <span>{currentValue}</span>}

                    </Container>
                    {/*Inc-Reset buttons container*/}
                    <Container
                        width='100%'


                    >
                        <Button

                            onClick={onClickAddCount}
                            disabled={isIncButtonDisabled}
                            backgroundColor='secondary'
                            color='primary'
                            width='80px'
                            height='50px'
                            justifyContent='center'
                            alignItems='center'

                            fontSize='1em'
                        >inc</Button>

                        <Button

                            onClick={onClickReset}
                            disabled={isResetButtonDisabled}
                            backgroundColor='secondary'
                            color='primary'
                            width='80px'
                            height='50px'
                            justifyContent='center'
                            alignItems='center'

                            fontSize='1em'>reset</Button>
                    </Container>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default App;
