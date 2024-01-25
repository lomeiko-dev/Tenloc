import style from "./MainPage.module.scss"
import { useEffect, useState } from "react";

import { Intro } from "./intro/Intro"
import { Cities } from "./cities/Cities"; 
import { Text, enumStyleText } from "shared/ui/text";
import { Excursions } from "./excursions/Excursions";
import { Reviews } from "./reviews/Reviews";

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
            <Excursions 
                isMobile={isMobile}/>
                
            <Reviews 
                isMobile={isMobile}/>
        </div>
    )
}

export default MainPage