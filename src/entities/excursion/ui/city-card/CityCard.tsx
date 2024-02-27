import { type CSSProperties, memo } from 'react'
import style from './CityCard.module.scss'
import classNames from 'classnames'

import { Image } from 'shared/ui/image'
import { Text } from 'shared/ui/text'
import { Button, enumStyleButton } from 'shared/ui/button'

import { type ICity } from '../../model/types/city-scheme'

interface ICityVIewProps
   extends Pick<ICity, 'excursionCount' | 'title' | 'preview'> {
   className?: string
   width?: string
   height?: string
   margin?: string
   onClick?: () => void
   isMobile?: boolean
}

export const CityCard: React.FC<ICityVIewProps> = memo((props) => {
   const {
      excursionCount,
      preview,
      title,
      className,
      height,
      margin,
      width,
      onClick,
      isMobile = false,
   } = props

   const cssStyle: CSSProperties = {
      maxWidth: width,
      width: width ? '100%' : undefined,
      height,
      margin,
   }

   return (
      <div style={cssStyle} className={classNames(style.wrapper, className)}>
         <div className={style.darkening} />
         <Image
            borderRadius={20}
            className={style.background}
            width="100%"
            height="100%"
            src={`/server/assets/${preview}`}
         />
         <div className={style.content_block}>
            <Text
               width={isMobile ? '125px' : '200px'}
               margin={isMobile ? '0 0 16px 0' : '0 0 38px 0'}
               fontSize={isMobile ? 12 : 22}
               fontWeight={700}
               lineHeight={26}
               color="#FFFFFF"
               text={title}
            />
            <Button
               padding={isMobile ? '2px 5px' : '10px 20px'}
               onClick={onClick}
               fontSize={isMobile ? 10 : 13}
               fontWeight={500}
               styleButton={enumStyleButton.PRIMARY}>
               {excursionCount} экскурсий
            </Button>
         </div>
      </div>
   )
})
