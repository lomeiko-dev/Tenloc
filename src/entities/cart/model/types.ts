export interface ICartScheme {
   cart: ICart[]
}

export interface ICart {
   previewImage: string
   excursionId: string
   date: string
   title: string
   price: number
}
