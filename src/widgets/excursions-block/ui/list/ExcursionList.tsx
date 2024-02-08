import React, { memo } from 'react'
import style from './ExcursionList.module.scss'
import classNames from 'classnames'

import { ExcursionCard, ExcursionSkeleton, type IExcursion } from 'entities/excursion'
import { Text } from 'shared/ui/text'
import { AddToLikesExcursion, FormAddCartExcursion } from 'features/form-excursion'

interface IExcursionListProps {
  data: IExcursion[]
  isError?: boolean
  isLoading?: boolean
  valueSkeletons?: number
  className?: string
  isMobile?: boolean
}

export const ExcursionList: React.FC<IExcursionListProps> = memo((props) => {
  const {
    data,
    isError = true,
    isLoading = true,
    valueSkeletons = 10,
    className,
    isMobile = false
  } = props

  if (data.length === 0) {
    setTimeout(() => {
      return (
        <div className={className}>
            <Text color="#6A6A6A" text="Не найдено"/>
        </div>
)
    }, 300);
  }
  
  if (isLoading) {
    return (
            <div className={classNames(style.list, className)}>
                {Array(valueSkeletons).fill(null).map((_, index) =>
                    <ExcursionSkeleton key={index} width="333px" height="447px"/>)}
            </div>
    )
  }

  if (isError) {
    return (
            <div className={className}>
                <Text color="red" text="⛔Ошибка сервера. Данных нет."/>
            </div>
    )
  }

  return (
        <div className={classNames(style.list, className)}>
            {data.map(item =>
                <ExcursionCard
                    {...item}
                    key={item.id}
                    className={style.card}
                    isMobile={isMobile}
                    likeSlot={
                        <AddToLikesExcursion
                            isMobile={isMobile} id={item.id}/>}
                    orderSlot={
                        <FormAddCartExcursion
                            isMobile={isMobile}
                            price={item.priceMiddle}
                            title={item.name}
                            dates={item.date}
                            id={item.id}/>}/>)}
        </div>
  )
})
