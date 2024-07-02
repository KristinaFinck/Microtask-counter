import React, {ChangeEvent} from 'react';

type InputType = {
    value: number | string
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}
export const Input = (props:InputType) => {
    return (
        <input value = {props.value} onChange={props.onChange} />
    )
}