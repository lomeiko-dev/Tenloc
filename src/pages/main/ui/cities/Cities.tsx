import { ErrorMessage } from "shared/ui/error-message";
import style from "./Cities.module.scss"
import { CitySkeleton, CityView } from "entities/city";
import { useEffect, useState } from "react";
import { useGetCityByBookingCountQuery } from "features/sort-city";

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
                <CitySkeleton className={style.city}/>
                <CitySkeleton className={style.city}/>
                <CitySkeleton className={style.city}/>
                <CitySkeleton className={style.city}/>
                <CitySkeleton className={style.city}/>
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