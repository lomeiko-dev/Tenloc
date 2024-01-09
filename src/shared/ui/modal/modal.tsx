import { CSSProperties, Suspense, useEffect, useState } from "react"
import style from "./Modal.module.scss"
import { createPortal } from "react-dom"
import classNames from "classnames"
import CloseIcon from "shared/assets/img/svg-icon/close.svg?react"


interface IModalProps {
    children: React.ReactNode,
    className?: string,
    onClose : () => void,
    open?: boolean
    width?: string,
    height?: string,
    loadingComponent?: React.ReactNode
}


export const Modal: React.FC<IModalProps> = (props) => {
    const {
        children,
        onClose,
        height,
        open = false,
        width,
        className,
        loadingComponent
    } = props

    useEffect(() => {
        setLazy(true)
    }, [open])

    useEffect(() => {
        if (open) {
          window.addEventListener('keydown', onKeyDown)
        }
    
        return () => {
          window.removeEventListener('keydown', onKeyDown)
        }
    }, [open])

    const [lazy, setLazy] = useState(false)
    const [closed, setClosed] = useState(false);

    const closeHandle = () => {
        setClosed(true);
        setTimeout(() => {
            onClose();
            setClosed(false)
        }, 200)
    }

    const stopPropagationHandle = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeHandle()
        }
      }

    const cssStyles: CSSProperties = {
        width: width,
        height: height
    }

    const mods = {
        [style.open]: open,
        [style.closed]: closed
    }

    if(!lazy && open)
        return

    return(
        <>
            {createPortal(
                <Suspense fallback={loadingComponent === undefined ? "loading..." : loadingComponent}>
                    <div className={classNames(style.wrapper, mods)}>
                        <div 
                            className={classNames(style.overlay, className)}
                            onClick={closeHandle}>
                            <div 
                                style={cssStyles} 
                                className={style.modal}
                                onClick={stopPropagationHandle}>
                                <button 
                                    onClick={closeHandle} 
                                    className={style.btn_close}>
                                    <CloseIcon/>
                                </button>
                                <div className={style.content}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </Suspense>,
                document.body
            )}
        </>
    )
}