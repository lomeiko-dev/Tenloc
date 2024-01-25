import classNames from "classnames"
import style from "./ScoreWriter.module.scss"
import React, { CSSProperties, useState } from "react"
import StarIcon from "shared/assets/img/svg-icon/star.svg?react"

interface IScoreWriterProps {
    className?: string,
    width?: string,
    height?: string,
    margin?: string,
    scoreCount?: number,
    onGetScore: (count: number) => void
}

export const ScoreWriter: React.FC<IScoreWriterProps> = (props) => {
    const {
        className,
        height,
        margin,
        width,
        onGetScore,
        scoreCount = 5,
    } = props

    const [starIndex, setStarIndex] = useState(0)

    const selectionStarHandle = (index: number) => {
        setStarIndex(index);
        onGetScore(index)
    }

    const cssStyle: CSSProperties = {
        margin: margin,
        width: width,
        height: height
    }
    
    return(
        <div style={cssStyle} className={classNames(style.wrap, className)}>
            {Array(scoreCount).fill(null).map((_, index) => 
                <StarIcon
                    key={index}
                    className={style.star}
                    fill={starIndex < index ? '#7B7B7B' : '#FFD600'}
                    onClick={() => selectionStarHandle(index)}/>)}
        </div>
    )
}