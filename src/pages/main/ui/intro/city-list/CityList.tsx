import style from '../Intro.module.scss'
import React, { memo, useCallback } from 'react'

import { useGetCityQuery } from 'entities/excursion'
import { useNavigate } from 'react-router-dom'

import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'

import { pathRoutes } from 'shared/config/route-path'

interface ICityListProps {
  isMobile?: boolean
}

const CityList: React.FC<ICityListProps> = memo(({ isMobile = undefined }) => {
  const { data = [], isLoading, isError } = useGetCityQuery(isMobile ? 4 : 5)

  const navigate = useNavigate()

  const clickButtonHandle = useCallback((name: string) => {
    navigate(`${pathRoutes.city.path}/${name}`)
  }, [])

  if (isLoading) { return <div className={style.btn}>загрузка...</div> }

  if (isError) {
    return (
            <div className={style.sort_list}>
                <Text color="red" text="⛔Ошибка сервера. Данных нет."/>
            </div>
    )
  }

  if(isMobile === undefined)
    return null
  
  return (
        <div
            className={style.sort_list}>
            {data.map(item =>
                <Button
                    borderRadius='30px'
                    color='#FFFFFF' height='32px' fontSize={14}
                    key={item.id}
                    onClick={() => { clickButtonHandle(item.city) }}
                    className={style.btn}>
                        {item.city}
                </Button>)}
        </div>
  )
})

export default CityList
