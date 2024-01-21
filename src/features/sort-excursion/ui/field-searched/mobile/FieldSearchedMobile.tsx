import { useEffect, useRef, useState } from "react"
import style from "./FieldSearchedMobile.module.scss"

import { Field, enumStyleField } from "shared/ui/field"
import { Button, enumStyleButton } from "shared/ui/button"

import SearchIcon from "shared/assets/img/svg-icon/search.svg?react"
import VectorIcon from "shared/assets/img/svg-icon/vector2.svg?react"
import CalendarIcon from "shared/assets/img/svg-icon/calendar.svg?react"
import { openDatePicker } from "shared/lib/handlers/openDatePicker"

interface IFieldSearchedMobileProps {
    onClickSearch: () => void,
    setOpenModal: () => void,
    onChangeDate: (date: string) => void,
    onChange: (text: string) => void,
    value: string,
    valueDate: string
}

export const FieldSearchedMobile: React.FC<IFieldSearchedMobileProps> = (props) => {
    const {
        onClickSearch,
        setOpenModal,
        onChangeDate,
        onChange,
        value,
        valueDate,
    } = props

    const blockRef = useRef<HTMLDivElement>(null);
    const [isSmallMobile, setSmallMobile] = useState(false)

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 330 ? setSmallMobile(true) : setSmallMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])

    return(
        <div ref={blockRef} className={style.block}>
            <Field
                className={style.field}
                fontSize={15} fontWeight={500} 
                styleField={enumStyleField.SECONDARY_LINE}
                width={isSmallMobile ? '170px' : '242px'}
                placeholder="Выберите направление"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    onChange(e.target.value)}
                value={value}
                childrenLeft={
                    <Button 
                        onClick={setOpenModal}
                        width="36px" 
                        borderRadius="50%" 
                        styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                            <VectorIcon/>
                    </Button>
                }
            />
            <Field
                className={style.field}
                fontSize={15} fontWeight={500} 
                styleField={enumStyleField.PRIMARY}
                placeholder="Дата"
                width={isSmallMobile ? '170px' : '242px'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    onChangeDate(e.target.value)}
                value={valueDate}
                childrenLeft={
                    <Button 
                        onClick={() => openDatePicker(onChangeDate, blockRef)}
                        width="36px" 
                        borderRadius="50%" 
                        styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                            <CalendarIcon/>
                    </Button>
                }
            />
            <Button 
                onClick={onClickSearch}
                iconLeft={<SearchIcon/>} 
                fontSize={15} fontWeight={500} 
                width={isSmallMobile ? '170px' : '242px'} height="55px" 
                styleButton={enumStyleButton.PRIMARY}>Найти</Button>
        </div>
    )
}