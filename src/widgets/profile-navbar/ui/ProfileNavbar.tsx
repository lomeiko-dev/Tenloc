import { memo, useCallback, useEffect, useState } from 'react'
import style from './ProfileNavbar.module.scss'
import { Link } from 'shared/ui/link'
import { pathRoutes } from 'shared/config/route-path'
import classNames from 'classnames'

interface IProfileNavbarProps {
   children: React.ReactNode
}

export const ProfiileNavbar: React.FC<IProfileNavbarProps> = memo(
   ({ children }) => {
      const [value, setValue] = useState(0)

      useEffect(() => {
         switch (window.location.pathname) {
            case pathRoutes.order.path:
               setValue(0)
               break
            case pathRoutes.profile.path:
               setValue(1)
               break
            case pathRoutes.feedback.path:
               setValue(2)
               break
            default:
               setValue(0)
               break
         }
      }, [pathRoutes, window.location.pathname])

      const getModsHandle = useCallback(
         (count: number) => {
            return value === count ? style.active : undefined
         },
         [value, style]
      )

      return (
         <div className={style.wrap}>
            <div className={style.navbar}>
               <Link
                  onClick={() => {
                     setValue(0)
                  }}
                  className={classNames(style.link, getModsHandle(0))}
                  to={pathRoutes.order.path}>
                  {pathRoutes.order.name}
               </Link>
               <Link
                  onClick={() => {
                     setValue(1)
                  }}
                  className={classNames(style.link, getModsHandle(1))}
                  to={pathRoutes.profile.path}>
                  {pathRoutes.profile.name}
               </Link>
               <Link
                  onClick={() => {
                     setValue(2)
                  }}
                  className={classNames(style.link, getModsHandle(2))}
                  to={pathRoutes.feedback.path}>
                  {pathRoutes.feedback.name}
               </Link>
            </div>
            <div className={style.line}></div>
            {children}
         </div>
      )
   }
)
