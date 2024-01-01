import { memo } from "react";
import style from "./ContactForm.module.scss"
import { Button } from "shared/ui/button"
import { Text } from "shared/ui/text"

import WatsappIcon from "shared/assets/img/svg-social/whatsapp.svg?react";
import TelegramIcon from "shared/assets/img/svg-social/telegram.svg?react";
import PhoneIcon from "shared/assets/img/svg-icon/phone.svg?react";
import EmailIcon from "shared/assets/img/svg-icon/email.svg?react"
import classNames from "classnames";

interface IContactFormProps {
    className?: string
}

const ContactForm: React.FC<IContactFormProps> = memo(({className}) => {
    return (
        <div className={classNames(style.form, className)}>
            <Text text="Мы на связи с 09:00 до 21:00 мск"/>
            <div className={style.block}>
                <Button margin="0 14px 0 0" width="162px" bgColor="#4CAF50" HoverBgColor="#4CAF5090" borderRadius="100px" padding="12px 11px" color="#ffffff" fontSize={14} iconLeft={<WatsappIcon/>}>WatsApp</Button>
                <Button width="162px" bgColor="#039BE5" HoverBgColor="#039BE590" borderRadius="100px" padding="12px 11px" color="#ffffff" fontSize={14} iconLeft={<TelegramIcon/>}>Telegram</Button>
            </div>
            <div className={style.block}>
                <Text margin="0 20px 0 0 " iconLeft={<PhoneIcon/>} text="+7 (495) 123-45-67"/>
                <Text iconLeft={<EmailIcon/>} text="hello@trevelme.ru"/>
            </div>
        </div>
    )
})

export default ContactForm