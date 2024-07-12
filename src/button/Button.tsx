import styled from "styled-components";
import React from "react";

// Типизация пропсов
export type ButtonPropsType = {
    title: string;
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
};

// Создаем стилизованную кнопку
export const StyledButton = styled.button<ButtonPropsType>`
  background-color: ${({ theme, backgroundColor, disabled }) => disabled ? 'grey' : theme.colors[backgroundColor || 'secondary']};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize || '1em'};
  padding: ${({ padding }) => padding || '10px 20px'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  display: ${({ display }) => display || 'inline-block'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

// Компонент кнопки
export const Button: React.FC<ButtonPropsType> = ({ title, onClick, disabled, backgroundColor, ...rest }) => {
    return (
        <StyledButton
            title = {title}
            onClick={onClick}
            disabled={disabled}
            backgroundColor={backgroundColor}
            {...rest}
        />
    );
};


