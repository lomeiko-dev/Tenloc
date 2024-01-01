import classNames from "classnames"
import style from "./Sidebar.module.scss"
import { memo } from "react"

import { Button, enumStyleButton } from "shared/ui/button"
import { Image } from "shared/ui/image"
import { ConcatFromLazy } from "widgets/contcat-form"
import { Dropwdown, enumStyleDropdown } from "shared/ui/dropdown"
import { Field, enumStyleField } from "shared/ui/field"
import { Navbar, enumStyleNavbar } from "../navbar/Navbar"

import CrossIcon from "shared/assets/img/svg-icon/close.svg?react"
import logoIcon from "shared/assets/img/logo/logo.png";
import SearchIcon from "shared/assets/img/svg-icon/search.svg?react"


interface ISidebarProps {
    isOpen: boolean,
    onClose: () => void
}

export const Sidebar: React.FC<ISidebarProps> = memo((props) => {
    const {
        isOpen,
        onClose
    } = props

    const mods = {
        [style.open]: isOpen,
    }

    return(
        <div className={classNames(style.sidebar, mods)}>
            <div className={style.header}>
                <h1>
                    <Image width="128px" src={logoIcon}/>
                </h1>
                <Button onClick={onClose} className={style.btn_close} styleButton={enumStyleButton.SECONDARY} width="50px" height="50px">
                    <CrossIcon/>
                </Button>
            </div>
            <div className={style.btns}>
                <Dropwdown 
                    width="186px" height="50px" 
                    margin="0 49px 0 0" 
                    styleDropdown={enumStyleDropdown.PRIMARY} 
                    content="пусто">
                    Направления
                </Dropwdown>
                <Button height="50px" width="114px" styleButton={enumStyleButton.SECONDARY}>Войти</Button>
            </div>
            <Field margin="20px auto" width="334px" height="50px" childrenRight={<SearchIcon/>} styleField={enumStyleField.SECONDARY} placeholder="Поиск"/>
            <Navbar styleNavbar={enumStyleNavbar.ANDROID}/>
            <ConcatFromLazy className={style.contact_form}/>
        </div>
    )
})