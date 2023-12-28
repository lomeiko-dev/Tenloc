import { CSSProperties, HTMLAttributes, memo } from "react";
import style from "./Text.module.scss";
import classNames from "classnames";

export enum enumStyleText {
    PRIMARY_TITLE = "primary_title",
    SECONDARY_TITLE = "secondary_title",
    TERNARY_TITLE = "ternary_title",
    QUATERNARY_TITLE = "quaternary_title",
    PRIMARY_SUBTITLE = "primary_subtitle",
    SECONDARY_SUBTITLE = "secondary_subtitle",
    TERNARY_SUBTITLE = "ternary_subtitle",
    QUATERNARY_SUBTITLE = "quaternary_subtitle",
    PRIMARY_TEXT = "primary_text",
    DESCRIPTION_TEXT = "description_text",
    NONE = 0,
}

interface ITextProps extends HTMLAttributes<HTMLDivElement> {
    text: string,
    className?: string,
    styleText?: enumStyleText,
    fontSize?: number,
    fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900,
    lineHeight?: number,
    color?: string,
    border?: string,
    margin?: string,
    padding?: string,
}

export const Text: React.FC<ITextProps> = memo((props) => {
    const {
        className,
        text,
        border,
        color,
        fontSize,
        fontWeight,
        lineHeight,
        styleText = enumStyleText.NONE,
        margin,
        padding,
        ...otherProps
    } = props;

    const cssStyles: CSSProperties = {
        color: color,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        lineHeight: `${lineHeight}`,
        border: border,
        margin: margin,
        padding: padding,
    }

    return(
        <div 
            {...otherProps} 
            style={cssStyles} 
            className={classNames(className, style[styleText])}>
            {text}
        </div>
    )
})