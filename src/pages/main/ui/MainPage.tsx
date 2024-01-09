import style from "./MainPage.module.scss"

import { Intro } from "./intro/Intro"
import { Cities } from "./cities/Cities"; 
import { Text, enumStyleText } from "shared/ui/text";

const MainPage = () => {
    return(
        <div>
            <Intro/>
            <div className={style.popular_directions}>
                <Text margin="0 0 17px 0" styleText={enumStyleText.TERNARY_TITLE} text="Популярные направления"/>
                <Text styleText={enumStyleText.PRIMARY_TEXT} text="Проводим индивидуальные и групповые экскурсии на русском языке"/>
                <Cities/>
            </div>
        </div>
    )
}

export default MainPage