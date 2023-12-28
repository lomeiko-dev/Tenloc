import classNames from "classnames"
import style from "./Loader.module.scss"
import { CSSProperties, memo } from "react"

interface ILoaderProps {
    width?: string,
    height?: string,
    isCenter?: boolean,
    margin?: string,
}

export const Loader: React.FC<ILoaderProps> = memo((props) => {
    const {
        height = "48px",
        isCenter = false,
        margin,
        width = "48px",
    } = props;

    const cssStyles: CSSProperties = {
        margin: margin,
    }

    const cssStylesLoader: CSSProperties = {
        width: width,
        height: height
    }

    return(
        <div 
            style={cssStyles} 
            className={isCenter ? style.centered : undefined}>
            <span style={cssStylesLoader} className={classNames(style.loader)}></span>
        </div>
    )
})