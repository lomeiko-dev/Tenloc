import { memo } from 'react'
import style from './SliderManagment.module.scss'
import classNames from 'classnames'

import { Button } from '../button'

import ArrowPrevIcon from 'shared/assets/img/svg-icon/arrrow-prew.svg?react'
import ArrowNextIcon from 'shared/assets/img/svg-icon/arrow-next.svg?react'

interface ISliderManagmentProps {
  isMobile?: boolean
  className?: string
  onGetValue?: (index: number) => void
  onClickNext?: () => void
  onClickPrev?: () => void
  indexDotted?: number
  maxValue?: number
  isShowViewValue?: boolean
  isHideButtons?: boolean
  margin?: string
  isButtonSides?: boolean
}

export const SliderManagment: React.FC<ISliderManagmentProps> = memo((props) => {
  const {
    className,
    isMobile = false,
    onGetValue,
    indexDotted = 0,
    maxValue = 0,
    isShowViewValue,
    margin,
    isButtonSides = false,
    onClickNext,
    isHideButtons,
    onClickPrev
  } = props

  return (
        <div style={{margin}} className={classNames(style.wrap, className)}>
                {isButtonSides &&
                    !isHideButtons &&
                        <Button
                            padding="0"
                            width={isMobile ? '35px' : '45px'} 
                            height={isMobile ? '35px' : '45px'}
                            onClick={onClickPrev}
                            className={style.btn}>
                                <ArrowNextIcon 
                                    width={isMobile ? 10 : 20} 
                                    height={isMobile ? 10 : 20}/>
                        </Button>}
                {isShowViewValue &&
                    <div className={style.dot_wrap}>
                        {Array.from({ length: maxValue }, (_, index) =>
                            <span
                                key={index}
                                onClick={() => onGetValue && onGetValue(index)}
                                className={classNames(style.dot, index === indexDotted ? style.dot_select : undefined)}/>)}
                    </div>}
                {!isHideButtons &&
                    <>
                        {!isButtonSides &&
                            <Button
                                padding="0"
                                width={isMobile ? '35px' : '45px'} height={isMobile ? '35px' : '45px'}
                                onClick={onClickPrev}
                                className={style.btn}>
                                    <ArrowNextIcon width={isMobile ? 10 : 20} height={isMobile ? 10 : 20}/>
                            </Button>}
                        <Button
                            padding="0"
                            width={isMobile ? '35px' : '45px'} height={isMobile ? '35px' : '45px'}
                            onClick={onClickNext}
                            className={style.btn}>
                            <ArrowPrevIcon width={isMobile ? 10 : 20} height={isMobile ? 10 : 20}/>
                        </Button>
                    </>}
            </div>
  )
})
