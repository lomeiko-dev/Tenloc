import { IExcursion } from "../types/excursion-scheme"

export interface IGetPageExcursionProps {
    page: number,
    limit: number,
    params?: string
}

export interface IGetPageExcursionData {
    excursions: IExcursion[],
    totalCount: number
}