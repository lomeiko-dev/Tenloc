import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await import('./ui/AboutPage'))
