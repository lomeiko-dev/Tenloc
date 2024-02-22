import classNames from "classnames";
import style from "./BreadCrumbs.module.scss"
import { CSSProperties, memo } from "react";

export interface ICrumb {
    value: string
    color?: string
}

interface IBreadCrumbsProps {
    values: ICrumb[]
    width?: string,
    margin?: string
    className?: string
    fontSize?: number,
    fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900
}

export const BreadCrumbs: React.FC<IBreadCrumbsProps> = memo((props) => {
    const {
        values,
        className,
        margin,
        width,
        fontSize,
        fontWeight
    } = props

    const cssStyle: CSSProperties = {
        margin,
        maxWidth: width,
        width: width ? '100%' : undefined
    }

    const cssStyleValue: CSSProperties = {
        fontSize,
        fontWeight
    }

    return( 
        <div 
            style={cssStyle} 
            className={classNames(style.bread_crumbs, className)}>
            {values.map((item, index) => 
                <>
                    <span style={{...cssStyleValue, color: item.color}}>{item.value}</span>
                    {index < values.length-1 && '•'}
                </>)}
        </div>
    )
})