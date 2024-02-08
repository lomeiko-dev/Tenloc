import { lazy } from 'react'

export const CityListLazy = lazy(async () => await import('./CityList'))
