import { memo, useCallback, useState } from "react";
import style from "../CitiesBlock.module.scss"

import { CityCard } from "entities/excursion";
import { Carousel } from "shared/ui/carousel";
import { Loader } from "shared/ui/loader";
import { Text, enumStyleText } from "shared/ui/text";

import { ICitiesBlockProps } from "widgets/cities-block/types";
import { SliderManagment } from "shared/ui/slider-managment";

const CitySlider: React.FC<ICitiesBlockProps> = memo((props) => {
    const {
        cities,
        isMobile,
        isError,
        isLoading,
        subTitle,
        title
    } = props

    const [position, setPosition] = useState(0)
    const [observer, setObserver] = useState(false)

    const clickLeftButtonHandle = useCallback(() => {
        if (position === 0) { return }
        
        setPosition(prev => prev += isMobile ? 202 : 494)
    }, [position, isMobile])

    const clickRightButtonHandle = useCallback(() => {
        setPosition(prev => prev -= isMobile ? 202 : 494)
        
        if (observer) { setPosition(0) }
    }, [observer, isMobile])

    if(isLoading)
        return(
            <div className={style.block}>
                <Loader isCenter/>
            </div>
        )

    if(isError)
        return(
            <div className={style.block}>
                <Text color="red" text="Ошибка сервера. Данных нет."/>
            </div>
        )

    return(
        <div className={style.block}>
            <div className={style.head}>
                <div>
                    {title &&
                        <Text
                            className={style.title_cities}
                            margin="0 0 17px 0"
                            styleText={enumStyleText.TERNARY_TITLE}
                            text={title}/>}
                    {subTitle &&
                        <Text
                            className={style.subtitle_cities}
                            styleText={enumStyleText.PRIMARY_TEXT}
                            text={subTitle}/>}
                </div>
                <SliderManagment
                    margin="35px 0 0 0"
                    isMobile={isMobile}
                    onClickPrev={clickLeftButtonHandle} onClickNext={clickRightButtonHandle}
                    isHideButtons={false} isShowViewValue={false}/>
            </div>
                <Carousel
                    classNameContent={style.content}
                    onTriggerObserver={setObserver}
                    positionPx={position}
                    height={isMobile ? '200px' : '490px'} width='100%'
                    isHideButton={true}>
                        {cities.map(item =>
                            <CityCard
                                className={style.secondary_city}
                                key={item.id}
                                isMobile={isMobile}
                                {...item}/>) || []}
                </Carousel>
        </div>
    )   
})

export default CitySlider