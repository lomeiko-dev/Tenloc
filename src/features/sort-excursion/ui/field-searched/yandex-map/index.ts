import { lazy } from 'react'

export const YandexMapLazy = lazy(async () => await import('./YandexMap'))
