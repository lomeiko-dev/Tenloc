export interface IRoutePathProperties {
  name?: string
  path: string
  params?: string
  fullPath: string
  isAuth: boolean
}

export enum enumPath {
  MAIN = 'main',
  CITY = 'city',
  EXCURSION = 'excursion',
  THANKS = 'thanks',
  ABOUT = 'about',
  CART = 'cart',
  PROFILE = 'profile',
  FEEDBACK = 'feedback',
  FEEDBACK_ANSWER = 'feedback_answer',
  BLOG = 'blog',
  ARTICLE = 'article',
  GUIDE = 'guide',
  NOTFOUND = 'notfound',
  INTERNALSERVERERROR = 'internal_server_error'
}
