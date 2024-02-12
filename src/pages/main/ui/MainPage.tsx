import { useState } from 'react'
import style from "./MainPage.module.scss"

import { Intro } from './intro/Intro'
import { ReviewsBlock } from 'widgets/reviews-block'
import { ArticlesBlock } from 'widgets/articles-block'
import { ShareBlock } from 'widgets/share-block'
import { CitiesBlock } from 'widgets/cities-block'
import { ExcursionsBlock } from 'widgets/excursions-block/ui/ExcursionsBlock'
import { enumTypeFormSortingExcursion } from 'features/sort-excursion'
import { Page } from 'shared/ui/page'

const MainPage = () => {
  const [isMobile, setMobile] = useState<boolean | undefined>(undefined)
  const [isMiddleMobile, setMiddleMobile] = useState<boolean | undefined>(undefined)
  const [isSmallMobile, setSmallMobile] = useState<boolean | undefined>(undefined)

  return (
      <Page 
        onSetIsMobile={setMobile} 
        onSetIsMiddleMobile={setMiddleMobile} 
        onSetIsSmallMobile={setSmallMobile}>
            <Intro isMobile={isMobile} isSmallMobile={isSmallMobile}/>
            <CitiesBlock 
                margin={isMobile ? '61px 0 0 0' : '93px 0 0 0'} 
                isMobile={isMobile}
                title='Популярные направления'
                subTitle='Проводим индивидуальные и групповые экскурсии на русском языке'/>
            <ExcursionsBlock 
              className={style.excursions}
              classNameHead={style.head_excursion}
              classNameButton={style.button_excursion}
              isDynamicPagination 
              isMobile={isMobile} isMiddleMobile={isMiddleMobile}
              typeSortingForm={enumTypeFormSortingExcursion.PRIMARY}
              limit={10}
              title='Экскурсии'/>

            <ReviewsBlock
                margin={isMobile ? '64px 0' : '104px 0'}
                isShowTitleBlock
                isMobile={isMobile}
                description={!isMobile ? 
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry' : 
                  undefined}/>
            <ArticlesBlock isMobile={isMobile}/>
            <ShareBlock isMobile={isMobile}/>
      </Page>
  )
}

export default MainPage
