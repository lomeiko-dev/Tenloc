import { memo, useEffect, useState } from "react";
import style from "./Header.module.scss"

import { Navbar } from "../navbar/Navbar";
import { Button, enumStyleButton } from "shared/ui/button";
import { Sidebar } from "../sidebar/Sidebar";
import { DropdownSelection } from "features/sort-city";
import { Logotype } from "shared/ui/logotype";

import LikeIcon from "shared/assets/img/svg-icon/like.svg?react"
import BurgerMenuIcon from "shared/assets/img/svg-icon/burger-menu.svg?react"

export const Header = memo(() => {
    const [isNav, setNav] = useState(true);
    const [openSidebar, setOpenSidebar] = useState(false);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setNav(false) : setNav(true)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])

    return(
        <header className={style.header}>
            {isNav ? 
                undefined : 
                <Button onClick={() => setOpenSidebar(true)} width="20px" margin="0 15px 0 0">
                    <BurgerMenuIcon/>
                </Button>}
            <Sidebar onClose={() => setOpenSidebar(false)} isOpen={openSidebar}/>
            <Logotype/>
            <div className={style.right_part}>
                {isNav ? 
                    <DropdownSelection 
                        width="186px" height="50px"
                        margin="0 49px 0 0"
                        cityCount={6}/> : 
                    undefined}

                    {isNav ? <Navbar/> : undefined}

                    <div className={style.btns}>
                        <Button margin="0 20px 0 0" padding="0" width="50px" height="50px" styleButton={enumStyleButton.SECONDARY}>
                            <LikeIcon/>
                        </Button>
                        <Button height="50px" width="114px" styleButton={enumStyleButton.SECONDARY}>Войти</Button>
                    </div>
            </div>
        </header>
    )
})