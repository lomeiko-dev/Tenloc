import style from "./ExcursionList.module.scss"

import { ExcursionList } from "./list/ExcursionList"
import { Button } from "shared/ui/button"

import { IExcursionListProps } from "../types"

export const ExcursionListPagination: React.FC<IExcursionListProps> = (props) => {
    const {
        isError = true,
        isLoading = true,
        data,
        onLoadData,
        className,
        valueSkeletons = 10
    } = props

    return(
        <div className={style.wrapper}>
            <ExcursionList 
                data={data} 
                className={className} 
                isLoading={isLoading} 
                isError={isError}
                valueSkeletons={valueSkeletons}/>
            <Button 
                onClick={onLoadData}
                fontSize={15} fontWeight={400} 
                borderRadius="100px" 
                width="200px" height="55px"
                padding="18px 33px" margin="73px 0 0 0"
                border="1px dashed #BABABA">
                    Загзурить еще
            </Button>
        </div>
    )
}