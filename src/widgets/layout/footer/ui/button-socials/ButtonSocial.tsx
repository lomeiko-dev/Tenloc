import classNames from "classnames"
import { memo } from "react"
import style from "./ButtonSocial.module.scss"

import { Button, enumStyleButton } from "shared/ui/button"
import { Link } from "shared/ui/link"

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

    return(
        <div style={{margin: margin}} className={classNames(style.btns, className)}>
            <Link to={linkWatsapp}>
                <Button className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                    <WatsappIcon/>
                </Button>
            </Link>
            <Link to={linkTelegram}>
                <Button className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                    <TelegramIcon/>
                </Button>
            </Link>
            <Link to={linkVk}>
                <Button className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                    <VkIcon/>
                </Button>
            </Link>
            {isMobile ? 
                <Link to={linkInstagram}>
                    <Button className={style.btn} width="40px" height="40px" borderRadius="5px" styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                        <InstagramIcon/>
                    </Button>
                </Link> : undefined}
        </div>
    )
})