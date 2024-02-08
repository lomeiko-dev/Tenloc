import { type IArticle } from '../types'

export interface IGetPageArticleData {
  articles: IArticle[]
  totalCount: number
}

export interface IGetPageArticleProps {
  page: number
  limit: number
  params?: string
}
