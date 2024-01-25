import React, { useCallback, useEffect, useState } from "react"
import { ReviewSliderDesktop, ReviewSliderMobile } from ".."
import { IReview } from "entities/reviews"

interface IReviewSliderProps {
    className?: string
    isMobile?: boolean,
    reviews: IReview[],
    limitDesktop?: number,
    limitMobile?: number,
    isLoading?: boolean,
    loadData: (page: number) => void
    isError?: boolean
}

export const ReviewSlider: React.FC<IReviewSliderProps> = (props) => {
    const {
        className,
        isMobile = false,
        reviews,
        limitDesktop = 5,
        limitMobile = 5,
        isError = false,
        isLoading = false,
        loadData
    } = props

    const [sliderCount, setSliderCount] = useState(0)
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadData(page)
    }, [page])

    const onGetValueHandle = useCallback((index: number) => {
        if(reviews[index] !== undefined){
            setSliderCount(index)
        }
    }, [reviews])

    useEffect(() => {
        if(reviews[sliderCount] === undefined){
            setPage(1)
            setSliderCount(0)
        }
    }, [reviews, sliderCount])

    useEffect(() => {
        setPage(1)
        setSliderCount(0)
    }, [isMobile])

    const onClickNextHandle = useCallback(() => {
        if(sliderCount === limitDesktop-1){
            setPage(prev => prev+=1)
            setSliderCount(0)
        }
        else
            setSliderCount(prev => prev+=1)
    }, [sliderCount])

    const onClickPrevHandle = useCallback(() => {
        if(sliderCount !== 0 || page !== 1){
            if(sliderCount === 0){
                if(page !== 1){
                    setPage(prev => prev-=1)
                    setSliderCount(limitDesktop-1)
                }
            }
            else
                setSliderCount(prev => prev-=1)
        }
    }, [sliderCount, page])

    return(
        <div className={className}>
            {isMobile ?
                <ReviewSliderMobile
                    limit={limitMobile}
                    onGetValue={onGetValueHandle}
                    reviews={reviews}
                    sliderCount={sliderCount}
                    isError={isError} isLoading={isLoading}/> :
                <ReviewSliderDesktop
                    limit={limitDesktop}
                    onClickNext={onClickNextHandle} onClickPrev={onClickPrevHandle}
                    onGetValue={onGetValueHandle}
                    reviews={reviews}
                    sliderCount={sliderCount}
                    isError={isError} isLoading={isLoading}/>}
        </div>
    )
}