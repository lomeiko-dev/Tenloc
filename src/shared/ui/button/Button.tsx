import { type CSSProperties, type HTMLAttributes, memo, useCallback, useState } from 'react'
import style from './Button.module.scss'
import classNames from 'classnames'

export enum enumStyleButton {
  PRIMARY = 'primary_button',
  PRIMARY_OUTLINE = 'primary_button_outline',
  SECONDARY = 'secondary_button',
  SECONDARY_OUTLINE = 'secondary_button_outline',
  TERNARY = 'ternary_button',
  NONE = 0,
}

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  styleButton?: enumStyleButton
  className?: string
  color?: string
  bgColor?: string
  HoverBgColor?: string
  margin?: string
  border?: string
  borderRadius?: string
  padding?: string
  fontSize?: number
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900
  width?: string
  height?: string
}

export const Button: React.FC<IButtonProps> = memo((props) => {
  const {
    iconLeft,
    iconRight,
    bgColor,
    border,
    borderRadius = '100px',
    children,
    className,
    color,
    fontSize = '15px',
    fontWeight = 500,
    height,
    margin,
    padding = '10px 20px',
    styleButton = enumStyleButton.NONE,
    width,
    HoverBgColor,
    ...otherProps
  } = props

  const [colorState, setColor] = useState<string>(bgColor ?? '')

  const cssStyles: CSSProperties = {
    color,
    backgroundColor: colorState,
    border,
    borderRadius,
    fontSize: `${fontSize}px`,
    fontWeight,
    height,
    maxWidth: width,
    width: width ? '100%' : undefined,
    padding,
    margin
  }

  const mouseEnterHandle = useCallback(() => {
    setColor(HoverBgColor ?? '')
  }, [HoverBgColor])

  const mouseLeaveHandle = useCallback(() => {
    setColor(bgColor ?? '')
  }, [bgColor])

  return (
        <button
            {...otherProps}
            style={cssStyles}
            onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}
            className={classNames(className, style.button, style[styleButton])}>
                {iconLeft}

                <div className={style.content}>
                    {children}
                </div>

                {iconRight}
        </button>
  )
})
