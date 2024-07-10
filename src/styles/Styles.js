import styled, { createGlobalStyle } from 'styled-components';

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
   background-color: #003333;
   font-family: Arial, Helvetica, sans-serif;
  color: #003333;
  border: 2px solid cyan;
  border-radius: 10px;
 }
 *, *::before, *::after {
  box-sizing: inherit;
  
 }
 `

// Контейнер
export const WrapContainer = styled.div`
 max-width: 1200px;
 width: 100%;
  padding: 20px;
  display: flex;
 flex-direction: row;
 justify-content: space-between;
 border: red 1px solid
`;

 export const ExternalContainer = styled.div `
 width: 100%;
  margin: 5%;
  padding: 20px;
  border: 2px cyan solid;
  border-radius: 10px;
  
 `
export const Tableau = styled.div`
 font-size: 3em;    
  color: paleturquoise;
  display: flex;
  
`
export const InternalContainer = styled.div`
border:  2px cyan solid; 
 display: flex;
 padding: 20px;
 margin: 20px;
`
export const SettingsContainer = styled.div `
display: flex;
 flex-direction: column;
 align-items: normal;
 border: 2px cyan solid;
`
export const InternalSettingsContainer = styled.div`
 display: flex;
flex-direction: row;    
 justify-content: space-evenly;
  align-items: center;
 border: green 1px solid;
  padding: 10px;
`
export const StyledInput = styled.input`
    background-color: paleturquoise;
 color: inherit;
  font-size: 2em;
  width: 100px;
    `
export const Values = styled.span`
    color: cyan;
  margin: 0;
  font-size: 2em;
  white-space: nowrap; /* Предотвращаем перенос текста */
  display: flex;
  align-items: center; /* Выровнять текст по центру по вертикали */
    `