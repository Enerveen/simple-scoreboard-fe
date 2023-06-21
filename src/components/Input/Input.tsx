import classes from './Input.module.scss'
import {ChangeEvent} from "react";


interface IInputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    id: string,
    label: string,
    className?: string,
    type?: string,
    defaultValue?: string | number
}

const Input = ({id, label, onChange, type = 'string', defaultValue}:IInputProps) => {
    return <div className={classes.container}>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            onChange={onChange}
            type={type}
            defaultValue={defaultValue}
        />
    </div>
}

export default Input