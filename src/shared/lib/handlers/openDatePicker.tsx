import { formatDateToString } from "./formatDate"

export const openDatePicker = (func: (date: string) => void, object: React.RefObject<HTMLDivElement>) => {
  const datePicker = document.createElement('input')
  datePicker.type = 'date'
  datePicker.style.pointerEvents = 'none'
  datePicker.style.display = 'none'

  let isClick = false

  const windowClickHandle = () => {
    if (isClick) {
      object.current?.removeChild(datePicker)
      window.removeEventListener('click', windowClickHandle)
    } else { isClick = true }
  }

  datePicker.addEventListener('change', () => {
    const selectedDate = new Date(datePicker.value)
    const formattedDate = formatDateToString(selectedDate)
    func(formattedDate)
    object.current?.removeChild(datePicker)
    window.removeEventListener('click', windowClickHandle)
  })

  window.addEventListener('click', windowClickHandle)

  object.current?.append(datePicker)
  datePicker.showPicker()
}
