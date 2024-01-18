import classNames from "classnames"
import style from "./ExcursionSkeleton.module.scss"
import { CSSProperties } from "react"

interface IExcursionSkeletonProps {
    className?: string
    width?: string,
    height?: string
}

export const ExcursionSkeleton: React.FC<IExcursionSkeletonProps> = (props) => {
    const {
        className,
        height,
        width
    } = props
    
    const cssStyle: CSSProperties = {
        width: width,
        height: height
    }
    return(
        <span 
            style={cssStyle} 
            className={classNames(style.skeleton, className)}>
        </span>
    )
}