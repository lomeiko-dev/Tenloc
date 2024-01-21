import { IExcursion } from "entities/excursion"

export interface IExcursionListProps {
    className?: string,
    data: IExcursion[],
    onLoadData: () => void,
    isLoading?: boolean
    isError?: boolean
    valueSkeletons?: number
    isMobile?: boolean
}