import styled from "styled-components";
import React from "react";

// Типизация пропсов
export type ButtonPropsType = {
    onClick: () => void;
    disabled: boolean;
    display?: string;
    backgroundColor?: 'primary' | 'secondary';
    color?: string;
    fontSize?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    cursor?: string;
    textAlign?: string;
    justifyContent?: string;
    alignItems?: string;
    width: string
    height: string
    children: string

};

// Создаем стилизованную кнопку
export const StyledButton = styled.button<ButtonPropsType>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor || 'secondary']};
  color: ${({ theme, color }) => theme.colors[color || 'primary']};
  font-size: ${({ fontSize }) => fontSize || '1em'};
  padding: ${({ padding }) => padding || '10px 20px'};
  border: ${({ border }) => border || 'solid 2px cyan'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  display: ${({ display }) => display || 'block'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
 width: ${({width}) => width || '80px'};
  height: ${({height}) => height || '50px'};
  transition: width 0.3s ease, height 0.3s ease;
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border: none;
    border-radius: inherit;
    width: 80px;
    height: 50px;
  }
  &:hover {
    transform: scale(1.1); /* Увеличиваем размер на 10% */
    
  }
  &:active {
    background-color: lightsteelblue;
  }
  &:focus {
    outline: none; /* Убираем фокус */
    border: none; /* Убираем границу */
  }
`;

// Компонент кнопки
export const Button: React.FC<ButtonPropsType> = ({onClick, disabled, backgroundColor, color,
                                                      fontSize,
                                                      width,
                                                      height,
                                                      children,...rest }) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            backgroundColor={backgroundColor}
            color = {color}
            fontSize = {fontSize}
            width = {width}
            height = {height}
            {...rest}
        >{children }</StyledButton>
    );
};


