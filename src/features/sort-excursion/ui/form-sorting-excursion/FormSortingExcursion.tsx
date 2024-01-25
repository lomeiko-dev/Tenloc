import style from "./FormSortingExcursion.module.scss"

import { Field, enumStyleField } from "shared/ui/field"

import { useGetCityByBookingCountQuery } from "../../model/api/sort-excursion-api"
import { memo, useCallback, useEffect, useRef, useState } from "react"

import { openDatePicker } from "shared/lib/handlers/openDatePicker"
import CalendarIcon from "shared/assets/img/svg-icon/calendar.svg?react"

interface IFormSortingExcursionProps {
    isMobile?: boolean,
    onGetQueryString: (query: string) => void
    onResetData: () => void
}

export const FormSortingExcursion : React.FC<IFormSortingExcursionProps> = memo((props) => {
    const {
        isMobile = false,
        onGetQueryString,
        onResetData
    } = props
    
    const divRef = useRef<HTMLDivElement>(null);

    const [valueCity, setValueCity] = useState<string | undefined>(undefined)
    const [valueDate, setValueDate] = useState<string | undefined>(undefined)

    const [enter, setEnter] = useState(false)
    const {data, isLoading} = useGetCityByBookingCountQuery(6);

    const setQueryString = (city?: string, date?: string) => {
        onResetData()
        onGetQueryString(`
            ${city ? `&city_like=${city}` : ""}
            ${date ? `&date_like=${date}` : ""}`)
    }

    const searchDateHandle = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            setEnter(true)
        }
    }, [valueDate])

    useEffect(() => {
        if(enter || valueCity !== undefined)
            setTimeout(() => {
                setQueryString(valueCity, valueDate)
            }, 300);
            setEnter(false);
    }, [valueCity, enter])

    return(
        <div ref={divRef} className={style.form}>
            <Field
                padding={isMobile ? '5px' : '10px'}
                value={valueCity || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setValueCity(e.target.value)}
                placeholder={isMobile ? 'Город' : 'Выберите город'}
                borderRadius={10}
                width={isMobile ? '120px' : '241px'} height={isMobile ? "35px" : '55px'}
                selection={!isLoading ? data?.map(item => item.city) : undefined}
                getSelection={setValueCity}
                styleField={enumStyleField.SECONDARY_OUTLINE}/>

            <Field
                padding={isMobile ? '5px' : '10px'}
                value={valueDate || ''}
                onKeyDown={searchDateHandle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setValueDate(e.target.value)}
                placeholder={isMobile ? 'Дата' : 'Выберите дату'}
                borderRadius={10}
                width={isMobile ? '100px' : '241px'} height={isMobile ? "35px" : '55px'}
                styleField={enumStyleField.SECONDARY_OUTLINE}
                childrenRight={
                    <CalendarIcon 
                        className={style.calendar} 
                        onClick={() => openDatePicker((date) => {
                            setValueDate(date)
                            setEnter(true)
                        }, divRef)}/>}
            />
        </div>
    )
})