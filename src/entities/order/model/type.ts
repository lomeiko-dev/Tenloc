export interface IOrder {
    id: string,
    excursionId: string,
    userId: string,
    valueAdult: number,
    valuePensioner: number,
    valueYouth: number,
    valueChildren: number,
    valueSmallChildren: number,
    date: string,
    time: string
    paymentMethod: enumPaymentMethod,
    name: string,
    phoneNumber: string
}

export enum enumPaymentMethod {
    BANK = 'bank',
    SBER = 'sber',
    YOMONEY = 'yomoney'
}