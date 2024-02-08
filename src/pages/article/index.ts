import { lazy } from 'react'

export const ArticlePageLazy = lazy(async () => await import('./ui/ArticlePage'))
