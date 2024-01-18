import style from "./Cities.module.scss"

import { useEffect, useState } from "react";
import { useGetCityByBookingCountQuery } from "features/sort-excursion";

import { ErrorMessage } from "shared/ui/error-message";
import { CitySkeleton, CityView } from "entities/excursion";

export const Cities = () => {
    const [isMobile, setMobile] = useState(false);

    const {data = [], isLoading, isError} = useGetCityByBookingCountQuery(isMobile ? 6 : 5);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])
    
    if(isError)
        return <ErrorMessage message="Ошибка сервера, данных нет!"/>

    if (isLoading)
        return (
            <div className={style.list}>
                {Array(5).fill(null).map(() => 
                    <CitySkeleton className={style.city}/>)}
            </div>
        );
    
    return (
        <div className={style.list}>
            {data.map((item) => 
                <CityView
                    className={style.city}
                    {...item}
                />)}
        </div>
    );
}