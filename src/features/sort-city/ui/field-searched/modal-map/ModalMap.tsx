import { useState } from "react"
import style from "./ModalMap.module.scss"
import { Map, Placemark, YMaps } from "react-yandex-maps"
import { Text } from "shared/ui/text"

interface ModalMapProps {
    centerCoord: [number, number],
    placemarkCoord: [number, number],
    zoom: number,
    setCoord: (coord: [number, number]) => void
}

const ModalMap: React.FC<ModalMapProps> = (props) => {
    const {
        centerCoord,
        placemarkCoord,
        setCoord,
        zoom
    } = props

    const [coordinate, setCoordinate] = useState<[number, number]>(placemarkCoord)

    const clickMapHandle = (e: any) => {
        const coord: [number, number] = e.get("coords") || e._sourceEvent.originalEvent.coords;
        setCoordinate(coord)
        setCoord(coord)
    }

    return(
        <div className={style.map}>
            <Text margin="0 0 15px 0" text="Выберите место на карте"/>
            <YMaps>
                <Map onClick={clickMapHandle} className={style.map} defaultState={{ center: centerCoord, zoom: zoom }}>
                    <Placemark geometry={coordinate}/>
                </Map>
            </YMaps>
        </div>
    )
}

export default ModalMap