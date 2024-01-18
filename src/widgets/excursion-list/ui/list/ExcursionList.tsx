import React from "react"

import { ExcursionCard, ExcursionSkeleton } from "entities/excursion"
import { Text } from "shared/ui/text"

import { IExcursionListProps } from "../../types"
    
export const ExcursionList: React.FC<Omit<IExcursionListProps, "onLoadData">> = (props) => {
    const {
        data,
        isError = true,
        isLoading = true,
        valueSkeletons = 10,
        className
    } = props

    if(isLoading){
        return(
            <div className={className}>
                {Array(valueSkeletons).fill(null).map(() => 
                    <ExcursionSkeleton width="333px" height="447px"/>)}
            </div>
        )
    }

    return(
        <div className={className}>
            {isError && <Text color="red" text="Ошибка. Данных нет!"/>}
            {data.map(item => 
                <ExcursionCard
                    image={`server${item.imagePreview}`} 
                    title={`${item.name} (${item.id})`} 
                    description={item.description}
                    price={item.priceMiddle}/>)}
        </div>
    )
}