import style from "./DropdwonSelection.module.scss"

import { Dropwdown, enumStyleDropdown } from "shared/ui/dropdown"
import { Text } from "shared/ui/text"

import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { pathRoutes } from "shared/config/route-path"
import { useGetCityByBookingCountQuery } from "../../model/api/sort-excursion-api"

interface IDropdowndSelectionProps {
    className?: string,
    cityCount?: number,
    width?: string,
    height?: string,
    margin?: string
}

export const DropdownSelection: React.FC<IDropdowndSelectionProps> = memo((props) => {
    const {
        cityCount = 5,
        className,
        height,
        margin,
        width
    } = props

    const {data = [], isLoading, isError} = useGetCityByBookingCountQuery(cityCount)

    const navigate = useNavigate();

    const clickHandle = useCallback((id: string) => {
        navigate(`${pathRoutes.city.path}/${id}`)
    }, [navigate])

    return(
        <Dropwdown 
            className={className}
            width={width} height={height}
            margin={margin}
            styleDropdown={enumStyleDropdown.PRIMARY} 
            content={
                <div className={style.content}>
                    {isError ? 
                        <Text color="red" text="Данных нет."/> :
                        data?.map(item => 
                            <div
                                key={item.id}
                                onClick={() => clickHandle(item.id)} 
                                className={style.item}>
                                    {item.city}
                            </div>)}
                </div>}>
                {isLoading ? "Загрузка..." : "Направления"}
        </Dropwdown>
    )
})