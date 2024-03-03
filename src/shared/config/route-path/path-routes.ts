import { type IRoutePathProperties, enumPath } from './type'

export const pathRoutes: Record<enumPath, IRoutePathProperties> = {
   [enumPath.MAIN]: {
      path: '/',
      fullPath: '/',
      isAuth: false,
   },
   [enumPath.ORDER]: {
      name: 'Мои заказы',
      path: '/order',
      fullPath: '/order',
      isAuth: false,
   },
   [enumPath.ARTICLES]: {
      path: '/articles',
      fullPath: '/articles',
      isAuth: false,
   },
   [enumPath.ARTICLES_DETAILED]: {
      path: '/articles/:id',
      fullPath: '/articles/:id',
      isAuth: false,
   },
   [enumPath.CITY]: {
      path: '/city',
      fullPath: '/city/:name',
      isAuth: false,
   },
   [enumPath.ABOUT]: {
      name: 'О сервисе',
      path: '/about',
      fullPath: '/about',
      isAuth: false,
   },
   [enumPath.EXCURSION]: {
      path: '/excursion',
      fullPath: '/excursion/:id',
      isAuth: false,
   },
   [enumPath.BLOG]: {
      name: 'Блог',
      path: '/blog',
      fullPath: '/blog',
      isAuth: false,
   },
   [enumPath.CART]: {
      path: '/cart',
      fullPath: '/cart',
      isAuth: true,
   },
   [enumPath.GUIDE]: {
      name: 'Партнёрская программа',
      path: '/guide',
      fullPath: '/guide',
      isAuth: false,
   },
   [enumPath.FEEDBACK]: {
      name: 'Написать в поддержку',
      path: '/feedback',
      fullPath: '/feedback',
      isAuth: true,
   },
   [enumPath.PROFILE]: {
      name: 'Настройки профиля',
      path: '/profile',
      fullPath: '/profile',
      isAuth: true,
   },
   [enumPath.THANKS]: {
      path: '/thanks',
      fullPath: '/thanks',
      isAuth: false,
   },
   [enumPath.NOTFOUND]: {
      path: '/not-found',
      fullPath: '/not-found',
      isAuth: false,
   },
   [enumPath.INTERNALSERVERERROR]: {
      path: '/server-error',
      fullPath: '/server-error',
      isAuth: false,
   },
}
