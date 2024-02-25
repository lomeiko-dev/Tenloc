import { lazy } from 'react'

export const ReviewDesktopLazy = lazy(() => import('./ReviewDesktop'))

export const ReviewMobileLazy = lazy(() => import('./ReviewMobile'))
