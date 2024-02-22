import { memo, useRef } from 'react'
import style from '../FieldSearched.module.scss'

import { Field, enumStyleField } from 'shared/ui/field'
import { Button, enumStyleButton } from 'shared/ui/button'
import { openDatePicker } from 'shared/lib/handlers/openDatePicker'

import SearchIcon from 'shared/assets/img/svg-icon/search.svg?react'
import VectorIcon from 'shared/assets/img/svg-icon/vector2.svg?react'
import CalendarIcon from 'shared/assets/img/svg-icon/calendar.svg?react'

interface IFieldSearchedMobileProps {
  onClickSearch: () => void
  setOpenModal: () => void
  onChangeDate: (date: string) => void
  onChange: (text: string) => void
  value: string
  valueDate: string
}

const FieldSearchedMobile: React.FC<IFieldSearchedMobileProps> = memo((props) => {
  const {
    onClickSearch,
    setOpenModal,
    onChangeDate,
    onChange,
    value,
    valueDate
  } = props

  const blockRef = useRef<HTMLDivElement>(null)

  return (
        <div ref={blockRef} className={style.block}>
            <Field
                fontSize={15} fontWeight={500}
                styleField={enumStyleField.SECONDARY_LINE}
                width='100%'
                placeholder="Выберите направление"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChange(e.target.value) }}
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
                fontSize={15} fontWeight={500}
                styleField={enumStyleField.PRIMARY}
                placeholder="Дата"
                width='100%'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChangeDate(e.target.value) }}
                value={valueDate}
                childrenLeft={
                    <Button
                        onClick={() => { openDatePicker(onChangeDate, blockRef) }}
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
                width='100%' height="55px"
                styleButton={enumStyleButton.PRIMARY}>Найти</Button>
        </div>
  )
})

export default FieldSearchedMobile
