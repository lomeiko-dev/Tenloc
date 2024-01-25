import style from "./Excursions.module.scss"

import React, { memo, useCallback, useEffect, useState } from "react"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"

import { Text, enumStyleText } from "shared/ui/text"
import { FormSortingExcursion } from "features/sort-excursion"
import { ExcursionListDynamicPagination } from "widgets/excursion-list"
import { CartLink, cartSelection } from "entities/cart"

import { IExcursion, useGetPageExcursionsQuery } from "entities/excursion"
import { createPortal } from "react-dom"

const LIMIT = 10

interface IExcursionsProps {
    isMobile?: boolean
}

export const Excursions: React.FC<IExcursionsProps> = memo(({isMobile}) => {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('');
    const cart = useAppSelector(cartSelection);

    const {data, isLoading, isError} = useGetPageExcursionsQuery({
        page: page, 
        limit: LIMIT, 
        params: query
    })
    const [excursions, setExcursion] = useState<IExcursion[]>([])

    useEffect(() => {
        setExcursion(prev => [...prev, ...data?.excursions || []])
    }, [data?.excursions])

    const resetDataHanlde = () => {
        setPage(1)
        setExcursion([])
    }

    const triggerLoadDataHandle = useCallback(() => {
        if(excursions.length < (data?.totalCount || 0))
            setPage(prev => prev += 1)
    }, [excursions, data?.totalCount])

    return(
        <div className={style.wrap}>
            <div className={style.title}>
                <Text
                    margin="0 54px 0 0"
                    className={style.title_excursion}
                    styleText={enumStyleText.TERNARY_TITLE} 
                    text="Экскурсии"/>
                <FormSortingExcursion 
                    onResetData={resetDataHanlde} onGetQueryString={setQuery} 
                    isMobile={isMobile}/>
            </div>
            <ExcursionListDynamicPagination
                totalCount={LIMIT}
                isMobile={isMobile}
                className={style.list}
                onLoadData={triggerLoadDataHandle} data={excursions} 
                isLoading={isLoading} isError={isError} 
                valueSkeletons={10}/>
                
            {cart.length !== 0 &&
                createPortal(
                    <CartLink isMobile={isMobile} className={style.cart}/>, 
                    document.body)}
        </div>
    )
})