export interface IRoutePathProperties {
   name?: string
   path: string
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
   ARTICLES = 'articles',
   ARTICLES_DETAILED = 'articles_detailed',
   GUIDE = 'guide',
   NOTFOUND = 'notfound',
   ORDER = 'order',
   INTERNALSERVERERROR = 'internal_server_error',
}
