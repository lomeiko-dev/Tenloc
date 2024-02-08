import { ICity } from "entities/excursion";

export interface ICitiesBlockProps {
    cities: ICity[],
    isMobile?: boolean,
    isLoading?: boolean,
    isError?: boolean,
    title?: string,
    subTitle?: string
}