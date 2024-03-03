import { type typeRouteProps } from '../types'
import { pathRoutes } from 'shared/config/route-path'

import { MainPageLazy } from 'pages/main'
import { AboutPageLazy } from 'pages/about'
import { ArticlePageLazy } from 'pages/article'
import { BLogPageLazy } from 'pages/blog'
import { CartPageLazy } from 'pages/cart'
import { CityPageLazy } from 'pages/city'
import { ExcursionPageLazy } from 'pages/excursion'
import { FeedbackPageLazy } from 'pages/feedback'
import { GuidePageLazy } from 'pages/guide'
import { ProfilePageLazy } from 'pages/profile'
import { ThanksPageLazy } from 'pages/thanks'
import { NotFoundPageLazy } from 'pages/not-found'
import InternalServerError from 'pages/internal-server-error/ui/InternalServerError'
import { OrderPageLazy } from 'pages/order'
import { ProfiileNavbar } from 'widgets/profile-navbar'

export const Routes: typeRouteProps[] = [
  {
    path: pathRoutes.main.fullPath,
    element: <MainPageLazy/>,
    isAuth: pathRoutes.main.isAuth
  },
  {
    path: pathRoutes.about.fullPath,
    element: <AboutPageLazy/>,
    isAuth: pathRoutes.about.isAuth
  },
  {
    path: pathRoutes.article.fullPath,
    element: <ArticlePageLazy/>,
    isAuth: pathRoutes.article.isAuth
  },
  {
    path: pathRoutes.blog.fullPath,
    element: <BLogPageLazy/>,
    isAuth: pathRoutes.blog.isAuth
  },
  {
    path: pathRoutes.cart.fullPath,
    element: <CartPageLazy/>,
    isAuth: pathRoutes.cart.isAuth
  },
  {
    path: pathRoutes.city.fullPath,
    element: <CityPageLazy/>,
    isAuth: pathRoutes.city.isAuth
  },
  {
    path: pathRoutes.excursion.fullPath,
    element: <ExcursionPageLazy/>,
    isAuth: pathRoutes.excursion.isAuth
  },
  {
    path: pathRoutes.feedback.fullPath,
    element: <ProfiileNavbar><FeedbackPageLazy/></ProfiileNavbar>,
    isAuth: pathRoutes.feedback.isAuth
  },
  {
    path: pathRoutes.order.fullPath,
    element: <ProfiileNavbar><OrderPageLazy/></ProfiileNavbar>,
    isAuth: pathRoutes.order.isAuth
  },
  {
    path: pathRoutes.guide.fullPath,
    element: <GuidePageLazy/>,
    isAuth: pathRoutes.guide.isAuth
  },
  {
    path: pathRoutes.profile.fullPath,
    element: <ProfiileNavbar><ProfilePageLazy/></ProfiileNavbar>,
    isAuth: pathRoutes.profile.isAuth
  },
  {
    path: pathRoutes.thanks.fullPath,
    element: <ThanksPageLazy/>,
    isAuth: pathRoutes.thanks.isAuth
  },
  {
    path: pathRoutes.notfound.fullPath,
    element: <NotFoundPageLazy/>,
    isAuth: pathRoutes.notfound.isAuth
  },
  {
    path: pathRoutes.internal_server_error.fullPath,
    element: <InternalServerError/>,
    isAuth: pathRoutes.internal_server_error.isAuth
  }
]
