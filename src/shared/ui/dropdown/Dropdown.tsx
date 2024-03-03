import { type CSSProperties, useCallback, useEffect, useState } from 'react'
import style from './Dropdown.module.scss'
import classNames from 'classnames'
import ArrowBottomIcon from 'shared/assets/img/svg-icon/arrow-bottom.svg?react'

export enum enumStyleDropdown {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   NONE = 'none',
}

interface IDowndropProps {
   children: React.ReactNode
   className?: string
   classNameContent?: string
   content: React.ReactNode
   styleDropdown?: enumStyleDropdown
   margin?: string
   padding?: string
   bgColor?: string
   color?: string
   border?: string
   borderRadius?: string
   width?: string
   height?: string
   fontSize?: number
   fontWeight?: number
}

export const Dropwdown: React.FC<IDowndropProps> = (props) => {
   const {
      children,
      className,
      classNameContent,
      content,
      styleDropdown = enumStyleDropdown.NONE,
      bgColor,
      border,
      borderRadius,
      color,
      fontSize,
      fontWeight,
      height,
      margin,
      padding,
      width,
   } = props

   const [open, setOpen] = useState(false)
   const [show, setShow] = useState(false)

   useEffect(() => {
      setOpen(false)
   }, [children])

   const clickHandle = useCallback(
      (e: React.MouseEvent) => {
         open ? setOpen(false) : setShow(true)
         setTimeout(() => {
            open ? setShow(false) : setOpen(true)
         }, 100)
         e.stopPropagation()
      },
      [open]
   )

   useEffect(() => {
      window.addEventListener('click', () => {
         setOpen(false)
      })

      return () => {
         window.removeEventListener('click', () => {
            setOpen(false)
         })
      }
   }, [])

   const cssStylesWrap: CSSProperties = {
      margin,
   }

   const cssStylesDropdown: CSSProperties = {
      border,
      backgroundColor: bgColor,
      borderRadius,
      color,
      fontSize: `${fontSize}px`,
      fontWeight: `${fontWeight}px`,
      padding,
      maxWidth: width,
      width: width !== undefined ? width : undefined,
      height,
   }

   const mods = {
      [style.open]: open,
      [style.close]: !open,
   }

   return (
      <div
         style={cssStylesWrap}
         className={classNames(style.wrap, mods, className)}>
         <button
            style={cssStylesDropdown}
            onClick={clickHandle}
            className={classNames(style.dropdown, style[styleDropdown])}>
            {children}
            <ArrowBottomIcon className={style.arrow} />
         </button>
         {show && (
            <div className={classNames(style.content, classNameContent)}>
               {content}
            </div>
         )}
      </div>
   )
}
