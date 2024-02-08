import { type CSSProperties, memo } from 'react'
import { type LinkProps, Link as ReactLink } from 'react-router-dom'
import style from './Link.module.scss'
import classNames from 'classnames'

interface ILinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  margin?: string
  fontSize?: number
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800
  color?: string
}

export const Link: React.FC<ILinkProps> = memo((props) => {
  const {
    children,
    className,
    margin,
    fontSize,
    fontWeight,
    color,
    ...otherProps
  } = props

  const cssStyle: CSSProperties = {
    margin,
    fontSize: `${fontSize}px`,
    fontWeight,
    color
  }

  return (
        <ReactLink
            style={cssStyle}
            className={classNames(style.link, className)}
            {...otherProps}>
                {children}
        </ReactLink>
  )
})
