import { Text, enumStyleText } from "shared/ui/text"
import style from "./AboutPage.module.scss"

import image from "shared/assets/img/other/image1.png"
import women from "shared/assets/img/other/women.png"
import laptop from "shared/assets/img/other/laptop.png"
import GuideIcon from "shared/assets/img/svg-icon/guide.svg?react"
import MapIcon from "shared/assets/img/svg-icon/map.svg?react"
import MessageIcon from "shared/assets/img/svg-icon/message.svg?react"
import { Image } from "shared/ui/image"
import { ReviewsBlock } from "widgets/reviews-block"
import { ArticlesBlock } from "widgets/articles-block"
import { ShareBlock } from "widgets/share-block"

const AboutPage = () => {
  return (
        <div className={style.page}>
            <div className={style.traval_me}>
                  <Text styleText={enumStyleText.SECONDARY_TITLE} text="«Traval Me» — это"/>
                  <Text width="977px" margin="33px 0 0 0" lineHeight={26} color="#252525" styleText={enumStyleText.PRIMARY_TEXT} text="платформа простого и надежного онлайн бронирования экскурсий на русском языке по всему миру. Был основан в 2012 году в Санкт-Петербурге. В настоящее время является лидером рынка в России и странах бывшего СНГ, занимает одну из лидирующих позиций в мире по данному сегменту. Стал финалистом конкурса «Стартап года 2013», премии «Моя планета», селекционного этапа Y Combinator (бизнес-инкубатор, из которого вышли Airbnb, Dropbox)."/>
                  <Image margin="60px 0 0 0" src={image}/>
            </div>
            <div className={style.our_advantages}>
                  <div className={style.inner}>
                        <div className={style.content}>
                              <Text styleText={enumStyleText.SECONDARY_TITLE} text="Быстро и удобно"/>
                              <Text margin="34px 0 0 0" lineHeight={26} width="730px" styleText={enumStyleText.PRIMARY_TEXT} text="Наша  платформа предоставляет возможность выбрать экскурсию по различным критериям: местоположению, тематике, продолжительности и т.д. Кроме того, у нас можно ознакомиться с отзывами других туристов, которые уже посетили данную экскурсию"/>
                              <Text margin="34px 0 0 0" lineHeight={26} width="730px" styleText={enumStyleText.PRIMARY_TEXT} text="Бронирование экскурсии через онлайн платформу также удобно тем, что не требует посещения туристического агентства или связывания с гидом напрямую. Все необходимые документы и информация о месте и времени встречи будут отправлены на электронную почту или мобильное устройство."/>
                        </div>
                        <Image className={style.women} width="1065px" height="710px" src={women}/>
                  </div>
            </div>
            <div className={style.info}>
                  <div className={style.item}>
                        <div className={style.head}>
                              <div className={style.icon}>
                                    <GuideIcon/>
                              </div>
                              <Text fontSize={22} fontWeight={600} text="Увлеченные гиды"/>
                        </div>
                        <Text className={style.description} color="#454545" lineHeight={24} fontSize={14} fontWeight={400} text="Наши экскурсии проводят увлеченные, общительные люди с большим багажом знаний: историки, архитекторы, журналисты, искусствоведы и другие эксперты."/>
                  </div>
                  <div className={style.item}>
                        <div className={style.head}>
                              <div className={style.icon}>
                                    <MapIcon/>
                              </div>
                              <Text fontSize={22} fontWeight={600} text="Увлеченные гиды"/>
                        </div>
                        <Text className={style.description} color="#454545" lineHeight={24} fontSize={14} fontWeight={400} text="Наши экскурсии проводят увлеченные, общительные люди с большим багажом знаний: историки, архитекторы, журналисты, искусствоведы и другие эксперты."/>
                  </div>
                  <div className={style.item}>
                        <div className={style.head}>
                              <div className={style.icon}>
                                    <MessageIcon/>
                              </div>
                              <Text fontSize={22} fontWeight={600} text="Увлеченные гиды"/>
                        </div>
                        <Text className={style.description} color="#454545" lineHeight={24} fontSize={14} fontWeight={400} text="Наши экскурсии проводят увлеченные, общительные люди с большим багажом знаний: историки, архитекторы, журналисты, искусствоведы и другие эксперты."/>
                  </div>
            </div>
            <div className={style.guide_work}>
                  <div className={style.inner}>
                        <Text margin="150px 0 0 180px" styleText={enumStyleText.SECONDARY_TITLE} text="Как мы работаем"/>
                        <div className={style.content}> 
                              <Image width="1161px" height="774px" src={laptop}/>
                              <div className={style.steps}>
                                    <div className={style.step}>
                                          <div className={style.head}>
                                                <Text className={style.step_text} text="Шаг 1"/>
                                                <Text fontSize={22} fontWeight={600} text="Выбирайте экскурсию на сайте"/>
                                          </div>
                                          <Text margin="0 0 0 95px" styleText={enumStyleText.PRIMARY_TEXT} lineHeight={26} color="#454545" text="Все экскурсии на сайте авторские, экскурсию проводит человек, который ее придумал. Вы можете заранее прочитать описание программы, посмотреть, что гид написал о себе, познакомиться с отзывами других путешественников и выбрать экскурсию, которая вам ближе всего."/>
                                    </div>
                                    <div className={style.step}>
                                          <div className={style.head}>
                                                <Text className={style.step_text} text="Шаг 2"/>
                                                <Text fontSize={22} fontWeight={600} text="Можно пообщаться с гидом до оплаты"/>
                                          </div>
                                          <Text margin="0 0 0 95px" styleText={enumStyleText.PRIMARY_TEXT} lineHeight={26} color="#454545" text="Все экскурсии на сайте авторские, экскурсию проводит человек, который ее придумал. Вы можете заранее прочитать описание программы, посмотреть, что гид написал о себе, познакомиться с отзывами других путешественников и выбрать экскурсию, которая вам ближе всего."/>
                                    </div>
                                    <div className={style.step}>
                                          <div className={style.head}>
                                                <Text className={style.step_text} text="Шаг 3"/>
                                                <Text fontSize={22} fontWeight={600} text="Не нужно платить все деньги сразу"/>
                                          </div>
                                          <Text margin="0 0 0 95px" styleText={enumStyleText.PRIMARY_TEXT} lineHeight={26} color="#454545" text="Все экскурсии на сайте авторские, экскурсию проводит человек, который ее придумал. Вы можете заранее прочитать описание программы, посмотреть, что гид написал о себе, познакомиться с отзывами других путешественников и выбрать экскурсию, которая вам ближе всего."/>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            <div className={style.review}>
                  <Text styleText={enumStyleText.SECONDARY_TITLE} text="Отзывы наших клиентов"/>
                  <ReviewsBlock margin="70px 0 0 0" isMobile={false}/>
            </div>
            <div className={style.blog}>
                  <div className={style.inner}>
                        <ArticlesBlock className={style.articles}/>
                  </div>
            </div>
            <ShareBlock/>
        </div>
  )
}

export default AboutPage
