
import styled from "styled-components";

// Типизация пропсов
type ButtonPropsType = {
    title: string;
    onClick: () => void;
    disabled: boolean;
};

// Создаем стилизованную кнопку
const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: inline-block;

  &:disabled {
    background-color: red;
    cursor: not-allowed;
  }
`;

// Компонент кнопки
export const Button: React.FC<ButtonPropsType> = ({ title, onClick, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {title}
        </StyledButton>
    );
};




// import React from "react";
// import {StyledButton} from "../styles/Styles";
//
// type ButtonPropsType = {
//     title: string
//     onClick: () => void
//     disabled: boolean
//
// }
// export const Button = (props: ButtonPropsType) => {
//     return <StyledButton onClick={props.onClick} disabled={props.disabled}>{props.title}</StyledButton>
// }