import { useEffect, useState } from "react";
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { FooterMobile } from "./footer/FooterMobile";

interface ILayoutProps {
    children: React.ReactNode,
    className?: string,
}

export const Layout: React.FC<ILayoutProps> = (props) => {
    const {
        children,
        className
    } = props

    const [isFooterMobile, setFooter] = useState(false);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setFooter(true) : setFooter(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])

    return(
        <div className={className}>
            <Header/>
            {children}
            {isFooterMobile ? <FooterMobile/> : <Footer/>}
        </div>
    )
}