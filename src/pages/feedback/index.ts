import { lazy } from 'react'

export const FeedbackPageLazy = lazy(async () => await import('./ui/FeedbackPage'))
