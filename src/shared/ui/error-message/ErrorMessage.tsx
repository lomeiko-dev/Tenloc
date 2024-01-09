import style from "./ErrorMessage.module.scss"

interface IErrorMessageProps {
    message: string,
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({message}) => {
    return(
        <div className={style.overlay}>
            <span className={style.error_text}>{message}</span>
        </div>
    )
}