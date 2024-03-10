import { memo, useCallback } from 'react'
import style from './ArticlePageDetailed.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetArticleByIdQuery } from 'entities/article'
import { Text, enumStyleText } from 'shared/ui/text'
import { ArticleSection } from './article-section/ArticleSection'
import { ArticlesBlock } from 'widgets/articles-block'
import { ShareBlock } from 'widgets/share-block'
import { Button } from 'shared/ui/button'

import ArrowBackIcon from 'shared/assets/img/svg-icon/arrow-back.svg?react'
import { pathRoutes } from 'shared/config/route-path'

const ArticleDetailed = memo(() => {
   const { id = '' } = useParams()

   const { data, isLoading, isError } = useGetArticleByIdQuery(id)
   const navigate = useNavigate()

   const backHandle = useCallback(() => {
      navigate(pathRoutes.articles.path)
   }, [])

   if (!data) return null

   if (isLoading) {
      return <div>Loading...</div>
   }

   if (isError) return null

   return (
      <div className={style.page}>
         <Button onClick={backHandle} className={style.back} iconLeft={<ArrowBackIcon />}>
            <Text text="Назад" />
         </Button>
         <Text
            margin="58px 0 27px 0"
            styleText={enumStyleText.SECONDARY_TITLE}
            text={data.title}
         />
         {data.body.map((item, index) => (
            <ArticleSection key={index} {...item} />
         ))}
         <ArticlesBlock
            isSliderManagment={false}
            isLinkButton={false}
            title="Похожие статьи"
            margin="112px 0 0 0"
         />
         <ShareBlock />
      </div>
   )
})

export default ArticleDetailed
