import { useCallback, useEffect } from "react"

interface IPageProps {
    children: React.ReactNode,
    onSetIsMobile?: (value: boolean) => void,
    onSetIsMiddleMobile?: (Value: boolean) => void,
    onSetIsSmallMobile?: (value: boolean) => void,
    className?: string,
    padding?: string
}

export const Page: React.FC<IPageProps> = (props) => {
    const {
        children,
        onSetIsMiddleMobile = () => null,
        onSetIsMobile = () => null,
        onSetIsSmallMobile = () => null,
        className,
        padding
    } = props

    const resizeInnerWidthHandle = useCallback(() => {
        window.innerWidth < 600 ? onSetIsMobile(true) : onSetIsMobile(false)
        window.innerWidth < 400 ? onSetIsMiddleMobile(true) : onSetIsMiddleMobile(false)
        window.innerWidth < 340 ? onSetIsSmallMobile(true) : onSetIsSmallMobile(false)
    }, [])

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    
        return () => {
          window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return (
        <div style={{padding}} className={className}>
            {children}
        </div>
    ) 
}