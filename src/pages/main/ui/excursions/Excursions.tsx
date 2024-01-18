import style from "./Excursions.module.scss"

import { useCallback, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"

import { excursionSelection, loadData, pageSelection, queryStringSelection, useGetPageExcursionsQuery } from "entities/excursion"
import { ExcursionListDynamicPagination } from "widgets/excursion-list"

const LIMIT = 10

export const Excursions = () => {
    const dispatch = useAppDispatch();

    const page = useAppSelector(pageSelection);
    const excursions = useAppSelector(excursionSelection)
    const querySting = useAppSelector(queryStringSelection)

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
        <ExcursionListDynamicPagination
            className={style.list}
            onLoadData={loadDataHandle}
            data={excursions} 
            isLoading={isLoading} isError={isError} 
            valueSkeletons={10}/>
    )
}