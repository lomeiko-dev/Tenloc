export interface ICartScheme {
  cart: ICart[]
}

export interface ICart {
  excursionId: string
  date: string
  title: string
  price: number
}
