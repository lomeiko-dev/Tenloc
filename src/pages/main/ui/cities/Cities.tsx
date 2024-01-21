import style from "./Cities.module.scss"

import { useEffect, useState } from "react";
import { useGetCityByBookingCountQuery } from "features/sort-excursion";

import { ErrorMessage } from "shared/ui/error-message";
import { CitySkeleton, CityCard } from "entities/excursion";

export const Cities = () => {
    const [isMobile, setMobile] = useState(false);
    const [isThisError, setError] = useState(false);

    const {data = [], isLoading, isError} = useGetCityByBookingCountQuery(isMobile ? 6 : 5);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)

        return () => {
            window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])
    
    useEffect(() => {
        if(isError)
            setError(true)
    }, [isError])

    if (isLoading)
        return (
            <div className={style.list}>
                {Array(5).fill(null).map((_, index) => 
                    <CitySkeleton key={index} className={style.city}/>)}
            </div>
        );
    
    return (
        <div className={style.list}>
            {isThisError && 
                <ErrorMessage 
                    onDeleteMessage={() => setError(false)} 
                    message="Ошибка сервера, данных нет!"/>}

            {data.map((item) => 
                <CityCard
                    key={item.id}
                    isMobile={isMobile}
                    className={style.city}
                    {...item}
                />)}
        </div>
    );
}