import { CSSProperties, memo, useCallback } from 'react'
import style from './ArticleCard.module.scss'
import classNames from 'classnames'

import { Text } from 'shared/ui/text'
import { Image } from 'shared/ui/image'
import { Button, enumStyleButton } from 'shared/ui/button'

import { formatDateToWord } from '../../model/utils/formatDateToWord'
import { type IArticle } from '../../model/types'

import CalendarIcon from 'shared/assets/img/svg-icon/calendar2.svg?react'
import MoreIcon from 'shared/assets/img/svg-icon/more.svg?react'

interface IArticleCardProps extends Omit<IArticle, 'id' | 'body'> {
   className?: string
   margin?: string
   width?: string
   height?: string
   onClickLink: () => void
   isMobile?: boolean
}

export const ArticleCard: React.FC<IArticleCardProps> = memo((props) => {
   const {
      className,
      margin,
      dateCreate,
      onClickLink,
      preview,
      title,
      timeCreate,
      width,
      height,
      isMobile = false,
   } = props

   const getDate = useCallback(() => {
      const word = formatDateToWord(dateCreate)

      if (word === 'Сегодня' || word === 'Вчера') {
         return `${word} ${timeCreate}`
      }

      return word
   }, [dateCreate, timeCreate])

   const cssStyle: CSSProperties = {
      margin,
      height,
      maxWidth: width,
      width: width ? '100%' : undefined,
   }

   return (
      <div style={cssStyle} className={classNames(style.card, className)}>
         <Image
            borderRadius={15}
            width={isMobile ? '258px' : '323px'}
            height={isMobile ? '181px' : '228px'}
            src={`/server${preview}`}
         />
         <div className={style.date_block}>
            <CalendarIcon className={style.icon} />
            <Text
               color="#828282"
               fontSize={13}
               fontWeight={400}
               text={getDate()}
            />
         </div>
         <Text
            margin={isMobile ? '10px 0 0 0' : '16px 0 0 0'}
            height={isMobile ? '70px' : '54px'}
            width={isMobile ? '251px' : '324px'}
            fontSize={16}
            fontWeight={500}
            lineHeight={25}
            text={title}
         />
         <Button
            padding="7px"
            onClick={onClickLink}
            styleButton={enumStyleButton.SECONDARY_OUTLINE}
            fontSize={14}
            fontWeight={400}
            margin={isMobile ? '14px 0 0 0' : '18px 0 0 0'}
            height="36px"
            width="110px"
            iconRight={<MoreIcon />}>
            Читать
         </Button>
      </div>
   )
})
