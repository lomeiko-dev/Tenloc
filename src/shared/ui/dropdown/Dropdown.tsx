import { CSSProperties, useCallback, useState } from "react"
import style from "./Dropdown.module.scss"
import classNames from "classnames"
import ArrowBottomIcon from "shared/assets/img/svg-icon/arrow-bottom.svg?react"

export enum enumStyleDropdown {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    NONE = 'none',
}

interface IDowndropProps {
    children: React.ReactNode,
    className?: string,
    content: React.ReactNode,
    styleDropdown?: enumStyleDropdown,
    margin?: string,
    padding?: string,
    bgColor?: string,
    color?: string,
    border?: string,
    borderRadius?: string,
    width?: string,
    height?: string,
    fontSize?: string,
    fontWeight?: string,
}

export const Dropwdown: React.FC<IDowndropProps> = (props) => {
    const {
        children,
        className,
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
        width
    } = props

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const clickHandle = useCallback(() => {
        open ? setOpen(false) : setShow(true)
        setTimeout(() => {
            open ? setShow(false) : setOpen(true)
        }, 100)
    }, [open])

    const cssStylesWrap: CSSProperties = {
        margin: margin
    }

    const cssStylesDropdown: CSSProperties = {
        border: border,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        padding: padding,
        width: width,
        height: height,
    }

    const mods = {
        [style.open]: open,
        [style.close]: !open
    }

    return(
        <div 
            style={cssStylesWrap} 
            className={classNames(style.wrap, mods, className)}>
            <button 
                style={cssStylesDropdown}
                onClick={clickHandle} 
                className={classNames(style.dropdown, style[styleDropdown])}>
                {children}
                <ArrowBottomIcon className={style.arrow}/>
            </button>
            {show && 
                <div className={classNames(style.content)}>
                    {content}
                </div>}
        </div>
    )
}