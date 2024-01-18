import style from "./MainPage.module.scss"

import { Intro } from "./intro/Intro"
import { Cities } from "./cities/Cities"; 
import { Text, enumStyleText } from "shared/ui/text";
import { FormSortingExcursion } from "features/sort-excursion";
import { Excursions } from "./excursions/Excursions";

const MainPage = () => {
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
            <div>
                <div className={style.title}>
                    <Text 
                        className={style.title_excursion} 
                        margin="0 54px 0 0" 
                        styleText={enumStyleText.TERNARY_TITLE} 
                        text="Экскурсии"/>
                    <FormSortingExcursion/>
                </div>
                <Excursions/>
            </div>
        </div>
    )
}

export default MainPage