import { type CSSProperties } from 'react'
import style from './CitySkeleton.module.scss'
import classNames from 'classnames'

interface ICitySkeletonProps {
  width?: string
  height?: string
  className?: string
}

export const CitySkeleton: React.FC<ICitySkeletonProps> = (props) => {
  const {
    className,
    height,
    width
  } = props

  const cssStyle: CSSProperties = {
    width,
    height
  }

  return (
        <span
            style={cssStyle}
            className={classNames(style.skeleton, className)}>
        </span>

  )
}
