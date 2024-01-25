import style from "../ReviewSlider.module.scss"
import classNames from "classnames"

import { Loader } from "shared/ui/loader"
import { ReviewMobile } from "entities/reviews"
import { Slider, SliderManagment, enumPositionSliderManagment } from "shared/ui/slider"
import { Text } from "shared/ui/text"

import { IReviewSliderProps } from "../../types"

export const ReviewSliderMobile: 
    React.FC<Omit<IReviewSliderProps, 'onClickNext' | 'onClickPrev'>>  = (props) => {
    const {
        limit,
        reviews,
        sliderCount,
        className,
        isError,
        isLoading,
        margin,
        onGetValue
    } = props

    return(
        <div 
            style={{margin: margin}} 
            className={classNames(style.wrapper_mobile, className)}>

            {isError &&
                <Text 
                    color="red"
                    text="Ошибка сервера. Отзывы не загружены!"/>}
                            
                {isLoading ? 
                <div className={style.loader_wrap}>
                    <Loader/>
                </div> :
                <>
                    <Slider
                        content={reviews.map(item => 
                            <ReviewMobile key={item.id} {...item}/>) || []}
                        index={sliderCount}/>
                    {!isError &&
                        <div className={style.managment_mobile}>
                            <SliderManagment 
                                position={enumPositionSliderManagment.CENTER}
                                onGetValue={onGetValue}
                                indexDotted={sliderCount}
                                maxValue={limit} 
                                isShowViewValue
                                isHideButtons/>
                        </div>}
                </>}
        </div>
    )
}