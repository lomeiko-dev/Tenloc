import { lazy } from 'react'

export const SideBarLazy = lazy(async () => await import('./Sidebar'))
