export const formatDateToWord = (date: string): string => {
  const today = new Date()
  const entranceDate = date.split('.')

  const year = today.getFullYear()
  const month = (today.getMonth() + 1)
  const day = today.getDate()

  if (month === Number.parseInt(entranceDate[1]) && year === Number.parseInt(entranceDate[2])) {
    switch (Number.parseInt(entranceDate[0])) {
      case day:
        return 'Сегодня'
      case day - 1:
        return 'Вчера'
      case day - 2:
        return 'Недавно'
    }
  }

  return 'Давно'
}
