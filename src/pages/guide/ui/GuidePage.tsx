import style from './GuidePage.module.scss'
import GuidImage from 'shared/assets/img/other/gid-ekskursovod-turizm.png'
import HappyMam from 'shared/assets/img/other/happy-unshaven-man.png'
import { Button, enumStyleButton } from 'shared/ui/button'
import { Image } from 'shared/ui/image'
import { Text, enumStyleText } from 'shared/ui/text'

import ClickIcon from 'shared/assets/img/svg-icon/click.svg?react'
import SleepIcon from 'shared/assets/img/svg-icon/sleep.svg?react'
import TalkingIcon from 'shared/assets/img/svg-icon/talking.svg?react'
import WebDesignIcon from 'shared/assets/img/svg-icon/web-design.svg?react'
import { GuideForm } from 'features/guide-form'
import { ShareBlock } from 'widgets/share-block'
import { useCallback, useRef } from 'react'

const GuidePage = () => {
   const refAnchor = useRef<HTMLDivElement>(null)

   const goAnchorHandle = useCallback(() => {
      if (refAnchor.current)
         refAnchor.current.scrollIntoView({
            behavior: 'smooth',
         })
   }, [refAnchor])

   return (
      <div className={style.page}>
         <div className={style.about}>
            <div className={style.inner}>
               <Image className={style.background} src={GuidImage} />
               <div className={style.content}>
                  <Text
                     styleText={enumStyleText.PRIMARY_TITLE}
                     width="401px"
                     text="Станьте гидом нашего сервиса"
                  />
                  <Text
                     margin="59px 0 0 0"
                     styleText={enumStyleText.PRIMARY_TEXT}
                     width="655px"
                     text="Trevel Me - это сервис необычных экскурсий от местных жителей. Присоединитесь к огромному сообществу гидов, делитесь своими знаниями, встречайтесь с интересными людьми и зарабатывайте, занимаясь любимым делом!"
                  />
                  <Button
                     onClick={goAnchorHandle}
                     fontSize={15}
                     fontWeight={500}
                     margin="53px 0 0 0"
                     width="241px"
                     height="56px"
                     styleButton={enumStyleButton.PRIMARY}>
                     Стать гидом
                  </Button>
               </div>
            </div>
         </div>
         <div className={style.info_guide_wrapper}>
            <div className={style.info_guide}>
               <div className={style.inner}>
                  <Image
                     height="608px"
                     width="913px"
                     className={style.image}
                     src={HappyMam}
                  />
                  <div className={style.content}>
                     <Text
                        styleText={enumStyleText.SECONDARY_TITLE}
                        text="Кто может стать гидом"
                     />
                     <Text
                        margin="32px 0 0 0"
                        fontSize={16}
                        fontWeight={300}
                        lineHeight={26}
                        text="Мы работаем и с профессиональными гидами, и с влюбленными в город энтузиастами, которые хотят проводить экскурсии. С Трипстером сотрудничают журналисты, историки, архитекторы, искусствоведы и другие харизматичные рассказчики."
                     />
                     <Text
                        margin="28px 0 0 0"
                        fontSize={21}
                        fontWeight={400}
                        lineHeight={31}
                        text="Чтобы стать гидом Trevel Me, важно знать и любить свой город, а также уметь увлечь своими знаниями. В остальном мы поможем!"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className={style.offer_excursion}>
            <div className={style.head}>
               <Text
                  styleText={enumStyleText.SECONDARY_TITLE}
                  text="Как предложить свою экскурсию"
               />
               <Text
                  margin="26px 0 0 0"
                  width="689px"
                  styleText={enumStyleText.PRIMARY_TEXT}
                  text="Каждая экскурсия на Trevel Me — продукт, созданный совместными усилиями гидов и нашей команды."
               />
            </div>
            <div className={style.tutorial}>
               <div className={style.item}>
                  <div className={style.illustration}>
                     <div className={style.step}>1</div>
                     <ClickIcon />
                  </div>
                  <Text
                     margin="22px 0 0 0"
                     fontSize={18}
                     fontWeight={700}
                     text="Отправьте заявку"
                  />
                  <Text
                     margin="12px 0 0 0"
                     color="#454545"
                     fontSize={15}
                     fontWeight={400}
                     text="Нам важно, чтобы у экскурсии была понятная концепция, через которую вы делитесь своим взглядом на город."
                  />
               </div>
               <div className={style.item}>
                  <div className={style.illustration}>
                     <div className={style.step}>2</div>
                     <SleepIcon />
                  </div>
                  <Text
                     margin="22px 0 0 0"
                     fontSize={18}
                     fontWeight={700}
                     text="Ждите ответа"
                  />
                  <Text
                     margin="12px 0 0 0"
                     color="#454545"
                     fontSize={15}
                     fontWeight={400}
                     text="Нам важно, чтобы у экскурсии была понятная концепция, через которую вы делитесь своим взглядом на город."
                  />
               </div>
               <div className={style.item}>
                  <div className={style.illustration}>
                     <div className={style.step}>3</div>
                     <TalkingIcon />
                  </div>
                  <Text
                     margin="22px 0 0 0"
                     fontSize={18}
                     fontWeight={700}
                     text="Звонок-знакомство"
                  />
                  <Text
                     margin="12px 0 0 0"
                     color="#454545"
                     fontSize={15}
                     fontWeight={400}
                     text="Нам важно, чтобы у экскурсии была понятная концепция, через которую вы делитесь своим взглядом на город."
                  />
               </div>
               <div className={style.item}>
                  <div className={style.illustration}>
                     <div className={style.step}>4</div>
                     <WebDesignIcon />
                  </div>
                  <Text
                     margin="22px 0 0 0"
                     fontSize={18}
                     fontWeight={700}
                     text="Экскурсия на сайте"
                  />
                  <Text
                     margin="12px 0 0 0"
                     color="#454545"
                     fontSize={15}
                     fontWeight={400}
                     text="Нам важно, чтобы у экскурсии была понятная концепция, через которую вы делитесь своим взглядом на город."
                  />
               </div>
            </div>
         </div>
         <div className={style.term_cooperation_wrapper}>
            <div className={style.terms_cooperation}>
               <div className={style.left_part}>
                  <Text
                     styleText={enumStyleText.SECONDARY_TITLE}
                     text="Условия сотрудничества"
                  />
                  <div className={style.item}>
                     <div className={style.head}>
                        <div className={style.step}>1</div>
                        <Text
                           fontSize={16}
                           fontWeight={700}
                           text="Размещение на сайте бесплатно"
                        />
                     </div>
                     <Text
                        margin="12px 0 0 47px"
                        lineHeight={26}
                        styleText={enumStyleText.PRIMARY_TEXT}
                        text="При этом мы выбираем, с какими экскурсиями и гидами работать. Размещаем только предложения, которые отвечают актуальному спросу и в продажи которых верим."
                     />
                  </div>
                  <div className={style.item}>
                     <div className={style.head}>
                        <div className={style.step}>2</div>
                        <Text
                           fontSize={16}
                           fontWeight={700}
                           text="Берем 23% от стоимости каждого заказа"
                        />
                     </div>
                     <Text
                        margin="12px 0 0 47px"
                        lineHeight={26}
                        styleText={enumStyleText.PRIMARY_TEXT}
                        text="При этом мы выбираем, с какими экскурсиями и гидами работать. Размещаем только предложения, которые отвечают актуальному спросу и в продажи которых верим."
                     />
                  </div>
               </div>
               <div className={style.right_part}>
                  <Text
                     fontWeight={700}
                     width="592px"
                     className={style.selected}
                     text="Мы вкладываем деньги в продвижение, а вы отвечаете за проведение экскурсий"
                  />
                  <Text
                     width="584px"
                     margin="20px 0 0 10px"
                     fontSize={18}
                     fontWeight={400}
                     text="Поэтому мы можем работать только с гидами, которые не отклоняют заказы и быстро отвечают путешественникам"
                  />
               </div>
            </div>
         </div>
         <div ref={refAnchor} style={{ height: '70px' }}></div>
         <div className={style.form}>
            <GuideForm />
         </div>
         <ShareBlock />
      </div>
   )
}

export default GuidePage
