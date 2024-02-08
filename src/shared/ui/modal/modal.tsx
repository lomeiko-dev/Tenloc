import { type CSSProperties, Suspense, useEffect, useState } from 'react'
import style from './Modal.module.scss'
import classNames from 'classnames'

import { createPortal } from 'react-dom'
import CloseIcon from 'shared/assets/img/svg-icon/close.svg?react'

interface IModalProps {
  children: React.ReactNode
  className?: string
  onClose: () => void
  open?: boolean
  width?: string
  height?: string
  loadingComponent?: React.ReactNode
  lazy?: boolean
}

export const Modal: React.FC<IModalProps> = (props) => {
  const {
    children,
    onClose,
    height,
    open = false,
    width,
    className,
    loadingComponent,
    lazy = false
  } = props

  const [isMounted, setMounted] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    if (open) { setMounted(true) }
  }, [open])

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const closeHandle = () => {
    setClosed(true)
    setTimeout(() => {
      onClose()
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
    width,
    height
  }

  const mods = {
    [style.open]: open,
    [style.closed]: closed
  }

  if (lazy && !isMounted) { return null }

  return (
        <>
            {createPortal(
                <Suspense fallback={loadingComponent === undefined ? 'loading...' : loadingComponent}>
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
