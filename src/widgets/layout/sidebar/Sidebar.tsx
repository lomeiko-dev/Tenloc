import { memo, useCallback, useState } from "react"
import style from "./Sidebar.module.scss"

import classNames from "classnames"

import { Button, enumStyleButton } from "shared/ui/button"
import { Image } from "shared/ui/image"
import { ConcatFromLazy } from "widgets/contcat-form"
import { Field, enumStyleField } from "shared/ui/field"
import { Navbar, enumStyleNavbar } from "../navbar/Navbar"
import { DropdownSelection } from "features/sort-excursion"

import { useNavigate } from "react-router-dom"
import { pathRoutes } from "shared/config/route-path"

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

    const [search, setSearch] = useState('');
    const navigate = useNavigate()

    const searchHandle = useCallback(() => {
        if(search !== ''){
            navigate(`${pathRoutes.city.path}/${search}`)
            onClose();
        }
    }, [search])

    const mods = {
        [style.open]: isOpen,
    }

    return(
        <div className={classNames(style.sidebar, mods)}>
            <div className={style.header}>
                <h1>
                    <Image width="128px" src={logoIcon}/>
                </h1>
                <Button 
                    onClick={onClose} 
                    className={style.btn_close} 
                    styleButton={enumStyleButton.SECONDARY} 
                    width="50px" height="50px">
                        <CrossIcon/>
                </Button>
            </div>
            <div className={style.first_part}>
                <div className={style.btns}>
                    <DropdownSelection
                        width="186px" height="50px"
                        cityCount={6}/>
                    <Button 
                        height="50px" width="114px" 
                        styleButton={enumStyleButton.SECONDARY}>
                            Войти
                    </Button>
                </div>
                <Field 
                    margin="20px 0 0 0" 
                    className={style.search} 
                    height="50px" 
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setSearch(e.target.value)}
                    childrenRight={<SearchIcon className={style.btn_search} 
                    onClick={searchHandle}/>} 
                    styleField={enumStyleField.SECONDARY} 
                    placeholder="Поиск"/>
            </div>
            <Navbar onFunc={onClose} styleNavbar={enumStyleNavbar.ANDROID}/>
            <ConcatFromLazy className={style.contact_form}/>
        </div>
    )
})