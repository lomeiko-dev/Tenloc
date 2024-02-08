import { type CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import style from './Carousel.module.scss'
import classNames from 'classnames'

import { useInView } from 'react-intersection-observer'

import ArrowLeft from 'shared/assets/img/svg-icon/arrow-left.svg?react'
import ArrowRight from 'shared/assets/img/svg-icon/arrow-right.svg?react'

interface ICarouselProps {
  children: React.ReactNode
  className?: string
  classNameContent?: string,
  valueSkipPx?: number
  positionPx?: number
  isHideButton?: boolean
  onTriggerObserver?: (value: boolean) => void
  margin?: string
  width?: string
  height?: string
}

export const Carousel: React.FC<ICarouselProps> = memo((props) => {
  const {
    children,
    className,
    classNameContent,
    valueSkipPx = 100,
    positionPx = 0,
    height,
    isHideButton = false,
    margin,
    width,
    onTriggerObserver
  } = props

  const [position, setPosition] = useState(0)
  const [refObserver, inViewObserver] = useInView()

  useEffect(() => {
    setPosition(positionPx)
  }, [positionPx])

  useEffect(() => {
    onTriggerObserver && onTriggerObserver(inViewObserver)
  }, [inViewObserver])

  const leftHandle = useCallback(() => {
    if(position === 0) { return null }

    setPosition(position - valueSkipPx)
  }, [inViewObserver, position, valueSkipPx])

  const rightHandle = useCallback(() => {
    setPosition(position + valueSkipPx)

    if (inViewObserver) { setPosition(0) }
  }, [inViewObserver, position, valueSkipPx])

  const cssStyles: CSSProperties = {
    margin,
    maxWidth: width,
    width: width !== undefined ? width : undefined,
    height
  }

  return (
        <div
            style={cssStyles}
            className={classNames(style.wrapper, className)}>
            {!isHideButton &&
                <>
                    <button
                        onClick={rightHandle}
                        className={classNames(style.btn, style.btn_right)}>
                            <ArrowRight/>
                    </button>
                    <button
                        onClick={leftHandle}
                        className={classNames(style.btn, style.btn_left)}>
                            <ArrowLeft/>
                    </button>
                </>}
            <div
                style={{ left: `${position}px` }}
                className={style.content}>
                  <div className={classNames(style.inner_content, classNameContent)}>
                    {children}
                  </div>
                  <div ref={refObserver}/>
            </div>
        </div>
  )
})
