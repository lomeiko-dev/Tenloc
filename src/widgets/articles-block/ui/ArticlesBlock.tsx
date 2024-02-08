import React, { memo, useCallback, useEffect, useState } from 'react'
import style from './ArticlesBlock.module.scss'

import { ArticleCard, type IArticle, useGetPageArticlesQuery } from 'entities/article'
import { Carousel } from 'shared/ui/carousel'
import { SliderManagment } from 'shared/ui/slider-managment'
import { Text, enumStyleText } from 'shared/ui/text'
import { Button, enumStyleButton } from 'shared/ui/button'
import { Loader } from 'shared/ui/loader'

interface IArticleProps {
  isMobile?: boolean
  width?: string
  limit?: number
}

export const ArticlesBlock: React.FC<IArticleProps> = memo((props) => {
  const {
    isMobile = false,
    limit = 4,
    width = '100%'
  } = props

  const [position, setPosition] = useState(0)
  const [observer, setObserver] = useState(false)

  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<IArticle[]>([])
  const { data, isLoading, isError } = useGetPageArticlesQuery({
    page,
    limit,
    params: ''
  })

  useEffect(() => {
    setArticles(prev => [...prev, ...data?.articles || []])

    if (data?.articles.length === 0) { setPosition(0) }
  }, [data])

  const clickLeftButtonHandle = useCallback(() => {
    if(position === 0) { return null }

    setPosition(prev => prev += isMobile ? 283 : 369)
  }, [position, isMobile])

  const clickRightButtonHandle = useCallback(() => {
    setPosition(prev => prev -= isMobile ? 283 : 369)

    if (observer) { setPage(prev => prev += 1) }
  }, [observer, isMobile])

  if (isError) {
    return (
            <div className={style.wrap}>
                <Text color='red' text="Ошибка сервера. Данных нет."/>
            </div>
    )
  }

  return (
        <div className={style.wrap}>
            <div className={style.title}>
                <div className={style.left_part}>
                    <Text
                        margin={isMobile ? '0 27px 0 0' : '0 59px 0 0'}
                        styleText={enumStyleText.TERNARY_TITLE}
                        text="Блог"/>
                    <SliderManagment
                        margin='6px 0 0 0'
                        isMobile={isMobile}
                        onClickPrev={clickLeftButtonHandle} onClickNext={clickRightButtonHandle}
                        isHideButtons={false} isShowViewValue={false}/>
                </div>
                <Button
                    padding="0"
                    width="100px" height="50px"
                    fontSize={16} fontWeight={400}
                    styleButton={enumStyleButton.TERNARY}>
                        В блог
                </Button>
            </div>
            <div className={style.wrap_carousel}>
                {isLoading
                  ? <Loader isCenter/>
                  : <Carousel
                        onTriggerObserver={setObserver}
                        positionPx={position}
                        height="400px" width={width}
                        isHideButton={true}>
                            <div className={style.content}>
                                {articles.map(item =>
                                    <ArticleCard
                                        key={item.id}
                                        isMobile={isMobile}
                                        onClickLink={() => null}
                                        {...item}/>) || []}
                            </div>
                    </Carousel>}
            </div>
        </div>
  )
})
