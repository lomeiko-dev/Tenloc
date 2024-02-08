import React, { memo } from 'react'

import { Button, enumStyleButton } from 'shared/ui/button'
import { Field, enumStyleField } from 'shared/ui/field'

import SearchIcon from 'shared/assets/img/svg-icon/search.svg?react'
import VectorIcon from 'shared/assets/img/svg-icon/vector2.svg?react'

interface IFieldSearchedDesktopProps {
  onClickSearch: () => void
  setOpenModal: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const FieldSearchedDesktop: React.FC<IFieldSearchedDesktopProps> = memo((props) => {
  const {
    onClickSearch,
    setOpenModal,
    onChange,
    value
  } = props

  return (
        <Field
            width='100%' height='100%'
            fontSize={15} fontWeight={500}
            styleField={enumStyleField.PRIMARY}
            placeholder="Выберите направление"
            onChange={onChange}
            value={value}
            childrenRight={
                <Button
                    onClick={onClickSearch}
                    iconLeft={<SearchIcon/>}
                    width="134px" height="55px"
                    styleButton={enumStyleButton.PRIMARY}>Найти</Button>
            }
            childrenLeft={
                <Button
                    onClick={setOpenModal}
                    width="36px"
                    borderRadius="50%"
                    styleButton={enumStyleButton.SECONDARY_OUTLINE}>
                        <VectorIcon/>
                </Button>
        }/>
  )
})

export default FieldSearchedDesktop
