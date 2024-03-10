import { type CSSProperties } from 'react'
import style from './ArticleSkeleton.module.scss'
import classNames from 'classnames'

interface IArticleSkeletonProps {
   width?: string
   height?: string
   className?: string
}

export const ArticleSkeleton: React.FC<IArticleSkeletonProps> = (props) => {
   const { className, height, width } = props

   const cssStyle: CSSProperties = {
      width,
      height,
   }

   return (
      <span
         style={cssStyle}
         className={classNames(style.skeleton, className)}></span>
   )
}
