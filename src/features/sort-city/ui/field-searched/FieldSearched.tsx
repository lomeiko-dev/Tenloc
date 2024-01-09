import React, { useCallback, useEffect, useState } from "react";

import { FieldSearchedMobile } from "./mobile/FieldSearchedMobile";
import { FieldSearchedDesktop } from "./desktop/FieldSearchedDecktop";

import { Modal } from "shared/ui/modal";
import { ModalMapLazy } from "./modal-map";
import { Loader } from "shared/ui/loader";

import { useNavigate } from "react-router-dom";
import { pathRoutes } from "shared/config/route-path";

import { ConvertCoordToCity } from "../../model/lib/ConvertCoordToCity";
import { useLazyGetCityByNameQuery } from "../../model/api/sort-city-api";

interface IFieldSearchedProps {
    isMobile?: boolean,
    margin?: string,
}

export const FieldSearched: React.FC<IFieldSearchedProps> = (props) => {
    const {
        isMobile = false,
        margin
    } = props

    const [date, setDate] = useState('');
    const [search, setSearch] = useState('')
    
    const [isOpenModal, setOpenModal] = useState(false)
    const navigate = useNavigate();
    const [trigger, result] = useLazyGetCityByNameQuery();

    const searchHandle = useCallback(() => {
        if(search !== ''){
            trigger(search);
        }
    }, [search])

    useEffect(() => {
        if(result.data !== undefined){
            navigate(`${pathRoutes.city.path}/${result.data[0].id}/${date}`)
        }
    }, [result.data])

    const setCoordHandle = useCallback(async(coord: [number, number]) => {
        const city = await ConvertCoordToCity(coord[0], coord[1]);
        setSearch(city ?? 'Не найдено');

        setOpenModal(false)
    }, [])

    return(
        <div style={{margin: margin}}>
            {isMobile ?
                <FieldSearchedMobile
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    onChangeDate={(date) => setDate(date)} valueDate={date}
                    onClickSearch={searchHandle} 
                    setOpenModal={() => setOpenModal(true)}/> :
                <FieldSearchedDesktop
                    onChange={(e) => setSearch(e.target.value)} value={search}
                    onClickSearch={searchHandle} 
                    setOpenModal={() => setOpenModal(true)}/>}
            <Modal 
                loadingComponent={<Loader isCenter/>} 
                width="90%" height="90%" 
                open={isOpenModal} onClose={() => setOpenModal(false)}>
                    <ModalMapLazy 
                        placemarkCoord={[55.751574, 37.573856]} 
                        zoom={4} 
                        setCoord={setCoordHandle} 
                        centerCoord={[55.751574, 37.573856]}/>
            </Modal>
        </div>
    )
}