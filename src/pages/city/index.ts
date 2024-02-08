import { lazy } from 'react'

export const CityPageLazy = lazy(async () => await import('./ui/CityPage'))
