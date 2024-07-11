import styled, { createGlobalStyle } from 'styled-components';
import {FC, JSXElementConstructor, ReactElement} from "react";


 export const GlobalStyle = createGlobalStyle `
 html, body{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   background-color: ${({theme}) => theme.colors.primary};
   font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  
 }
 *, *::before, *::after {
  box-sizing: inherit;
  
 }
 `
type InternalProps = {
    children: any
    flexDirection?: 'row'| 'column'
    gap?:string
    justifyContent: string
    maxWidth?: string
    width: string
    padding: string

}
// Контейнер
export const Container = styled.div<InternalProps>`
display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    gap: ${(props=> props.gap && props.gap )};
    justify-content: ${({ justifyContent }) => justifyContent};
    max-widht:${(props => props.maxWidth && 'none')};
    width: ${({width}) => width};
    padding: ${({ padding }) => padding};
    border: 2px solid cyan;
    border-radius: 10px;
`;

 export const ExternalContainer = styled.div `
  width: 100%;
  padding: 20px;
  border: inherit;
  border-radius: inherit;
  
 `
export const Tableau = styled.div`
 font-size: 3em;    
  color: paleturquoise;
  display: flex;
`
type InternalProps = {
     gap?:string
    direction?: 'column' | 'row'
    children: any
}
export const InternalContainer: FC<InternalProps> = styled.div`
 display: flex;
  width: 100%;
  flex-direction: ${(props=>props.direction ? props.direction : 'row')};
  gap: ${(props=> props.gap && props.gap )};
 padding: 20px;
  border: inherit;
  border-radius: inherit;
`
export const SettingsContainer = styled.div `
display: flex;
 flex-direction: column;
 align-items: normal;
 border: inherit;
  border-radius: inherit;
`
export const InternalSettingsContainer = styled.div`
 display: flex;
flex-direction: row;    
 justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`
export const StyledInput = styled.input`
    background-color: lightsteelblue;
  color: ${({theme}) => theme.colors.primary};
  font-size: 2em;
  width: 120px;
  border: 2px solid cyan;
  border-radius: 5px;
    `
export const Values = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 10px;
  font-size: 1.5em;
  white-space: nowrap; /* Предотвращаем перенос текста */
  display: flex;
  align-items: center; /* Выровнять текст по центру по вертикали */
    `

