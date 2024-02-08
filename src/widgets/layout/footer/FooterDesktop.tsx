import { memo } from 'react'
import style from './Footer.module.scss'
import { pathRoutes } from 'shared/config/route-path'

import { Image } from 'shared/ui/image'
import { Text, enumStyleText } from 'shared/ui/text'
import { Link } from 'shared/ui/link'
import { GroupLinks } from './ui/group-links/GroupLinks'
import { ButtonSocial } from './ui/button-socials/ButtonSocial'
import { Logotype } from 'shared/ui/logotype'

import feedbackJson from 'shared/assets/json/feedback.json'
import linksJson from 'shared/assets/json/links.json'
import locationJson from 'shared/assets/json/location.json'
import PhoneIcon from 'shared/assets/img/svg-icon/phone.svg?react'
import EmailIcon from 'shared/assets/img/svg-icon/email.svg?react'
import VectorIcon from 'shared/assets/img/svg-icon/Vector.svg?react'
import bankLogotypes from 'shared/assets/img/other/bank-logotypes.png'
import developmentLogo from 'shared/assets/img/logo/logo-development.png'

export const FooterDesktop = memo(() => {
  return (
        <footer className={style.footer}>
            <div className={style.links}>
                <div className={style.namespace}>
                    <Logotype/>
                    <Text margin="70px 0 0 0" styleText={enumStyleText.SECONDARY_TEXT} text="Мы в соц сетях"/>
                    <ButtonSocial
                        linkInstagram={linksJson.instagram}
                        linkTelegram={linksJson.telegram}
                        linkVk={linksJson.vk}
                        linkWatsapp={linksJson.watsapp}/>
                </div>
                <GroupLinks className={style.group_links} title="Сервис">
                    <Link margin="0 0 5px 0" to={pathRoutes.about.path}>{pathRoutes.about.name}</Link>
                    <Link margin="0 0 5px 0" to={pathRoutes.blog.path}>{pathRoutes.blog.name}</Link>
                    <Link margin="0 0 5px 0" to='/'>FAQ</Link>
                    <Link to='/'>Сопособы оплаты</Link>
                </GroupLinks>
                <GroupLinks className={style.group_links} title="Гидам">
                    <Link margin="0 0 5px 0" to={pathRoutes.guide.path}>Стать гидом</Link>
                    <Link margin="0 0 5px 0" to='/'>Правила работы</Link>
                </GroupLinks>
                <GroupLinks className={style.group_links} title="Документы">
                    <Link margin="0 0 5px 0" to='/'>Политика возврата билетов</Link>
                    <Link margin="0 0 5px 0" to='/'>Договор оферты</Link>
                    <Link margin="0 0 5px 0" to='/'>Условия использования сайта</Link>
                    <Link margin="0 0 5px 0" to='/'>Политика обработки персональных данных</Link>
                    <Link margin="0 0 5px 0" to='/'>Реквизиты</Link>
                </GroupLinks>
                <GroupLinks className={style.group_links} title="Поддержка клиентов">
                    <span>
                        <Text iconLeft={<PhoneIcon/>} fontSize={14} fontWeight={600} text="Телефон: "/>
                        <Text fontSize={14} fontWeight={400} text={feedbackJson.phone}/>
                    </span>
                    <span>
                        <Text iconLeft={<EmailIcon/>} fontSize={14} fontWeight={600} text="E-mail: "/>
                        <Text fontSize={14} fontWeight={400} text={feedbackJson.mail}/>
                    </span>
                    <span>
                        <Text iconLeft={<VectorIcon/>} fontSize={14} fontWeight={600} text="Офис: "/>
                        <Text fontSize={14} fontWeight={400} text={`${locationJson.city}, ${locationJson.street}, ${locationJson.other_info}`}/>
                    </span>
                </GroupLinks>
            </div>
            <div className={style.bottom_footer}>
                <Text fontSize={13} fontWeight={400} text="© 2023 «Tenloc»."/>
                <div className={style.right_part}>
                    <Image margin="0 75px 0 0" src={bankLogotypes}/>
                    <div className={style.dev_info}>
                        <Text margin="0 5px 0 0" fontSize={13} fontWeight={400} text="Разработка сайта"/>
                        <Image src={developmentLogo}/>
                    </div>
                </div>
            </div>
        </footer>
  )
})
