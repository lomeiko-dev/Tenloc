import { lazy } from 'react'

export const ConcatBlockLazy = lazy(async () => await import('./ContactBlock'))
