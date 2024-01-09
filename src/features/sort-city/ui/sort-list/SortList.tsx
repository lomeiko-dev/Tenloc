import { memo } from "react"
import style from "./SortList.module.scss"
import classNames from "classnames"
import { Button } from "shared/ui/button"
import { useNavigate } from "react-router-dom"
import { pathRoutes } from "shared/config/route-path"
import { useGetCityByBookingCountQuery } from "features/sort-city"

interface ISortListProps {
    className?: string,
    cityCount?: number,
}

export const SortList: React.FC<ISortListProps> = memo((props) => {
    const {
        className,
        cityCount = 5,
    } = props

    const {data = [], isLoading} = useGetCityByBookingCountQuery(cityCount);

    const navigate = useNavigate();

    const clickHandle = (id: string) => {
        navigate(`${pathRoutes.city.path}/${id}`)
    }

    if(isLoading)
        return(
            <Button className={style.btn}>Загрузка...</Button>
        )

    return(
        <div className={classNames(style.list, className)}>
            {data.map(item => 
                <Button 
                    onClick={() => clickHandle(item.id)} 
                    className={style.btn}>
                        {item.city}
                </Button>)}
        </div>
    )
})