import style from "./Intro.module.scss"
import { memo, useEffect, useState } from "react"

import { Text, enumStyleText } from "shared/ui/text"
import { FieldSearched, SortList } from "features/sort-excursion"

export const Intro = memo(() => {
    const [isMobile, setMobile] = useState(false)
    const [isSmallMobile, setSmallMobile] = useState(false)

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
        window.innerWidth < 340 ? setSmallMobile(true) : setSmallMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)

        return () => {
            window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return(
        <div className={style.intro}>
            <div className={style.container}>
                <Text 
                    isCentered 
                    styleText={enumStyleText.PRIMARY_TITLE} 
                    className={style.title}
                    text="Поиск и бронирование экскурсий"/>
                <Text 
                    isCentered
                    className={style.subtitle}
                    styleText={enumStyleText.PRIMARY_TEXT} 
                    margin="49px 0 0 0" 
                    text="Экскурсии и частные гиды в России и за рубежом"/>
                <FieldSearched 
                    isMobile={isMobile}
                    margin={isMobile ? "20px 0 0 0" : "47px 0 0 0"}/>
                {!isSmallMobile &&
                    <SortList
                        cityCount={isMobile ? 4 : 5}
                        className={style.sort_list}/>}
            </div>
        </div>
    )
})