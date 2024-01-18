import { Suspense, memo } from "react";
import style from "./Navbar.module.scss"

import { Dropwdown, enumStyleDropdown } from "shared/ui/dropdown";
import { Link } from "shared/ui/link";
import { Loader } from "shared/ui/loader";
import { ConcatFromLazy } from "widgets/contcat-form";

import { pathRoutes } from "shared/config/route-path";

export enum enumStyleNavbar {
    DESKTOP = "desktop",
    ANDROID = "android"
}

interface INavbarProps {
    styleNavbar?: enumStyleNavbar
    onFunc?: () => void
}

export const Navbar: React.FC<INavbarProps> = memo((props) => {
    const {
        styleNavbar = enumStyleNavbar.DESKTOP,
        onFunc
    } = props

    return(
        <nav className={style[`navbar_${styleNavbar}`]}>
            <Suspense fallback={<Loader/>}>
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
                {styleNavbar === enumStyleNavbar.DESKTOP ?
                    <Dropwdown 
                        className={style.link_desktop} 
                        content={<ConcatFromLazy/>} 
                        styleDropdown={enumStyleDropdown.NONE}>
                            Помощь клиентам
                    </Dropwdown> :
                    <Link 
                        onClick={onFunc} 
                        to={pathRoutes.guide.path}>
                            {pathRoutes.guide.name}
                    </Link>}
            </Suspense>
        </nav>
    )
})