export interface IExcursion {
   typeExcursion: enumTypeExcursion
   typePay: enumTypePay
   id: string
   country: string
   cityId: string
   city: string
   name: string
   time: string
   description: string
   history: string
   gallery: string[]
   info: string
   detailedDescription: IDescription[]
   priceAdult: number
   pricePensioner: number
   priceYouth: number
   priceMiddle: number
   priceChildren: number
   priceSmallChildren: number
   timeFrame: string[]
   images: string[]
   imagePreview: string
   meetingPlace: string
   terminationPlace: string
   typeGroup: string
   sizeGroup: string
   isFreeCancellation: boolean
   dates: string[]
}

export interface IDescription {
   title: string
   text: string
}

export enum enumTypeExcursion {
   INDIVIDUAL = 'individual',
   GROUP = 'group',
   MINIGROUP = 'mimi-group',
}

export enum enumTypePay {
   PREPAY = 'prepay',
   PAY = 'pay',
}
