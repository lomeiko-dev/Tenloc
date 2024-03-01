export interface IOrder {
   id: string
   imagePreview: string
   nameExcursion: string
   city: string
   excursionId: string
   userId: string
   valueAdult: number
   valuePensioner: number
   valueYouth: number
   valueChildren: number
   valueSmallChildren: number
   price: number
   date: string
   time: string
   paymentMethod: enumPaymentMethod
   name: string
   phoneNumber: string
}

export enum enumPaymentMethod {
   BANK = 'bank',
   SBER = 'sber',
   YOMONEY = 'yomoney',
}
