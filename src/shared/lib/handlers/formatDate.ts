export const formatDateToString = (date: Date) => {
   const day = ('0' + date.getDate()).slice(-2)
   const month = ('0' + (date.getMonth() + 1)).slice(-2)
   const year = date.getFullYear().toString()

   return `${day}.${month}.${year}`
}

export const formatDateToDate = (date: string) => {
   const parts = date.split('.')

   const day = parseInt(parts[0], 10)
   const month = parseInt(parts[1], 10) - 1
   const year = parseInt(parts[2], 10)

   return new Date(year, month, day)
}
