import React, { CSSProperties, Suspense, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FieldSearhedMobileLazy } from './mobile/'
import { FieldSearchedDesktopLazy } from './desktop/'
import { Modal } from 'shared/ui/modal'
import { YandexMapLazy } from './yandex-map'
import { Loader } from 'shared/ui/loader'

import { ConvertCoordToCity } from '../../model/lib/ConvertCoordToCity'
import { pathRoutes } from 'shared/config/route-path'

interface IFieldSearchedProps {
  isMobile?: boolean
  margin?: string,
  width?: string,
  height?: string,
  className?: string,
}

export const FieldSearched: React.FC<IFieldSearchedProps> = memo((props) => {
  const {
    isMobile,
    margin,
    className,
    height,
    width
  } = props

  const [date, setDate] = useState('')
  const [search, setSearch] = useState('')

  const [isOpenModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  const searchHandle = useCallback(() => {
    if (search !== '') { navigate(`${pathRoutes.city.path}/${search}/${date}`) }
  }, [search])

  const setCoordHandle = useCallback(async (coord: [number, number]) => {
    const city = await ConvertCoordToCity(coord[0], coord[1])

    if (city) { setSearch(city) }

    setOpenModal(false)
  }, [])

  const cssStyle: CSSProperties = {
    height,
    maxWidth: width,
    width: width ? '100%' : undefined,
    margin
  }

  if (isMobile === undefined) { return null }

  return (
        <div style={cssStyle} className={className}>
            {isMobile
              ? <Suspense>
                    <FieldSearhedMobileLazy
                        value={search} onChange={setSearch}
                        onChangeDate={setDate} valueDate={date}
                        onClickSearch={searchHandle}
                        setOpenModal={() => { setOpenModal(true) }}/>
                </Suspense>
              : <Suspense>
                    <FieldSearchedDesktopLazy
                        onChange={(e) => { setSearch(e.target.value) }} value={search}
                        onClickSearch={searchHandle}
                        setOpenModal={() => { setOpenModal(true) }}/>
                </Suspense>}

            <Modal
                loadingComponent={<Loader isCenter/>} lazy
                width="90%" height="90%"
                open={isOpenModal} onClose={() => { setOpenModal(false) }}>
                    <YandexMapLazy
                        placemarkCoord={[55.751574, 37.573856]}
                        zoom={4}
                        setCoord={setCoordHandle}
                        centerCoord={[55.751574, 37.573856]}/>
            </Modal>
        </div>
  )
})
