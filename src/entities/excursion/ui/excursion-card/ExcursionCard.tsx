import { type CSSProperties, memo } from 'react'
import style from './ExcursionCard.module.scss'
import classNames from 'classnames'

import { Image } from 'shared/ui/image'
import { Text, enumStyleText } from 'shared/ui/text'

import { type IExcursion } from '../../model/types/excursion-scheme'

interface IExcursionCardProps extends
  Pick<IExcursion, 'imagePreview' | 'name' | 'description' | 'priceMiddle'> {
  className?: string
  margin?: string
  width?: string
  height?: string
  likeSlot?: React.ReactNode
  orderSlot?: React.ReactNode
  isMobile?: boolean
}

export const ExcursionCard: React.FC<IExcursionCardProps> = memo((props) => {
  const {
    className,
    margin,
    description,
    name,
    priceMiddle,
    imagePreview,
    orderSlot,
    likeSlot,
    height,
    width,
    isMobile = false
  } = props

  const cssStyle: CSSProperties = {
    margin,
    width,
    height
  }

  return (
        <div 
          style={cssStyle} 
          className={classNames(style.card, className)}>
            <Image
                className={style.image}
                width="100%" height={isMobile ? '97px' : '226px'}
                src={`/server${imagePreview}`}/>

            <div className={style.like_slot}>
                {likeSlot}
            </div>

            <div className={style.content}>
                <Text
                    width="100%"
                    className={style.title}
                    margin="0 0 10px 0"
                    styleText={enumStyleText.TERNARY_SUBTITLE}
                    text={name}/>
                {!isMobile &&
                    <Text
                        className={style.descr}
                        width="100%"
                        margin={isMobile ? '0 0 11px 0' : '0 0 16px 0'}
                        styleText={enumStyleText.DESCRIPTION_TEXT}
                        text={description}/>}
                <div className={style.price}>
                    <Text fontSize={isMobile ? 12 : 20} fontWeight={700} text={`от ${priceMiddle} ₽`}/>
                    <Text margin="0 5px" styleText={enumStyleText.TERNARY_SUBTITLE} text="/"/>
                    <Text styleText={enumStyleText.DESCRIPTION_TEXT} text="с чел"/>
                </div>
                {orderSlot}
            </div>
        </div>
  )
})
