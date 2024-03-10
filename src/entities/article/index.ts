export {
   articleApi,
   articleApiMiddleware,
   articleApiReducer,
   useGetPageArticlesQuery,
   useLazyGetPageArticlesQuery,
   useGetArticleByIdQuery,
   useLazyGetArticleByIdQuery,
} from './model/api/article-api'

export type { IArticle, IBodyArticle } from './model/types'
export { ArticleCard } from './ui/article-card/ArticleCard'
export { ArticleSkeleton } from './ui/article-skeleton/ArticleSkeleton'
