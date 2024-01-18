import { IExcursion } from "./excursion-scheme";

export interface IExcursionSliceScheme {
    excursions: IExcursion[],
    page: number,
    queryString?: string,
}