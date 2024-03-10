import { type typeRouteProps } from '../types'
import { pathRoutes } from 'shared/config/route-path'

import { MainPageLazy } from 'pages/main'
import { CartPageLazy } from 'pages/cart'
import { CityPageLazy } from 'pages/city'
import { OrderPageLazy } from 'pages/order'
import { GuidePageLazy } from 'pages/guide'
import { AboutPageLazy } from 'pages/about'
import { ThanksPageLazy } from 'pages/thanks'
import { ProfilePageLazy } from 'pages/profile'
import { FeedbackPageLazy } from 'pages/feedback'
import { ArticlesPageLazy } from 'pages/articles'
import { NotFoundPageLazy } from 'pages/not-found'
import { ExcursionPageLazy } from 'pages/excursion'
import { ProfiileNavbar } from 'widgets/profile-navbar'
import { ArticlePageDetailedLazy } from 'pages/article-detailed'
import { InternalServerErrorLazy } from 'pages/internal-server-error'

export const Routes: typeRouteProps[] = [
   {
      path: pathRoutes.main.fullPath,
      element: <MainPageLazy />,
      isAuth: pathRoutes.main.isAuth,
   },
   {
      path: pathRoutes.about.fullPath,
      element: <AboutPageLazy />,
      isAuth: pathRoutes.about.isAuth,
   },
   {
      path: pathRoutes.articles.fullPath,
      element: <ArticlesPageLazy />,
      isAuth: pathRoutes.articles.isAuth,
   },
   {
      path: pathRoutes.articles_detailed.fullPath,
      element: <ArticlePageDetailedLazy />,
      isAuth: pathRoutes.articles_detailed.isAuth,
   },
   {
      path: pathRoutes.cart.fullPath,
      element: <CartPageLazy />,
      isAuth: pathRoutes.cart.isAuth,
   },
   {
      path: pathRoutes.city.fullPath,
      element: <CityPageLazy />,
      isAuth: pathRoutes.city.isAuth,
   },
   {
      path: pathRoutes.excursion.fullPath,
      element: <ExcursionPageLazy />,
      isAuth: pathRoutes.excursion.isAuth,
   },
   {
      path: pathRoutes.feedback.fullPath,
      element: (
         <ProfiileNavbar>
            <FeedbackPageLazy />
         </ProfiileNavbar>
      ),
      isAuth: pathRoutes.feedback.isAuth,
   },
   {
      path: pathRoutes.order.fullPath,
      element: (
         <ProfiileNavbar>
            <OrderPageLazy />
         </ProfiileNavbar>
      ),
      isAuth: pathRoutes.order.isAuth,
   },
   {
      path: pathRoutes.guide.fullPath,
      element: <GuidePageLazy />,
      isAuth: pathRoutes.guide.isAuth,
   },
   {
      path: pathRoutes.profile.fullPath,
      element: (
         <ProfiileNavbar>
            <ProfilePageLazy />
         </ProfiileNavbar>
      ),
      isAuth: pathRoutes.profile.isAuth,
   },
   {
      path: pathRoutes.thanks.fullPath,
      element: <ThanksPageLazy />,
      isAuth: pathRoutes.thanks.isAuth,
   },
   {
      path: pathRoutes.notfound.fullPath,
      element: <NotFoundPageLazy />,
      isAuth: pathRoutes.notfound.isAuth,
   },
   {
      path: pathRoutes.internal_server_error.fullPath,
      element: <InternalServerErrorLazy />,
      isAuth: pathRoutes.internal_server_error.isAuth,
   },
]
