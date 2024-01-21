import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import style from "./Header.module.scss"

import { Navbar } from "../navbar/Navbar";
import { Button, enumStyleButton } from "shared/ui/button";
import { Sidebar } from "../sidebar/Sidebar";
import { DropdownSelection } from "features/sort-excursion";
import { Logotype } from "shared/ui/logotype";

import LikeIcon from "shared/assets/img/svg-icon/like.svg?react"
import BurgerMenuIcon from "shared/assets/img/svg-icon/burger-menu.svg?react"

export const Header = memo(() => {
    const [isMobile, setMobile] = useState(true);
    const [isSmallMobile, setSmallMobile] = useState(false)

    const [openSidebar, setOpenSidebar] = useState(false);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
        window.innerWidth < 330 ? setSmallMobile(true) : setSmallMobile(false)
    }

    useEffect(() => {
        setMobile(false) // прогрузка Sidebar
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)

        return () => {
            window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return(
        <header className={style.header}>
            {isMobile &&
                <>
                    <Button 
                        onClick={() => setOpenSidebar(true)} 
                        width="20px" 
                        margin="0 15px 0 0">
                            <BurgerMenuIcon/>
                    </Button>
                    {createPortal(
                        <Sidebar 
                        onClose={() => setOpenSidebar(false)} 
                        isOpen={openSidebar}/>,
                        document.body
                    )}
                </>}
            <Logotype/>

            <div className={style.right_part}>
                {!isMobile &&
                    <DropdownSelection 
                        width="186px" height="50px"
                        margin="0 49px 0 0"
                        cityCount={6}/>}

                {isMobile ? undefined : <Navbar/>}

                {!isSmallMobile && 
                    <div className={style.btns}>
                        <Button
                            width={isMobile ? '35px' : '50px'} height={isMobile ? '35px' : '50px'} 
                            styleButton={enumStyleButton.SECONDARY}>
                                <LikeIcon width={isMobile ? '15px' : '40px'}/>
                        </Button>
                        <Button 
                            height={isMobile ? '35px' : '50px'} width={isMobile ? '75px' : '114px'} 
                            styleButton={enumStyleButton.SECONDARY}>Войти</Button>
                    </div>}
            </div>
        </header>
    )
})