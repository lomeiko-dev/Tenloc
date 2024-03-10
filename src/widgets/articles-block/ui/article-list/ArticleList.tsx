import { memo, useCallback } from 'react'
import style from './ArticleList.module.scss'
import { ArticleCard, ArticleSkeleton, IArticle } from 'entities/article'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { pathRoutes } from 'shared/config/route-path'

interface IArticleListProps {
   margin?: string
   className?: string
   limit?: number
   page?: number
   isError?: boolean
   isLoading?: boolean
   articles?: IArticle[]
   valueSkeletons?: number
}

export const ArticleList: React.FC<IArticleListProps> = memo((props) => {
   const {
      className,
      margin,
      articles,
      isError,
      isLoading,
      valueSkeletons = 10,
   } = props

   const navigate = useNavigate()

   const clickArticleHandle = useCallback((id: string) => {
      navigate(pathRoutes.articles_detailed.path + `/${id}`)
   }, [])

   if (!articles) return null

   if (isError) return null

   if (isLoading) {
      return (
         <div className={classNames(style.list, className)}>
            {Array(valueSkeletons)
               .fill(null)
               .map((_, index) => (
                  <ArticleSkeleton key={index} width="333px" height="447px" />
               ))}
         </div>
      )
   }

   return (
      <div style={{ margin }} className={classNames(style.list, className)}>
         {articles.map((item, index) => (
            <ArticleCard
               key={index}
               onClickLink={() => clickArticleHandle(item.id)}
               {...item}
            />
         ))}
      </div>
   )
})
