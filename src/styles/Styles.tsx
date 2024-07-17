import styled, {createGlobalStyle} from 'styled-components';
import {FC, JSXElementConstructor, ReactElement} from "react";
import {ThemeType, theme} from './theme'


export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colors.primary};
    font-family: Arial, Helvetica, sans-serif;
    color: ${({theme}) => theme.colors.secondary};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
type InternalProps = {
    children: any
    flexDirection?: 'row' | 'column'
    gap?: string
    justifyContent?: string
    alignItems?: string
    maxWidth?: string
    width?: string
    height?: string
    minHeight?: string
    padding?: string
    fontSize?: string
    flex?: string
    border?: string
    alignSelf?: string

}
// Контейнер
export const Container = styled.div<InternalProps>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  gap: ${({gap}) => gap || '30px'};
  justify-content: ${({justifyContent}) => justifyContent || 'space-evenly'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  max-width: ${(props => props.maxWidth && 'auto')};
  width: ${({width}) => width};
  padding: ${({padding}) => padding || '3%'};
  border: ${({border}) => border || 'solid 2px cyan'};
  border-radius: 10px;
  font-size: ${({fontSize}) => fontSize};
  flex: ${({flex}) => flex || '1'};
  align-self: ${({alignSelf}) => alignSelf};
`;

type InputProps = {
    hasError?: boolean
    backgroundColor?: string
    color?: string
    fontSize?: string
    width?: string
    border?: string
    borderRadius?: string
    theme?: ThemeType
}
export const StyledInput = styled.input<InputProps>`
  background-color: ${({hasError}) => (hasError ? 'lightcoral' : 'lightsteelblue')};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({fontSize}) => fontSize || '1em'};
  width: ${({width}) => width || '70px'};
  border: 2px solid ${({hasError}) => (hasError ? theme.colors.errorColor : theme.colors.secondary)};
  border-radius: 5px;
  
  &:focus {
    outline: none; /* Убираем фокус */
  }
`
export const Values = styled.span`
  color: ${({theme}) => theme.colors.secondary};
  margin: 10px;
  font-size: 1.5em;
  white-space: nowrap; /* Предотвращаем перенос текста */
  display: flex;
  align-items: center; /* Выровнять текст по центру по вертикали */
`

