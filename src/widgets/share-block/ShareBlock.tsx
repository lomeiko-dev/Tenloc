import { memo } from 'react'
import style from './ShareBlock.module.scss'

import { Image } from 'shared/ui/image'
import { Text, enumStyleText } from 'shared/ui/text'
import { Button } from 'shared/ui/button'

import footerIntro from 'shared/assets/img/other/footer-intro.png'
import VkIcon from 'shared/assets/img/svg-social/vk.svg?react'
import TelegramIcon from 'shared/assets/img/svg-social/telegram2.svg?react'
import InstagramIcon from 'shared/assets/img/svg-social/instagram.svg?react'

interface IShareBlockProps {
  isMobile?: boolean
}

export const ShareBlock: React.FC<IShareBlockProps> = memo(({ isMobile }) => {
  return (
        <div className={style.wrap}>
            <Image
                borderRadius='20px'
                className={style.image}
                width="100%" height="100%"
                src={footerIntro}/>

            <Text
                width="249px"
                fontSize={isMobile ? 20 : 30} fontWeight={700}
                margin={isMobile ? '0 0 4px 0' : '0 0 29px 0'}
                text="Подпишитесь на нашу рассылку"/>
            <Text
                width={isMobile ? '300px' : undefined}
                styleText={enumStyleText.PRIMARY_TEXT}
                text="Подписывайтесь на удобный для Вас мессенджер"/>

            <div className={style.links_block}>
                {isMobile &&
                    <Button
                        borderRadius="9px"
                        padding="3px 0 0 0"
                        width='45px' height='45px'
                        className={style.btn}>
                            <InstagramIcon/>
                    </Button>}
                <Button
                    borderRadius="9px"
                    padding="3px 0 0 0"
                    width={isMobile ? '45px' : '160px'} height={isMobile ? '45px' : '59px'}
                    className={style.btn}
                    iconLeft={!isMobile && <TelegramIcon/>}>
                        {!isMobile ? 'Telegram' : <TelegramIcon/>}
                </Button>
                <Button
                    padding="3px 0 0 0"
                    borderRadius="9px"
                    width={isMobile ? '45px' : '160px'} height={isMobile ? '45px' : '59px'}
                    className={style.btn}
                    iconLeft={!isMobile && <VkIcon/>}>
                        {!isMobile ? 'Vkontakte' : <VkIcon/>}
                </Button>
            </div>

            <Text
                margin={isMobile ? '66px 0 0 0' : '113px 0 0 0'}
                width={isMobile ? '199px' : '490px'}
                color="#7A7A7A"
                styleText={enumStyleText.DESCRIPTION_TEXT}
                text="При переходе в одну из указанных социальных сетей, вы автоматически соглашаетесь с политикой конфидециальности"/>
        </div>
  )
})
