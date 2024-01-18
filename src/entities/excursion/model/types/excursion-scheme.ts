export interface IExcursion {
    typeExcursion: enumTypeExcursion
    id: string,
    cityId: string,
    city: string,
    name: string,
    time: string,
    description: string,
    detailedDescription: IDescription[],
    priceAdult: number,
    pricePensioner: number,
    priceYouth: number,
    priceMiddle: number,
    priceChildren: number,
    priceSmallChildren: number,
    timeFrame: string[],
    images: string[],
    imagePreview: string,
    meetingPlace: string,
    terminationPlace: string
    typeGroup: string,
    sizeGroup: string,
    isFreeCancellation: boolean,
    date: string[]
}

export interface IDescription {
    title: string,
    text: string
}

export enum enumTypeExcursion {
    INDIVIDUAL = "individual",
    GROUP = "group"
}