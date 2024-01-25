import { ReviewDesktop } from "entities/reviews"
import style from "../ReviewSlider.module.scss"

import { Button, enumStyleButton } from "shared/ui/button"
import { Loader } from "shared/ui/loader"
import { Slider, SliderManagment, enumPositionSliderManagment } from "shared/ui/slider"
import { Text, enumStyleText } from "shared/ui/text"
import { IReviewSliderProps } from "../../types"
import classNames from "classnames"

export const ReviewSliderDesktop: React.FC<IReviewSliderProps>  = (props) => {
    const {
        limit,
        onClickNext,
        onClickPrev,
        onGetValue,
        reviews,
        sliderCount,
        className,
        isError,
        isLoading,
        margin
    } = props

    return(
        <div 
            style={{margin: margin}} 
            className={classNames(style.wrapper, className)}>
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
                            content={
                                reviews.map(item => 
                                    <ReviewDesktop key={item.id} {...item}/>) || []}
                            index={sliderCount}
                        />
                        {!isError &&
                            <div className={style.managment}>
                                <SliderManagment
                                    onGetValue={onGetValue}
                                    indexDotted={sliderCount}
                                    position={enumPositionSliderManagment.RIGHT}
                                    onClickNext={onClickNext}
                                    onClickPrev={onClickPrev}
                                    maxValue={limit} 
                                    isShowViewValue/>
                            </div>}
                    </>
                }
        </div>
    )
}