import { Image } from 'shared/ui/image'
import style from './ExcursionItem.module.scss'
import { CSSProperties, memo } from 'react'
import { Text } from 'shared/ui/text'
import classNames from 'classnames'
import { type IExcursion } from '../../model/types/excursion-scheme'

interface IExcursionItemProps extends
  Pick<IExcursion, 'imagePreview' | 'name'> {
  date?: string,
  price?: number
  className?: string
  margin?: string,
  width?: string
  onClick?: () => void
}

export const ExcursionItem: React.FC<IExcursionItemProps> = memo((props) => {
  const {
    className,
    margin,
    width,
    imagePreview,
    price,
    name,
    date,
    onClick
  } = props

  const cssStyle: CSSProperties = {
    width: width ? '100%' : undefined,
    maxWidth: width,
    margin
  }

  return (
        <div
            onClick={onClick}
            style={cssStyle}
            className={classNames(style.item, className)}>
              <div className={style.head}>
                <Image 
                  width='75px' height='75px' 
                  borderRadius={15} 
                  src={`/server${imagePreview}`}/>
                <Text
                  className={style.title}
                  fontSize={14} fontWeight={400} lineHeight={26}
                  text={name}/>
              </div>
              {date &&
                <div className={style.date}>
                  <Text fontSize={14} fontWeight={600} text='Дата и время'/>
                  <Text text={date}/>
                </div>}
              {price && 
                <Text
                  fontSize={17} fontWeight={600}
                  text={`${price} ₽`}/>}
        </div>
  )
})
