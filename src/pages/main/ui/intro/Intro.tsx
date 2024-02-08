import { Suspense, memo } from 'react'
import style from './Intro.module.scss'

import { Text, enumStyleText } from 'shared/ui/text'
import { FieldSearched } from 'features/sort-excursion'
import { CityListLazy } from './city-list'
import { Loader } from 'shared/ui/loader'

interface IIntroProps {
  isMobile?: boolean
  isSmallMobile?: boolean
}

export const Intro: React.FC<IIntroProps> = memo((props) => {
  const {
    isMobile = undefined,
    isSmallMobile
  } = props
  
  if (isSmallMobile === undefined || isMobile === undefined) { return null }

  return (
        <div className={style.intro}>
            <div className={style.container}>
                <Text
                    isCentered
                    styleText={enumStyleText.PRIMARY_TITLE}
                    className={style.title}
                    text="Поиск и бронирование экскурсий"/>
                <Text
                    isCentered
                    className={style.subtitle}
                    styleText={enumStyleText.PRIMARY_TEXT}
                    margin="49px 0 0 0"
                    text="Экскурсии и частные гиды в России и за рубежом"/>
                <FieldSearched
                    className={style.field}
                    isMobile={isMobile}
                    margin={isMobile ? '20px 0 0 0' : '47px 0 0 0'}/>

                {!isSmallMobile &&
                    <Suspense fallback={<Loader isCenter/>}>
                        <CityListLazy isMobile={isMobile}/>
                    </Suspense>}
            </div>
        </div>
  )
})
