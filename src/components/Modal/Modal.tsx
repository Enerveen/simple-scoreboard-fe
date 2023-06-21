import {ReactNode} from "react";
import classes from './Modal.module.scss'
import Button from "../Button/Button";


interface IModalProps {
    title: string,
    onClose: () => void,
    children: ReactNode | ReactNode[]
}

const Modal = ({title, children, onClose}: IModalProps) => <div className={classes.outerContainer}>
    <div className={classes.innerContainer}>
        <div className={classes.title}>{title}</div>
        <Button className={classes.closeBtn} onClick={onClose}>X</Button>
        {children}
    </div>
</div>

export default Modal