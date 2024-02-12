import style from '../FormSortingExcursion.module.scss'

import { Field, enumStyleField } from 'shared/ui/field'

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useGetCityQuery } from 'entities/excursion'

import { openDatePicker } from 'shared/lib/handlers/openDatePicker'
import { GenerateQuerySort } from '../../../model/lib/GenerateQuerySort'
import CalendarIcon from 'shared/assets/img/svg-icon/calendar.svg?react'

interface IFormPrimarySortingProps {
  isMobile?: boolean,
  onGetQueryString: (query: string) => void
}

const FormPrimarySorting: React.FC<IFormPrimarySortingProps> = memo((props) => {
  const {
    isMobile,
    onGetQueryString
  } = props

  const divRef = useRef<HTMLDivElement>(null)

  const [valueCity, setValueCity] = useState('')
  const [valueDate, setValueDate] = useState('')

  const [enter, setEnter] = useState(false)
  const { data, isLoading } = useGetCityQuery(5)

  useEffect(() => {
    const query = GenerateQuerySort(valueCity, valueDate) || ''
    console.log(query)
    onGetQueryString(query)

    setEnter(false)
  }, [valueCity, enter])

  const searchDateHandle = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      setEnter(true)
  }, [valueDate])

  return (
        <div ref={divRef} className={style.form_primary}>
            <Field
                padding={isMobile ? '5px' : '10px'}
                value={valueCity || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  { setValueCity(e.target.value) }}
                placeholder={isMobile ? 'Город' : 'Выберите город'}
                borderRadius={10}
                width={isMobile ? '120px' : '241px'} height={isMobile ? '35px' : '55px'}
                selection={!isLoading ? data?.map(item => item.city) : ['Загрузка...']}
                getSelection={setValueCity}
                styleField={enumStyleField.SECONDARY_OUTLINE}/>

            <Field
                padding={isMobile ? '5px' : '10px'}
                value={valueDate || ''}
                onKeyDown={searchDateHandle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValueDate(e.target.value) }}
                placeholder={isMobile ? 'Дата' : 'Выберите дату'}
                borderRadius={10}
                width={isMobile ? '100px' : '241px'} height={isMobile ? '35px' : '55px'}
                styleField={enumStyleField.SECONDARY_OUTLINE}
                childrenRight={
                    <CalendarIcon
                        className={style.calendar}
                        onClick={() => {
                          openDatePicker((date) => {
                            setValueDate(date)
                            setEnter(true)
                          }, divRef)
                        }}/>}
            />
        </div>
  )
})

export default FormPrimarySorting
