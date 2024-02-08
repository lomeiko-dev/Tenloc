import { Suspense, memo } from 'react'
import style from './Navbar.module.scss'

import { Dropwdown, enumStyleDropdown } from 'shared/ui/dropdown'
import { Link } from 'shared/ui/link'
import { Loader } from 'shared/ui/loader'
import { ConcatBlockLazy } from 'widgets/layout/other/contcat-bock'

import { pathRoutes } from 'shared/config/route-path'

interface INavbarProps {
  isMobile?: boolean
  onFunc?: () => void
}

export const Navbar: React.FC<INavbarProps> = memo((props) => {
  const {
    isMobile = false,
    onFunc
  } = props

  return (
        <nav className={isMobile ? style.navbar_android : style.navbar_desktop}>
            <Link
                onClick={onFunc}
                className={style.link}
                to={pathRoutes.about.path}>
                    {pathRoutes.about.name}
            </Link>
            <Link
                onClick={onFunc}
                className={style.link}
                to={pathRoutes.blog.path}>
                    {pathRoutes.blog.name}
            </Link>
            {!isMobile
              ? <Dropwdown
                    className={style.link_desktop}
                    classNameContent={style.dropdown_content}
                    content={
                        <Suspense fallback={<Loader isCenter/>}>
                            <ConcatBlockLazy/>
                        </Suspense>
                    }
                    styleDropdown={enumStyleDropdown.NONE}>
                        Помощь клиентам
                </Dropwdown>
              : <Link
                    onClick={onFunc}
                    to={pathRoutes.guide.path}>
                        {pathRoutes.guide.name}
                </Link>}
        </nav>
  )
})
