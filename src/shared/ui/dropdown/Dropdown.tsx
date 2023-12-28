import { CSSProperties, useCallback, useState } from "react"
import style from "./Dropdown.module.scss"
import classNames from "classnames"
import ArrowBottomIcon from "shared/assets/img/svg-icon/arrow-bottom.svg?react"

export enum enumStyleDropdown {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    NONE = 0,
}

interface IDowndropProps {
    children: React.ReactNode,
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
        width: width,
        height: height,
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
    }

    const mods = {
        [style.open]: open,
        [style.close]: !open
    }

    return(
        <div 
            style={cssStylesWrap} 
            className={classNames(style.wrap, mods)}>
            <button 
                style={cssStylesDropdown}
                onClick={clickHandle} 
                className={classNames(style.dropdown, style[styleDropdown])}>
                {children}
                <ArrowBottomIcon className={style.arrow}/>
            </button>
            {show && <div className={style.content}>
                {content}
            </div>}
        </div>
    )
}