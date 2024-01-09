import { useRef } from "react"
import style from "./FieldSearchedMobile.module.scss"

import { Field, enumStyleField } from "shared/ui/field"
import { Button, enumStyleButton } from "shared/ui/button"

import SearchIcon from "shared/assets/img/svg-icon/search.svg?react"
import VectorIcon from "shared/assets/img/svg-icon/vector2.svg?react"
import CalendarIcon from "shared/assets/img/svg-icon/calendar.svg?react"

interface IFieldSearchedMobileProps {
    onClickSearch: () => void,
    setOpenModal: () => void,
    onChangeDate: (date: string) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
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
        valueDate
    } = props
    const blockRef = useRef<HTMLDivElement>(null);

    const openDatePicker = () => {
        const datePicker = document.createElement('input');
        datePicker.type = 'date';
        datePicker.style.pointerEvents = 'none';
        datePicker.style.display = 'none'

        datePicker.addEventListener('change', () => {
            onChangeDate(datePicker.value);
            blockRef.current?.removeChild(datePicker);
        });

        blockRef.current?.append(datePicker)
        datePicker.showPicker();
    };

    return(
        <div ref={blockRef} className={style.block}>
            <Field
                className={style.field}
                fontSize={15} fontWeight={500} 
                styleField={enumStyleField.SECONDARY_LINE}
                width="242px"
                placeholder="Выберите направление"
                onChange={onChange}
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
                width="242px"
                value={valueDate}
                childrenLeft={
                    <Button 
                        onClick={openDatePicker}
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
                width="242px" height="55px" 
                styleButton={enumStyleButton.PRIMARY}>Найти</Button>
        </div>
    )
}