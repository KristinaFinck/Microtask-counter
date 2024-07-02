import React from "react";

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean

}
export const Button = (props: ButtonPropsType) => {
    return <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
}