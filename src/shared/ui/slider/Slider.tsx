import { CSSProperties } from "react"

interface ISliderProps {
    content: React.ReactNode[],
    index: number,
    className?: string,
    margin?: string,
    width?: string,
    height?: string,
}

export const Slider: React.FC<ISliderProps> = (props) => {
    const {
        content,
        index,
        className,
        height,
        margin,
        width
    } = props

    const cssStyles: CSSProperties = {
        margin: margin,
        height: height,
        width: width,
    }

    return(
        <div style={cssStyles} className={className}>
            {content[index]}
        </div>
    )
}