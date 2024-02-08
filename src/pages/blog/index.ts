import { lazy } from 'react'

export const BLogPageLazy = lazy(async () => await import('./ui/BlogPage'))
