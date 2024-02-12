import { type CSSProperties, memo } from 'react'
import classNames from 'classnames'

import style from './ScoreView.module.scss'
import StarIcon from 'shared/assets/img/svg-icon/star.svg?react'

interface IScoreViewProps {
  className?: string
  score: number
  length?: number
  width?: string
  height?: string
  margin?: string
}

export const ScoreView: React.FC<IScoreViewProps> = memo((props) => {
  const {
    score,
    className,
    height,
    margin,
    width,
    length = 5
  } = props

  const cssStyle: CSSProperties = {
    width,
    height,
    margin
  }

  return (
        <div style={cssStyle} className={classNames(style.scope_stars, className)}>
            {Array(length).fill(null).map((_, index) =>
                <StarIcon
                    key={index}
                    fill={index > score ? '#7B7B7B' : '#FFB800'}/>
            )}
        </div>
  )
})