import { memo, useCallback } from 'react'
import style from './DropdownCity.module.scss'

import { Dropwdown, enumStyleDropdown } from 'shared/ui/dropdown'
import { Text } from 'shared/ui/text'

import { useNavigate } from 'react-router-dom'
import { useGetCityQuery } from 'entities/excursion'
import { pathRoutes } from 'shared/config/route-path'

export const DropdownCity = memo(() => {
  const navigate = useNavigate()

  const { data = [], isLoading, isError } = useGetCityQuery(5)

  const clickCityHandle = useCallback((name: string) => {
    navigate(`${pathRoutes.city.path}/${name}`)
  }, [navigate])

  return (
        <Dropwdown
            className={style.dropdown}
            width='186px' height='50px'
            margin='0 49px 0 0'
            styleDropdown={enumStyleDropdown.PRIMARY}
                content={
                    <div className={style.content}>
                        {isError
                          ? <Text color="red" text="Ошибка Сервера. Данных нет."/>
                          : data?.map(item =>
                                <div
                                    key={item.id}
                                    onClick={() => { clickCityHandle(item.city) }}
                                    className={style.item}>
                                        {item.city}
                                </div>)}
                    </div>}>
                    {isLoading ? 'Загрузка...' : 'Направления'}
        </Dropwdown>
  )
})
