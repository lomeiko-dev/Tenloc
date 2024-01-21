import React, { useCallback, useState } from "react";

import { FieldSearchedMobile } from "./mobile/FieldSearchedMobile";
import { FieldSearchedDesktop } from "./desktop/FieldSearchedDecktop";

import { Modal } from "shared/ui/modal";
import { ModalMapLazy } from "./modal-map";
import { Loader } from "shared/ui/loader";
import { ErrorMessage } from "shared/ui/error-message";

import { useNavigate } from "react-router-dom";

import { ConvertCoordToCity } from "../../model/lib/ConvertCoordToCity";
import { pathRoutes } from "shared/config/route-path";

interface IFieldSearchedProps {
    isMobile?: boolean,
    margin?: string,
}

export const FieldSearched: React.FC<IFieldSearchedProps> = (props) => {
    const {
        isMobile = false,
        margin
    } = props

    const [error, setError] = useState<string | undefined>(undefined)

    const [date, setDate] = useState('');
    const [search, setSearch] = useState('')
    
    const [isOpenModal, setOpenModal] = useState(false)
    const navigate = useNavigate();

    const searchHandle = useCallback(() => {
        if(search !== '')
            navigate(`${pathRoutes.city.path}/${search}/${date}`)
        else
            setError('Вы не указали город')
    }, [search])

    const setCoordHandle = useCallback(async(coord: [number, number]) => {
        const city = await ConvertCoordToCity(coord[0], coord[1]);

        if(city)
            setSearch(city)
        else
            setError('Город не найден')

        setOpenModal(false)
    }, [])

    return(
        <div style={{margin: margin}}>
            {error && <ErrorMessage onDeleteMessage={() => setError(undefined)} message={error}/>}
            {isMobile ?
                <FieldSearchedMobile
                    value={search} onChange={setSearch}
                    onChangeDate={setDate} valueDate={date}
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