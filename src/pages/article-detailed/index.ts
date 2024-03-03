import { lazy } from 'react'

export const ArticlePageDetailedLazy = lazy(
   async () => await import('./ui/ArticlePageDetailed')
)
