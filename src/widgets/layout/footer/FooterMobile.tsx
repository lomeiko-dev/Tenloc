import { memo, useCallback, useEffect, useState } from "react"
import style from "./Footer.module.scss"
import { pathRoutes } from "shared/config/route-path"

import { Link } from "shared/ui/link"
import { Text, enumStyleText } from "shared/ui/text"
import { Button, enumStyleButton } from "shared/ui/button"
import { Image } from "shared/ui/image"
import { ButtonSocial } from "./ui/button-socials/ButtonSocial"
import { GroupLinks } from "./ui/group-links/GroupLinks"

import feedbackJson from "shared/assets/json/feedback.json";
import linksJson from "shared/assets/json/links.json"
import locationJson from "shared/assets/json/location.json"
import downloadJson from "shared/assets/json/download.json"

import ButtonGooglePlayDownloadIcon from "shared/assets/img/btn/google-play-download.svg?react"
import BUttonAppstoreDownloadIcon from "shared/assets/img/btn/appstore-download.svg?react"

import developmentLogo from "shared/assets/img/logo/logo-development.png"
import logo from "shared/assets/img/logo/logo.png"

export const FooterMobile = memo(() => {
    const [isSmallMobile, setSmallMobile] = useState(false)

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 400 ? setSmallMobile(true) : setSmallMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])

    const downloadGooglePlayHandle = useCallback(() => {
        window.location.href = downloadJson.google_play
    }, [downloadJson.google_play])

    const downloadAppStoreHandle = useCallback(() => {
        window.location.href = downloadJson.app_store
    }, [downloadJson.app_store])

    return(
        <div className={style.footer_mobile}>
            <Link to={pathRoutes.main.path}>
                <Image width="128px" src={logo}/>
            </Link>
            <GroupLinks margin="20px 0 0 0" title="Поддержка клиентов" className={style.group_links}>
                <span>
                    <Text fontSize={isSmallMobile ? 9 : 14} fontWeight={isSmallMobile ? 400 : 600} text="Телефон: "/>
                    <Text fontSize={isSmallMobile ? 9 : 14} fontWeight={isSmallMobile ? 300 : 400} text={feedbackJson.phone}/>
                </span>
                <span>
                    <Text fontSize={isSmallMobile ? 9 : 14} fontWeight={isSmallMobile ? 400 : 600} text="E-mail: "/>
                    <Text fontSize={isSmallMobile ? 9 : 14} fontWeight={isSmallMobile ? 300 : 400} text={feedbackJson.mail}/>
                </span>
                <span>
                    <Text fontSize={isSmallMobile ? 9 : 14} fontWeight={isSmallMobile ? 400 : 600} text="Офис: "/>
                    <Text fontSize={isSmallMobile ? 9 : 14} fontWeight={isSmallMobile ? 300 : 400} text={`${locationJson.city}, ${locationJson.street}, ${locationJson.other_info}`}/>
                </span>
                <ButtonSocial 
                    margin="25px 0 0 0"    
                    isMobile 
                    linkInstagram={linksJson.instagram}  
                    linkTelegram={linksJson.telegram} 
                    linkVk={linksJson.vk} 
                    linkWatsapp={linksJson.watsapp}/>
            </GroupLinks>
            <div className={style.download}>
                <Text isCentered margin="20px 0 13px 0" styleText={enumStyleText.QUATERNARY_SUBTITLE} text="Скачайте наше приложение"/>
                <span>
                    <Button onClick={downloadAppStoreHandle} styleButton={enumStyleButton.NONE}>
                        <BUttonAppstoreDownloadIcon/>
                    </Button>
                    <Button onClick={downloadGooglePlayHandle} styleButton={enumStyleButton.NONE}>
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