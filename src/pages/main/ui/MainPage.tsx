import style from "./MainPage.module.scss"
import { useEffect, useState } from "react";

import { Intro } from "./intro/Intro"
import { Cities } from "./cities/Cities"; 
import { Text, enumStyleText } from "shared/ui/text";
import { FormSortingExcursion } from "features/sort-excursion";
import { Excursions } from "./excursions/Excursions";

const MainPage = () => {
    const [isMobile, setMobile] = useState(false)

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)

        return () => {
            window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return(
        <div>
            <Intro/>
            <div className={style.popular_directions}>
                <Text 
                    className={style.title_cities} 
                    margin="0 0 17px 0" 
                    styleText={enumStyleText.TERNARY_TITLE} 
                    text="Популярные направления"/>
                <Text 
                    className={style.subtitle_cities} 
                    styleText={enumStyleText.PRIMARY_TEXT} 
                    text="Проводим индивидуальные и групповые экскурсии на русском языке"/>
                <Cities/>
            </div>
            <div className={style.excursions}>
                <div className={style.title}>
                    <Text
                        margin="0 54px 0 0"
                        className={style.title_excursion}
                        styleText={enumStyleText.TERNARY_TITLE} 
                        text="Экскурсии"/>
                    <FormSortingExcursion isMobile={isMobile}/>
                </div>
                <Excursions/>
            </div>
        </div>
    )
}

export default MainPage