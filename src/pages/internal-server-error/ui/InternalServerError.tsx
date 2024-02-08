import style from "./InternalServerError.module.scss"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { Image } from "shared/ui/image"
import { Text, enumStyleText } from "shared/ui/text"
import { Button, enumStyleButton } from "shared/ui/button"

import { pathRoutes } from "shared/config/route-path"
import deadSmile from "shared/assets/img/other/dead-smile.png"

const InternalServerError = () => {
    const navigate = useNavigate()

    const navigateMainHandle = useCallback(() => {
        navigate(pathRoutes.main.path)
    }, [])


    return(
        <div className={style.page}>
           <div className={style.wrap}>
                <Image 
                    margin="0 20px 0 0" 
                    src={deadSmile} 
                    width="300px"/>
                <div className={style.title}>
                    <Text 
                        color="#252525" 
                        styleText={enumStyleText.SECONDARY_TITLE} 
                        text="500"/>
                    <Text 
                        margin="10px 0 0 0" 
                        styleText={enumStyleText.SECONDARY_SUBTITLE} 
                        text="Внутренняя ошибка сервера!"/>
                    <Button 
                        onClick={navigateMainHandle} 
                        margin="90px 0 0 0" 
                        fontSize={17} fontWeight={500} 
                        styleButton={enumStyleButton.SECONDARY}>
                            На главную
                    </Button>
                </div>
           </div>
        </div>
    )
}

export default InternalServerError