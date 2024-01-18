import style from "./FormSortingExcursion.module.scss"

import { Field, enumStyleField } from "shared/ui/field"

import { useGetCityByBookingCountQuery } from "../../model/api/sort-excursion-api"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"

import { setQueryString } from "entities/excursion"
import { openDatePicker } from "shared/lib/handlers/openDatePicker"

import CalendarIcon from "shared/assets/img/svg-icon/calendar.svg?react"

export const FormSortingExcursion = memo(() => {
    const dispatch = useAppDispatch()

    const [isMobile, setMobile] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const [valueCity, setValueCity] = useState<string | undefined>(undefined)
    const [valueDate, setValueDate] = useState<string | undefined>(undefined)

    const [enter, setEnter] = useState(false)
    const {data, isLoading} = useGetCityByBookingCountQuery(6);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])

    const dispatchSetQueryString = (city?: string, date?: string) => {
        dispatch(setQueryString(`
            ${city ? `&city_like=${city}` : ""}
            ${date ? `&date_like=${date}` : ""}`))
    }

    const searchDateHandle = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            setEnter(true)
        }
    }, [valueDate])

    useEffect(() => {
            setTimeout(() => {
                dispatchSetQueryString(valueCity, valueDate)
            }, 300);
            setEnter(false);
    }, [valueCity, enter])

    return(
        <div ref={divRef} className={style.form}>
            <Field
                value={valueCity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setValueCity(e.target.value)}
                placeholder="Выберите город"
                borderRadius={10}
                width={isMobile ? '160px' : '241px'} height={isMobile ? "35px" : '55px'}
                selection={!isLoading ? data?.map(item => item.city) : undefined}
                getSelection={setValueCity}
                styleField={enumStyleField.SECONDARY_OUTLINE}/>

            <Field
                value={valueDate}
                onKeyDown={searchDateHandle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setValueDate(e.target.value)}
                placeholder="Выберите дату"
                borderRadius={10}
                width={isMobile ? '160px' : '241px'} height={isMobile ? "35px" : '55px'}
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