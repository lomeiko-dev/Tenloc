import style from "./ExcursionList.module.scss"

import { ExcursionList } from "./list/ExcursionList"
import { Button, enumStyleButton } from "shared/ui/button"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { IExcursionListProps } from "../types"

export const ExcursionListDynamicPagination: React.FC<IExcursionListProps> = (props) => {
    const {
        isError = true,
        isLoading = true,
        data,
        onLoadData,
        className,
        valueSkeletons = 10
    } = props

    const [refObserver, inViewObserver] = useInView()
    const [isDynamicPagination, setDynamicPagination] = useState(false)

    useEffect(() => {
        if(inViewObserver)
            onLoadData();
    }, [inViewObserver])

    const showMoreHandle = () => {
        onLoadData();
        setTimeout(() => {
            setDynamicPagination(true)    
        }, 200);
    }

    return(
        <div className={style.wrapper}>
            <ExcursionList
                data={data}
                className={className}
                isError={isError}
                isLoading={isLoading}
                valueSkeletons={valueSkeletons}/>
            {!isDynamicPagination ?
                <Button 
                    onClick={showMoreHandle}
                    margin="73px 0 0 0" 
                    styleButton={enumStyleButton.PRIMARY}>
                        Все экскурсии
                </Button> :
                <div ref={refObserver}/>}
        </div>
    )
}