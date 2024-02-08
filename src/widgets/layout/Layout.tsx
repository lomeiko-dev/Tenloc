import { useEffect, useState } from 'react'

import { Header } from './header/Header'
import { FooterDesktop } from './footer/FooterDesktop'
import { FooterMobile } from './footer/FooterMobile'

interface ILayoutProps {
  children: React.ReactNode
  className?: string
}

export const Layout: React.FC<ILayoutProps> = (props) => {
  const {
    children,
    className
  } = props

  const [isMobile, setMobile] = useState(false)
  const [isMediumMobile, setIsMediumMobile] = useState(false)
  const [isSmallMobile, setSmallMobile] = useState(false)

  const resizeInnerWidthHandle = () => {
    window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    window.innerWidth < 400 ? setIsMediumMobile(true) : setIsMediumMobile(false)
    window.innerWidth < 330 ? setSmallMobile(true) : setSmallMobile(false)
  }

  useEffect(() => {
    resizeInnerWidthHandle()
    window.addEventListener('resize', resizeInnerWidthHandle)

    return () => {
      window.removeEventListener('resize', resizeInnerWidthHandle)
    }
  }, [window])

  return (
        <div className={className}>
            <Header isMobile={isMobile} isSmallMobile={isSmallMobile}/>
            {children}
            {isMobile
              ? <FooterMobile isMediumWidth={isMediumMobile}/>
              : <FooterDesktop/>}
        </div>
  )
}
