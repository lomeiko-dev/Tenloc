import React, { memo, useCallback, useEffect, useState } from 'react'
import style from './ReviewSlider.module.scss'
import classNames from 'classnames'

import { Review, useGetPageReviewQuery } from 'entities/reviews'
import { Loader } from 'shared/ui/loader'
import { Text } from 'shared/ui/text'
import { SliderManagment } from 'shared/ui/slider-managment'

interface IReviewSliderProps {
  isMobile?: boolean
  limit?: number,
  sortValue?: string
}

export const ReviewSlider: React.FC<IReviewSliderProps> = memo((props) => {
  const {
    isMobile,
    limit = 4,
    sortValue
  } = props

  const [sliderCount, setSliderCount] = useState(0)
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useGetPageReviewQuery({
    page,
    limit,
    params: sortValue ?? ''
  })

  const onGetValueHandle = useCallback((index: number) => {
    if (data?.reviews[index] !== undefined) {
      setSliderCount(index)
    }
  }, [data?.reviews])

  useEffect(() => {
    if (data?.reviews[sliderCount] === undefined) {
      setPage(1)
      setSliderCount(0)
    }
  }, [data?.reviews, sliderCount])

  useEffect(() => {
    setPage(1)
    setSliderCount(0)
  }, [isMobile])

  const onClickNextHandle = useCallback(() => {
    if (sliderCount === limit - 1) {
      setPage(prev => prev += 1)
      setSliderCount(0)
    } else { setSliderCount(prev => prev += 1) }
  }, [sliderCount])

  const onClickPrevHandle = useCallback(() => {
    if (sliderCount !== 0 || page !== 1) {
      if (sliderCount === 0) {
        if (page !== 1) {
          setPage(prev => prev -= 1)
          setSliderCount(limit - 1)
        }
      } else { setSliderCount(prev => prev -= 1) }
    }
  }, [sliderCount, page])

  if (isMobile === undefined) { return null }

  if (isLoading) { return <Loader isCenter/> }

  if (isError) {
    return (
            <div className={classNames(isMobile ? style.wrapper_mobile : style.wrapper)}>
                <Text color="red" text="⛔Ошибка сервера. Данных нет."/>
            </div>
    )
  }

  return (
        <div className={classNames(isMobile ? style.wrapper_mobile : style.wrapper)}>
            {data?.reviews[sliderCount] !== undefined &&
              <Review
                className={isMobile ? undefined : style.fix_review}
                  isMobile={isMobile}
                  key={data?.reviews[sliderCount].id}
                  {...data?.reviews[sliderCount]}/>}

            {!isError &&
                <SliderManagment
                    className={isMobile ? style.managment_mobile : style.managment}
                    isHideButtons={isMobile}
                    onGetValue={onGetValueHandle}
                    indexDotted={sliderCount}
                    onClickNext={onClickNextHandle} onClickPrev={onClickPrevHandle}
                    maxValue={(data?.totalCount || 0) < limit ? data?.totalCount : limit} isShowViewValue/>}
        </div>
  )
})
