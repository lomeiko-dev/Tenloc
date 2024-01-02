import classNames from "classnames";
import { memo, useCallback } from "react";
import style from "./ContactForm.module.scss"
import { Button } from "shared/ui/button"
import { Text } from "shared/ui/text"

import feedbackJson from "shared/assets/json/feedback.json";
import linksJson from "shared/assets/json/links.json"

import WatsappIcon from "shared/assets/img/svg-social/whatsapp.svg?react";
import TelegramIcon from "shared/assets/img/svg-social/telegram.svg?react";
import PhoneIcon from "shared/assets/img/svg-icon/phone.svg?react";
import EmailIcon from "shared/assets/img/svg-icon/email.svg?react"

interface IContactFormProps {
    className?: string
}

const ContactForm: React.FC<IContactFormProps> = memo(({className}) => {

    const watsAppHandle = useCallback(() => {
        window.location.href = linksJson.watsapp
    }, [linksJson.watsapp])

    const telegtamHandle = useCallback(() => {
        window.location.href = linksJson.telegram
    }, [linksJson.telegram])

    return (
        <div className={classNames(style.form, className)}>
            <Text text={`Мы на связи с ${feedbackJson.time_with} до ${feedbackJson.time_before} ${feedbackJson.time_format}`}/>
            <div className={style.block}>
                <Button onClick={watsAppHandle} margin="0 14px 0 0" width="162px" bgColor="#4CAF50" HoverBgColor="#4CAF5090" borderRadius="100px" padding="12px 11px" color="#ffffff" fontSize={14} iconLeft={<WatsappIcon/>}>WatsApp</Button>
                <Button onClick={telegtamHandle} width="162px" bgColor="#039BE5" HoverBgColor="#039BE590" borderRadius="100px" padding="12px 11px" color="#ffffff" fontSize={14} iconLeft={<TelegramIcon/>}>Telegram</Button>
            </div>
            <div className={style.block}>
                <Text margin="0 20px 0 0 " iconLeft={<PhoneIcon/>} text={feedbackJson.phone}/>
                <Text iconLeft={<EmailIcon/>} text={feedbackJson.mail}/>
            </div>
        </div>
    )
})

export default ContactForm