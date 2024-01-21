import React, { memo } from "react"
import style from "./ExcursionList.module.scss"

import { ExcursionCard, ExcursionSkeleton } from "entities/excursion"
import { Text } from "shared/ui/text"

import { IExcursionListProps } from "../../types"
import { AddToLikesExcursion, FormAddCartExcursion } from "features/form-excursion"
    
export const ExcursionList: React.FC<Omit<IExcursionListProps, "onLoadData">> = memo((props) => {
    const {
        data,
        isError = true,
        isLoading = true,
        valueSkeletons = 10,
        className,
        isMobile = false,
    } = props

    if(isLoading){
        return(
            <div className={className}>
                {Array(valueSkeletons).fill(null).map((_, index) => 
                    <ExcursionSkeleton key={index} width="333px" height="447px"/>)}
            </div>
        )
    }

    return(
        <div className={className}>
            {isError && <Text color="red" text="Ошибка. Данных нет!"/>}
            {data.map(item => 
                <ExcursionCard
                    key={item.id}
                    className={style.card}
                    isMobile={isMobile}
                    likeSlot={
                        <AddToLikesExcursion 
                            isMobile={isMobile} 
                            id={item.id}/>}
                    orderSlot={
                        <FormAddCartExcursion 
                            isMobile={isMobile}
                            price={item.priceMiddle} 
                            title={item.name} 
                            dates={item.date} 
                            id={item.id}/>}
                    image={`server${item.imagePreview}`} 
                    title={`${item.name} (${item.id})`} 
                    description={item.description}
                    price={item.priceMiddle}/>)}
        </div>
    )
})