import { memo, useCallback, useState } from 'react'
import style from './Sidebar.module.scss'
import classNames from 'classnames'

import { Button, enumStyleButton } from 'shared/ui/button'
import { Field, enumStyleField } from 'shared/ui/field'
import { Navbar } from '../navbar/Navbar'
import { DropdownCity } from '../other/dropdown-city/DropdownCity'
import { Logotype } from 'shared/ui/logotype'

import { useNavigate } from 'react-router-dom'
import { pathRoutes } from 'shared/config/route-path'

import CrossIcon from 'shared/assets/img/svg-icon/close.svg?react'
import SearchIcon from 'shared/assets/img/svg-icon/search.svg?react'
import ContactBlock from '../other/contcat-bock/ContactBlock'

interface ISidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<ISidebarProps> = memo((props) => {
  const {
    isOpen,
    onClose
  } = props

  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const searchHandle = useCallback(() => {
    if (search !== '') {
      navigate(`${pathRoutes.city.path}/${search}`)
      onClose()
    }
  }, [search])

  const mods = {
    [style.open]: isOpen
  }

  return (
        <div className={classNames(style.sidebar, mods)}>
            <div className={style.header}>
                <Logotype/>
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
                    <DropdownCity/>
                    <Button
                        height="50px" width="114px"
                        styleButton={enumStyleButton.SECONDARY}>
                            Войти
                    </Button>
                </div>
                <Field
                    margin="20px 0 0 0"
                    height="50px" width="100%"
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }}
                    childrenRight={<SearchIcon className={style.btn_search}
                    onClick={searchHandle}/>}
                    styleField={enumStyleField.SECONDARY}
                    placeholder="Поиск"/>
            </div>
            <Navbar onFunc={onClose} isMobile/>
            <ContactBlock className={style.contact_form}/>
        </div>
  )
})

export default Sidebar
