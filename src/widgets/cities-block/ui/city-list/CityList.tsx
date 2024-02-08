import { memo } from "react";
import style from "../CitiesBlock.module.scss"

import { CityCard, CitySkeleton } from "entities/excursion";
import { ICitiesBlockProps } from "../../types";
import { Text, enumStyleText } from "shared/ui/text";

const CityList: React.FC<ICitiesBlockProps> = memo((props) => {
    const {
        cities,
        isMobile,
        isError,
        isLoading,
        subTitle,
        title
    } = props

    if (isLoading) {
        return (
            <div className={style.block}>
                {Array(5).fill(null).map((_, index) =>
                    <CitySkeleton key={index} className={style.city}/>)}
            </div>
        )
    }
    
    if (isError) {
        return (
            <div className={style.block}>
                <Text color="red" text="⛔Ошибка сервера. Данных нет."/>
            </div>
        )
    }

    return(
        <div className={style.block}>
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
            <div className={style.list}>
                {cities.map((item) =>
                    <CityCard
                        key={item.id}
                        isMobile={isMobile}
                        className={style.primary_city}
                        {...item}
                    />)}
            </div>
        </div>
    )   
})

export default CityList