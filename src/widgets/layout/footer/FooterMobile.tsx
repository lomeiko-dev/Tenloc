import style from "./Footer.module.scss"

import { Link } from "shared/ui/link"
import { pathRoutes } from "shared/config/route-path"
import { Text, enumStyleText } from "shared/ui/text"
import { Button, enumStyleButton } from "shared/ui/button"
import { Image } from "shared/ui/image"
import { ButtonSocial } from "./ui/button-socials/ButtonSocial"
import { GroupLinks } from "./ui/group-links/GroupLinks"

import ButtonGooglePlayDownloadIcon from "shared/assets/img/btn/google-play-download.svg?react"
import BUttonAppstoreDownloadIcon from "shared/assets/img/btn/appstore-download.svg?react"

import developmentLogo from "shared/assets/img/logo/logo-development.png"
import logo from "shared/assets/img/logo/logo.png"
import { memo } from "react"

export const FooterMobile = memo(() => {
    return(
        <div className={style.footer_mobile}>
            <Link to={pathRoutes.main.path}>
                <Image width="128px" src={logo}/>
            </Link>
            <GroupLinks margin="20px 0 0 0" title="Поддержка клиентов" className={style.group_links}>
                <span>
                    <Text fontSize={14} fontWeight={600} text="Телефон: "/>
                    <Text fontSize={14} fontWeight={400} text="+7 (495) 123-45-67"/>
                </span>
                <span>
                    <Text fontSize={14} fontWeight={600} text="E-mail: "/>
                    <Text fontSize={14} fontWeight={400} text="hello@trevelme.ru"/>
                </span>
                <span>
                    <Text fontSize={14} fontWeight={600} text="Офис: "/>
                    <Text fontSize={14} fontWeight={400} text="Москва, ул. Название улицы 10, офис 11"/>
                </span>
                <ButtonSocial margin="25px 0 0 0" isMobile linkInstagram="/" linkTelegram="/" linkVk="/" linkWatsapp="/"/>
            </GroupLinks>
            <div className={style.download}>
                <Text margin="20px 0 13px 0" styleText={enumStyleText.QUATERNARY_SUBTITLE} text="Скачайте наше приложение"/>
                <span>
                    <Button styleButton={enumStyleButton.NONE}>
                        <BUttonAppstoreDownloadIcon/>
                    </Button>
                    <Button styleButton={enumStyleButton.NONE}>
                        <ButtonGooglePlayDownloadIcon/>
                    </Button>
                </span>
            </div>
            <div className={style.bottom_footer}>
                <Text fontSize={13} fontWeight={400} text="© 2023 «Tenloc»."/>
                <div className={style.dev_info}>
                    <Text fontSize={13} fontWeight={400} text="Разработка сайта"/>
                    <Image src={developmentLogo}/>
                </div>
            </div>
        </div>
    )
})