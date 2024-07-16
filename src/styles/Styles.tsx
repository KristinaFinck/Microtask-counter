import styled, {createGlobalStyle} from 'styled-components';
import {FC, JSXElementConstructor, ReactElement} from "react";


// export const GlobalStyle = createGlobalStyle `
// html, body{
//  height: 100%;
//  width: 100%;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   background-color: ${({theme}) => theme.colors.primary};
//   font-family: Arial, Helvetica, sans-serif;
//  color: ${({ theme }) => theme.colors.secondary};
//
// }
// *, *::before, *::after {
//  box-sizing: inherit;
//
// }
// `
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


export const StyledInput = styled.input`
  background-color: lightsteelblue;
  color: ${({theme}) => theme.colors.primary};
  font-size: 1em;
  width: 70px;
  border: 2px solid darkcyan;
  border-radius: 5px;
`
export const Values = styled.span`
  color: ${({theme}) => theme.colors.secondary};
  margin: 10px;
  font-size: 1.5em;
  white-space: nowrap; /* Предотвращаем перенос текста */
  display: flex;
  align-items: center; /* Выровнять текст по центру по вертикали */
`

