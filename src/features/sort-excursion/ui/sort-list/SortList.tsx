import { CSSProperties, memo } from "react"
import style from "./SortList.module.scss"
import classNames from "classnames"

import { Button } from "shared/ui/button"

import { useNavigate } from "react-router-dom"
import { useGetCityByBookingCountQuery } from "../../model/api/sort-excursion-api"

import { pathRoutes } from "shared/config/route-path"

interface ISortListProps {
    className?: string,
    cityCount?: number,
    width?: string,
    height?: string
}

export const SortList: React.FC<ISortListProps> = memo((props) => {
    const {
        className,
        cityCount = 5,
        height,
        width
    } = props

    const {data = [], isLoading} = useGetCityByBookingCountQuery(cityCount);

    const navigate = useNavigate();

    const clickHandle = (id: string) => {
        navigate(`${pathRoutes.city.path}/${id}`)
    }

    const cssStyle: CSSProperties = {
        width: width,
        height: height
    }

    if(isLoading)
        return(
            <Button className={style.btn}>Загрузка...</Button>
        )

    return(
        <div 
            style={cssStyle} 
            className={classNames(style.list, className)}>
            {data.map(item => 
                <Button 
                    key={item.id}
                    onClick={() => clickHandle(item.id)} 
                    className={style.btn}>
                        {item.city}
                </Button>)}
        </div>
    )
})