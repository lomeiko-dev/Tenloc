import { CSSProperties, HTMLAttributes, memo, useCallback, useState } from "react"
import style from "./Field.module.scss"
import classNames from "classnames"

import ArrowBottomIcon from "shared/assets/img/svg-icon/arrow-bottom.svg?react"

export enum enumStyleField {
    PRIMARY = "primary_textbox",
    SECONDARY = "secondary_textbox",
    SECONDARY_OUTLINE = "secondary_textbox_outline",
    SECONDARY_LINE = "secondary_textbox_line",
    NONE = 0
}

interface IFIeldProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    childrenLeft?: React.ReactNode,
    childrenRight?: React.ReactNode,
    type?: "date" | "datetime-local" | "email" | "hidden" | "month" | "password" | "search" | "tel" | "text" | "time" | "url"
    className?: string,
    value?: string,
    classNameInput?: string,
    placeholder?: string,
    styleField?: enumStyleField,
    width?: string,
    height?: string,
    borderRadius?: number,
    padding?: string,
    margin?: string,
    bgColor?: string,
    color?: string,
    fontSize?: number,
    fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900,
    isMultiline?: boolean,
    getSelection?: (text: string) => void,
    selection?: string[],
}

export const Field: React.FC<IFIeldProps> = memo((props) => {
    const {
        type,
        bgColor,
        borderRadius,
        childrenLeft,
        childrenRight,
        className,
        classNameInput,
        placeholder,
        color,
        fontSize,
        fontWeight,
        height,
        margin,
        padding,
        styleField = enumStyleField.NONE,
        width,
        isMultiline = false,
        selection,
        value,
        getSelection = () => null,
        ...otherProps
    } = props

    const [openSelection, setOpenSelection] = useState(false)
    const [showSelection, setShowSelection] = useState(false);

    const showSelectionHandle = useCallback(() => {
        showSelection ? setOpenSelection(false) : setShowSelection(true)
        setTimeout(() => {
            showSelection ? setShowSelection(false) : setOpenSelection(true)
        }, 100)
    }, [showSelection])

    const cssStyleInput: CSSProperties = {
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        padding: padding,
    }

    const cssStyleWrap: CSSProperties = {
        width: width,
        height: height,
        margin: margin,
    }

    const mods = {
        [style.open_selection]: openSelection,
        [style.close_selection]: !openSelection
    }

    return (
        <div 
            style={cssStyleWrap} 
            className={classNames(style.wrap, mods)}>
            <div
                style={cssStyleInput}
                className={classNames(className, style.field, style[styleField])}>
                {childrenLeft}
                {isMultiline ? 
                    <textarea 
                        value={value}
                        style={cssStyleInput}
                        className={classNames(classNameInput, style.textarea)}
                        /> :
                    <input
                        {...otherProps}
                        value={value}
                        style={cssStyleInput}
                        className={classNames(classNameInput, style.input)} 
                        placeholder={placeholder} 
                        type={type}/>}
                    {selection && 
                        <button onClick={showSelectionHandle} className={style.btn}>
                            <ArrowBottomIcon/>    
                        </button>}
                {childrenRight}
            </div>
            {showSelection &&
            <div className={style.selection_wrap}>
                <div className={style.selection}>
                    {selection?.map(item => 
                        <div onClick={() => getSelection(item)} className={style.selection_item}>
                            {item}
                        </div>)}
                </div>
            </div>}
        </div>
    )
})