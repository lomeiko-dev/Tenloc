import { createPortal } from "react-dom"
import style from "./ErrorMessage.module.scss"
import { useEffect } from "react"

interface IErrorMessageProps {
    message: string,
    onDeleteMessage: () => void
}

export const ErrorMessage: React.FC<IErrorMessageProps> = (props) => {
    const {
        message,
        onDeleteMessage
    } = props

    useEffect(() => {
        setTimeout(() => {
            onDeleteMessage()
        }, 3000);
    }, [])

    return(
        <>
            {createPortal(
                <div className={style.overlay}>
                    <span className={style.error_text}>{message}</span>
                </div>,
                document.body
            )}
        </>
    )
}