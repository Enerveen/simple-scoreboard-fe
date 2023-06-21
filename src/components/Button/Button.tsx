import {MouseEventHandler, ReactNode} from "react";
import classes from './Button.module.scss'

interface IButtonProps {
    className?: string,
    children: ReactNode | ReactNode[] | string,
    onClick: MouseEventHandler
}

const Button = ({className, children, onClick}:IButtonProps) => <div className={className}>
    <button className={classes.button} onClick={onClick}>
        {children}
    </button>
</div>

export default Button