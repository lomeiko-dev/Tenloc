import style from "./Excursions.module.scss"

import { useCallback, useEffect, useState } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"

import { excursionSelection, loadData, pageSelection, queryStringSelection, useGetPageExcursionsQuery } from "entities/excursion"
import { ExcursionListDynamicPagination } from "widgets/excursion-list"
import { CartLink, cartSelection } from "entities/cart"
import { createPortal } from "react-dom"

const LIMIT = 10

export const Excursions = () => {
    const dispatch = useAppDispatch();
    const [isMobile, setMobile] = useState(false);

    const page = useAppSelector(pageSelection);
    const excursions = useAppSelector(excursionSelection)
    const querySting = useAppSelector(queryStringSelection)

    const cart = useAppSelector(cartSelection);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)

        return () => {
            window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    const {data, isLoading, isError} = useGetPageExcursionsQuery({
        page: page, 
        limit: LIMIT, 
        params: querySting
    })
    
    useEffect(() => {   
        if(page === 1)
            dispatch(loadData(data?.excursions || []))
    }, [data])

    const loadDataHandle = useCallback(() => {
        if(excursions.length < (data?.totalCount ? data?.totalCount : 0))
            dispatch(loadData(data?.excursions ?? []))
    }, [excursions, data, dispatch])

    return(
        <div>
            <ExcursionListDynamicPagination
                totalCount={LIMIT}
                isMobile={isMobile}
                className={style.list}
                onLoadData={loadDataHandle}
                data={excursions} 
                isLoading={isLoading} isError={isError} 
                valueSkeletons={10}/>
                
            {cart.length !== 0 &&
                createPortal(
                    <CartLink 
                        isMobile={isMobile} 
                        className={style.cart}/>, 
                    document.body)}
        </div>
    )
}