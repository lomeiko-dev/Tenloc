import classNames from "classnames"
import { memo, useCallback } from "react"
import style from "./ButtonSocial.module.scss"

import { Button, enumStyleButton } from "shared/ui/button"

import TelegramIcon from "shared/assets/img/svg-social/telegram2.svg?react"
import WatsappIcon from "shared/assets/img/svg-social/watsapp2.svg?react"
import VkIcon from "shared/assets/img/svg-social/vk.svg?react"
import InstagramIcon from "shared/assets/img/svg-social/instagram.svg?react"

interface IButtonSocialProps {
    linkVk: string,
    linkWatsapp: string,
    linkTelegram: string,
    linkInstagram: string
    isMobile?: boolean,
    className?: string,
    margin?: string
}

export const ButtonSocial: React.FC<IButtonSocialProps> = memo((props) => {
    const {
        linkTelegram,
        linkVk,
        linkWatsapp,
        className,
        isMobile,
        linkInstagram,
        margin,

    } = props

    const watsAppHandle = useCallback(() => {
        window.location.href = linkWatsapp
    }, [linkWatsapp])

    const telegramHandle = useCallback(() => {
        window.location.href = linkInstagram
    }, [linkTelegram])

    const vkHandle = useCallback(() => {
        window.location.href = linkVk
    }, [linkVk])

    const instagramHandle = useCallback(() => {
        window.location.href = linkInstagram
    }, [linkInstagram])

    return(
        <div style={{margin: margin}} className={classNames(style.btns, className)}>
            <Button onClick={watsAppHandle} className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                <WatsappIcon/>
            </Button>
            <Button onClick={telegramHandle} className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                <TelegramIcon/>
            </Button>
            <Button onClick={vkHandle} className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                <VkIcon/>
            </Button>
            {isMobile ? 
                <Button onClick={instagramHandle} className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                    <InstagramIcon/>
                </Button> : undefined}
        </div>
    )
})