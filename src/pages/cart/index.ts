import { lazy } from 'react'

export const CartPageLazy = lazy(async () => await import('./ui/CartPage'))
