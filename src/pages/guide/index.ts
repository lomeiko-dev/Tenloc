import { lazy } from 'react'

export const GuidePageLazy = lazy(async () => await import('./ui/GuidePage'))
