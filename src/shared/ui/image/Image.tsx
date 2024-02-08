import { type CSSProperties, type HTMLAttributes, memo } from 'react'
import style from './Image.module.scss'
import classNames from 'classnames'

export enum enumStyleImage {
  PRIMARY = 'primary_image',
  SECONDARY = 'secondary_image',
  TERNARY = 'ternary_image',
  NONE = 0
}

interface IImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string
  className?: string
  styleImage?: enumStyleImage
  width?: string
  height?: string
  margin?: string
  borderRadius?: number
  bgColor?: string
}

export const Image: React.FC<IImageProps> = memo((props) => {
  const {
    src,
    styleImage = enumStyleImage.NONE,
    bgColor,
    borderRadius,
    className,
    height,
    margin,
    width,
    ...otherProps
  } = props

  const cssStyles: CSSProperties = {
    backgroundColor: bgColor,
    borderRadius: `${borderRadius}px`,
    height,
    maxWidth: width,
    width: width !== undefined ? width : undefined,
    margin
  }

  return (
        <div
            style={cssStyles}
            className={classNames(style.image, className, style[styleImage])}>
                <img
                    className={style.img}
                    src={src}
                    {...otherProps} />
        </div>
  )
})
